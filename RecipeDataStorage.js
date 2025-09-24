import {useState, useEffect} from 'react';

export function useSearchData() {



	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null); // State for error messages
	// search query state
	const [query, setQuery] = useState('');

	//selected Recipes State
	const [selectedItems, setSelectedItems] = useState([]);

	//fetch all meals from api on mount
	useEffect(() => {
		const fetchMeals = async () => {
			try {
				setLoading(true);
				const categories = ['Beef', 'Chicken', 'Seafood', 'Vegetarian']; // Sample categories
				const responses = await Promise.all(
					categories.map(category =>
						fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
					)
				);
				const data = await Promise.all(responses.map(res => res.json()));
				const meals = [].concat(...data.map(d => d.meals || [])).filter(meal => meal); // Flatten and remove nulls

				// Deduplicate by idMeal
				const uniqueMeals = Array.from(new Map(meals.map(meal => [meal.idMeal, meal])).values());

				// Log fetched items for debugging
				console.log('Fetched meals:', meals);

				// Map API response to our data structure
				const processedItems = meals.map(meal => ({
					id: meal.idMeal,
						name: meal.strMeal,
					// Note: Full ingredients require separate lookup.php calls per meal.
					// For efficiency, we'll fetch details lazily when adding to selected.
					// Placeholder for now; actual ingredients fetched in addToSelected.
				}));
				setItems(processedItems);
			} catch (error) {
				console.error('Error fetching meals:', error);
				setError('Failed to load recipes. Please try again later.');
				setItems([]);//fallback to empty array on error
			} finally {
				setLoading(false);
			}
		};
		fetchMeals();
    }, []);



	// Filtered items based on search query (client-side filter)
	const filteredItems = items
		.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5); // Limit to 5 results

	// fethc full meal details for ingredients
	const fetchMealDetails = async (mealId) => {
		try {
			const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
			if (!response.ok) {
				throw new Error('Failed to fetch meal details');
			}
			const data = await response.json();
			const meal = data.meals?.[0];

			if (!meal) return null;

			//extract ingredients and measures 
			const ingredients = [];
			for (let i = 1; i <= 20; i++) {
				const ingredient = meal[`strIngredient${i}`];
				const measure = meal[`strMeasure${i}`];
				if (ingredient && ingredient.trim() !== '') {
					ingredients.push({
						name: ingredient.trim(),
						quantity: measure ? measure.trim() : 'To taste' // fallback if no measure

					});
				}
			}
			return {
				...meal,
				id: meal.idMeal,
				name: meal.strMeal,
				ingredients
			};
		} catch (error) {
			console.error('Error fetching meal details:', error);
			return null;
		}
	};


	//add a recipe to selected items/recipes
	const addToSelected = async (item) => {
		//check if already selected
		if (selectedItems.some(selected => selected.id === item.id)) {
			return;
		}
		let fullItem = item;
		// if ingredients not present, fetch full details
		if (!item.ingredients || item.ingredients.length === 0) {
			fullItem = await fetchMealDetails(item.id);
			if (!fullItem) {
				console.error('Failed to fetch full meal details');
				return;
			}
		}
		setSelectedItems(prev => [...prev, fullItem]);
	};

		
	

	const removeFromSelected = (id) => {
		setSelectedItems(prev => prev.filter(item => item.id !== id));
    }

	return {
		items,
		filteredItems,
		query,
		setQuery,
		selectedItems,
		addToSelected,
		removeFromSelected,
		loading
};
}
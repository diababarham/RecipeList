import {useState, useEffect} from 'react';

export function useSearchData() {
	// State to hold the search data, the data storage is an array of objects for now
	// will be changed later into an api call
	const [items, setItems] = useState([
		{ id: 1, name: 'Spaghetti Carbonara', ingredients: ['Spaghetti', 'Eggs', 'Pecorino cheese', 'Guanciale', 'Black pepper'] },
		{ id: 2, name: 'Chicken Alfredo', ingredients: ['Fettuccine', 'Chicken breast', 'Heavy cream', 'Parmesan cheese', 'Garlic'] },
		{ id: 3, name: 'Vegan Buddha Bowl', ingredients: ['Quinoa', 'Chickpeas', 'Avocado', 'Sweet potato', 'Kale'] },
		{ id: 4, name: 'Beef Stroganoff', ingredients: ['Beef sirloin', 'Mushrooms', 'Sour cream', 'Onion', 'Egg noodles'] },
		{ id: 5, name: 'Caesar Salad', ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing', 'Lemon juice'] },
		{ id: 6, name: 'Tacos', ingredients: ['Tortillas', 'Ground beef', 'Lettuce', 'Tomato', 'Cheddar cheese'] },
		{ id: 7, name: 'Sushi Rolls', ingredients: ['Sushi rice', 'Nori', 'Avocado', 'Cucumber', 'Salmon'] },
		{ id: 8, name: 'Lentil Soup', ingredients: ['Lentils', 'Carrots', 'Celery', 'Onion', 'Tomato paste'] },
		{ id: 9, name: 'Grilled Cheese Sandwich', ingredients: ['Bread', 'Cheddar cheese', 'Butter'] },
		{ id: 10, name: 'Pancakes', ingredients: ['Flour', 'Milk', 'Eggs', 'Sugar', 'Baking powder'] },
	]);
	// search query state
	const [query, setQuery] = useState('');

	//selected Recipes State
    const [selectedItems, setSelectedItems] = useState([]);

	// filtered items based on search query
	const filteredItems = items.filter(item =>
		item.name.toLowerCase().includes(query.toLowerCase()))
		.slice(0, 5); // limit to 5 results

	//add a recipe to selected items/recipes
	const addToSelected = (item) => {
		setSelectedItems(prev =>
			prev.some(selected => selected.id === item.id)
				? prev
				: [...prev, item]
		);
	};

	const removeFromSelected = (id) => {
		setSelectedItems(prev => prev.filter(item => item.id !== id));
    }

	return {
		items, filteredItems, query, setQuery,
		selectedItems,
		addToSelected,
		removeFromSelected
};
}
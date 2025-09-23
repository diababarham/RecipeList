import {useState, useEffect} from 'react';

export function useSearchData() {
	// State to hold the search data, the data storage is an array of objects for now
	// will be changed later into an api call
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Spaghetti Carbonara',
            ingredients: [
                { name: 'Spaghetti', quantity: '200g' },
                { name: 'Eggs', quantity: '2' },
                { name: 'Pecorino cheese', quantity: '50g' },
                { name: 'Guanciale', quantity: '100g' },
                { name: 'Black pepper', quantity: '1 tsp' }
            ]
        },
        {
            id: 2,
            name: 'Chicken Alfredo',
            ingredients: [
                { name: 'Fettuccine', quantity: '200g' },
                { name: 'Chicken breast', quantity: '300g' },
                { name: 'Heavy cream', quantity: '1 cup' },
                { name: 'Parmesan cheese', quantity: '50g' },
                { name: 'Garlic', quantity: '2 cloves' }
            ]
        },
        {
            id: 3,
            name: 'Vegan Buddha Bowl',
            ingredients: [
                { name: 'Quinoa', quantity: '1 cup' },
                { name: 'Chickpeas', quantity: '200g' },
                { name: 'Avocado', quantity: '1' },
                { name: 'Sweet potato', quantity: '1 medium' },
                { name: 'Kale', quantity: '2 cups' }
            ]
        },
        {
            id: 4,
            name: 'Beef Stroganoff',
            ingredients: [
                { name: 'Beef sirloin', quantity: '400g' },
                { name: 'Mushrooms', quantity: '200g' },
                { name: 'Sour cream', quantity: '1/2 cup' },
                { name: 'Onion', quantity: '1 medium' },
                { name: 'Egg noodles', quantity: '200g' }
            ]
        },
        {
            id: 5,
            name: 'Caesar Salad',
            ingredients: [
                { name: 'Romaine lettuce', quantity: '1 head' },
                { name: 'Croutons', quantity: '1 cup' },
                { name: 'Parmesan cheese', quantity: '30g' },
                { name: 'Caesar dressing', quantity: '1/4 cup' },
                { name: 'Lemon juice', quantity: '1 tbsp' },
                { name: 'Black pepper', quantity: '1 tsp' }
            ]
        },
        {
            id: 6,
            name: 'Tacos',
            ingredients: [
                { name: 'Tortillas', quantity: '6' },
                { name: 'Ground beef', quantity: '300g' },
                { name: 'Lettuce', quantity: '1 cup' },
                { name: 'Tomato', quantity: '1 medium' },
                { name: 'Cheddar cheese', quantity: '50g' }
            ]
        },
        {
            id: 7,
            name: 'Sushi Rolls',
            ingredients: [
                { name: 'Sushi rice', quantity: '1 cup' },
                { name: 'Nori', quantity: '4 sheets' },
                { name: 'Avocado', quantity: '1' },
                { name: 'Cucumber', quantity: '1/2' },
                { name: 'Salmon', quantity: '100g' }
            ]
        },
        {
            id: 8,
            name: 'Lentil Soup',
            ingredients: [
                { name: 'Lentils', quantity: '1 cup' },
                { name: 'Carrots', quantity: '2 medium' },
                { name: 'Celery', quantity: '2 stalks' },
                { name: 'Onion', quantity: '1 medium' },
                { name: 'Tomato paste', quantity: '2 tbsp' }
            ]
        },
        {
            id: 9,
            name: 'Grilled Cheese Sandwich',
            ingredients: [
                { name: 'Bread', quantity: '2 slices' },
                { name: 'Cheddar cheese', quantity: '50g' },
                { name: 'Butter', quantity: '1 tbsp' }
            ]
        },
        {
            id: 10,
            name: 'Pancakes',
            ingredients: [
                { name: 'Flour', quantity: '1 cup' },
                { name: 'Milk', quantity: '1 cup' },
                { name: 'Eggs', quantity: '2' },
                { name: 'Sugar', quantity: '2 tbsp' },
                { name: 'Baking powder', quantity: '2 tsp' }
            ]
        },
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
import {useState, useEffect} from 'react';

export function useSearchData() {
	// State to hold the search data, the data storage is an array of objects for now
	// will be changed later into an api call
	const [items, setItems] = useState([
		{ id: 1, name: 'Spaghetti Carbonara' },
		{ id: 2, name: 'Chicken Alfredo' },
		{ id: 3, name: 'Vegan Buddha Bowl' },
		{ id: 4, name: 'Beef Stroganoff' },
		{ id: 5, name: 'Caesar Salad' },
		{ id: 6, name: 'Tacos' },
		{ id: 7, name: 'Sushi Rolls' },
		{ id: 8, name: 'Lentil Soup' },
		{ id: 9, name: 'Grilled Cheese Sandwich' },
		{ id: 10, name: 'Pancakes' },
	]);

	// search query state
	const [query, setQuery] = useState('');

	// filtered items based on search query
	const filteredItems = items.filter(item =>
		item.name.toLowerCase().includes(query.toLowerCase()))
		.slice(0, 5); // limit to 5 results

	return {items, filteredItems, query, setQuery};
}
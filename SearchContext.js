import React, { createContext, useContext } from 'react';
import { useSearchData } from './RecipeDataStorage';

// Create the context
const SearchContext = createContext();

// Create a provider component
export function SearchProvider({ children }) {
    const searchData = useSearchData();
    return (
        <SearchContext.Provider value={searchData}>
            {children}
        </SearchContext.Provider>
    );
}

// Custom Hook to use the context
export function useSearchContext() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within a SearchProvider');
    }
    return context;
}
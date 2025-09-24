import { Link } from "react-router-dom";
import { useSearchContext } from './SearchContext';
import IngredientList from './IngredientList';
import { useState } from 'react';

function RecipeList() {
    const { selectedItems, loading } = useSearchContext();
    const [showIngredients, setShowIngredients] = useState(false);

    if (loading) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <p>Loading recipes...</p>
            </div>
        );
    }

    return (
        <div>
            <header style={{ backgroundColor: "#6d130c", padding: "20px", color: "white" }}>
                <h1>Selected Recipes</h1>
            </header>

            <section style={{ backgroundColor: "#e5dad2", padding: "20px", textAlign: "center" }}>
                <h2>Your Selected Recipes</h2>
                {selectedItems.length > 0 ? (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {selectedItems.map(item => (
                            <li
                                key={item.id}
                                style={{
                                    margin: "10px 0",
                                    background: "#73955b",
                                    color: "white",
                                    padding: "10px",
                                    borderRadius: "8px",
                                }}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                ) : (
                        <p style={{ color: "#666", fontStyle: "italic" }}>No recipes selected. Go to the Browse page to add some!</p>
                )}
                {selectedItems.length > 0 && (
                    <button
                        onClick={() => setShowIngredients(!showIngredients)}
                        style={{
                            padding: "10px 20px",
                            marginTop: "20px",
                            borderRadius: "8px",
                            backgroundColor: "#6d130c",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer"
                        }}
                    >
                        {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
                    </button>
                )}
                {showIngredients && <IngredientList selectedItems={selectedItems} />}
            </section>

            <section style={{ padding: "20px", textAlign: "center" }}>
                <Link to="/Browse">
                    <button style={{ padding: "10px 50px", borderRadius: "8px", backgroundColor: "#6d130c", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                        Browse More Recipes
                    </button>
                 </Link>
            </section>
        </div>
    );
}

export default RecipeList;
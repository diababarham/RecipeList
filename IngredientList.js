function IngredientList({ selectedItems }) {
    // Combine ingredients from all selected recipes and remove duplicates
    const allIngredients = [...new Set(
        selectedItems.flatMap(item => item.ingredients || [])
    )].sort();

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Ingredients for Selected Recipes</h3>
            {allIngredients.length > 0 ? (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {allIngredients.map((ingredient, index) => (
                        <li
                            key={index}
                            style={{
                                margin: "5px 0",
                                background: "#a39d92",
                                color: "white",
                                padding: "8px",
                                borderRadius: "5px"
                            }}
                        >
                            {ingredient}
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: "#666", fontStyle: "italic" }}>
                    No ingredients to display.
                </p>
            )}
        </div>
    );
}

export default IngredientList;
function IngredientList({ selectedItems }) {
    // Combine ingredients, summing quantities for duplicates
    const combinedIngredients = selectedItems
        .flatMap(item => item.ingredients || [])
        .reduce((acc, { name, quantity }) => {
            const existing = acc.find(ing => ing.name === name);
            if (existing) {
                // For simplicity, concatenate quantities (e.g., "200g + 100g")
                existing.quantity = `${existing.quantity}, ${quantity}`;
            } else {
                acc.push({ name, quantity });
            }
            return acc;
        }, [])
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Ingredients for Selected Recipes</h3>
            {combinedIngredients.length > 0 ? (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {combinedIngredients.map((ingredient, index) => (
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
                            {ingredient.name}: {ingredient.quantity}
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
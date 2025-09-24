import { Link } from "react-router-dom";

import { useSearchContext } from './SearchContext';


function Browse() {

    const { filteredItems, query, setQuery, addToSelected, selectedItems, loading, error } = useSearchContext();

    if (loading) {
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <p>Loading Recipes....</p>
            </div>
        );
    }
    if (error) {
        return (
            <div style={{ padding: "20px", textAlign: "center", color: "#d32f2f" }}>
                <p>{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        backgroundColor: "#6d130c",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginTop: "10px"
                    }}
                >
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div>
            <header style={{ backgroundColor: "#6d130c", padding: "20px", color: "white" }}>
                <h1>Browse Recipes</h1>
            </header>

            <section style={{ backgroundColor: "#e5dad2", padding: "20px", textAlign: "center" }}>
                <h2>Search for Recipe</h2>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search recipes..."
                    style={{
                        padding: "10px",
                        marginBottom: "20px",
                        width: "300px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px"
                }}
               
                />
                {filteredItems.length > 0 ? (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {filteredItems.map(item => (
                            <li
                                key={item.id}
                                style={{
                                    margin: "10px 0",
                                    background: "#73955b",
                                    color: "white",
                                    padding: "10px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <span>{item.name}</span>
                                <button
                                    onClick={() => addToSelected(item)}
                                    disabled={selectedItems.some(selected => selected.id === item.id)} 
                                    style={{
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        backgroundColor: selectedItems.some(selected => selected.id === item.id) ? "#ccc" : "#6d130c",
                                        color: "white",
                                        cursor: selectedItems.some(selected => selected.id === item.id) ? "not-allowed" : "pointer"
                                        
                                    }}
                                >
                                    {selectedItems.some(selected => selected.id === item.id) ? "Added" : "Add to List"}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ color: "#666", fontStyle: "italic" }}>
                            {query ? 'No recipes found. Try a different search term.' : 'No recipes available.'}
                    </p>
                )}
            </section>

            <section style={{ padding: "20px", textAlign: "center" }}>
                <Link to="/">
                    <button style={{ padding: "10px 50px", borderRadius: "8px", backgroundColor: "#6d130c", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                        Back to Home
                    </button>
                 </Link>
                <Link to="/Recipelist">
                    <button style={{ padding: "10px 50px", borderRadius: "8px", backgroundColor: "#6d130c", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                        Recipe List
                    </button>
                </Link>
            </section>

        </div>
    );
}

export default Browse;
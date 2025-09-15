import { Link } from "react-router-dom";

function RecipeList() {
    return (
        <div>
            <header style={{ backgroundColor: "#6d130c", padding: "20px", color: "white" }}>
                <h1>Select Recipes</h1>
            </header>

            <section style={{ backgroundColor: "#e5dad2", padding: "20px", textAlign: "center" }}>
                <h2>Here are the recipes you have selected</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ margin: "10px 0", background: "#73955b", color: "white", padding: "10px", borderRadius: "8px" }}>
                        Spaghetti Carbonara
                    </li>
                </ul>
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
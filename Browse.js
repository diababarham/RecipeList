import { Link } from "react-router-dom";

function Browse() {
    return (
        <div>
            <header style={{ backgroundColor: "#6d130c", padding: "20px", color: "white" }}>
                <h1>Browse Recipes</h1>
            </header>

            <section style={{ backgroundColor: "#e5dad2", padding: "20px", textAlign: "center" }}>
                <h2>Search for Recipe</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ margin: "10px 0", background: "#73955b", color: "white", padding: "10px", borderRadius: "8px" }}>
                        Spaghetti Carbonara
                    </li>
                    <li style={{ margin: "10px 0", background: "#73955b", color: "white", padding: "10px", borderRadius: "8px" }}>
                        Chicken Alfredo
                    </li>
                    <li style={{ margin: "10px 0", background: "#73955b", color: "white", padding: "10px", borderRadius: "8px" }}>
                        Vegan Buddha Bowl
                    </li>
                </ul>
            </section>

            <section style={{ padding: "20px", textAlign: "center" }}>
                <Link to="/">
                    <button style={{ padding: "10px 50px", borderRadius: "8px", backgroundColor: "#6d130c", color: "white", fontWeight: "bold", cursor: "pointer" }}>
                        Back to Home
                    </button>
                 </Link>
            </section>
        </div>
    );
}

export default Browse;
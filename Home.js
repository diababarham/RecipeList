// JavaScript source code
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            {/* Header */}
            <header style={{ backgroundColor: "#6d130c", padding: "20px", color: "white" }}>
                <h1>Real Company</h1>
            </header>

            {/* About Section */}
            <section id="about" style={{ backgroundColor: "#a39d92", padding: "10px", textAlign: "center" }}>
                <h2>About</h2>
                <p>
                    This project aims to create a recipe list creator that shows the ingredients of the recipes selected by the user for a big feast or a meal plan.
                </p>
            </section>

            {/* Featured Section */}
            <section id="featured-main" style={{ padding: "10px", textAlign: "left", backgroundColor: "#e5dad2", color: "white" }}>
                <h2>Featured Recipes</h2>
                <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                    <img src="/images/pic1.jpg" alt="Picture 1" style={{ width: "200px", borderRadius: "10px" }} />
                </div>
            </section>

            {/* Buttons */}
            <section id="buttons-main" style={{ padding: "20px", textAlign: "center", backgroundColor: "#73955b", color: "white" }}>
                <Link to="/Browse">
                    <button style={{ padding: "10px 50px", borderRadius: "8px", backgroundColor: "#fff", color: "#73955b", fontWeight: "bold", cursor: "pointer" }}>
                        Browse Recipes
                    </button>
                </Link>
            </section>
        </div>
    );
}

export default Home;
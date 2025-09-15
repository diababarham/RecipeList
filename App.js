import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Browse from "./Browse";
import RecipeList from "./RecipeList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Browse" element={<Browse />} />
                <Route path="/RecipeList" element={<RecipeList />} />
            </Routes>
        </Router>
    );
}

export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchProvider } from './SearchContext';
import Home from "./Home";
import Browse from "./Browse";
import RecipeList from "./RecipeList";

function App() {
    return (
        <SearchProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Browse" element={<Browse />} />
                    <Route path="/RecipeList" element={<RecipeList />} />
                </Routes>
            </Router>
        </SearchProvider>
    );
}

export default App;



// JavaScript source code
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function TestApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/Test" element={<div>Browse</div>} />
            </Routes>
        </Router>
    );
}

export default TestApp;
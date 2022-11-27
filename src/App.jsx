import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Memes from "./components/Memes";
import Search from "./components/Search";
import MemesDisplay from "./pages/MemesDisplay";

function App() {
    return (
        <main className="container border-2 border-red-500 mx-auto">
            <Router>
                <Routes>
                    <Route path="/" element={<MemesDisplay />} />
                </Routes>
            </Router>
        </main>
    );
}

export default App;

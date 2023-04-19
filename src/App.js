// import './css/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import PageOne from "./components/pages/PageOne";
import PageTwo from "./components/pages/PageTwo";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/sustainable-webpage" element={<PageOne />} />
                <Route path="/sustainable-webpage/2" element={<PageTwo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

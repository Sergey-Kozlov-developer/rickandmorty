import HeaderComponent from "@/components/header/HeaderComponent";
import AboutPage from "@/pages/AboutPage";
import FavoritePage from "@/pages/FavoritePage";
import HomePage from "@/pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <div className="container">
                <header>
                    <HeaderComponent />
                </header>
            </div>
            <main>
                {/* <div className="container"> */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                {/* </div> */}
            </main>
        </>
    );
}

export default App;

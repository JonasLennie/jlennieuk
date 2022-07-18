import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./pages/Template";
import Homepage from "./pages/Homepage";
import NoPage from "./pages/NoPage";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route index element={<Homepage />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
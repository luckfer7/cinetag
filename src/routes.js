import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//tem que aparecer os 3 importes.
function AppRoutes () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
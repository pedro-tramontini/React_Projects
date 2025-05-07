import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watch from "./pages/Watch";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route> 
                <Route path="/watch/:id" element={ <Watch /> }></Route>
                <Route path="/search" element={ <Search />}></Route> 
                <Route path="/*" element={ <PageNotFound /> }></Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
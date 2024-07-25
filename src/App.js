import './App.css';
import {Routes, Route} from 'react-router-dom';
import FilterPage from "./components/Pages/filter_page/filter_page";
import CartPage from "./components/Pages/Cart_page/cart_page";

function App() {

    return (
        <Routes>
            <Route path="/" element={<FilterPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
        </Routes>
    );
}

export default App;

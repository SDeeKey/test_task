import React, {useState} from 'react';
import "./filter_page.scss"
import Card from './../../card/card'
import Products from "./../../../products.json"
import Header from "../../Header/header";
import Sidebar from "../../Sidebar/sidebar";

const FilterPage = () => {
    const [counter, setCounter] = useState(
        JSON.parse(localStorage.getItem('cartItems'))
    )


    return (
        <div className="mainFilter">
            <Header counter={counter.length}/>
            <div className="sidebarAndProducts">
                <Sidebar/>
                <div className="products">
                    {Products.map((product, id) => (
                        <Card
                            key={product.id}
                            product={product}
                            setCounter={setCounter}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterPage;
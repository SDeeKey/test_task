import React from 'react';
import Brands from "../../brands.json";
import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            {Brands.map((brand, id) => {
                return (
                    <p key={brand.id} className="title">
                        {brand.title}
                    </p>
                )
            })}
        </div>
    );
};

export default Sidebar;
// DisplayItem.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List } from '../component/List'
import '../pages/DisplayItem.css'

export const DisplayItem = ({ products }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('query');

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    return (
        <div className='search-result'>
            <h2 className='w-100 text-center'>Search Item:</h2>
            <div className='search-section'>
                {filteredProducts.length === 0 ? (
                    <h5 className='w-100 text-center'>No matching products found for: {searchTerm}</h5>
                ) : (
                    filteredProducts.map((product, index) => (
                        <div key={index} className='col-12 col-md-6 col-lg-4 list'>
                            <List {...product} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

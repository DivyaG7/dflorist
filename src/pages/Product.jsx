import React from 'react'
import { products } from '../products'
import { List } from '../component/List'
import '../../src/pages/product.css'

export const Product = () => {
  return (
    <div className='product-section'>
      <div id='product' className='container-fluid d-flex flex-wrap p-2 section'>
        <h1 className='w-100 text-center'>PRODUCT</h1>
        {products.map((product) => (
          <div key={product.id} className='col-12 col-md-6 col-lg-4 list'>
            <List {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}





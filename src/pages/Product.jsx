import React from 'react'
import { products } from '../products'
import { List } from '../component/List'
import '../../src/pages/product.css'

export const Product = () => {
  return (
    <div id='product' className='container-fluid d-flex flex-wrap justify-content-center p-2 section'>
      <h1 className='w-100 text-center'>PRODUCT</h1>
      {products.map((product) => (
        <div key={product.id} className='col-md-4 ps-2'>
          <List {...product} />
        </div>
      ))}
    </div>
  );
}





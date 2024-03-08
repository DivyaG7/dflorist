import React from 'react';
import Slider from 'react-slick';
import { products } from '../products';
import { List } from '../component/List';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const ProductCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 2000,
    centerMode: true, 
    centerPadding: '20px',  
    responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: '40px',
          },
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '10px',
          },
        },
        
      ],
  };

  return (
    <Slider className='slider' {...settings}>
      {products.map((product) => (
        <div key={product.id}>
          <List {...product} />
        </div>
      ))}
    </Slider>
  );
};


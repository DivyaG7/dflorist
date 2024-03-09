import React from 'react'
import '../pages/About.css'
import img from '../assets/bg.webp'
import img1 from '../assets/bg3.webp'
import img2 from '../assets/g1.webp'
import img3 from '../assets/g2.webp'
import img4 from '../assets/g3.webp'
// import about from '../assets/about-img.webp'
import Carousel from 'react-bootstrap/Carousel';
import { ProductCarousel } from '../component/ProductCarousel'

export const About = () => {
  return (
    <div className='about'>
      <div className='carousel-section section'>
        <Carousel>
          <Carousel.Item>
            <img src={img} alt='img' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img1} alt='img' />
          </Carousel.Item>
        </Carousel>
      </div>


      {/* <div className='about-content section'>
        <div className='about-section container'>
          <div className='row'>
            <div className='col-md-6 p-4'>
              <div className='left zoom-image-container'>
                <img src={about} alt='about-img' className='img-fluid zoom-image' />
              </div>
            </div>
            <div className='col-md-6 p-4 section'>
              <div className='right'>
                <h1>About Us</h1>
                <p>Flowers are a great way to express your feelings to your loved ones. You can personally gift the flowers to your special ones or get them hand delivered via us. We, dummy company, located in area, city, state are a renowned Florist store and believe in customer satisfaction and ensure all our clients are completely satisfied with our service and delivery. So contact us for fresh flowers for all sorts of special occasions like anniversary, birthday etc. Our dedicated and professional staff will provide you with a delightful experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='gallery-section section'>
        <h1>GALLERY</h1>
        <div className='p-3'>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 gallery">
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img2} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img3} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img4} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img4} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img2} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img3} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>

          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img2} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img3} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img4} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img4} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img2} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>
          <div className="col image">
            <div className="h-100 zoom-image-container">
              <img src={img3} className="card-img-top zoom-image" alt="Img" />
            </div>
          </div>

        </div>
        </div>
      </div>

      <div className="section">
        <section className='container p-4'>
          <h1 className='text-center'>Our Product</h1>
          <ProductCarousel />
        </section>
      </div>

    </div>
  )
}


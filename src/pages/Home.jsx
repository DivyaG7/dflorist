import React from 'react'
import './Home.css'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img6 from '../assets/6.webp'
import img7 from '../assets/7.webp'
import img8 from '../assets/8.webp'
import MyCarousel from '../component/carousel'
// import { ProductCarousel } from '../component/ProductCarousel'
import about from '../assets/about-img.webp'



export const Home = () => {
    return (
        <div className='home'>
            <div className="section">
                <h1>CATEGORY</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
                    <div className="col">
                        <a href='/Product'>
                            <div className="h-100">
                                <div className='zoom-image-container'>
                                    <img src={img1} className="card-img-top zoom-image round" alt="Img" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Dry Flowers</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href='/Product'>
                            <div className="h-100">
                                <div className='zoom-image-container'>
                                    <img src={img2} className="card-img-top zoom-image round" alt="Img" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Wreath</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href='/Product'>
                            <div className="h-100">
                                <div className='zoom-image-container'>
                                    <img src={img3} className="card-img-top zoom-image round" alt="Img" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Fresh Flowers</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="section">
                <section className='carousel-section'>
                    <MyCarousel />
                </section>
            </div>

            <div className="section">
                <section>
                    <h1>Best collections</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
                        <div className="col">
                            <a href='/Product'>
                                <div className="h-100">
                                    <div className='zoom-image-container'>
                                        <img src={img6} className="card-img-top zoom-image round" alt="Img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Flower Plants</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='/Product'>
                                <div className="h-100">
                                    <div className='zoom-image-container'>
                                        <img src={img7} className="card-img-top zoom-image round" alt="Img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Bouquets</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='/Product'>
                                <div className="h-100">
                                    <div className='zoom-image-container'>
                                        <img src={img8} className="card-img-top zoom-image round" alt="Img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Flower Basket</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

            </div>

            {/* <div className="section">
                <section>
                    <h1 className='text-center'>Our Product</h1>
                    <ProductCarousel />
                </section>
            </div> */}

            <div className='about-content section'>
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
            </div>

            <div className="section">
                <div className='paragraph'>
                    <h1>ADD THAT SPECIAL TOUCH!</h1>
                    <p>There are different occasions and different reasons to celebrate them. So go ahead, and cherish every special event with your loved ones with the gift items provided by us, and watch how the occasion gets more beautiful. We understand how special and important an event can be to you, so we give in our full effort to make the special occasion even more unique and also assure its prompt delivery at the recipient’s place, that in turn retains the freshness of the flowers. The prices are quite feasible, depending on the premium quality of the gift items that also suit every customer's needs</p>
                </div>
            </div>

        </div >
    )
}



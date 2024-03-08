import React from 'react'
import './Home.css'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img6 from '../assets/6.webp'
import img7 from '../assets/7.webp'
import img8 from '../assets/8.webp'
import MyCarousel from '../component/carousel'
import { ProductCarousel } from '../component/ProductCarousel'



export const Home = () => {
    return (
        <div className='home'>
            <div className="section">
                <h1>CATEGORY</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
                    <div className="col">
                        <a href='/Product'>
                            <div className="h-100">
                                <img src={img1} className="card-img-top" alt="Img" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Dry Flowers</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href='/Product'>
                            <div className="h-100">
                                <img src={img2} className="card-img-top" alt="Img" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Wreath</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col">
                        <a href='/Product'>
                            <div className="h-100">
                                <img src={img3} className="card-img-top" alt="Img" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Fresh Flowers</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="section">
                <section>
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
                                    <img src={img6} className="card-img-top" alt="Img" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Flower Plants</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='/Product'>
                                <div className="h-100">
                                    <img src={img7} className="card-img-top" alt="Img" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Bouquets</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col">
                            <a href='/Product'>
                                <div className="h-100">
                                    <img src={img8} className="card-img-top" alt="Img" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Flower Basket</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

            </div>

            <div className="section">
                <section>
                    <h1 className='text-center'>Our Product</h1>
                    <ProductCarousel />
                </section>
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



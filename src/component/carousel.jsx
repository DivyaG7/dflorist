import Carousel from 'react-bootstrap/Carousel';
import img4 from '../../src/assets/4.webp'
import img5 from '../../src/assets/5.webp'
import '../component/carousel.css'

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img4} alt='img'/>
        <Carousel.Caption className='caption'>
          <h3 className='flower-h'>Exquisite Floral Creations</h3>
          <p className='flower-p'>Discover our stunning flower arrangements that speak the language of beauty and elegance for any occasion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} alt='img' />
        <Carousel.Caption className='caption'>
          <h3 className='flower-h'>Blooms for Every Celebration</h3>
          <p className='flower-p'>Explore a world of vibrant and enchanting flowers, perfect for expressing love, joy, and heartfelt sentiments.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
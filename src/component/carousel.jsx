import Carousel from 'react-bootstrap/Carousel';
import img4 from '../../src/assets/4.webp'
import img5 from '../../src/assets/5.webp'
import '../component/carousel.css'

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img4} alt='img'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} alt='img' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
import Carousel from 'react-bootstrap/Carousel';
import img from './images1.jpg';
import imag2 from './Untitled1.jpg'
import imag3 from './Untitled.jpg'
import image4 from './imagesw.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item>
        <img
          height="150"
          className="d-block w-100"
          src={imag3}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* Caption content */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="150"
          className="d-block w-100"
          src={image4}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* Caption content */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="150"
          className="d-block w-100"
          src={imag2}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* Caption content */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="150"
          className="d-block w-100"
          src={img}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          {/* Caption content */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;

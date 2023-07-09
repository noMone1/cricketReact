import Carousel from 'react-bootstrap/Carousel';
import img from './images1.jpg';
import imag2 from './Untitled1.jpg'
import imag3 from './Untitled.jpg'
import image4 from './imagesw.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img height="150"
          className="d-block w-100"
          src={imag3}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="150"
          className="d-block w-100"
          src={image4}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height="150"
          className="d-block w-100"
          src={imag2}
          alt="First slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img height="150"
          className="d-block w-100"
          src={img}
          alt="First slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
import Carousel from 'react-bootstrap/Carousel';
import "../css/CorouselCss.css"

function IndividualIntervalsExample() {
  return (
    <Carousel >
      <Carousel.Item interval={2000} className="item" >
        <img
          className="d-block w-100"
          src={require("./comp_imgs/electronicos.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 >Electrónicos</h3>
          <p >Descubre la definición de “Productos electrónicos”.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block   w-100"
          src={require("./comp_imgs/muebles.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 >Muebles para el Hogar</h3>
          <p >A la Vanguardia en el diseño de mobiliario para el Hogar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
        <img
          className="d-block w-100"
          src={require("./comp_imgs/zapatos.jpg")}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Zapatos Deportivos</h3>
          <p>
          Superara tus límites con el más alto rendimiento.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} className="item">
   <img
     className="d-block   w-100"
     src={require("./comp_imgs/ropa.jpg")}
     alt="First slide"
   />
   <Carousel.Caption>
     <h3 >Ropa</h3>
     <p >Siempre a la moda con la mejor calidad de vestimenta.</p>
   </Carousel.Caption>
 </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
import './Home.css';
import { useContext } from 'react';
import logo from '../../../assets/react.svg';
import { ThemeContext } from '../../../context/ThemeContext';

const Home = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`home-page ${dark ? "dark" : "light"}`}>
      <h1 className="home-title">Tienda React</h1>

      <div>
        <div className="row">
          <div className="col-xl-6 col-12 home-figure">
            <img src={logo} alt="logo" width="400" height="400" />
          </div>

          <div className="col-xl-6 col-12 home-info">
            <div>
              <h2 className="home-subtitle">Encontrá la tecnología que mejora tu día a día</h2>
              <p className="home-text">
                En <strong>Tienda React</strong> te ofrecemos productos tecnológicos pensados para acompañarte en todo momento.
                Desde gadgets inteligentes hasta accesorios para tu setup, seleccionamos cada artículo por su calidad, diseño y rendimiento.
              </p>
            </div>

            <div>
              <h2 className="home-subtitle">Innovación al alcance de todos</h2>
              <p className="home-text">
                Creemos que la tecnología debe ser simple, útil y accesible.
                Por eso trabajamos con las mejores marcas y actualizamos constantemente nuestro catálogo para que encuentres justo lo que necesitás, al mejor precio.
              </p>
            </div>

            <div>
              <h2 className="home-subtitle">Más que productos: una experiencia</h2>
              <p className="home-text">
                Queremos que disfrutes cada compra, desde la elección hasta la entrega.
                Nuestro compromiso es ofrecerte atención personalizada, envíos rápidos y un servicio postventa de confianza.
                Viví la experiencia Tienda React y llevá tu mundo digital al siguiente nivel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

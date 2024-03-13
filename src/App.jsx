import { useEffect } from "react"


import logoperrito from "./assets//landing-1.webp"
import descarga1 from "./assets/descarga.png";
import descarga2 from "./assets/descarga (1).png";
import descarga3 from "./assets/descarga (2).png";
import descarga4 from "./assets/descarga (3).png";
import { useState } from "react"

import { Swiperr } from "./Swiper/Swiperr"



import bigImg from "./assets/background-operations_2.png"
import dropImg from "./assets/sofia-bg-alpha-1.png"
import { Dropdown } from "./components/Dropdown";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";



function App() {

 
 
  const [isMovil, setIsMovil] = useState(window.innerWidth<768)
  const [currentImage, setCurrentImage] = useState(0)
  
  const { isAuthenticated } = useAuth0()
  

  useEffect(() => {
    const handleResize = () =>{
      setIsMovil(window.innerWidth<768)
    }
    window.addEventListener("resize",handleResize)
    return () =>{
      window.removeEventListener("resize",handleResize)
    }
  }, [])
  
  const foodImages = [descarga1, descarga2, descarga3, descarga4];

  useEffect(() => {
    const interval = setInterval(()=>{
      setCurrentImage((prev)=>{
        return (prev + 1) % foodImages.length;
      });
    }, 2000);
    return () =>{
      clearInterval(interval)
    }
  }, [])


  

  return (
  <>
  <Navbar isMovil={isMovil} isAuthenticated={isAuthenticated}/>
  <Header currentImage={currentImage} foodImages={foodImages}/>
  <section className="container-lg-fluid">
    <div className="background-container">
     <div className="row align-items-center justify-content-center">
      <div className="col-lg-6 col-12 p-lg-5">
        <div className="p-lg-5 p-3">
          <h2 className="shop-title">Bienvenido a <br /><span className="span">Mi Tienda</span></h2>
          <p className="shop-text">Vende tus productos a los miles de usuarios que usan FoodFusion todos los días. Entregamos tus pedidos en menos de 60 minutos. ¡Somos los más rapidos del mercado!</p>
          <p className="shop-text">¡Sé el dueño de tu propio crecimiento! Accede a las herramientas de autogestión en pocos pasos.</p>
        </div>
        <div className="text-lg-end text-center">
          <button className="btn btn-success">¡Conoce mas!</button>
        </div>
      </div>
      <div className="col-lg-6 col-12 text-center">
        <img className="logoperrito" src={logoperrito}/>
      </div>
     </div>
    </div>
  </section>
  <Swiperr/>
  <section>
    <div className="container-fluid p-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-12">
          <img className="bigImg img-fluid" src={bigImg} />
        </div>
        <div className="col-lg-6 col-12 max-width">
          <div className="big-container">
            <h3 className="big-title">¡Maneja tu operacion y <br /><span className="span">mejora tus resultados!</span></h3>
          </div>
          <div className="mt-4">
            <h4>Gestiona tu tienda</h4>
            <p className="text-muted">Mi Tienda te permite configurar tu horario para que tus clientes conozcan tu disponibilidad y te da la posibilidad de monitorear en tiempo real el estado de tus pedidos. ¡Todo en un solo lugar!</p>
          </div>
          <div>
            <h4>Crea tus productos</h4>
            <p className="text-muted">Los productos que ofreces en tu tienda física los puedes vender en Rappi. Con Mi Tienda puedes crearlos, agregarlos a tu catálogo, controlar su disponibilidad y precios.</p>
          </div>
          <div>
            <h4>Capta más clientes</h4>
            <p className="text-muted">Crea campañas personalizadas o inscríbete a nuestros eventos comerciales para que tu negocio tenga mayor visibilidad dentro de la aplicación.</p>
          </div>
          <div>
            <h4>Toma decisiones a partir de datos reales</h4>
            <p className="text-muted">En Mi Tienda puedes revisar las estadísticas de tu operación para saber qué te funciona mejor, así descubres las oportunidades que tienes para seguir creciendo.</p>
          </div>
          <div className="text-end mt-5">
            <button className="btn btn-success">Crea tu cuenta</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="dropdown">
    <div className="container">
      <div className="row aling-items-center p-2">
        <div className="col-lg-6 p-2">
          <div className="dropdown-contenedor">
            <h3 className="dropdown-title">Preguntas <span className="span">frecuentes</span></h3>
          </div>
          <div className="container dropdown-container mt-5">
            <Dropdown
            title="¿Cuánto cuesta registrarse y cómo empiezo a vender?"
            content={
            <p className="parrafo">
              Registrarte en Rappi es gratis, el único cargo es el porcentaje que
               se cobra por concepto de uso y alquiler de la plataforma. Después
                de que tu tienda y tu catálogo de productos estén creados,
                configurados y activados, verificaremos que cumplas con todos los
                 requisitos para que puedas empezar a recibir pedidos.
            </p>
            }
            />
            <Dropdown
            title="¿Cómo es el proceso de registro?"
            content={
            <p className="parrafo">Primero debes llenar tus datos y los de tu empresa. A continuación,
               revisaremos tu solicitud y verificaremos la información que nos
               enviaste. Una vez aprobada tu solicitud de registro, podrás
               configurar tu tienda y tus productos a través de la herramienta
               de autogestión Mi Tienda. Si tu tienda está configurada
               correctamente, será visible para todos los usuarios de la
               aplicación y los clientes podrán empezar a comprar tus productos.</p>
            }
            />
            <Dropdown
            title="¿Qué información necesito para registrarme?"
            content={
            <p className="parrafo">¡Registrarte en Rappi es muy fácil! Solo deberás enviarnos
              algunos datos personales, bancarios y de tu negocio.</p>
            }
            />
            <Dropdown
            title="¿Puedo registrarme como persona natural o jurídica?"
            content={
            <p className="parrafo">Sí, ambos son válidos en nuestro proceso de registro.</p>
            }
            />
            <Dropdown
            title="¿Puedo enviar los datos de la cuenta de cualquier banco?"
            content={
            <p className="parrafo">Sí, en Rappi aceptamos todas las cuentas bancarias de todos los bancos activos.</p>
            }
            />
          </div>
           
           </div>
          <div className="col-lg-6 text-center">
            <div>
              <img src={dropImg}  />
            </div>
          </div>
        </div>
      </div>
  </section>
  <footer className="footer pt-5">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-6 text-white">
                <h4>Sitios de interes</h4>
                <ul>
                  <li>Brands By FoodFusion</li>
                  <li>Cargo By FoodFusion</li>
                  <li>Restaurantes</li>
                </ul>
            </div>
            <div className="col-md-4 col-6 text-white">
              <h4 className="">Informacion de interes</h4>
              <p>Autorizacion de tratamiento <br />de datos personales</p>
            </div>
            <div className="col-md-4 col-12 mt-3 mb-5 text-white">
              <h4 className="text-center">Siguenos</h4>
              <div className="d-flex justify-content-center gap-3 p-2 ">
                <FaFacebookF className="footer-icon"/>
                < FaInstagram className="footer-icon"/>
                <FaTwitter className="footer-icon"/>
              </div>
            </div>
          </div>
      </div>
  </footer>
  </>
  )
}

export default App

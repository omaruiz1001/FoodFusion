import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import tienda1 from "../assets/ecommerce.webp"
import tienda2 from "../assets/estadisticas.webp"
import tienda3 from "../assets/mi-tienda.webp"
import tienda4 from "../assets/magnifying-glass.webp"
import tienda5 from "../assets/questions.webp"
import tienda6 from "../assets/tag-prime-confetti.webp"
import tienda7 from "../assets/turbo-coupon.webp"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Swiperr = () => {

  const tienda= [
    {id:1, title:"Contacta a soporte", description:"Conoce cada detalle de tus pagos de forma sencilla y rapida", img:tienda5},
    {id:2, title:"Accede a tu informacion de pagos", description:"Resuelve tus dudas rápidamente a través del canal de soporte.", img:tienda7},
    {id:3, title:"Administra tus tiendas", description:"Define los horarios de atención y la imagen de tu tienda en la aplicación.", img:tienda4},
    {id:4, title:"Crea promociones y descuentos", description:"Crea campañas exclusivas, llega a más clientes y aumenta tus ventas.", img:tienda6},
    {id:5, title:"Gestiona tu catálogo de productos", description:"Crea tu catálogo de productos, administra su disponibilidad y precios para cada tienda.", img:tienda1},
    {id:5, title:"Analiza el desempeño de tu negocio", description:"Conoce y analiza las métricas de tu operación para crecer con base en resultados reales.", img:tienda3},
    {id:5, title:"Administra tus órdenes", description:"¡Gestiona todos los pedidos de tu tienda en un solo lugar!", img:tienda2},
    ]

  return (
    <section className="Tienda mt-lg-5">
    <div className="container-tienda">
      <div className="text-center">
        <h2>Beneficios de <span className="span">Mi tienda</span></h2>
      </div>
    <Swiper
      modules={[Navigation]}
      className="mt-5"
      spaceBetween={50}
      
      slidesPerView={1}
      loop={true}
      breakpoints={{
        // when window width is >= 640px
        678: {
          slidesPerView: 5,
          spaceBetween : 10
        },
      }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{
        prevEl:".swiper-button-prev",
        nextEl:".swiper-button-next"
      }}
      
    >
     {tienda.map((item, index)=>(
      <SwiperSlide key={index}>
        <div className="item-swiper text-center p-4">
          <img className="swiper-img img-fluid" src={item.img}/>
          <div className="mt-4">
            <h3 className="item-h3">{item.title}</h3>
          </div>
          <div className="mt-3">
            <span className="item-span text-muted">{item.description}</span>
          </div>
        </div>
      </SwiperSlide>
      ))}

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      
    
    </Swiper>
    </div>
  </section>
  )
}

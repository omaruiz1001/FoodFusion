import { motion } from "framer-motion";

export const Header = ({ currentImage, foodImages }) => {
  return (
    <header className="header">
    <div className="img-header">
      <div className="header-absolute">
        <div className="header-motion">
          <motion.img
          initial={{ scale:0}}
          animate={{ scale:1}}
          key={currentImage}
          transition={{ duration: 1 }}
          src={foodImages[currentImage]}>
          </motion.img>
        </div>
        <div className="header-description">
          <h1 className="header-title">¡Hasta 15 dias de <br /> entregas gratis!</h1>
          <p className="text-muted mt-3 fs-lg-5">Para tus primeros pedidos en Restaurantes pagando con tarjeta.</p>
        <div className="header-btn-container">
          <button className="btn btn-dark mt-lg-5 mt-3 btn header-btn">¡Pide ahora!</button>
        </div>
        </div>
      </div>
    </div>
  </header>
  )
}

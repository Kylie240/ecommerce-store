import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-header">
            <h2>Sneak Geek</h2>
            <p>Discover the newest shoes in men's footwear. We carry the most popular brands so you always have the freshest styles.</p>
            <button>SHOP ALL</button>
        </div>
        <div className="circle"></div>
        <img className="hero-sneaker" src="src/images/sneaker.png" alt="nike sneaker" />
    </div>
  )
}

export default Hero
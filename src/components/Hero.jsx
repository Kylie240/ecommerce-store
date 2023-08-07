import { Link } from "react-router-dom"
import "./Hero.css"
import hero1 from "../images/hero/hero1.jpg"
import hero2 from "../images/hero/hero2.webp"
import hero3 from "../images/hero/hero3.webp"
import hero4 from "../images/hero/hero4.webp"
import hero5 from "../images/hero/hero5.webp"

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-container">
          <div className="hero-grid1 hide">
            <Link to={"/shop/all"}> 
              <div id="hero1" className="hero-overlay"></div>
              <img src={hero1} alt="hero1" />
              <p className="hero-description">Shop All</p>
            </Link>
          </div>
          <div className="hero-grid2 hide">
            <a href="#trending"> 
              <div id="hero2" className="hero-overlay"></div>
              <img src={hero2} alt="hero2" />
              <p className="hero-description">Trending</p>
            </a>
          </div>
          <div className="hero-grid3 hide">
            <a href="#nike"> 
              <div id="hero3" className="hero-overlay"></div>
              <img src={hero3} alt="hero3" />
              <p className="hero-description">Nike</p>
            </a>
          </div>
          <div className="hero-grid4 hide">
            <Link to={"/shop/category/fashion"}> 
              <div id="hero4" className="hero-overlay"></div>
              <img src={hero4} alt="hero4" />
              <p className="hero-description">Fashion</p>
            </Link>
          </div>
          <div className="hero-grid5 hide">
            <Link to={"/shop/all"}> 
              <div id="hero5" className="hero-overlay"></div>
              <img src={hero5} alt="hero5" />
              <p className="hero-description">Shop By Brand</p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero
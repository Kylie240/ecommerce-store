import { Link } from "react-router-dom"
import "./Banner.css"

const BannerReverse = ({title, info, button, img, path}) => {
  return (
    <div className="banner container">
        <div className="banner-container reverse">
            <div className="banner-image">
              <img src={img} />
            </div>
            <div className="banner-right">
                <div className="banner-title">{title}</div>
                <div className="banner-info">{info}</div>
                <Link 
                  onClick={() => (window.scrollTo(0,0))}
                  to={path} 
                  className="banner-button"
                  >{button} </Link>
            </div>
        </div>
    </div>
  )
}

export default BannerReverse
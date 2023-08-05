import { Link } from "react-router-dom"
import "./Banner.css"

const BannerReverse = ({title, info, button, img}) => {
  return (
    <div className="banner container">
        <div className="banner-container reverse">
            <div className="banner-image">
              <img src={img} />
            </div>
            <div className="banner-right">
                <div className="banner-title">{title}</div>
                <div className="banner-info">{info}</div>
                <Link to={"/all"} className="banner-button">{button}</Link>
            </div>
        </div>
    </div>
  )
}

export default BannerReverse
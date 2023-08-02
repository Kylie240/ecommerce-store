import "./Banner.css"

const BannerReverse = ({title, info, button, img}) => {
  return (
    <div className="banner container">
        <div className="banner-container reverse">
            <img src={img} />
            <div className="banner-right">
                <div className="banner-title">{title}</div>
                <div className="banner-info">{info}</div>
                <div className="banner-button">{button}</div>
            </div>
        </div>
    </div>
  )
}

export default BannerReverse
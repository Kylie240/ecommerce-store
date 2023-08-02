import "./Banner.css"

const Banner = ({title, info, button, img}) => {
  return (
    <div className="banner container">
        <div className="banner-container">
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

export default Banner
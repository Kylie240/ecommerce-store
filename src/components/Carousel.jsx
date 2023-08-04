import { shoes } from "../ShoeData"
import FeaturedCard from './FeaturedCard';
import "./Carousel.css"

const Carousel = ({header, category}) => {
    const newArray = shoes.filter(shoe => shoe.category.includes(category))

    const slideLeft = () => {
        let carousel = document.getElementById("carousel")
        carousel.scrollLeft = carousel.scrollLeft - 295;
    }
    const slideRight = () => {
        let carousel = document.getElementById("carousel")
        carousel.scrollLeft = carousel.scrollLeft + 295;
    }

    return (
        <div className='carousel-container'>
            <div className="carousel-header">
                <h3>{header}</h3>   
                <div className="carousel-arrows">
                    <i class="fa-solid fa-chevron-left"
                        onClick={slideLeft}></i>
                    <i class="fa-solid fa-chevron-right"
                        onClick={slideRight}></i>
                </div>
            </div>
            <div className="carousel-row" id="carousel">
                {newArray.map((shoe) => (
                    <div key={shoe.id}>
                        <FeaturedCard 
                            id={shoe.id}
                            img={shoe.img}
                            brand={shoe.brand}
                            name={shoe.name}
                            price={shoe.price}
                        />
                    </div>
                ))}
            </div>
        </div>
      )
}

export default Carousel
import "./Shop.css"
import { shoes } from "../ShoeData"
import { Link } from 'react-router-dom';

const FilterMenu = ({setNewArray}) => {

    const changePrice = (e) => {
        const lowPrice = parseInt(e.target.dataset.low)
        const highPrice = parseInt(e.target.dataset.high)
        const priceArray = shoes.filter(shoe => shoe.price >= lowPrice && shoe.price <= highPrice)
        setNewArray(priceArray)
    }    

  return (
    <div className='filter-menu'>
          <div className="filter-brand">
            <h5>Brand</h5>
            <ul>
              <Link to={`/shop/all`}>All</Link>
              <Link to={`/shop/brand/adidas`}>Adidas</Link>
              <Link to={`/shop/brand/nike`}>Nike</Link>
              <Link to={`/shop/brand/puma`}>Puma</Link>
              <Link to={`/shop/brand/under armour`}>Under Armour</Link>
            </ul>
          </div>
          <div className="filter-price">
            <h5>Price</h5>
            <ul>
              <Link to={`/shop/price/0/25`}>$0 - $25</Link>
              <Link to={`/shop/price/25/50`}>$25 - $50</Link>
              <Link to={`/shop/price/50/100`}>$50 - $100</Link>
              <Link to={`/shop/price/100/150`}>$100 - $150</Link>
              <Link to={`/shop/price/150/200`}>$150 - $200</Link>
              <Link to={`/shop/price/200/1000`}>$200+</Link>
              </ul>
          </div>
          <div className="filter-color">
            <h5>Color</h5>
            <ul>
              <Link to={`/shop/color/red`} className="color-red">red</Link>
              <Link to={`/shop/color/orange`} className="color-orange">orange</Link>
              <Link to={`/shop/color/yellow`} className="color-yellow">yellow</Link>
              <Link to={`/shop/color/green`} className="color-green">green</Link>
              <Link to={`/shop/color/blue`} className="color-blue">blue</Link>
              <Link to={`/shop/color/purple`} className="color-purple">purple</Link>
              <Link to={`/shop/color/pink`} className="color-pink">pink</Link>
              <Link to={`/shop/color/tan`} className="color-tan">tan</Link>
              <Link to={`/shop/color/brown`} className="color-brown">brown</Link>
              <Link to={`/shop/color/grey`} className="color-grey">grey</Link>
              <Link to={`/shop/color/white`} className="color-white">white</Link>
              <Link to={`/shop/color/black`} className="color-black">black</Link>
            </ul>
          </div>
          <div className="filter-category">
            <h5>Type</h5>
            <ul>
            <Link to={`/shop/category/boating`}>Boating</Link>
            <Link to={`/shop/category/hunting`}>Hunting</Link>
            <Link to={`/shop/category/fishing`}>Fishing</Link>
            <Link to={`/shop/category/running`}>Running</Link>
            <Link to={`/shop/category/sport`}>Athletic</Link>
            </ul>
          </div>
        </div>
  )
}

export default FilterMenu
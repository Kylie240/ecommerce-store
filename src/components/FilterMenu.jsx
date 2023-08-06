import "./Shop.css"
import { Link } from 'react-router-dom';

const FilterMenu = ({setNewArray}) => {

  return (
    <div className="filter-container">
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
        <div className="filter-price headline">
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
        <div className="filter-color headline">
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
        <div className="filter-category headline">
          <h5>Type</h5>
          <ul>
          <Link to={`/shop/category/sports`}>Athletic</Link>
          <Link to={`/shop/category/boating`}>Boating</Link>
          <Link to={`/shop/category/fashion`}>Fashion</Link>
          <Link to={`/shop/category/fishing`}>Fishing</Link>
          <Link to={`/shop/category/hunting`}>Hunting</Link>
          <Link to={`/shop/category/running`}>Running</Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FilterMenu
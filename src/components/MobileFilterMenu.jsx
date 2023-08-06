import "./Shop.css"
import { Link } from 'react-router-dom';

const MobileFilterMenu = ({close}) => {

  return (
    <div className='mobile-filter-menu'>
        <span onClick={close}>
            <i class="fa-solid fa-circle-xmark fa-2x"></i>    
        </span>            
          <div className="filter-brand">
            <h5>Brand</h5>
            <ul>
              <Link to={`/shop/all`} onClick={close}>All</Link>
              <Link to={`/shop/brand/adidas`} onClick={close}>Adidas</Link>
              <Link to={`/shop/brand/nike`} onClick={close}>Nike</Link>
              <Link to={`/shop/brand/puma`} onClick={close}>Puma</Link>
              <Link to={`/shop/brand/under armour`} onClick={close}>Under Armour</Link>
            </ul>
          </div>
          <div className="filter-price headline">
            <h5>Price</h5>
            <ul>
              <Link to={`/shop/price/0/25`} onClick={close}>$0 - $25</Link>
              <Link to={`/shop/price/25/50`} onClick={close}>$25 - $50</Link>
              <Link to={`/shop/price/50/100`} onClick={close}>$50 - $100</Link>
              <Link to={`/shop/price/100/150`} onClick={close}>$100 - $150</Link>
              <Link to={`/shop/price/150/200`} onClick={close}>$150 - $200</Link>
              <Link to={`/shop/price/200/1000`} onClick={close}>$200+</Link>
              </ul>
          </div>
          <div className="filter-color headline">
            <h5>Color</h5>
            <ul>
              <Link to={`/shop/color/red`} onClick={close} className="color-red">red</Link>
              <Link to={`/shop/color/orange`} onClick={close} className="color-orange">orange</Link>
              <Link to={`/shop/color/yellow`} onClick={close} className="color-yellow">yellow</Link>
              <Link to={`/shop/color/green`} onClick={close} className="color-green">green</Link>
              <Link to={`/shop/color/blue`} onClick={close} className="color-blue">blue</Link>
              <Link to={`/shop/color/purple`} onClick={close} className="color-purple">purple</Link>
              <Link to={`/shop/color/pink`} onClick={close} className="color-pink">pink</Link>
              <Link to={`/shop/color/tan`} onClick={close} className="color-tan">tan</Link>
              <Link to={`/shop/color/brown`} onClick={close} className="color-brown">brown</Link>
              <Link to={`/shop/color/grey`} onClick={close} className="color-grey">grey</Link>
              <Link to={`/shop/color/white`} onClick={close} className="color-white">white</Link>
              <Link to={`/shop/color/black`} onClick={close} className="color-black">black</Link>
            </ul>
          </div>
          <div className="filter-category headline">
            <h5>Type</h5>
            <ul>
            <Link to={`/shop/category/sports`}>Athletic</Link>
            <Link to={`/shop/category/boating`} onClick={close}>Boating</Link>
            <Link to={`/shop/category/hunting`} onClick={close}>Hunting</Link>
            <Link to={`/shop/category/fishing`} onClick={close}>Fishing</Link>
            <Link to={`/shop/category/running`} onClick={close}>Running</Link>
            <Link to={`/shop/category/sport`} onClick={close}>Athletic</Link>
            </ul>
          </div>
        </div>
  )
}

export default MobileFilterMenu
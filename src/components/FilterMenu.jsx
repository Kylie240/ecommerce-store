import "./Shop.css"
import { shoes } from "../ShoeData"

const FilterMenu = ({setNewArray}) => {

    const changeBrand = (e) => {
        if (e.target.dataset.brand === "all") {
            setNewArray(shoes)
        } else {
            const newArray = shoes.filter(shoe => shoe.brand === e.target.dataset.brand)
            setNewArray(newArray);
        }
    }
    const changePrice = (e) => {
        const lowPrice = parseInt(e.target.dataset.low)
        const highPrice = parseInt(e.target.dataset.high)
        const priceArray = shoes.filter(shoe => shoe.price >= lowPrice && shoe.price <= highPrice)
        setNewArray(priceArray)
    }
    const changeColor = (e) => {
        const color = e.target.dataset.color
        const colorArray = shoes.filter(shoe => shoe.colors.includes(color))
        setNewArray(colorArray)
    }
    const changeCategory = (e) => {
        const cat = e.target.dataset.category
        const catArray = shoes.filter(shoe => shoe.category.includes(cat))
        setNewArray(catArray)
    }

  return (
    <div className='filter-menu'>
          <div className="filter-brand">
            <h5>Brand</h5>
            <ul>
              <li data-brand="all" onClick={(e) => changeBrand(e)}>All</li>
              <li data-brand="adidas" onClick={(e) => changeBrand(e)}>Adidas</li>
              <li data-brand="nike" onClick={(e) => changeBrand(e)}>Nike</li>
              <li data-brand="puma" onClick={(e) => changeBrand(e)}>Puma</li>
              <li data-brand="under armour" onClick={(e) => changeBrand(e)}>Under Armour</li>
            </ul>
          </div>
          <div className="filter-price">
            <h5>Price</h5>
            <ul>
                <li data-low={0} 
                    data-high={25}
                    onClick={(e) => changePrice(e)}
                    >$0 - $25</li>
                <li data-low={25} 
                    data-high={50}
                    onClick={(e) => changePrice(e)}
                    >$25 - $50</li>
                <li data-low={50} 
                    data-high={100}
                    onClick={(e) => changePrice(e)}
                    >$50 - $100</li>
                <li data-low={100} 
                    data-high={150}
                    onClick={(e) => changePrice(e)}
                    >$100 -$150</li>
                <li data-low={150} 
                    data-high={200}
                    onClick={(e) => changePrice(e)}
                    >$150 - $200</li>
                <li data-low={200} 
                    data-high={1000}
                    onClick={(e) => changePrice(e)}
                    >$200+</li>
                <li data-low={0} 
                    data-high={0}
                    onClick={(e) => changePrice(e)}
                    >clear</li>
              </ul>
          </div>
          <div className="filter-color">
            <h5>Color</h5>
            <ul>
              <li data-color="red"
                onClick={(e) => changeColor(e)}
                className='color-red'>red</li>
              <li data-color="orange"
                onClick={(e) => changeColor(e)}
                className='color-orange'>orange</li>
              <li data-color="yellow"
                onClick={(e) => changeColor(e)}
                className='color-yellow'>yellow</li>
              <li data-color="green"
                onClick={(e) => changeColor(e)}
                className='color-green'>green</li>
              <li data-color="blue"
                onClick={(e) => changeColor(e)}
                className='color-blue'>blue</li>
              <li data-color="purple"
                onClick={(e) => changeColor(e)}
                className='color-purple'>purple</li>
              <li data-color="pink"
                onClick={(e) => changeColor(e)}
                className='color-pink'>pink</li>
              <li data-color="tan"
                onClick={(e) => changeColor(e)}
                className='color-tan'>tan</li>
              <li data-color="brown"
                onClick={(e) => changeColor(e)}
                className='color-brown'>brown</li>
              <li data-color="grey"
                onClick={(e) => changeColor(e)}
                className='color-grey'>grey</li>
              <li data-color="white"
                onClick={(e) => changeColor(e)}
                className='color-white'>white</li>
              <li data-color="black"
                onClick={(e) => changeColor(e)}
                className='color-black'>black</li>
            </ul>
          </div>
          <div className="filter-category">
            <h5>Category</h5>
            <ul>
              <li data-category="boating"
                onClick={(e) => changeCategory(e)}>Boating</li>
              <li data-category="hunting"
                onClick={(e) => changeCategory(e)}>Hunting</li>
              <li data-category="fishing"
                onClick={(e) => changeCategory(e)}>Fishing</li>
              <li data-category="running"
                onClick={(e) => changeCategory(e)}>Running</li>
              <li data-category="sports"
                onClick={(e) => changeCategory(e)}>Sports</li>
            </ul>
          </div>
        </div>
  )
}

export default FilterMenu
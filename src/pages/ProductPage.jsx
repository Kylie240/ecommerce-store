import { useParams } from "react-router"
import { shoes } from "../ShoeData";
import "../components/ProductPage.css"
import SizeSelect from "../components/SizeSelect";
import { createContext, useContext, useEffect, useState } from "react";
import ProductModals from "../components/ProductModals";
import Carousel from "../components/Carousel";

export const CartContext = createContext()

const ProductPage = () => {
  const {id} = useParams();

  const featuredShoe = shoes.find( shoe => shoe.id === parseInt(id) )

  const [selectedSize, setSelectedSize] = useState()
  const [mainImage, setMainImage] = useState(featuredShoe.img)
  const time = new Date().getTime()
  
  useEffect(()=>{
    setMainImage(featuredShoe.img)
    setSelectedSize()
  }, [featuredShoe])

  const {addToCart} = useContext(CartContext)

  const handleCart = (e, shoe) => {
    e.preventDefault()
    if (selectedSize === undefined) {
      return alert("Must select size first")
    } else {
      addToCart(shoe, selectedSize, time)
    }
  }

  return (
    <div className="product-page-container">
      <div className="product-container">
        <div className="product-images">
          <div className="product-header-mobile">
            <h5 className="product-name">{featuredShoe.brand} {featuredShoe.name}</h5>
            <p className="product-price">${featuredShoe.price}</p>
          </div>
          <img src={mainImage} className="main-image" />
          <div className="image-reel">
            <img src={featuredShoe.img} 
              className="image-thumbnail"
              onMouseEnter={() => setMainImage(featuredShoe.img)}
              onClick={() => setMainImage(featuredShoe.img)}
              />
            {featuredShoe.otherImgs.map((image) => (
              <img 
                key={image} 
                src={image} 
                className="image-thumbnail"
                onMouseEnter={() => setMainImage(image)}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>
        <form onSubmit={(e) => handleCart(e, featuredShoe)} className="product-right">
          <div className="product-header">
            <h5 className="product-name">{featuredShoe.brand} {featuredShoe.name}</h5>
            <p className="product-price">${featuredShoe.price}</p>
          </div>
          <div className="size-container">
            <h6>Selec{selectedSize ? `ted Size: ${selectedSize}` : "t Size"}</h6>
            <SizeSelect setSelectedSize={setSelectedSize} selectedSize={selectedSize}/>
          </div>
          <div className="purchase-btns">
            <button type="submit">Add to Cart</button>
            <button>Buy Now</button>
          </div>
          <p>Shipping* <br/> To get accurate shipping information Edit Location</p>
          <p className="product-description">{featuredShoe.description}</p>
          <ul className="product-extras">
              <li>
                Color{featuredShoe.colors.length < 2 ? "" : "s"}: {featuredShoe.colors.map((color) => (
                <p>{color}</p>
              ))}</li>
              <li>Style: 924453-20{featuredShoe.id}</li>
          </ul>
          <ProductModals />
        </form>
      </div>
      <Carousel header="you might also like" category="running"/>
    </div>
  )
}

export default ProductPage
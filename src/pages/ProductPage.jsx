import { useParams } from "react-router"
import { shoes } from "../ShoeData";
import "../components/ProductPage.css"
import SizeSelect from "../components/SizeSelect";
import { useState } from "react";

const ProductPage = () => {
  const {id} = useParams();
  const featuredShoe = shoes.find( shoe => shoe.id === parseInt(id) )

  const [selectedSize, setSelectedSize] = useState()

  return (
    <div className="product-page-container">
      <div className="product-container">
        <div className="product-images">
          <div className="product-header-mobile">
            <h5 className="product-name">{featuredShoe.brand} {featuredShoe.name}</h5>
            <p className="product-price">${featuredShoe.price}</p>
          </div>
          <div className="image-reel">
            <img src={featuredShoe.img} className="image-thumbnail"/>
            {featuredShoe.otherImgs.map((image) => (
              <img key={image} src={image} className="image-thumbnail"/>
            ))}
          </div>
          <img src={featuredShoe.img} className="main-image" />
        </div>
        <div className="product-right">
          <div className="product-header">
            <h5 className="product-name">{featuredShoe.brand} {featuredShoe.name}</h5>
            <p className="product-price">${featuredShoe.price}</p>
          </div>
          <div className="size-container">
            <h6>Select Size</h6>
            <SizeSelect selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
          </div>
          <div className="purchase-btns">
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
          <p>Shipping* <br/> To get accurate shipping information Edit Location</p>
          <p className="product-description"> <strong>Description: </strong>{featuredShoe.description}</p>

        </div>
      </div>
    </div>
  )
}

export default ProductPage
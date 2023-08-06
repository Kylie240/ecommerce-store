import React, { useState } from 'react'
import { shoes } from '../../ShoeData';
import ShopCard from '../ShopCard';
import "../../components/Shop.css"
import { useParams } from 'react-router';

const Category = ({newArray, setNewArray}) => {
  const {param} = useParam()
  const filteredArray = shoes.filter(shoe => shoe.category.includes(param))

  return (
    <div className='shop-grid'>
        {filteredArray.map((shoe) => (
        <ShopCard 
        id={shoe.id}
        img={shoe.img}
        brand={shoe.brand}
        name={shoe.name}
        price={shoe.price}
        />
        ))}
    </div>
  )
}

export default Category
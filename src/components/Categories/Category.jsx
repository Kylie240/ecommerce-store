import React, { useState } from 'react'
import { shoes } from '../../ShoeData';
import ShopCard from '../ShopCard';
import "../../components/Shop.css"
import { useParams } from 'react-router';
import NoResults from './NoResults';

const Category = ({newArray, setNewArray}) => {
  const {param} = useParams()
  const filteredArray = shoes.filter(shoe => shoe.category.includes(param))

  return (
    <div className='shop-grid'>
    {filteredArray.length === 0 && <NoResults />}
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
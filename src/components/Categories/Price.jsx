import React, { useState } from 'react'
import { shoes } from '../../ShoeData';
import ShopCard from '../ShopCard';
import "../../components/Shop.css"
import { useParams } from 'react-router';
import NoResults from './NoResults';

const Brand = ({newArray, setNewArray}) => {
    const {low, high} = useParams()
  const filteredArray = shoes.filter(shoe => shoe.price >= parseInt(low) && shoe.price <= parseInt(high))

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

export default Brand
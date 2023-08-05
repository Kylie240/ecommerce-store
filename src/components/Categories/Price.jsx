import React, { useState } from 'react'
import { shoes } from '../../ShoeData';
import GridCard from '../GridCard';
import "../../components/Shop.css"
import { useParams } from 'react-router';

const Brand = ({newArray, setNewArray}) => {
    const {low, high} = useParams() 
    console.log(low, high);
  const filteredArray = shoes.filter(shoe => shoe.price >= parseInt(low) && shoe.price <= parseInt(high))

  return (
    <div className='shop-grid'>
        {filteredArray.map((shoe) => (
        <GridCard 
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
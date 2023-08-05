import React, { useState } from 'react'
import { shoes } from '../../ShoeData';
import GridCard from '../GridCard';
import "../../components/Shop.css"
import { useParams } from 'react-router';

const Brand = ({newArray, setNewArray}) => {
    const {param} = useParams()
  const filteredArray = shoes.filter(shoe => shoe.colors.includes(param))

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
import React, { useState } from 'react'
import { shoes } from '../../ShoeData';
import ShopCard from '../../components/ShopCard';
import "../../components/Shop.css"
import NoResults from './NoResults';

const All = () => {
  const [newArray, setNewArray] = useState(shoes)

  return (
    <div className='shop-grid'>
    {newArray.length === 0 && <NoResults />}
        {newArray.map((shoe) => (
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

export default All
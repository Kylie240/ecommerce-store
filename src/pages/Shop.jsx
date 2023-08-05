import React, { useState } from 'react'
import { shoes } from "../ShoeData"
import GridCard from '../components/GridCard';
import "../components/Shop.css"
import FilterMenu from '../components/FilterMenu';
import { Outlet } from 'react-router';

const Shop = () => {
  const [newArray, setNewArray] = useState(shoes)

  return (
    <div className='shop-container'>
      <h3 className='results'>Results ({newArray.length})</h3>
      <div className='results-container'>
        <FilterMenu setNewArray={setNewArray} />
        <Outlet newArray={newArray} setNewArray={setNewArray}/>
      </div>
    </div>
  )
}

export default Shop
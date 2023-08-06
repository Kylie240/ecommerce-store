import React, { useState } from 'react'
import { shoes } from "../ShoeData"
import "../components/Shop.css"
import FilterMenu from '../components/FilterMenu';
import { Outlet } from 'react-router';
import MobileFilterMenu from '../components/MobileFilterMenu';

const Shop = () => {
  const [newArray, setNewArray] = useState(shoes)
  const [mobileFilter, setMobileFilter] = useState(false)
  const [showFilter, setShowFilter] = useState(true)

  const handleMobileFilter = () => {
    if (mobileFilter === false){
      setMobileFilter(true)
      document.body.style.overflow = "hidden"
    } else {
      setMobileFilter(false)
      document.body.style.overflow = ""
    }
  }

  return (
    <div className='shop-container'>
      <div className="results-header">
        <div className='results'>
          <h3>Results ({newArray.length})</h3>
          <div onClick={()=> (setShowFilter(!showFilter))}>
            <p>{showFilter ? "Hide" : "Show"} Filters</p>
            <i class="fa-solid fa-sliders"></i>
          </div>
        </div>
        <div className="mobile-results">
          <div>
            {newArray.length} results
          </div>
          <div className="left" onClick={handleMobileFilter}>
            <p>Filter</p>
            <i class="fa-solid fa-sliders"></i>
          </div>
        </div>
      </div>
      <div className='results-container'>
        {mobileFilter && <MobileFilterMenu close={handleMobileFilter}/>}
        {showFilter && <FilterMenu setNewArray={setNewArray}/>}
        <Outlet newArray={newArray} setNewArray={setNewArray}/>
      </div>
    </div>
  )
}

export default Shop
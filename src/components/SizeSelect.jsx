import "./ProductPage.css"

const SizeSelect = ({setSelectedSize, selectedSize}) => {

  function handleSelect (e) {
    console.log(e);
    setSelectedSize(e.target.dataset.size);
  }


  return (
    <ul className="size-list">
        <li
          data-size="6"  
          onClick={(e) => handleSelect(e)}>6</li>
        <li
          data-size="6.5" 
          onClick={(e) => handleSelect(e)}>6.5</li>
        <li
          data-size="7"  
          onClick={(e) => handleSelect(e)}>7</li>
        <li
          data-size="7.5"  
          onClick={(e) => handleSelect(e)}>7.5</li>
        <li
          data-size="8"  
          onClick={(e) => handleSelect(e)}>8</li>
        <li
          data-size="8.5"  
          onClick={(e) => handleSelect(e)}>8.5</li>
        <li
          data-size="9"  
          onClick={(e) => handleSelect(e)}>9</li>
        <li
          data-size="9.5"  
          onClick={(e) => handleSelect(e)}>9.5</li>
        <li
          data-size="10"  
          onClick={(e) => handleSelect(e)}>10</li>
        <li
          data-size="10.5 " 
          onClick={(e) => handleSelect(e)}>10.5</li>
        <li
          data-size="11"  
          onClick={(e) => handleSelect(e)}>11</li>
        <li
          data-size="11.5"  
          onClick={(e) => handleSelect(e)}>11.5</li>
        <li
          data-size="12"  
          onClick={(e) => handleSelect(e)}>12</li>
        <li
          data-size="12.5"  
          onClick={(e) => handleSelect(e)}>12.5</li>
        <li
          data-size="13"  
          onClick={(e) => handleSelect(e)}>13</li>
        <li
          data-size="14"  
          onClick={(e) => handleSelect(e)}>14</li>
    </ul>
  )
}

export default SizeSelect
import "./ProductPage.css"

const SizeSelect = ({setSelectedSize}) => {

  function handleSelect (e) {
    console.log(e);
  }

  return (
    <ul className="size-list">
        <li
          value="6"  
          onClick={(e) => handleSelect(e)}>6</li>
        <li
          value={6.5}  
          onClick={(e) => handleSelect(e)}>6.5</li>
        <li
          value={7}  
          onClick={(e) => handleSelect(e)}>7</li>
        <li
          value={7.5}  
          onClick={(e) => handleSelect(e)}>7.5</li>
        <li
          value={8}  
          onClick={(e) => handleSelect(e)}>8</li>
        <li
          value={8.5}  
          onClick={(e) => handleSelect(e)}>8.5</li>
        <li
          value={9}  
          onClick={(e) => handleSelect(e)}>9</li>
        <li
          value={9.5}  
          onClick={(e) => handleSelect(e)}>9.5</li>
        <li
          value={10}  
          onClick={(e) => handleSelect(e)}>10</li>
        <li
          value={10.5}  
          onClick={(e) => handleSelect(e)}>10.5</li>
        <li
          value={11}  
          onClick={(e) => handleSelect(e)}>11</li>
        <li
          value={11.5}  
          onClick={(e) => handleSelect(e)}>11.5</li>
        <li
          value={12}  
          onClick={(e) => handleSelect(e)}>12</li>
        <li
          value={12.5}  
          onClick={(e) => handleSelect(e)}>12.5</li>
        <li
          value={13}  
          onClick={(e) => handleSelect(e)}>13</li>
        <li
          value={14}  
          onClick={(e) => handleSelect(e)}>14</li>
    </ul>
  )
}

export default SizeSelect
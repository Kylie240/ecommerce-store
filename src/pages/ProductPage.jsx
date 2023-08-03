import { useParams } from "react-router"

const ProductPage = () => {
  const {id} = useParams();
  console.log(id);

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage
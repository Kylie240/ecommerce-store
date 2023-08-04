import "./ProductPage.css"
import SingleModal from "./SingleModal"

const ProductModals = () => {
    const modalContent = [
        {
            id: 401,
            header: "Shipping & Returns",
            info: "Free standard shipping on orders $50+ and free 60-day returns for Nike Members. Return policy exclusions apply.",
        },
        {
            id: 402,
            header: "Reviews",
            info: "No reviews yet.",
        }
    ]

    function showModal () {

    }
  return (

    <div className="product-modal">
        {modalContent.map((content) => (
            <SingleModal id={content.id} header={content.header} info={content.info}/>
        ))}
    </div>
  )
}

export default ProductModals
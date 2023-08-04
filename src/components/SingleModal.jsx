import { useState } from "react"
import "./ProductPage.css"

const SingleModal = ({id, header, info}) => {
    const [showModal, setShowModal] = useState(false)

  return (
    <div key={id} className="modal-section">
        <div className="content-header"
            onClick={() => setShowModal(!showModal)}>
            <div className="header-right">
                {header}
                {id === 402 ? 
                    <div>
                        <i class="fa-solid fa-star fa-xs"></i>
                        <i class="fa-solid fa-star fa-xs"></i>
                        <i class="fa-solid fa-star fa-xs"></i>
                        <i class="fa-solid fa-star fa-xs"></i>
                        <i class="fa-solid fa-star fa-xs"></i>
                    </div> : ""
                }
            </div>
            {showModal ? 
                <i class="fa-solid fa-minus"></i> 
                : 
                <i class="fa-solid fa-plus"></i>
            }
        </div>
        { showModal && <div className="content-info">
            {info}
        </div>}
    </div>
  )
}

export default SingleModal
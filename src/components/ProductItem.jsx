import { useStore } from "../contexts/storeContext"
import { useNavigate } from "react-router-dom"

export const ProductItem = ({item}) => {
    const {deleteProduct} = useStore()
    const navigate = useNavigate()

    return(
        <div>
            <li>Name: {item.title}</li>
            <img src={item.thumbnail} alt={item.title} />
            <button onClick={() => navigate(`/product/${item.id}`)}>View Details</button>
            <button onClick={() => navigate(`/product/edit/${item.id}`)}>Edit Product</button>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
        </div>
      )
}
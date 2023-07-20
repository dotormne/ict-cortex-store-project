import { useStore } from "../contexts/storeContext"
import { useNavigate } from "react-router-dom"

export const ProductItem = ({item}) => {
    const {deleteProduct} = useStore()
    const navigate = useNavigate()

    return(
            <li className="m-2 p-2">
                <h2 className="font-semibold">{item.title}</h2>
                <h3>{`${item.price}$`}</h3>
                <img
                    className="mt-2 rounded-md cursor-pointer w-[300px] h-[200]"
                    src={item.thumbnail}
                    alt={item.title}
                    onClick={() => navigate(`/product/${item.id}`)}
                />
                <div className="flex gap-2 content-center hover:text-blue">
                    <button className="font-semibold" onClick={() => navigate(`/product/${item.id}`)}>View</button>
                    <button className="font-semibold" onClick={() => navigate(`/product/edit/${item.id}`)}>Edit</button>
                    <button className="font-bold text-red-600" onClick={() => deleteProduct(item.id)}>Delete</button>
                </div>
            </li>
      )
}
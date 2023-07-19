import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStore } from "../contexts/storeContext";

export const ShowProduct = () => {
    const {items} = useStore()
    const params = useParams();

    const item = items.length > 0 ? items.find(item => item.id == params.id) : "";

    if(items.length > 0 && item) {
        return (
            <div>
                <Link to="/">Back to Products page</Link>
                <h1>Product details</h1>
                <div>
                    <h2>Product name: {item.title}</h2>
                    <h2>Product brand: {item.brand}</h2>
                    <h2>Product category: {item.category}</h2>
                    <h2>Product price: {item.price}</h2>
                    <h2>Product rating: {item.rating}</h2>
                    <h2>Product stock: {item.stock}</h2>
                </div>
                <div>
                    {item.images && item.images.map((image, index) => {
                        return <img key ={index} src={image} alt="product image" />;
                    })}
                </div>

            </div>
            );
    } else {
        return <h1>Loading...</h1>
    }
    
}
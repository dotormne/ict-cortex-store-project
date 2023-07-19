/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import { useStore } from "../contexts/storeContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const EditProduct = () => {
    const {editProduct, items} = useStore();
    const [item, setItem] = useState("");
    const params = useParams();
    
    useEffect(() => {
        if(items.length > 0) {
            const tmpItem = items.find(item => item.id == params.id);
            setItem(tmpItem);
        }
    },[items.length]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const elements = event.target.elements;

        const newItem = {
            title: elements.title.value,
            description: elements.description.value,
            price: elements.price.value,
            discountPercentage: elements.discount.value,
            rating: elements.rating.value,
            stock: elements.stock.value,
            brand: elements.brand.value,
            category: elements.category.value,
          }

          editProduct(item.id, newItem)
    }

    if(items.length > 0 && item) {
    return (
    <div>
        <h1>EDIT PRODUCT</h1>
        <form onSubmit={handleSubmit}>
            <Input label="category" name="category" defaultValue={item.category} />
            <Input label="title" name="title" defaultValue={item.title} />
            <Input label="description" name="description" defaultValue={item.description} />
            <Input label="brand" name="brand" defaultValue={item.brand} />
            <Input label="price" name="price" type="number" min="0" defaultValue={item.price} />
            <Input label="discount" name="discount" type="number" min="0" defaultValue={item.discount} />
            <Input label="rating" name="rating" defaultValue={item.rating} />
            <Input label="stock" name="stock" type="number" min="0" defaultValue={item.stock} />
            <br />
            <button type="submit">Submit</button>
        </form>
        <Link to="/">Back to Products Page</Link>
    </div>
    );
    } else {
        return <h2>Loading...</h2>
    }
}
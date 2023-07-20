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
        <div className="bg-violet-100 md:w-[480px] lg:w-[640px] px-8 pt-20 pb-[180px] mx-auto min-h-[60vh]">
        <header className="text-center mb-10 font-bold">
            <h1>EDIT PRODUCT</h1>
        </header>
        <main>
            <form onSubmit={handleSubmit}>
                <Input className="flex gap-2 my-2" label="category" name="category" defaultValue={item.category} />
                <Input className="flex gap-2 my-2" label="title" name="title" defaultValue={item.title} />
                <Input className="flex gap-2 my-2" label="description" name="description" defaultValue={item.description} />
                <Input className="flex gap-2 my-2" label="brand" name="brand" defaultValue={item.brand} />
                <Input className="flex gap-2 my-2" label="price" name="price" type="number" min="0" defaultValue={item.price} />
                <Input className="flex gap-2 my-2" label="discount" name="discount" type="number" min="0" defaultValue={item.discountPercentage} />
                <Input className="flex gap-2 my-2" label="rating" name="rating" defaultValue={item.rating} />
                <Input className="flex gap-2 my-2" label="stock" name="stock" type="number" min="0" defaultValue={item.stock} />
                <br />
                <button className="content-center text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Submit</button>
            </form>
            <div className="mt-20 text-center">
                <Link className="content-center text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/">Back to Products Page</Link>
            </div>
        </main>
    </div>
    );
    } else {
        return <h2>Loading...</h2>
    }
}
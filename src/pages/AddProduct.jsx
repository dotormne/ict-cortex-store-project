import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import { useStore } from "../contexts/storeContext";

export const AddProduct = () => {
    const {addProduct} = useStore();

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
            thumbnail: '',
            images: []
          }

        addProduct(newItem);

        elements.title.value = ""
        elements.description.value = ""
        elements.price.value = 0
        elements.discount.value = 0
        elements.rating.value = 0
        elements.stock.value = 0
        elements.brand.value = ""
        elements.category.value = ""

    }

    return (
    <div>
        <h1>ADD NEW PRODUCT</h1>
        <form onSubmit={handleSubmit}>
            <Input label="category" name="category" />
            <Input label="title" name="title" />
            <Input label="description" name="description" />
            <Input label="brand" name="brand" />
            <Input label="price" name="price" type="number" min="0" />
            <Input label="discount" name="discount" type="number" min="0" />
            <Input label="rating" name="rating" />
            <Input label="stock" name="stock" type="number" min="0" />
            <br />
            <button type="submit">Submit</button>
        </form>
        <Link to="/">Back to Products Page</Link>
    </div>
    );
}
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
        <div className="bg-violet-100 md:w-[480px] lg:w-[640px] px-8 pt-20 pb-[180px] mx-auto min-h-[60vh]">
        <header className="text-center mb-10 font-bold">
            <h1>ADD NEW PRODUCT</h1>
        </header>
        <main>
            <form onSubmit={handleSubmit}>
                <Input className="flex gap-2 my-2" label="category" name="category" />
                <Input className="flex gap-2 my-2" label="title" name="title" />
                <Input className="flex gap-2 my-2" label="description" name="description" />
                <Input className="flex gap-2 my-2" label="brand" name="brand" />
                <Input className="flex gap-2 my-2" label="price" name="price" type="number" min="0" />
                <Input className="flex gap-2 my-2" label="discount" name="discount" type="number" min="0" />
                <Input className="flex gap-2 my-2" label="rating" name="rating" />
                <Input className="flex gap-2 my-2" label="stock" name="stock" type="number" min="0" />
                <br />
                <button className="content-center text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Submit</button>
            </form>
            <div className="mt-20 text-center">
                <Link className="content-center text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/">Back to Products Page</Link>
            </div>
        </main>
    </div>
    );
}
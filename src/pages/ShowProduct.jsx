import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useStore } from "../contexts/storeContext";

export const ShowProduct = () => {
    const {items} = useStore()
    const params = useParams();

    const item = items.length > 0 ? items.find(item => item.id == params.id) : "";

    if(items.length > 0 && item) {
        return (
            <div className="bg-violet-100 md:w-[480px] lg:w-[640px] px-8 pt-20 pb-[180px] mx-auto min-h-[60vh]">
                <header className="text-center mb-10 font-bold">
                    <Link className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/">Back to Products page</Link>
                    <h1 className="mt-10 text-xl pb-10">Product details</h1>
                </header>
                <div>
                    <h2>Product name: <span className="font-semibold">{item.title}</span></h2>
                    <h2>Product brand: <span className="font-semibold">{item.brand}</span></h2>
                    <h2>Product category: <span className="font-semibold">{item.category}</span></h2>
                    <h2>Product price: <span className="font-semibold">{item.price}$</span></h2>
                    <h2>Product rating: <span className="font-semibold">{item.rating}</span></h2>
                    <h2>Product discount: <span className="font-semibold">{item.discountPercentage}%</span></h2>
                    <h2>Product stock: <span className="font-semibold">{item.stock}</span></h2>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
                    {item.images && item.images.map((image, index) => {
                        return <img className="w-[250px] h-[250px]" key ={index} src={image} alt="product image" />;
                    })}
                </div>

            </div>
            );
    } else {
        return <h1>Loading...</h1>
    }
    
}
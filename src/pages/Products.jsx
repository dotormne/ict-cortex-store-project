/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useStore } from "../contexts/storeContext";
import { ProductItem } from "../components/ProductItem";
import { Link } from "react-router-dom";

export const Products = () => {
  const { items, itemsToDisplay, setItemsToDisplay } = useStore();

  const handleLoadMoreItems = () => {
    if(itemsToDisplay < items.length) {
      setItemsToDisplay((oldItemsToDisplay) => oldItemsToDisplay + 9);
    }
  }

  useEffect(() => {
    if(items.length > 0 && itemsToDisplay == 0) {
      setItemsToDisplay(9)
    }
  }, [items.length]);

  if (items.length > 0) {
    return (
    <div className="bg-violet-100 md:w-[480px] lg:w-[640px] px-8 pt-20 pb-[180px] mx-auto min-h-[60vh]">
    <header className="text-center mb-10 font-bold">
      <h1 className="text-xl pb-10">PRODUCTS STORE</h1>
      <Link className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/product/add">ADD NEW PRODUCT</Link>
    </header>
    <main className="">
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {items.map((item, index) => {
          if(index < itemsToDisplay){
            return <ProductItem key={item.id} item={item} />;
          }
        })}
        </ul>
      </div>
      <div className="text-center">
        {itemsToDisplay < items.length ? <button className="mt-20 mx-auto content-center text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" onClick={handleLoadMoreItems}>Load More</button> : ""}
      </div>
    </main>
    </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

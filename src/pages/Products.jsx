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
    <div>
      <h1>Products</h1>
      <Link to="/product/add">ADD NEW PRODUCT</Link>
      <ul>
      {items.map((item, index) => {
        if(index < itemsToDisplay){
          return <ProductItem key={item.id} item={item} />;
        }
      })}
      </ul>
      {itemsToDisplay < items.length ? <button type="button" onClick={handleLoadMoreItems}>Load More</button> : ""}
    </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

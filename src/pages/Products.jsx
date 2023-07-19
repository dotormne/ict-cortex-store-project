/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useStore } from "../contexts/storeContext";
import { ProductItem } from "../components/ProductItem";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Products = () => {
  const { items, deleteProduct, itemsToDisplay, setItemsToDisplay } = useStore();
  const navigate = useNavigate();

  const handleLoadMoreItems = () => {
    if(itemsToDisplay < items.length) {
      setItemsToDisplay((oldItemsToDisplay) => oldItemsToDisplay + 9);
    }
  }

  const handleShowProduct = (id) => {
    navigate(`/product/${id}`);
  }

  const handleEditProduct = (id) => {
    navigate(`/product/edit/${id}`);
  }

  const handleDeleteProduct = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Item deleted successfully`, data.id)
      });
      deleteProduct(id);
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
          return (
          <ProductItem key={item.id}
            item={item}
            handleShowProduct={() => handleShowProduct(item.id)}
            handleEditProduct={() => handleEditProduct(item.id)}
            handleDeleteProduct={() => handleDeleteProduct(item.id)}
          />);
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

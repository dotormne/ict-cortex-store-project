/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useEffect } from "react";

const StoreContext = createContext({
  items: [],
  setItems: () => {},
  addProduct: () => {},
  deleteProduct: () => {},
  editProduct: () => {},
  itemsToDisplay: 0,
  setItemsToDisplay: () => {}
});

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState(0)

  const addProduct = (item) => {
    setItems([...items, item]);
  }

  const deleteProduct = (id) => {
    const filteredArray = items.filter(item => item.id !== id);
    setItems(filteredArray);
  }

  const editProduct = (id, newItem) => {
    const newList = items.map(item => {
      if(item.id === id) {
        return newItem;
      } else {
        return item;
      }
    })
    setItems(newList);
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setItems(data.products))
  }, [])

  const value = {
    items,
    setItems,
    addProduct,
    deleteProduct,
    editProduct,
    itemsToDisplay,
    setItemsToDisplay
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

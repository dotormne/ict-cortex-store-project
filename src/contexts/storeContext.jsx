/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useEffect } from "react";

const StoreContext = createContext({
  items: [],
  setItems: () => {},
  addItem: () => {},
  removeItem: () => {},
  editItem: () => {},
  itemsToDisplay: 0,
  setItemsToDisplay: () => {}
});

export const StoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState(0)

  const addItem = (item) => {
    setItems(...items, item);
  }

  const removeItem = (id) => {
    const filteredArray = items.filter(item => item.id !== id);
    setItems(filteredArray);
  }

  const editItem = (id, newItem) => {
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
    addItem,
    removeItem,
    editItem,
    itemsToDisplay,
    setItemsToDisplay
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

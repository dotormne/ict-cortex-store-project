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

  const addProduct = (newItem) => {
    fetch("https://dummyjson.com/products/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newItem),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log("ADDED NEW ITEM", data);
                setItems([...items, data]);
            });
    
  }

  const deleteProduct = (id) => {
    const filteredArray = items.filter(item => item.id !== id);
    
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Item deleted successfully`, data.id)
      });

    setItems(filteredArray);
  }

  const editProduct = (id, newItem) => {
    const newList = items.map(item => {
      if(item.id === id) {
        return {...item, ...newItem};
      } else {
        return item;
      }
    })

    fetch(`https://dummyjson.com/products/${id}`, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
            })
            .then(res => res.json())
            .then((data)  => {
                console.log("ITEM EDITED: ", data);
                
                setItems(newList);
            });
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

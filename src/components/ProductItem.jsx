export const ProductItem = ({item, handleShowProduct, handleEditProduct, handleDeleteProduct}) => {
    return(
        <div>
            <li>Name: {item.title}</li>
            <button onClick={handleShowProduct}>View Details</button>
            <button onClick={handleEditProduct}>Edit Product</button>
            <button onClick={handleDeleteProduct}>Delete</button>
        </div>
      )
}
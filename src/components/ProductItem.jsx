export const ProductItem = ({item, handleShowProduct, handleEditProduct, handleDeleteProduct}) => {
    return(
        <div>
            <li>Name: {item.title}</li>
            <img src={item.thumbnail} alt={item.title} />
            <button onClick={handleShowProduct}>View Details</button>
            <button onClick={handleEditProduct}>Edit Product</button>
            <button onClick={handleDeleteProduct}>Delete</button>
        </div>
      )
}
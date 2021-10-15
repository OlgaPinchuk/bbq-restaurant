export default function ProductDetails({ product, onEdit, onDelete }) {
  // Properties
  const { name, price, imageURL, detailedInfo, ingredients = [] } = product;

  return (
    <div className="admin-product-details">
      <header className="admin-header">
        <h1>{name}</h1>
        <button className="button edit-btn" onClick={onEdit}>
          Edit Product
        </button>
        <button
          className="button btn-danger"
          onClick={() => {
            onDelete(product.id);
          }}
        >
          Delete product
        </button>
      </header>
      <div className="product-details card">
        <img src={imageURL} alt={name} />
        <div className="description">
          <p>{detailedInfo}</p>
          <p>
            <b>Price: {price}:-</b>
          </p>
        </div>
      </div>

        {/* To-do: Pills component */}
        {ingredients.length > 0 && (
          <div className="ingredients">
            <h3>Ingredients:</h3>
            <div className="pills">
              {ingredients.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}

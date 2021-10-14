export default function ProductDetails({ product, onEdit}) {
  // Properties
  const {
    name,
    price,
    imageURL,
    detailedInfo,
    ingredients = [],
  } = product;

  return (
    <div className="admin-product-details">
      <h1>{name}</h1>
      <button className="button edit-btn" onClick={onEdit}>
        Edit Product
      </button>
      <h2>Price: {price}</h2>
      <img src={imageURL} alt={name} />
      <p>{detailedInfo}</p>
      {ingredients.length > 0 && (
        <div className="ingredients">
          <h2>Ingredients:</h2>
          {ingredients.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

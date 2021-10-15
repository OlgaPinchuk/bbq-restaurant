// NPM packages
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  const { id, slug, name, shortInfo, price, imageURL } = item;

  return (
    <li>
      <Link to={{ pathname: `/products/${slug}`, state: id }}>
        <section className="card product-card">
          <img src={imageURL} alt="Card" />
          <div className="product description">
            <h2 className="product card-header">{name}</h2>
            <p>{shortInfo}</p>
            <p>
              <b>Price: {price}</b>
            </p>
          </div>
        </section>
      </Link>
    </li>
  );
}

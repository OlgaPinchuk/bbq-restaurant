// NPM packages
import { useParams } from "react-router-dom";

// Project files
import BackButton from "../shared/BackButton";
import { useMenu } from "../../state/MenuProvider";

export default function Product({ history }) {
  // Global state
  const { slug } = useParams();
  const { products } = useMenu();

  const { name, detailedInfo, imageURL, price, ingredients } = products.find(
    (item) => item.slug === slug
  );

  const pills = ingredients.map((item, index) => (
    <span className="pill" key={index}>
      {item}
    </span>
  ));

  return (
    <section className="page products-category">
      <section className="hero">
        <img className="hero-image" src={imageURL} alt="Product" />
      </section>
      <section className="page-content">
        <section className="page-description">
          <h1>{name}</h1>
          <p>{detailedInfo}</p>
          <p>
            <b>Price: {price}</b>
          </p>
        </section>
        <section className="ingredients">
          <h2>Ingredients</h2>
          <div className="pills">{pills}</div>
        </section>
        <BackButton history={history} />
      </section>
    </section>
  );
}

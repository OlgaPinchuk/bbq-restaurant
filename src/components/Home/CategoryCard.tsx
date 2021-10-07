// Project files
import iCategory from "types/iCategory";

interface iProps {
  item: iCategory;
}

export default function CategoryCard({ item }: iProps) {

  const { name, description } = item;
  // const {image} = item;
  // const imageSrc = require(`../assets/images/${image}`).default;

  return (
    <section className="card">
      <div className="card-image">
        {/* <img src={imageSrc} alt="Card" /> */}
      </div>
      <div className="description">
        <h2 className="card-header">{name}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default function CategoryCard({ item }) {
  const { name, description, imageURL } = item;

  return (
    <section className="card">
      <div className="card-image">
        <img src={imageURL} alt="Card" />
      </div>
      <div className="description">
        <h2 className="card-header">{name}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

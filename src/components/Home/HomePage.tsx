// Project files
import iCategory from "types/iCategory";

interface iProps {
  categories: iCategory[];
}

const HomePage = ({ categories }: iProps) => {
  const Categories = categories.map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <>
      <h1>Home Page</h1>
      <ul>{Categories}</ul>
    </>
  );
};

export default HomePage;

import { useState } from "react";

const ExampleComponent = () => {
  const [cats, setCats] = useState([
    { name: "Myshka", breed: "Ragdoll" },
    { name: "Malta", breed: "Turkish Angora" },
  ]);

  // const addCat = (newCat) => {
  //   // spread current cats array and newCat object into a new array
  //   const newCatsArray = [...cats, newCat];
  //   // call state setter function with this new array
  //   setCats(newCatsArray);
  // };

  // does the same as canceled out code..
  const addCat = (newCat) => {
    setCats([...cats, newCat]);
  };

  return (
    <>
      <button onClick={() => addCat({ name: "Kira", breed: "Ragamuffin" })}>
        Add Cat
      </button>
      <ul>
        {cats.map((cat, idx) => (
          <li key={idx}> {cat.name} </li>
        ))}
      </ul>
    </>
  );
};

export default ExampleComponent;

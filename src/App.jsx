import { useState } from "react";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light");

  const [user, setUser] = useState({
    firstName: "Cameron",
    lastName: "Delay",
    hasPets: true,
    age: 33,
  });

  console.log(user);

  const handleMode = (modeValue) => {
    console.log(modeValue);
    setMode(modeValue);
  };

  return (
    <div className={mode}>
      <h1>Hello world!</h1>
      <p>
        Hello, my name is {user.firstName} {user.lastName}, I am {user.age}{" "}
        years old and {user.hasPets ? "I have pets" : "I do not have pets"}.
      </p>
      <div>
        <button onClick={() => handleMode("dark")}>Dark Mode</button>
        <button onClick={() => handleMode("light")}>Light Mode</button>
        <button onClick={() => handleMode("neon")}>Neon Mode</button>
        <button onClick={() => handleMode("night")}>Night Mode</button>
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("zf");
  const [age, setAge] = useState(23);

  const handleClick = () => {
    setName("John");
    setAge(13);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default Home;

const Home = () => {
  const handleClick = (e) => {
    console.log("Button has been clicked", e);
  };

  const handle2Click = (name, e) => {
    console.log("Button has been clicked by " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={(e) => handle2Click("Pikachu!", e)}>Click2</button>
    </div>
  );
};

export default Home;

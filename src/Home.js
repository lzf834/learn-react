import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum", author: "ZF", id: 1 },
    {
      title: "Start the party here",
      body: "lorem ipsum",
      author: "John",
      id: 2,
    },
    {
      title: "Here are some of my favourite foods",
      body: "lorem ipsum",
      author: "ZF",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Use effect applied");
    console.log({ name });
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;

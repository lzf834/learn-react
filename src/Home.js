import { useState } from "react";
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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;

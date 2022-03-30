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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "ZF")}
        title="ZF's Blogs"
      />
    </div>
  );
};

export default Home;

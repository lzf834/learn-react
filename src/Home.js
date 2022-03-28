import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum", author: "me1", id: 1 },
    {
      title: "Start the party here",
      body: "lorem ipsum",
      author: "me2",
      id: 2,
    },
    {
      title: "Here are some of my favourite foods",
      body: "lorem ipsum",
      author: "me3",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;

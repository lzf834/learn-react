import { useState } from "react";

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
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

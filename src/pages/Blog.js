import React from "react";
import "../styles/Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "Organic Gardening Blog",
      author: "Joe Gardener",
      date: "November 18, 2024",
      desc: "The Agrivana Blog, Podcast & Videos all in one spot",
      url: "https://joegardener.com/blog/"
    },
    {
      id: 2,
      title: "Top 10 Plants for Beginners",
      author: "Nursery Live",
      date: "November 15, 2024",
      desc:
        "Starting your gardening journey? Here are the easiest plants to grow.",
      url: "https://nurserylive.com/blogs/top-10-plants/top-10-easy-plants-to-grow-for-beginners",
    },
    {
      id: 3,
      title: "Seasonal Gardening Guide",
      author: "Real Simple",
      date: "November 10, 2024",
      desc: "Discover the best plants to grow during different seasons in your region.",
      url: "https://www.realsimple.com/home-organizing/gardening/outdoor/month-by-month-vegetable-gardening-guide",
    },
  ];

  return (
    <section className="section">
      <h2 className="heading">Gardening Blog</h2>
      <div className="blogContainer">
        {blogPosts.map((post) => (
          <div key={post.id} className="blogCard">
            <h3 className="title">{post.title}</h3>
            <p className="meta">
              By {post.author} | {post.date}
            </p>
            <p className="desc">{post.desc}</p>
            <button
              className="button"
              onClick={() => window.open(post.url, "_blank", "noopener,noreferrer")}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

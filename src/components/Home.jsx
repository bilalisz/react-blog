import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data.slice(0, 10));
        setPosts(res.data.slice(0, 10));
      })
      .catch((err) => console.log(err));
  }, [setPosts]);

  return (
    <div>
      <h4 className="center">
        This is <strong className="red-text">Home</strong> Component
      </h4>
      {posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

import axios from "axios";
import React from "react";

const Post = (props) => {
  const [post, setPost] = React.useState([]);
  let id = props.match.params.post_id;

  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
    })
      .then((res) => {
        if (res.data) {
          setPost(res.data);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="row">
      <div className="col s4"></div>
      <div className="col s4">
        <div
          style={{
            border: "1px red solid",
            padding: "0px 10px",
            margin: "10px",
          }}
        >
          <div className=" red white-text">
            <h6 className="center-align" style={{ padding: "10px" }}>
              {post.title}
            </h6>
          </div>
          <div>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
      <div className="col s4"></div>
    </div>
  );
};

export default Post;

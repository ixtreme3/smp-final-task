import React from "react";

const BlogPost = ({ image, text, children }) => (
    <div className="blog-post">
        <img src={image} alt="Blog post image" className="post-image" />
        <div className="blog-post-text">
            <h2>{text.heading}</h2>
            <p>{text.content}</p>
            {children}
        </div>
    </div>
);

export default BlogPost;
import React from "react";

const BlogComment = ({ image }) => (
    <div className="blog-comment">
        <img src={image} alt="Commenter avatar" className="comment-image"/>
        <input type="text" placeholder="Leave a comment..." />
    </div>
);

export default BlogComment;
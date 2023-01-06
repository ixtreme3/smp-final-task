import React, { useEffect, useState } from 'react';
import Header from "./Header";
import BlogPost from "./BlogPost";
import BlogComment from "./BlogComment";
import './styles.css';


function App() {
    const [image, setImage] = useState(null);
    const [blogContent, setBlogContent] = useState([{heading: "", content: ""}]);

    const fetchImage = async () => {
        const res = await fetch("https://fakeface.rest/face/view");
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
    };

    function makeBlogContent(result) {
        let arr = result.split("."); // массив из 15 предложений
        setBlogContent([
            {heading: arr[0], content: arr.slice(0, 5).join(". ")},
            {heading: arr[5], content: arr.slice(5, 10).join(". ")},
            {heading: arr[10], content: arr.slice(10, 15).join(". ")},
        ])
        console.log(blogContent)
    }

    const fetchBlogContent = async () => {
        fetch("https://fish-text.ru/get?number=15")
            .then(response => response.json())
            .then(result => makeBlogContent(result.text))
    };

    useEffect(() => {
        fetchImage();
        fetchBlogContent();
    }, []);

  return (
      <div className="blog">
          <Header image={image} />
          <button className="add-content-button" onClick={fetchBlogContent}>Сгенерировать посты</button>
          <div className="blog-body">
              {
                  blogContent.map((elem) =>
                      <BlogPost text={elem} image={image} >
                          <BlogComment image={image} />
                      </BlogPost>
                  )
              }
          </div>
      </div>
  );
}

export default App;

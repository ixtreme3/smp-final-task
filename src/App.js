import React, { useEffect, useState } from 'react';
import Header from "./Header";
import BlogPost from "./BlogPost";
import BlogComment from "./BlogComment";
import './styles.css';


function App() {
    const [image, setImage] = useState(null);
    const [blogContent, setBlogContent] = useState(null);

    const fetchImage = async () => {
        const res = await fetch("https://fakeface.rest/face/view");
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
    };

    const fetchBlogContent = async () => {
        fetch("https://fish-text.ru/get?number=5")
            .then(response => response.json())
            .then(result => {setBlogContent(result)
                console.log(result.text.split(". "))})
    };

    useEffect(() => {
        fetchImage();
        fetchBlogContent();
    }, []);

  return (
      <div className="blog">
          <Header image={image} />
          <button className="add-content-button"></button>
          <div className="blog-body">
              <BlogPost image={image}>
                  <BlogComment image={image} />
              </BlogPost>
              <BlogPost image={image}>
                  <BlogComment image={image} />
              </BlogPost>
              <BlogPost image={image}>
                  <BlogComment image={image} />
              </BlogPost>
          </div>
      </div>
  );
}

export default App;

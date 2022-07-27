import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTem] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((respons) => respons.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <Search searchText={(text) => setTem(text)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No images found!
          </h1>
        )}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-2 xs:m-2">
            {images.map((image) => (
              <Card key={image.id} image={image} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

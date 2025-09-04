import { useEffect, useState } from "react";

function App() {
  let data = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    " https://ralfvanveen.com/wp-content/uploads/2021/06/CSS-_-Begrippenlijst.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s",
  ];
  const [imageSliderIndex, setImageSliderIndex] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      loadNextImage();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [imageSliderIndex]);
  const loadPreviousImage: any = () => {
    if (imageSliderIndex === 0) {
      setImageSliderIndex(data.length - 1);
    } else {
      setImageSliderIndex(imageSliderIndex - 1);
    }
  };
  const loadNextImage: any = () => {
    if (imageSliderIndex === data.length - 1) setImageSliderIndex(0);
    else setImageSliderIndex(imageSliderIndex + 1);
  };
  return (
    <div className="flex justify-center p-5">
      <button className="p-5" onClick={loadPreviousImage}>
        Previous
      </button>
      <img
        src={data[imageSliderIndex]}
        className="w-[10rem] h-[10rem] object-contain"
      ></img>
      ;
      <button className="p-5" onClick={loadNextImage}>
        Next
      </button>
    </div>
  );
}

export default App;

// object-contain
//This means that the content (e.g., an image) will be scaled down to fit
//entirely within its container while maintaining its aspect ratio.
// If the aspect ratio of the content does not perfectly match the aspect
//ratio of the container,there may be empty space (letterboxing or pillarboxing) around the content.

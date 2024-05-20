 'use client'
import { Carousel } from "@material-tailwind/react";
 
const ImageCarousel=()=>{
  return (
    <Carousel
       autoplay={true}
       autoplayDelay={2000}
       loop={true}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/Slides=picture 1.png"
        alt="image 1"
        className="h-full w-full object-cover max-h-96 object-contain"
      />
      <img
         src="/Slides=picture 2.png"
        alt="image 2"
        className="h-full w-full object-cover max-h-96 object-contain"
      />
      <img
         src="/Slides=picture 3.png"
        alt="image 3"
        className="h-full w-full object-cover max-h-96 object-contain"
      />

<img
         src="/Slides=picture 4.png"
        alt="image 3"
        className="h-full w-full object-cover max-h-96 object-contain"
      />
    </Carousel>
  );
}

export default ImageCarousel
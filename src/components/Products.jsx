import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Import CSS bawaan keen-slider
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductsData = [
  {
    id: 1,
    title: "Jelly Mangga",
    description: "Segarnya jelly mangga yang manis dan lezat.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi79mKwEdTo8Rzwj6PiubbqAmN0GVSFKchJg&s",
  },
  {
    id: 2,
    title: "Jelly Stroberi",
    description: "Sensasi stroberi yang asam manis dalam minuman jelly.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKbb2_nxTfEgfGYNBGNG1kF5mxs3-XcVIqg&s",
  },
  {
    id: 3,
    title: "Jelly Anggur",
    description: "Kesegaran anggur yang menyegarkan dalam setiap tegukan.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoEo_hvbn-zrx1rWRHM0812gGIl-2IQZ0vA&s",
  },
  {
    id: 4,
    title: "Jelly Melon",
    description: "Jelly melon dengan rasa segar dan aroma khas yang menggoda.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXmpCkHuzFq5jbiVb1sN-1gYIgKBpcKhOsA&s",
  },
  {
    id: 5,
    title: "Jelly Leci",
    description: "Manisnya jelly leci yang lembut di lidah.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7W-5iVr9Cd7p8mwY5eCDPd-sLAv9_1ax2bg&s",
  },
  {
    id: 6,
    title: "Jelly Nanas",
    description: "Jelly nanas dengan sensasi segar yang menggugah selera.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS635pYCk72ihohmrh2p5yhCveg9fwNmyadg&s",
  },
];

const Products = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 10 } },
      "(min-width: 768px)": { slides: { perView: 3, spacing: 10 } },
      "(min-width: 1024px)": { slides: { perView: 5, spacing: 10 } },
    },
  });

  const [sliderInstance, setSliderInstance] = useState(null);

  useEffect(() => {
    if (instanceRef.current) {
      setSliderInstance(instanceRef.current);
    }
  }, [instanceRef]);

  return (
    <div className="py-20 ">
      <h1 className=" text-4xl md:text-6xl font-bold leading-tight text-white text-center">
        Menu
      </h1>
      <div className="relative  w-full">
        {/* Tombol Navigasi Kiri */}
        <button
          onClick={() => sliderInstance?.prev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-amber-300 p-3 rounded-full shadow-md z-10"
        >
          ◀
        </button>

        {/* Slider Container */}
        <div ref={sliderRef} className="keen-slider">
          {ProductsData.map((item) => (
            <div key={item.id} className="keen-slider__slide">
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {/* Tombol Navigasi Kanan */}
        <button
          onClick={() => sliderInstance?.next()}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-300 p-3 rounded-full shadow-md z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Products;

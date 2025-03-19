import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=56f82d659ce1b62802d827aaea365b3c&language=en-US`
        );
        setBanner(res.data.results);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBanner();
  }, []); // Runs only once when component mounts

  return (
    <div className="w-full bg-black flex justify-center items-center relative">
      <Carousel
        data-bs-theme="dark"
        indicators={false} // Hides bottom dots (indicators)
        nextIcon={
          <span className="carousel-control-next-icon custom-arrow"></span>
        }
        prevIcon={
          <span className="carousel-control-prev-icon custom-arrow"></span>
        }
      >
        {banner.map((popular) => (
          <Carousel.Item key={popular.id}>
            <img
              className="w-full min-h-[400px] md:h-[500px] lg:h-[600px] object-contain"
              src={`https://image.tmdb.org/t/p/original${
                popular.backdrop_path || popular.poster_path
              }`}
              alt={popular.title}
            />
            <Carousel.Caption className="bg-black/50 p-2 rounded">
              <h5 className="text-white text-lg font-semibold">
                {popular.title}
              </h5>
              <p className="text-gray-200 text-sm md:text-base">
                {popular.overview.length > 150
                  ? `${popular.overview.substring(0, 150)}...`
                  : popular.overview}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;

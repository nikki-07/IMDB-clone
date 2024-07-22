import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import CarouselItem from "react-bootstrap/esm/CarouselItem";
function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    if (!banner.length) {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=56f82d659ce1b62802d827aaea365b3c&language=en-US`
        )
        .then((res) => {
          setBanner(res.data.results);
        }, []);
    }
  });
  return (
    <div>
      <Carousel data-bs-theme="dark">
        {banner.map((popular) => {
          return (
            <Carousel.Item key={popular.id}>
              <img
                className="object-contain w-full h-[600px] "
                src={`https://image.tmdb.org/t/p/original${popular.poster_path}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>{popular.title}</h5>
                <p>{popular.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default Banner;

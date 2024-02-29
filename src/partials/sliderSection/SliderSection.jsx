import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import slider_1 from "/images/slider_1.jpg";
import slider_2 from "/images/slider_2.jpg";
import slider_3 from "/images/slider_3.jpg";
import styles from "./SliderSection.module.css";
const {
  slider_logo,
  slider_layer,
  slider_image,
  slider_title,
  slider_text,
  slider_button,
} = styles;
function SliderSection() {
  return (
    <Swiper
      className={[slider_logo].join(" ")}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide style={{ position: "relative", isolation: "isolate" }}>
        <img
          className={[slider_image].join(" ")}
          src={slider_1}
          alt="First Slide"
        />
        <div className={[slider_layer].join(" ")}>
          <h3 className={[slider_title].join(" ")}>Organic Food</h3>
          <p className={[slider_text].join(" ")}>
            Herber provides local citizens and guests of our town with quality
            organic fruits, vegetables, and other products.
          </p>
          <button className={[slider_button].join(" ")}>READ MORE</button>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ position: "relative", isolation: "isolate" }}>
        <img
          className={[slider_image].join(" ")}
          src={slider_2}
          alt="Second Slide"
        />
        <div className={[slider_layer].join(" ")}>
          <h3 className={[slider_title].join(" ")}>Quality Control</h3>
          <p className={[slider_text].join(" ")}>
            We control the process of farming at Herber to deliver the best
            organic products to our customers throughout the state.
          </p>
          <button className={[slider_button].join(" ")}>READ MORE</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={[slider_image].join(" ")}
          src={slider_3}
          alt="Third Slide"
        />
        <div className={[slider_layer].join(" ")}>
          <h3 className={[slider_title].join(" ")}>Eco-Friendly</h3>
          <p className={[slider_text].join(" ")}>
            As the leading organic farm, we maintain an eco-friendly policy of
            growing and selling healthy food without any additives.
          </p>
          <button className={[slider_button].join(" ")}>READ MORE</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
export default SliderSection;

// import { SwiperClass } from "swiper/react";
import "./SwiperDot.css";
// import { forwardRef } from "react";
import { useSwiper } from "swiper/react";
export default function SwiperDot({ setSelectedPhoto, index }: { setSelectedPhoto: React.Dispatch<React.SetStateAction<number>>, index: number }) {
  const swiper = useSwiper();
  // console.log(ref);
  return (
    <button className={swiper.realIndex === index ? "button-dot_active button-dot" : "button-dot"} onClick={() => {
      swiper.slideTo(index);
      setSelectedPhoto(index);
    }}>
      
    </button>
  )
}
import "./PromoSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { welcomeSlides } from "./utils";
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import LinkCompAction from "./LinkCompAction";
import SliderButton from "./SliderButton";

export default function PromoSection() {
  //state
  const [slide, setSlide] = useState<number>(0);

  return (
    <section className="promo">
      <div className="promo__wrapper">
        <Swiper autoplay={{delay: 3000}} modules={[Autoplay]} loop={true} slidesPerView={1} onSlideChange={(swiper) => {
          setSlide(swiper.realIndex);
        }}>
          {welcomeSlides.map((slide) => {
            return <SwiperSlide key={slide.text}>
              <div className="promo__wrapper-slide">
                <img style={{width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: 9}} src={slide.cover}></img>
                <span>{slide.text}</span>
              </div>
            </SwiperSlide>
          })}
          <div className="promo__wrapper-buttons">
            <SliderButton handleSlideChange={setSlide} slideslength={welcomeSlides.length} left={true} icon={faChevronLeft}></SliderButton>
            <span>{slide + 1}/{welcomeSlides.length}</span>
            <SliderButton handleSlideChange={setSlide} slideslength={welcomeSlides.length} icon={faChevronRight}></SliderButton>
        </div>
        </Swiper>
      </div>
      <div className="promo__wrapper-homestage">
        <h3>Что делать с предметами декора?</h3>
        <p>Мы предлагаем превратить ваше пространство в шедевр с помощью профессионального декорирования! Наши декораторы подберут декор для Вас, помогут составить дизайн проект, а также подскажут, что с чем лучше сочетать</p>
        <LinkCompAction text="Декор на заказ" icon={faArrowRight} to="/homestaging"/>
      </div>
    </section>
  )
}
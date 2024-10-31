// import Goods from "./Goods";
// // import { promoGoods } from "./utils";
// import { useGetGoodsQuery } from "./features/apiSlice";
// import { GoodInterface } from "./interfaces";

import "./PromoSection.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { welcomeSlides } from "./utils";
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import LinkCompAction from "./LinkCompAction";
import SliderButton from "./SliderButton";

export default function PromoSection() {
  // const {
  //   data: goods = [] as GoodInterface[],
  // } = useGetGoodsQuery();

  //state
  const [slide, setSlide] = useState<number>(0);

  //swiper
  // const swiper = useSwiper();

  // useEffect(() => {
  //   if(scrollContainer.current) {
  //     scrollContainer.current.scroll({
  //       top: 0,
  //       left: scrollContainer.current.clientWidth * slide,
  //       behavior: "smooth",
  //     })
  //   }
  //   // scrollContainer.current && scrollContainer.current.scrollLeft = scrollContainer.current && scrollContainer.current.clientWidth * slide;
  //   // scrollContainer.current && scrollContainer.current.scrollLeft
  // }, [slide]);

  return (
    <section className="promo">
      {/* <h3>Интересное</h3> */}
      {/* <div className="promo__wrapper">
        <ul ref={scrollContainer} className="promo__ul">
          {welcomeSlides.map((slide) => {
            return <li className="promo__ul-li" key={slide.cover}>
              <img src={slide.cover} alt="" />
              <div className="promo__ul-li-wrapper">
                <span>{slide.text}</span>
                <a href="http://google.com" target="_blank">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>

            </li>
          })}

        </ul>
        <div className="promo__wrapper-buttons">
            <button onClick={() => {
              setSlide((prevValue) => {
                return prevValue === 0 ? welcomeSlides.length -1 : prevValue - 1;
              })
            }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span>{slide + 1}/{welcomeSlides.length}</span>
            <button onClick={() => {
              setSlide((prevValue) => {
                return prevValue === welcomeSlides.length - 1 ? 0 : prevValue + 1;
              })
            }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
      </div> */}
      <div className="promo__wrapper">
        <Swiper loop={true} slidesPerView={1}>
          {welcomeSlides.map((slide) => {
            return <SwiperSlide  key={slide.text} style={{width: "100%"}}>
              <div className="promo__wrapper-slide">
                <img style={{width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: 9}} src={slide.cover}></img>
                <span>{slide.text}</span>
              </div>
            </SwiperSlide>
          })}
          {/* <SliderButton icon></SliderButton> */}
          <div className="promo__wrapper-buttons">
            <SliderButton handleSlideChange={setSlide} slideslength={welcomeSlides.length} left={true} icon={faChevronLeft}></SliderButton>
            <span>{slide + 1}/{welcomeSlides.length}</span>
            <SliderButton handleSlideChange={setSlide} slideslength={welcomeSlides.length} icon={faChevronRight}></SliderButton>
            {/* <button onClick={() => {
              
            }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span>{slide + 1}/{welcomeSlides.length}</span>
            <button onClick={() => {
              
            }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button> */}
        </div>
        </Swiper>
      </div>

      <div className="promo__wrapper-homestage">
        <h3>Что делать с предметами декора?</h3>
        <p>Мы предлагаем превратить ваше пространство в шедевр с помощью профессионального декорирования! Наши декораторы подберут декор для Вас, помогут составить дизайн проект, а также подскажут, что с чем лучше сочетать</p>
        {/* <p></p> */}
        <LinkCompAction text="Декор на заказ" icon={faArrowRight} to="/homestaging"/>
      </div>
      
      {/* {goods && <Goods goods={goods}></Goods>} */}
    </section>
  )
}
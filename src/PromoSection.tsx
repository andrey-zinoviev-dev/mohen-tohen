// import Goods from "./Goods";
// // import { promoGoods } from "./utils";
// import { useGetGoodsQuery } from "./features/apiSlice";
// import { GoodInterface } from "./interfaces";

import "./PromoSection.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { welcomeSlides } from "./utils";
import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import LinkCompAction from "./LinkCompAction";

export default function PromoSection() {
  // const {
  //   data: goods = [] as GoodInterface[],
  // } = useGetGoodsQuery();

  //refs
  const scrollContainer = useRef<HTMLUListElement | null>(null);

  //state
  const [slide, setSlide] = useState<number>(0);

  // useEffect(() => {
  //   const number = scrollContainer && scrollContainer.current && scrollContainer.current.clientWidth * slide;
  //   // scrollContainer.current && scrollContainer.current.scrollLeft
  //   console.log(scrollContainer.current?.scrollLeft = 150);
  // }, [slide]);

  return (
    <section className="promo">
      {/* <h3>Интересное</h3> */}
      <div className="promo__wrapper">
        <ul ref={scrollContainer} className="promo__ul">
          {welcomeSlides.map((slide) => {
            return <li className="promo__ul-li" key={slide.cover}>
              <img src={slide.cover} alt="" />
              <div className="promo__ul-li-wrapper">
                <span>{slide.text}</span>
                <a href="http://google.com" target="_blank">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
                {/* <LinkCompAction text="Подробнее" to="" icon={faArrowRight} /> */}
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
      </div>
      <div className="promo__wrapper-homestage">
        <h3>Текст про хоумстейдж</h3>
        <p>Тут вот большой текст</p>
        <LinkCompAction text="Декор на заказ" icon={faArrowRight} to="/homestaging"/>
      </div>
      
      {/* {goods && <Goods goods={goods}></Goods>} */}
    </section>
  )
}
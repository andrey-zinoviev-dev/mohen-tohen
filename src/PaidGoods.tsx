import { GoodInterface } from "./interfaces";
import { useGetGoodsQuery } from "./features/apiSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import SliderButton from "./SliderButton";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import "./PaidGoods.css";
import { useNavigate } from "react-router-dom";
import Headline from "./Headline";

export default function PaidGoods() {
    const {
        data: goods = [] as GoodInterface[],
    } = useGetGoodsQuery();

    //navigate
    const navigate = useNavigate();

    //variables
    const slidesPerView:number = 4;

    //state
    // const [slide, setSlide] = useState<number>(0);

    return (
        <section className="paid-goods">
            {/* <h3>Горячие предложения</h3> */}
            <Headline text="Горячие предложения"></Headline>
            <Swiper slidesPerView={slidesPerView} breakpoints={{
                1279: {
                    slidesPerView: 4
                    // width: 1279,

                },
                767: {
                    // width: 767,
                    slidesPerView: 3
                },
                425: {
                    slidesPerView: 2,
                },
                375: {
                    slidesPerView: 2,
                },
                300: {
                    slidesPerView: 2
                }
            }} loop={Math.ceil(goods.length / slidesPerView) > 1 ? true : false} spaceBetween={15}>
                {goods.map((good) => {
                    return <SwiperSlide key={good._id} onClick={() => {
                        navigate(`/goods/${good._id}`, {
                            state: good,
                            preventScrollReset: false,
                        })
                    }}>
                        {/* <Good good={good} /> */}
                        <img className="paid-goods__img" src={good.photos[0].url}></img>
                        <span>{good.title}</span>
                    </SwiperSlide>
                })}
                <div className="paid-goods__buttons">
                    <SliderButton left={true} handleSlideChange={() => {}} slideslength={Math.ceil(goods.length / slidesPerView)} icon={faChevronLeft}></SliderButton>
                    <SliderButton handleSlideChange={() => {}} slideslength={Math.ceil(goods.length / slidesPerView)} icon={faChevronRight}></SliderButton>
                    {/* {slide !== 0 && <SliderButton left={true} handleSlideChange={setSlide} slideslength={Math.ceil(goods.length / 5)} icon={faChevronLeft}></SliderButton>}
                    {slide !== Math.ceil(goods.length / 5) - 1 && <SliderButton handleSlideChange={setSlide} slideslength={Math.ceil(goods.length / slidesPerView)} icon={faChevronRight}></SliderButton>}   */}
                </div>
            </Swiper>
            {/* <ListOverflow listItems={goods}>

            </ListOverflow> */}
        </section>
    )
}
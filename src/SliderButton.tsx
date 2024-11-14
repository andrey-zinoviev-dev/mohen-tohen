import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSwiper } from "swiper/react"
export default function SliderButton({icon, left, slideslength, handleSlideChange}: {icon: IconProp, left?: boolean, slideslength: number, handleSlideChange: React.Dispatch<React.SetStateAction<number>>}) {
    const swiper = useSwiper();
    return (
        <button onClick={() => {
            handleSlideChange((prevValue) => {
                return left ? prevValue === 0 ? prevValue = slideslength - 1 : prevValue - 1  : prevValue === slideslength -1 ? 0 : prevValue + 1;
            })
            left ? swiper.slidePrev() : swiper.slideNext();
        }}>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}
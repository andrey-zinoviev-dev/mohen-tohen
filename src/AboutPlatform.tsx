// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import LinkCompAction from "./LinkCompAction";
import "./AboutPlatform.css"

export default function AboutPlatform() {
    return (
        <section className="about">
            <span className="about__span">Кто мы и что мы предлагаем</span>
            <div className="about__wrapper">
                {/* <h2>
                    MOHEN I TOHEN — это пространство для роста, где культура, искусство и дизайн создают атмосферу уюта и вдохновляют на перемены. Мы верим в честный дизайн, созданный с заботой, который улучшает качество жизни, подчеркивает уникальность каждого дома и остаётся доступным для всех. Наш путь — обновление через культурный код, красоту и искусство, начало которого — в твоем доме.
                </h2> */}
                <h2>
                    Mohen Tohen - маркетплейс предлагающий изделия ручной работы, которые помогут создать стильный и красивый интерьер.                
                </h2>
                {/* <LinkCompAction icon={faArrowRight} to="" text="Узнать подробнее" /> */}
                {/* <button>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Узнать больше
                </button> */}
            </div>
        </section>
    )
}
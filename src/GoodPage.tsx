import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./GoodPage.css"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
export default function GoodPage() {
    return (
        <section className="good">
            <img className="img" src="https://la-kartina.ru/upload/iblock/342/o2vzh4mi2uat3n1otxd3gcq2mi2tkrdp/texture-banner.jpg"></img>
            <div className="good__text">
                <div className="line1"> 
                    <h3>Картина "Угольный каньон"</h3>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <span>Алексей Солдатов</span>
                <p>Будучи художником, Алексей с рождения видел особенности сочетания света, тени и цветов, что позволило ему писать выразительные картины почти в монохроме</p>
                <h5>Цвет-<span className="cvet">угольный</span></h5>
                <button className="butt">
                    <span>Добавить в корзину</span>
                </button>
            </div>
        </section>
    )
}
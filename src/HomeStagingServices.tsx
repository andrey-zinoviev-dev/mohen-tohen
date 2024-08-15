import { homestagingServices } from "./utils"
import "./HomeStagingServices.css"
export default function HomeStagingServices() {
    return (
        <section className="homestaging-services">
            <h2>Какие <span>услуги</span> мы предоставляем</h2>
            <ul className="homestaging-services__ul">
                {homestagingServices.map((service) => {
                    return <li className="homestaging-services__ul-li" key={service.title}>
                        <span>{service.title}</span>
                        <img src={service.cover}></img>
                        <p>{service.descirption}</p>
                    </li>
                })}
            </ul>
        </section>
    )
}
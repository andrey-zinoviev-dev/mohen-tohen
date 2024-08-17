import HomeStagingAction from "./HomeStagingAction";
import HomeStagingFAQ from "./HomeStagingFAQ";
import HomeStagingProcess from "./HomeStagingProcess";
import HomeStagingServices from "./HomeStagingServices";

export default function HomeStaging() {
    return (
        <>
            <HomeStagingAction></HomeStagingAction>
            <HomeStagingServices></HomeStagingServices>
            <HomeStagingProcess></HomeStagingProcess>
            <HomeStagingFAQ></HomeStagingFAQ>
        </>
        // <section className="homestaging">
        //     <div className="homestaging__action">
        //         <div className="homestaging__action-text">
        //             <img className="homestaging__logo" src={logo}></img>
        //             <div className="homestaging__action-text-wrapper">
        //                 <h2>Превратите ваше жильё в объект <span className="homestaging__action-text-span">мечты</span> с нашим хоумстэйджингом!</h2>
        //                 <p>Вам не нужно волноваться о деталях — мы сделаем всё за вас, чтобы ваш дом выглядел безупречно.</p>
        //                 <button>
        //                     <span>Превратить ваше пространство в шедевр</span>
        //                     <FontAwesomeIcon icon={faArrowRight} />
        //                 </button>
        //             </div>
        //             <ul className="homestaging__action-links">
        //                 {links.map((link) => {
        //                     return <li className="homestaging__action-links-link" key={link.name}>
        //                         <a href={link.href}>
        //                             <span>{link.name}</span>
        //                             <FontAwesomeIcon icon={faArrowRight} />
        //                         </a>
        //                     </li>
        //                 })}
        //             </ul>
        //         </div>
        //         <img className="homestaging__action-img" src={pic}></img>
        //     </div>
        //     <div>
        //         <p>Какие услуги мы предоставляем</p>
        //         <ul>
        //             {homestagingServices.map((service) => {
        //                 return <li key={service}>
        //                     <span>{service}</span>
        //                 </li>
        //             })}
        //         </ul>
        //     </div>
        //     <div>
        //         <p>Вот тут часто задаваемые вопросы и ответы на них</p>
        //     </div> 
        //     <div>
        //         <p>Вот тут миссия и видение услуг</p>
        //     </div>

        //     <div>
        //         <p>Вот тут кейсы</p>
        //     </div>
           
        // </section>
    )
}
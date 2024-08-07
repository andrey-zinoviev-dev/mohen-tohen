import { ReactElement } from "react";
import "./ApplicationDataWrapper.css";

export default function ApplicationDataWrapper({ children }:{children: ReactElement[]}){
    // console.log(Array.isArray(data), label);
    return (
        <div className="application__data-wrapper">
            {children}
            {/* <label>{label}</label>
            {typeof data === "string" && textarea ? <p>{data && data.length > 0 ? data : "Не заполнено"}</p> : <span>{data && data.length > 0 ? data : "Не заполнено"}</span>} */}
        </div>
    )
}
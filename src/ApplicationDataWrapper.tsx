import "./ApplicationDataWrapper.css";

export default function ApplicationDataWrapper({label, data, textarea}:{label: string | undefined, data: string | undefined, textarea:boolean | undefined}){
    // console.log(Array.isArray(data), label);
    return (
        <div className="application__data-wrapper">
            <label>{label}</label>
            {typeof data === "string" && textarea ? <p>{data && data.length > 0 ? data : "Не заполнено"}</p> : <span>{data && data.length > 0 ? data : "Не заполнено"}</span>}
        </div>
    )
}
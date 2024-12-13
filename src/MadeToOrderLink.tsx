import { Link } from "react-router-dom"
import "./MadeToOrderLink.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faEye } from "@fortawesome/free-solid-svg-icons"
export default function MadeToOrderLink({id, price}: {id: string, price: number}) {
    return (
        <Link className="order-link" to={`./goods/${id}`}>
            от {price}&#8381;
            {/* <FontAwesomeIcon icon={faEye} /> */}
        </Link>
    )
}
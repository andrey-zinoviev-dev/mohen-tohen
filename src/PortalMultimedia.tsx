// import { ReactNode } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PortalComp.css";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PortalMultimedia({children}: {children: React.ReactNode | React.ReactNode[]}) {
    return (
        <section className="portal protal_files">
            <div className="portal__content portal__content_files">
                {children}
            </div>
        </section>
    )
}
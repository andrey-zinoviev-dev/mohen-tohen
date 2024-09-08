import "./PortalContainer.css";
export default function PortalContainer({children}: {children: React.ReactNode | React.ReactNode[]}) {
    return (
        <div className="portal__container">
            {children}
        </div>
    )
}
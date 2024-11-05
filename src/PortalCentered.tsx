import "./PortalCentered.css"
export default function PortalCentered({children, top}: {children: React.ReactNode | React.ReactNode[], top?:boolean}) {
  return (
    <div className={top ? "portal-centered portal-centered_top" : "portal-centered"}>
      {children}
    </div>
  )
}
import "./PortalCentered.css"
export default function PortalCentered({children}: {children: React.ReactNode | React.ReactNode[]}) {
  return (
    <div className="portal-centered">
      {children}
    </div>
  )
}
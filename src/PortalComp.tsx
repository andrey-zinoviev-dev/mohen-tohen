import "./PortalComp.css";
export default function PortalComp({children, left}: {children: React.ReactNode | React.ReactNode[], left?: boolean}) {
  return (
    <section className={left ? "portal portal_left" : "portal"}>
      <div className="portal__content">
        {children}
      </div>
    </section>
  )
}
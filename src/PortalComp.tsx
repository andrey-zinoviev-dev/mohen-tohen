import "./PortalComp.css";
export default function PortalComp({children}: {children: React.ReactNode | React.ReactNode[]}) {
  return (
    <section className="portal">
      <div className="portal__content">
        {children}
      </div>
    </section>
  )
}
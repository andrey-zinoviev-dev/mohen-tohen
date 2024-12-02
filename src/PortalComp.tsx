import "./PortalComp.css";
export default function PortalComp({children, left, fitContent}: {children: React.ReactNode | React.ReactNode[], left?: boolean, fitContent?: boolean}) {
  return (
    <section className={left ? "portal portal_left" : "portal"}>
      <div className={fitContent ? "portal__content_fit-content portal__content" : "portal__content"}>
        {children}
      </div>
    </section>
  )
}
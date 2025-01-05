import { Link } from "react-router-dom";

interface LinkInterface {
  href: string,
  children: React.ReactNode,
  className: string,
}
export default function LinkComp({href, children, className}: LinkInterface) {
    return (
      <Link className={`link-comp ${className}`} to={href}>
        {children}
      </Link>
    )
}
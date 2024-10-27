import "./Progress.css"
export default function Progress({children}: {children: React.ReactNode[]}) {
    return (
        <ul className="progress">
            {children}
        </ul>
    )
}
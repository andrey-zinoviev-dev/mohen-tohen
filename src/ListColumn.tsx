import "./ListColumn.css"
export default function ListColumn({children}: {children: React.ReactNode[]}) {
    return (
        <ul className="list-column">
            {children}
            {/* {elements.map((element) => {
                return <li>
                    <img src={element.c}></img>
                </li>
            })} */}
        </ul>
    )
}
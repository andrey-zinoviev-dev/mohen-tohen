import AddButton from "./AddButton";
import "./ListGrid.css";
import ListGridPhoto from "./ListGridPhoto";
export default function ListGrid({ gridElements, openInput }: { gridElements: {title: string, file: File}[], openInput: () => void }) {
  return (
    <ul className="ulgrid">
      {gridElements.map((gridElement) => {
        return <li key={gridElement.title}>
          <ListGridPhoto file={gridElement.file}></ListGridPhoto>
        </li>
      })}
      <AddButton openInput={openInput}></AddButton>
      {/* {children} */}
    </ul>
  )
}
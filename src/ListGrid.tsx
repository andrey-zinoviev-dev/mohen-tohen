import React from "react";
import AddButton from "./AddButton";
import "./ListGrid.css";
import ListGridPhoto from "./ListGridPhoto";
export default function ListGrid({ gridElements, openInput, removePhoto }: { gridElements: File[], openInput: () => void, removePhoto: (file: File) => void }) {
  
  return (
    <>
      <ul className="ulgrid">
        {gridElements.map((gridElement) => {
          return <li key={gridElement.name}>
            <ListGridPhoto file={gridElement} removePhoto={removePhoto}></ListGridPhoto>
          </li>
        })}
        <li key={"add-photo"}>
          <AddButton openInput={openInput}></AddButton>
        </li>
        {/* {children} */}
      </ul>

    </>

  )
}
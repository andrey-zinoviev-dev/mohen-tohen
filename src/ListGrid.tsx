// import React from "react";
import AddButton from "./AddButton";
import "./ListGrid.css";
import ListGridOldPhoto from "./ListGridOldPhoto";
import ListGridPhoto from "./ListGridPhoto";
export default function ListGrid({ oldPics, gridElements, openInput, removeOldPhoto, removePhoto }: { oldPics: string[], gridElements: File[], openInput: () => void, removeOldPhoto: (url: string) => void, removePhoto: (file: File) => void }) {
  
  return (
    <>
      <ul className="ulgrid">
        <li key={"add-photo"}>
          <AddButton openInput={openInput}></AddButton>
        </li>
        {oldPics.map((pic) => {
          return <li key={pic}>
            <ListGridOldPhoto removePhoto={removeOldPhoto} image={pic}></ListGridOldPhoto>
          </li>
        })}
        {gridElements.map((gridElement) => {
          return <li key={gridElement.name}>
            <ListGridPhoto file={gridElement} removePhoto={removePhoto}></ListGridPhoto>
          </li>
        })}

        {/* {children} */}
      </ul>
      {/* <input type="file" style={{display: "none"}}></input> */}
    </>

  )
}
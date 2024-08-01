import React from "react";
import ApplicationAddFile from "./ApplicationAddFile";
import ApplicationFile from "./ApplicationFile";

export default function ApplicationFiles() {
    //states
    const [addedFiles, setAddedFiles] = React.useState<File[]>([]);
    return (
        <>
            <h3>
                <span>03</span>Фото товара
            </h3>
            <ul className="application__form-div-photos">
                {addedFiles.length > 0 && addedFiles.map((file) => {
                    return <li className="application-file" key={file.name}>
                        <ApplicationFile file={file}></ApplicationFile>
                    </li>
                    // return <ApplicationFile file={file}></ApplicationFile>
                    // return <li className="application-file" key={file.file.name}>
                    //     <img src={file.path}></img>
                    // </li>
                })}
                {addedFiles.length < 6 && <ApplicationAddFile addPhoto={setAddedFiles}></ApplicationAddFile>}
                {/* <ApplicationFile></ApplicationFile> */}
                
                {/* <li>
                    <button>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                </li>
                <li>
                    <button>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                </li>
                <li>
                    <button>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                </li>
                <li>
                    <button id="add_photo">
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                </li> */}
            </ul>
        </>
    )
}
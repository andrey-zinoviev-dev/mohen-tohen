import { useRef } from "react";
import InputFileGeneric from "./InputFileGeneric";
import InputPlusButton from "./InputPlusButton";
import ListElementGeneric from "./ListElementGeneric";
import { FileUrlInterface } from "./interfaces";
import ListGridPhoto from "./ListGridPhoto";

interface ListFilesInterface {
    files: FileUrlInterface[],
    updateFiles: React.Dispatch<React.SetStateAction<FileUrlInterface[]>>
}

export default function ListFiles({ files, updateFiles }: ListFilesInterface) {
    //ref
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    //functions
    function openInput() {
        fileInputRef.current?.click();
    }

    return (
        <>
            <InputFileGeneric ref={fileInputRef} handleInputChange={(evt) => {
                const fileuploaded = evt.target.files && evt.target.files[0];
                const url = fileuploaded && window.URL.createObjectURL(fileuploaded);

                fileuploaded && url && updateFiles((prevValue) => {
                    return [...prevValue, { file: fileuploaded, url: url}]
                })
            }}></InputFileGeneric>
            <ListElementGeneric classUl="ulgrid" items={files} renderItems={(file) => {
                return <ListGridPhoto url={file.url} removePhoto={() => {
                    window.URL.revokeObjectURL(file.url);
                    updateFiles((prevValue) => {
                        return prevValue.filter((prevFile) => {
                            return prevFile.file.name !== file.file.name
                        })
                    })
                }}></ListGridPhoto>
            }}>
                <InputPlusButton openInput={openInput}></InputPlusButton>
            </ListElementGeneric>
        </>
    )
}
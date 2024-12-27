import { useRef } from "react";
// import InputFileButton from "./InputFileButton";
import InputFileGeneric from "./InputFileGeneric";
import { FileUrlInterface } from "./interfaces";
import InputTextButton from "./InputTextButton";

interface SingleFileInterface {
    text: string,
    file: FileUrlInterface | null,
    updateFile: React.Dispatch<React.SetStateAction<FileUrlInterface | null>>
}

export default function SingleFile({text, updateFile}: SingleFileInterface) {
    //ref
    const inputFileRef = useRef<HTMLInputElement | null>(null);

    //functions
    function openInput() {
        inputFileRef.current?.click();
    }

    function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const fileuploaded = evt.target.files && evt.target.files[0];
        const url = fileuploaded && window.URL.createObjectURL(fileuploaded);

        fileuploaded && url && updateFile({file: fileuploaded, url: url})
    }

    return (
        <>
            <InputFileGeneric handleInputChange={handleInputChange} ref={inputFileRef}></InputFileGeneric>
            <InputTextButton text={text} openInput={openInput}></InputTextButton>
        </>
    )
}
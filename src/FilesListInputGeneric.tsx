import { useRef } from "react";
import InputFileGeneric, { InputFileGenericInterface } from "./InputFileGeneric";

interface FilesListInputGenericInterface {

}

export default useRef<HTMLInputElement, FilesListInputGenericInterface>(function FilesListInputGeneric(props, ref) {
  return (
    <InputFileGeneric ref={} handleInputChange={() => {}}></InputFileGeneric>
  )
})
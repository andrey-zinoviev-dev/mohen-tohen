import { forwardRef } from "react";

interface InputFileGenericInterface {
    handleInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
} 

export default forwardRef<HTMLInputElement , InputFileGenericInterface>(function InputFileGeneric({ handleInputChange }, ref) {
    return (
        <input style={{ display: "none" }} onChange={handleInputChange} type="file" accept=".png, .jpg, .jpeg" ref={ref}></input>
    )
})
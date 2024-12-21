import { HTMLAttributes } from "react";

export interface InputFileButtonInterface extends HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode | React.ReactNode[],
    openInput: () => void,
}

export default function InputFileButton({ children, openInput } : InputFileButtonInterface) {
    return (
        <button onClick={openInput}>
            {children}
        </button>
    )
}
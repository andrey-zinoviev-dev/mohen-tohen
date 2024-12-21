import InputFileButton from "./InputFileButton";

type InputPlusButtonType = React.ComponentProps<typeof InputFileButton>

interface InputTextButton {
    text: string,
}

export default function InputTextButton({ openInput, text }: InputPlusButtonType & InputTextButton) {
    return (
        <InputFileButton openInput={openInput}>
            <span>{text}</span> 
        </InputFileButton>
    )
}
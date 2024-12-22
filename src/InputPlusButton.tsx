import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputFileButton from "./InputFileButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type InputPlusButtonType = React.ComponentProps<typeof InputFileButton>

export default function InputPlusButton({ openInput }: InputPlusButtonType) {
    return (
        <>
            <InputFileButton openInput={openInput}>
                <FontAwesomeIcon icon={faPlus} />
            </InputFileButton>
        </>

    )
}
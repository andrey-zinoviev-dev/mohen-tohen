import { useState, useRef } from "react";
// import FileGeneric from "./FileGeneric";
import InputFileButton from "./InputFileButton";
import InputTextButton from "./InputTextButton";
import InputFileGeneric from "./InputFileGeneric";
import SingleFile from "./SingleFile";
import { FileUrlInterface, urlConvertedInterface } from "./interfaces";
import UploadComp from "./UploadComp";
import { usePutAvatarEditMutation } from "./features/apiSlice";
import { useAppDispatch } from "./hooks";
import { updateUserCover } from "./features/userSlice";
import { changeMessage } from "./features/notificationSlice";

interface AccountAvatarEditInterface {
    profileCover: string | undefined,
    closeAvatarEdit: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function AccountAvatarEdit({ profileCover, closeAvatarEdit }: AccountAvatarEditInterface) {
    //state
    const [selectedAvatar, setSelectedAvatar] = useState<FileUrlInterface | null>(null);
    // const [userAvatar, setUserAvatar] = useState<string>(userState.cover ? userState.cover : "");
    // const [finishedAvatarChange, setFinishedAvatarChange] = useState<boolean>(false);
    const [coverUploadStarted, setCoverUploadStarted] = useState<boolean>(false);

    //RTK
    const [updateCover] = usePutAvatarEditMutation();

    //dispatch
    const dispatch = useAppDispatch()

    //refs
    // const avatarImgRef = useRef<HTMLImageElement | null>(null);
    // const fileInputRef = useRef<HTMLInputElement | null>(null);

    // function openInput() {
    //     fileInputRef.current?.click();
    // }

    // function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
    //     const file = evt.target.files && evt.target.files[0];
    //     const clientPath = file && window.URL.createObjectURL(file);

    //     if(avatarImgRef.current && clientPath) {
    //         avatarImgRef.current.src = clientPath;
    //         setSelectedAvatar(file);
    //     }   
    // }

    function cancelInputFile() {
        selectedAvatar && window.URL.revokeObjectURL(selectedAvatar?.url)
        setSelectedAvatar(null);
    }

    function initiateCoverUpload() {
        setCoverUploadStarted(true);
    }

    function submitData() {
        return updateCover(`https://cdn.mohen-tohen.ru/${selectedAvatar ? selectedAvatar.file.name : ''}`).unwrap()
        .then((data) => {
            dispatch(updateUserCover(data));
            dispatch(changeMessage({message: "Аватар успешно обновлен"}))
            selectedAvatar && window.URL.revokeObjectURL(selectedAvatar?.url)
            setSelectedAvatar(null);
            closeAvatarEdit(false);
        })
    }

    return (
        !coverUploadStarted ? <>
            <img src={selectedAvatar ? selectedAvatar.url : profileCover} id="account__wrapper-user-text-avatar"></img>
            {!selectedAvatar ? <>
                <SingleFile text="Выбрать изображение" file={selectedAvatar} updateFile={setSelectedAvatar}></SingleFile>
            </>
            :
            <>
                <button onClick={initiateCoverUpload}>Обновнить аватар</button>
                <button onClick={cancelInputFile}>Отменить</button>
            </>
            }

        </>
        :
        selectedAvatar && <UploadComp submitData={submitData} application={false} photos={[selectedAvatar?.file]}></UploadComp>
    )
}
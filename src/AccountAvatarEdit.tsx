import { useState, useRef } from "react";
// import FileGeneric from "./FileGeneric";
import InputFileButton from "./InputFileButton";
import InputTextButton from "./InputTextButton";
import InputFileGeneric from "./InputFileGeneric";

interface AccountAvatarEditInterface {
    profileCover: string | undefined,
}

export default function AccountAvatarEdit({ profileCover }: AccountAvatarEditInterface) {
    //state
    const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
    const [editAvatar, setEditAvatar] = useState<boolean>(false);
    // const [userAvatar, setUserAvatar] = useState<string>(userState.cover ? userState.cover : "");
    // const [finishedAvatarChange, setFinishedAvatarChange] = useState<boolean>(false);
    const [coverUploadStarted, setCoverUploadStarted] = useState<boolean>(false);

    //refs
    const avatarImgRef = useRef<HTMLImageElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    function openInput() {
        fileInputRef.current?.click();
    }

    function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const file = evt.target.files && evt.target.files[0];
        const clientPath = file && window.URL.createObjectURL(file);

        if(avatarImgRef.current && clientPath) {
            avatarImgRef.current.src = clientPath;
            setSelectedAvatar(file);
        }   
    }

    function cancelInputFile() {
        if(avatarImgRef.current) {
            avatarImgRef.current?.src && window.URL.revokeObjectURL(avatarImgRef.current?.src)
            if(profileCover) {
                avatarImgRef.current.src = profileCover
            }
        }
        setSelectedAvatar(null)
    }

    return (
        <>
            <img src={profileCover} id="account__wrapper-user-text-avatar" ref={avatarImgRef}></img>
            {!selectedAvatar ? <>
                <InputTextButton text="Выбрать изображение" openInput={openInput} />
                <InputFileGeneric ref={fileInputRef} handleInputChange={handleInputChange} />
            </>
            :
            <>
                <button onClick={cancelInputFile}>Отменить</button>
                <button>Обновнить аватар</button>
            </>
            }

        </>
    )
}
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";
// import Goods from "./Goods";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { accountLinks, accountSellerLinks } from "./utils";
import { Outlet } from "react-router-dom";
// import LinksComp from "./LinksComp";
import { AccountLinks } from "./AccountLinks";
// import { useUserLogoutMutation } from "./features/apiSlice";
import { 
    // useAppDispatch,
     useAppSelector } from "./hooks";
// import { updateUserCover, userLogout } from "./features/userSlice";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUpFromBracket, faPen } from "@fortawesome/free-solid-svg-icons";
// import EditButton from "./EditButton";
// import ShareButton from "./ShareButton";
// import LinkCompAction from "./LinkCompAction";
// import { faPen } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import EditButton from "./EditButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { 
    // useRef, 
    useState } from "react";
import { createPortal } from "react-dom";
import PortalComp from "./PortalComp";
import PortalCentered from "./PortalCentered";

// import UploadComp from "./UploadComp";
// import InputFileGeneric from "./InputFileGeneric";
// import FileGeneric from "./FileGeneric";
import AccountAvatarEdit from "./AccountAvatarEdit";
import ShareButton from "./ShareButton";
import ShareButtonIcon from "./ShareButtonIcon";
import ShareButtonText from "./ShareButtonText";
import LinkCompAction from "./LinkCompAction";

export default function Account() {
    // const [logout] = useUserLogoutMutation();
    // const [updateCover] = usePutAvatarEditMutation();
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });
    // console.log(userState);

    //state
    // const [editAvatar, setEditAvatar] = useState<boolean>(false);

    // //links
    // const links = !userState.seller ? accountLinks : accountSellerLinks;

    // console.log(address);
    // console.log(userState);
    //navigate
    // const navigate = useNavigate();

    // //dispatch
    // const dispatch = useAppDispatch();

    // //refs
    // const avatarImgRef = useRef<HTMLImageElement | null>(null);
    // const avatarInputRef = useRef<HTMLInputElement | null>(null);

    //state
    // const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
    const [editAvatar, setEditAvatar] = useState<boolean>(false);
    // // const [userAvatar, setUserAvatar] = useState<string>(userState.cover ? userState.cover : "");
    // // const [finishedAvatarChange, setFinishedAvatarChange] = useState<boolean>(false);
    // const [coverUploadStarted, setCoverUploadStarted] = useState<boolean>(false);

    // function addFile(evt:React.ChangeEvent<HTMLInputElement>) {
    //     const fileuploaded = evt.target.files && evt.target.files[0];

    //     fileuploaded && setSelectedAvatar((prevValue) => {
    //         return [...prevValue, fileuploaded]
    //     })
    // }

    // function removeFile(name: string) {
    //     setSelectedAvatar((prevValue) => {
    //         return prevValue.filter((prevFile) => {
    //             return prevFile.name !== name;
    //         })
    //     })
    // }

    //functions
    // function submitData() {
    //     // return updateCover(`https://cdn.mohen-tohen.ru/${selectedAvatar ? selectedAvatar.name : ''}`).unwrap()
    //     // .then((data) => {
    //     //     dispatch(updateUserCover(data));
    //     //     // setSelectedAvatar(null);
    //     // })
    //     // setCoverUploadStarted(true);
    //     // console.log(selectedAvatar)
    //     // if(selectedAvatar) {
    //     //     return updateCover(`https://cdn.mohen-tohen.ru/${selectedAvatar.name}`).unwrap()
    //     //     .then((data) => {
    //     //         dispatch(updateUserCover(data));
    //     //     })
    //     // } else {
    //     //     return
    //     // }
    // }

    return (
        <section className="account">
            {userState.loggedIn && <div className="account__navigation-wrapper">
                <div className="account__wrapper-user-text">
                    <div className="account__avatar-wrapper">
                        <img className="account__wrapper-user-text-avatar" src={userState.cover}></img>
                        <button onClick={() => {
                            // avatarInputRef.current?.click();
                            setEditAvatar(true);
                        }}>
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                    </div>
                    <span>
                        {userState.name}
                    </span>
                    {/* <div className="account__wrapper-user-text-data">
                        <div className="account__wrapper-user-text-data-wrapper">
                            <span className="account__wrapper-user-text-data-span">{userState.phone}
                            </span>
                            <EditButton />
                        </div>
                        <div className="account__wrapper-user-text-data-wrapper">
                            <span>
                                {userState.name}
                            </span>
                            {userState.seller && <ShareButton href={`https://mohen-tohen.ru/brands/${userState._id}`} />}
                        </div>
                    </div> */}
                </div>

                <div className="account__buttons-wrapper">
                    <LinkCompAction text="Настройки профиля" to={"./edit"}></LinkCompAction>
                    {/* <button className="account__button">Настройки профиля</button> */}
                    <ShareButtonText classParam="account__button" href={`https://mohen-tohen.ru/brands/${userState._id}`} text={"Поделиться"}></ShareButtonText>
                    {/* <ShareButton href={`https://mohen-tohen.ru/brands/${userState._id}`}></ShareButton> */}
                    {/* <button className="account__button">Поделиться</button> */}
                </div>


                {/* {userState.loggedIn && <button className="account__logout" onClick={() => {
                    logout()
                    .then((data) => {
                        if(data) {
                            dispatch(userLogout());
                            navigate('/');
                            navigate(0);
                        }
                    })
                }}>
                    Выйти
                </button>} */}
            </div>}

            <div className="account__wrapper">
            <AccountLinks></AccountLinks>

                <Outlet></Outlet>
            </div>

            {editAvatar && createPortal(<PortalComp>
                <PortalCentered>
                    <button onClick={() => {
                        setEditAvatar(false);
                    }}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <AccountAvatarEdit closeAvatarEdit={setEditAvatar} profileCover={userState.cover}></AccountAvatarEdit>
                </PortalCentered>
            </PortalComp>, document.body)}
        </section>
    )
}


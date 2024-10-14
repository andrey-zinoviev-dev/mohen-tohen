// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Account.css";
// import Goods from "./Goods";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { accountLinks, accountSellerLinks } from "./utils";
import { Outlet } from "react-router-dom";
// import LinksComp from "./LinksComp";
import { AccountLinks } from "./AccountLinks";
import { useUserLogoutMutation } from "./features/apiSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { userLogout } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUpFromBracket, faPen } from "@fortawesome/free-solid-svg-icons";
// import EditButton from "./EditButton";
import ShareButton from "./ShareButton";
// import LinkCompAction from "./LinkCompAction";
// import { faPen } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditButton from "./EditButton";

export default function Account() {
    const [logout] = useUserLogoutMutation();
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });

    // //links
    // const links = !userState.seller ? accountLinks : accountSellerLinks;

    // console.log(address);
    // console.log(userState);
    //navigate
    const navigate = useNavigate();

    //dispatch
    const dispatch = useAppDispatch();

    //navigate
    // const navigate = useNavigate();

    return (
        <section className="account">
            <div className="account__navigation-wrapper">
            {/* <h3>Здравствуйте, c возвращением в Mohen-Tohen!</h3> */}
                <div className="account__wrapper-user-text">
                    {/* <div className="account__wrapper-user-text-profile">
                        <h3>Здравствуйте, {userState.name}</h3>
                        <ShareButton href={`${window.location.origin}/brands/${userState._id}`} />
                    </div> */}
                    {/* <span>С возвращением в Mohen-Tohen!</span> */}
                    {/* <div className=""> */}
                    
                        <img className="account__wrapper-user-text-avatar" src={userState.cover && userState.cover}></img>
                        <div className="account__wrapper-user-text-data">
                            <div className="account__wrapper-user-text-data-wrapper">
                                <span className="account__wrapper-user-text-data-span">{userState.phone}
                                </span>
                                <EditButton />
                            </div>
                            <div className="account__wrapper-user-text-data-wrapper">
                                <span>
                                    {userState.name}
                                </span>
                                <ShareButton href={`${window.location.origin}/brands/${userState._id}`} />
                            </div>
                            

                            {/* <button>
                                Редактировать
                            </button> */}
                            {/* <LinkCompAction to="profile/edit" text="Редактировать" icon={faPen} /> */}
                        </div>
                    {/* </div> */}
                </div>
                {/* <div> */}
                {/* <h3>Здравствуйте, c возвращением в Mohen-Tohen!</h3> */}

                {/* <div className="account__wrapper-user-text-profile"> */}
                    {/* <span></span> */}
                        {/* <ShareButton href={`${window.location.origin}/brands/${userState._id}`} /> */}
                {/* </div>  */}
                {/* </div> */}
                <AccountLinks></AccountLinks>

                {userState.loggedIn && <button className="account__logout" onClick={() => {
                    logout()
                    .then((data) => {
                        if(data) {
                            dispatch(userLogout());
                            navigate('/');
                            navigate(0);
                        }
                        // if(data.loggedOut) {

                        // }
                    })
                }}>
                    Выйти
                </button>}
            </div>

            <div className="account__wrapper">
                <Outlet></Outlet>
            </div>

        </section>
    )
}


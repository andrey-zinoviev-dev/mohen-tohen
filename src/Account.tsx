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
            {userState.loggedIn && <div className="account__navigation-wrapper">
                <div className="account__wrapper-user-text">

                    
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
                                <ShareButton href={`https://mohen-tohen.ru/brands/${userState._id}`} />
                            </div>
                            

                       
                        </div>
                </div>

                <AccountLinks></AccountLinks>

                {userState.loggedIn && <button className="account__logout" onClick={() => {
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
                </button>}
            </div>}

            <div className="account__wrapper">
                <Outlet></Outlet>
            </div>

        </section>
    )
}


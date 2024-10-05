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
                {/* <button className="account__back" onClick={() => {
                    navigate("../");
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Назад</span>
                </button> */}
                {/* <div>
                    <div>
                        <span>{userState.phone}</span>
                        <span>{userState.name}</span>
                    </div>
                    <div>
                        <button>
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </button>
                    </div>
                </div> */}
                <AccountLinks></AccountLinks>

                {userState.loggedIn && <button onClick={() => {
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
                <div className="account__wrapper-user">
                    <div className="account__wrapper-user-text">
                        <h3>Здравствуйте, {userState.name}</h3>
                        <span>С возвращением в Mohen-Tohen!</span>
                    </div>
                    {/* <EditButton /> */}
                    <ShareButton href={`${window.location.origin}/brands/${userState._id}`} />
                    {/* <button>
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </button> */}
                </div>
                <Outlet></Outlet>
            </div>

        </section>
    )
}


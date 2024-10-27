import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputEl from "./InputEl";
import { useGetOTPCodeMutation, useLazyGetLoggedUserQuery } from "./features/apiSlice";
import { useAppDispatch } from "./hooks";
import { login } from "./features/userSlice";
// import { useGetLoggedUserQuery } from "./features/apiSlice";
// import { UserInterface } from "./features/userSlice";
// import { skipToken } from "@reduxjs/toolkit/query";
// import { getUser } from "./userApi";
// import { skipToken } from "@reduxjs/toolkit/query";
// import { useNavigate } from "react-router-dom";
export default function Login({closePopup}: {closePopup: React.Dispatch<React.SetStateAction<boolean>>}) {
  //state
  const [phone, setPhone] = useState<{tel: string}>({tel: ""});
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  // console.log(loggedIn);
  //RTK
  const [getOTPCode] = useGetOTPCodeMutation();
  //getUser
  const [getUser] = useLazyGetLoggedUserQuery();
  // const {data: user = {} as UserInterface} = useGetLoggedUserQuery(!loggedIn && skipToken);
  // console.log(user);
  //dispatch
  const dispatch = useAppDispatch();

  // //navigate
  // const navigate = useNavigate();

  useEffect(() => {
    loggedIn && getUser(true)
    .then((data) => {
      const user = data.data;
      user && dispatch(login({...user, loggedIn: true}));
      closePopup(false);
    })
  }, [loggedIn])

  // useEffect(() => {
  //   if(user._id) {
  //     dispatch(login({...user, loggedIn: true}));
  //     closePopup(false);
  //   }
  // }, [user._id]);

  return (
    <div>
      <button onClick={() => {
        closePopup(false);
      }}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h3>Войти или зарегистрироваться</h3>
      <form className="header__popup-form" onSubmit={(evt) => {
        evt.preventDefault();
      }}>
        <p>Введите номер телефона для входа или регистрации на платформе. Отправим код по СМС либо в Telegram</p>
        <div>
          <span>+7</span>
          <InputEl name="tel" type="tel" placeHolder="9991234567" autoFocus={true} underLine={true} updateState={setPhone}></InputEl>
        </div>
        <button disabled={phone.tel.length === 10 ? false : true} onClick={() => {
          getOTPCode(phone.tel).unwrap()
          .then((data) => {
            setLoggedIn(data.loggedIn);
          })
        }}>Войти</button>
      </form>
      <p className="header__popup-wrapper-p">Нажимая на кнопку "Получить код", Вы даете согласие на обработку персональных данных в соответствии с <a href="">политикой обработки персональных данных</a></p>
    </div>
  )
}
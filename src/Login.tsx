import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputEl from "./InputEl";
import { useGetOTPCodeMutation } from "./features/apiSlice";
import { useAppDispatch } from "./hooks";
import { login } from "./features/userSlice";
// import { useNavigate } from "react-router-dom";
export default function Login({closePopup}: {closePopup: React.Dispatch<React.SetStateAction<boolean>>}) {
  //state
  const [phone, setPhone] = useState<{tel: string}>({tel: ""});

  //RTK
  const [getOTPCode] = useGetOTPCodeMutation();

  //dispatch
  const dispatch = useAppDispatch();

  // //navigate
  // const navigate = useNavigate();

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

                                  // inputRef.current && getOTPCode(inputRef.current.value).unwrap()
                                  getOTPCode(phone.tel).unwrap()
                                  .then((data) => {
                                      // console.log(data);
                                      dispatch(login({...data, loggedIn: true}));
                                      closePopup(false);
                                      // setOpenPortal(false);
                                  })
          
                                  // getOTPCode(inputRef.current?.value)
                                  // .then((data) => {
                                  //     setLoginStatus((prevValue) => {
                                  //         return {...prevValue, codeRequested: true};
                                  //     });
                                  //     console.log(data);
                                  // })
                                      
                                      // setPopupOpened(false);
                                      // dispatch(login(sellerUser));
        }}>Войти</button>
      </form>
      <p className="header__popup-wrapper-p">Нажимая на кнопку "Получить код", Вы даете согласие на обработку персональных данных в соответствии с <a href="">политикой обработки персональных данных</a></p>
    </div>
  )
}
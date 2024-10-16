import { useEffect, useState } from "react";
// import InputEl from "./InputEl";
import { useAppSelector } from "./hooks";
import "./AccountEdit.css";

export default function AccountEdit() {
    //redux
    const userState = useAppSelector((state) => {
        return state.user;
    });
    // console.log(userState);

    //state
    const [formData, setFormData] = useState<{name: string, email: string, phone: string, brandName: string | undefined}>({
        name: "",
        email: "",
        phone: "",
        brandName: "",
        // birthday: "",
    });

    useEffect(() => {
        if(userState.name.length > 0) {
            setFormData((prevValue) => {
                return {...prevValue, name: userState.name, email: userState.email, phone: userState.phone, brandName: userState.brandName};
            })
        }
    }, [userState.name, userState.brandName]);

    return (
        <>
            <h3>Мой профиль</h3>
            <form className="form-edit" onSubmit={(evt) => {
                evt.preventDefault();
                console.log(formData);
            }}>
                <label>
                    Имя и фамилия
                    <input name="name" onChange={(evt) => {
                        setFormData((prevValue) => {
                            return {...prevValue, name: evt.target.value};
                        })
                    }} value={formData.name}></input>
                    {/* <InputEl name="name" placeHolder="Алексей Солдатов" updateState={setFormData}></InputEl> */}
                </label>
                <label>
                    Почта
                    <input name="email" placeholder="email@example.com" onChange={(evt) => {
                        setFormData((prevValue) => {
                            return {...prevValue, email: evt.target.value};
                        })
                    }} value={formData.email}></input>
                    {/* <InputEl name="email" placeHolder="email@example.com" updateState={setFormData}></InputEl> */}
                </label>
                <label>
                    Телефон
                    <input name="phone" onChange={(evt) => {
                        setFormData((prevValue) => {
                            return {...prevValue, phone: evt.target.value};
                        })
                    }} value={formData.phone}></input>
                    {/* <InputEl name="phone" placeHolder="+79031513045" updateState={setFormData}></InputEl> */}
                </label>
                {/* <label>
                    Дата рождения
                    <input name="birthday" onChange={() => {
                                              setFormData((prevValue) => {
                                                return {...prevValue, birthda: evt.target.value};
                                            })
                    }}></input>
                </label> */}
                {userState.seller && <label>
                    Ваш Бренд
                    <input name="brandName" placeholder="My_brand или Мой бренд" onChange={(evt) => {
                        setFormData((prevValue) => {
                            return {...prevValue, brandName: evt.target.value};
                        })
                    }} value={formData.brandName}></input>    
                </label>}
                <button>Обновить данные</button>
            </form>
        </>
    )
}
import { useEffect, useState } from "react";
import InputEl from "./InputEl";
import { useAppSelector } from "./hooks";
export default function AccountEdit() {
    //RTK
    const userState = useAppSelector((state) => {
        return state.user;
    });
    console.log(userState);

    //state
    const [formData, setFormData] = useState<{name: string, email: string, phone: string}>({
        name: "",
        email: "",
        phone: "",
        // birthday: "",
    });

    useEffect(() => {
        if(userState.name.length > 0) {
            setFormData((prevValue) => {
                return {...prevValue, name: userState.name, email: userState.email, phone: userState.phone};
            })
        }
    }, [userState.name]);

    return (
        <div>
            <h3>Мой профиль</h3>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                console.log(formData);
            }}>
                <label>
                    Имя и фамилия
                    <InputEl name="name" placeHolder="Алексей Солдатов" updateState={setFormData}></InputEl>
                </label>
                <label>
                    Почта
                    <InputEl name="email" placeHolder="email@example.com" updateState={setFormData}></InputEl>
                </label>
                <label>
                    Телефон
                    <InputEl name="phone" placeHolder="+79031513045" updateState={setFormData}></InputEl>
                </label>
                <label>
                    Дата рождения
                    <InputEl name="birthday" placeHolder="ДД/ММ/ГГГГ" updateState={setFormData}></InputEl>
                </label>
                <button>Обновить данные</button>
            </form>
        </div>
    )
}
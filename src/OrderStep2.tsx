import React from "react";
import InputEl from "./InputEl";
import "./OrderStep.css";

// import SDEK from "./assets/png-klev-club-u6ji-p-sdek-png-1.png"
export default function OrderStep2() {
    //state
    const [formData, setFormData] = React.useState<{address: string, flat: string}>({address: "", flat: ""});

    return (
        <div className="order__form">
            <h3>Данные доставки</h3>
            {/* <span>Способ доставки: СДЭК</span> */}
            <form>
                <InputEl updateState={setFormData} placeHolder="адрес" name="address" />
                <InputEl updateState={setFormData} placeHolder="квартира" name="flat" />
                {/* <InputEl updateState={setFormData} placeHolder="этаж" name="floor" /> */}
            </form>
        </div>
    )
}
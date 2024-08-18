import { baseApi } from "./utils"

export default function getOTPCode(phone:string) {
    return fetch(`${baseApi}/users/otp`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({phone: phone})
    })
    .then((res) => {
        return res.json();
    })
}
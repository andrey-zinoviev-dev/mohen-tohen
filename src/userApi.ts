import { baseApi } from "./utils"

export function getOTPCode(phone:string) {
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

export function getUser(phone:string){
    return fetch(`${baseApi}/users`, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({phone: phone})
    })
    .then((res) => {
        return res.json();
    })
}

export function getSellers() {
    return fetch(`${baseApi}/users/sellers`, {
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((res) => {
        return res.json();
    })
}
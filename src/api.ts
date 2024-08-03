// ia delau vid chto delau ochen slojnoe rabotau ag
import { ApplicationInterface } from "./interfaces";
import { baseApi } from "./utils"

export function getApplication(id:string) {
    return fetch(`${baseApi}/applications/getApplication/${id}`)
    .then((res) => {
        return res.json();
    })
};

export function sendApplication(applicationData:ApplicationInterface) {
    return fetch(`${baseApi}/applications/sendApplication`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(applicationData),
    })
    .then((res) => {
        return res.json();
    })
};
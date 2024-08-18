import React from "react";
import "./Notification.css"
import { useAppSelector, useAppDispatch } from "./hooks"
import { changeMessage } from "./features/notificationSlice";
export default function Notification() {
  const notificationState = useAppSelector((state) => {
    return state.notification.message;
  });

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(changeMessage(undefined))
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    }
  }, [])

  return (
    <section className="notification">
      <h3>{notificationState}</h3>
    </section>
  )
}
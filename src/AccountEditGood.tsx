import AccountGoodWrapper from "./AccoutGoodWrapper";
import { useState } from "react";
import { AccountGoodInterface } from "./interfaces";
import { useLocation } from "react-router-dom";
import { useUpdateGoodMutation } from "./features/apiSlice";
import { useAppDispatch } from "./hooks";
import { updateGoodData } from "./features/userSlice";
export default function AccountEditGood() {
  //location
  const location = useLocation();
  const state = location.state as AccountGoodInterface;
  // console.log(state);

  //state
  const [goodEdit, setGoodEdit] = useState<AccountGoodInterface>(state);

  //dispatch
  const dispatch = useAppDispatch();

  //RTK
  const [editGood] = useUpdateGoodMutation();

  //functions
  function onSubmit() {
    return editGood(goodEdit).unwrap()
    .then((data) => {
      dispatch(updateGoodData(data))
    })
  }

  return (
    <>
      <AccountGoodWrapper goodData={goodEdit} updateGoodData={setGoodEdit} onSubmit={onSubmit} headline="Редактирование товара"></AccountGoodWrapper>
    </>
  )
}
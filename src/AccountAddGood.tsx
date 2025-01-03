import { useState } from "react";
import AccountGoodWrapper from "./AccoutGoodWrapper";
import { AccountGoodInterface } from "./interfaces";
import { usePostGoodToServerMutation } from "./features/apiSlice";
import { useAppDispatch } from "./hooks";
import { addNewGoodToUser } from "./features/userSlice";

export default function AccountAddGood() {
  //state
  const [newGood, setNewGood] = useState<AccountGoodInterface>({
    title: "",
    description: "",
    category: "",
    colors: [],
    dimensions: [],
    materials: [],
    photos: [],
    price: 0,
    batch: 1,
    madeToOrder: false,
  });

  //dispatch
  const dispatch = useAppDispatch();

  //RTK
  const [addGood] = usePostGoodToServerMutation();

  //functions
  function submitGoodData(photos: string[]) {
    return addGood({...newGood, photos: photos}).unwrap()
    .then((data) => {
      dispatch(addNewGoodToUser(data))
    })
  }

  return (
    <>
      <AccountGoodWrapper goodData={newGood} updateGoodData={setNewGood} onSubmit={submitGoodData} headline="Добавление нового товара"></AccountGoodWrapper>
    </>
  )
}
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../utils";
// import { UserInterface } from "./userSlice";

import { BrandsInterface, GoodInterface, TransactionInterface } from "../interfaces";
import { UserInterface } from "./userSlice";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: baseApi}),
    endpoints: builder => ({
        getOTPCode: builder.mutation<UserInterface, string>({
            query: (phone) => ({
                url: "/users/otp",
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: { phone: phone },
            })
        }),
        getSellers: builder.query<UserInterface[], void>({
            query: () => {
                return "/users/sellers"
            }
        }),
        getSeller: builder.query<UserInterface, string>({
            query: (sellerId) => {
                return `/users/sellers/${sellerId}`
            }
        }),
        getGoods: builder.query<GoodInterface[], void>({
            query: () => {
                return "/goods/showGoods"
            }
        }),
        getTransactions: builder.query<TransactionInterface[], string>({
            query: (id) => ({
                url: `/transactions/${id}/show`,
                credentials: "include"
            })
        }),
        getLoggedUser: builder.query<UserInterface, void>({
            query: () => ({
                url: `/users/me`,
                credentials: "include",
            })
        }),
        postGoodToFavourite: builder.mutation<GoodInterface, {good: GoodInterface, userId: string}>({
            query: (good) => ({
                url:`/users/me/favourites`,
                method: "POST",
                body: {good: good},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
        postGoodToBasket: builder.mutation<GoodInterface, {good: GoodInterface, userId: string}>({
            query: (good) => ({
                url:`/users/me/basket`,
                method: "POST",
                body: {good: good},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
    })
});

export const { useGetOTPCodeMutation, useGetSellersQuery, useGetSellerQuery, useGetGoodsQuery, useGetTransactionsQuery, useGetLoggedUserQuery, usePostGoodToBasketMutation, usePostGoodToFavouriteMutation} = apiSlice;
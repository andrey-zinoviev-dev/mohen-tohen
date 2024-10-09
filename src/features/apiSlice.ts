import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../utils";
// import { UserInterface } from "./userSlice";

import { GoodInterface, goodPageInt, TransactionInterface } from "../interfaces";
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
        userLogout: builder.mutation<boolean, void>({
            query: () => (
                {
                    url: "/users/logout",
                    credentials: "include",
                    method: "PUT",  
                    headers: {
                        "Content-Type":"application/json",
                    },
                    // return "/users/sellers"
                }
            )
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
        getGood: builder.query<GoodInterface, string>({
            query: (id) => ({
                url: `/goods/showGoods/${id}`,
                // credentials: "include"
            })
        }),

        getTransactions: builder.query<TransactionInterface[], string>({
            query: (id) => ({
                url: `/transactions/${id}/show`,
                credentials: "include"
            })
        }),
        getAccountGoods: builder.query<GoodInterface[], void>({
            query: () => ({
                url: `/goods/showGoods/user`,
                credentials: "include",
            })
        }),
        getLoggedUser: builder.query<UserInterface, void>({
            query: () => ({
                url: `/users/me`,
                credentials: "include",
            })
        }),
        postGoodToFavourite: builder.mutation<{addedToFavs: boolean}, string>({
            query: (id) => ({
                url:`/users/me/favourites`,
                method: "POST",
                body: {id: id},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
        postGoodToBasket: builder.mutation<{addedToBasket: boolean}, {good: GoodInterface, quantity: number}>({
            query: (good) => ({
                url:`/users/me/basket`,
                method: "POST",
                body: {good: good.good, quantity: good.quantity},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
        postGoodToServer: builder.mutation<GoodInterface, {title: string, description: string, material: string, dimensions: string, photos: {title: string, file: File}[], price: number}>({
            query: (good) => ({
                url: "/goods/add",
                method: "POST",
                body: {good},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
        updateGoodBatch: builder.mutation<{updatedBatch: number}, {id: string, batchSize: number}>({
            query:(batchParams) => ({
                url: `/goods//updateBatch/${batchParams.id}`,
                method: "PUT",
                body: {id: batchParams.id, size: batchParams.batchSize},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
        updateBasketItem: builder.mutation<goodPageInt, {id: string, quantity: number}>({
            query: (basketItem) => ({
                url: `/users/me/basket/updateItem`,
                method: "PUT",
                body: {id: basketItem.id, quantity: basketItem.quantity},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                }
            })
        }),
        deleteBasketItem: builder.mutation<boolean, string>({
            query: (basketItemId) => ({
                url: `/users/me/basket/deleteItem`,
                method: "PUT",
                body: {id: basketItemId},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                }
            })
        }),
    })
});

export const { useGetOTPCodeMutation, useGetSellersQuery, useGetSellerQuery, useGetGoodsQuery, useGetAccountGoodsQuery, useGetGoodQuery, useGetTransactionsQuery, useGetLoggedUserQuery, usePostGoodToBasketMutation, usePostGoodToFavouriteMutation, useUserLogoutMutation, usePostGoodToServerMutation, useUpdateGoodBatchMutation, useUpdateBasketItemMutation, useDeleteBasketItemMutation} = apiSlice;
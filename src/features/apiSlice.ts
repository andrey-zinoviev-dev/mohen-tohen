import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../utils";
// import { UserInterface } from "./userSlice";

import { AccountGoodInterface, ApplicationInterface, ApplicationUploadedInterface, BasketGoodInterface, GoodInterface, TransactionInterface } from "../interfaces";
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
        getCategory: builder.query<GoodInterface[], string>({
            query: (category) => ({
                url: `/goods/categories/${category}`
            })
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
        getTransaction: builder.query<TransactionInterface, string>({
            query: (id) => ({
                url: `transactions/${id}`,
                credentials: "include",
            }),
        }),
        getAccountGoods: builder.query<GoodInterface[], void>({
            query: () => ({
                url: `/goods/showGoods/user`,
                credentials: "include",
            })
        }),
        getLoggedUser: builder.query<UserInterface, boolean>({
            query: () => ({
                url: `/users/me`,
                credentials: "include",
            })
        }),
        putUserEdit: builder.mutation<UserInterface, {name?: string, email?: string, phone?: string, brandName?: string | undefined}>({
            query: (editBody) => ({
                url: "/users/me/edit",
                method: "PUT",
                body: {editBody: editBody},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
        putAvatarEdit: builder.mutation<string, string>({
            query: (avatarPath) => ({
                url: "/users/me/avatar",
                method: "PUT",
                body: {avatar: avatarPath},
                credentials: "include",
            }),
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
        postGoodToServer: builder.mutation<GoodInterface, {
            colors: {
                option: string,
                price: number,
            }[],materials: {
                option: string,
                price: number,
            }[],
            dimensions: {
                option: string,
                price: number,
            }[],
            photos: string[],
            title: string,
            category: string,
            description: string,
            price: number,
            batch: number,
            madeToOrder: boolean,
            _id?: string,
        }>({
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
        updateGood: builder.mutation<GoodInterface, AccountGoodInterface>({
            query: (good) => ({
                url: `/goods/${good._id}/edit`,
                method: "PUT",
                body: {good: good},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
        updateGoodBatch: builder.mutation<{updatedBatch: number}, {id: string, batchSize: number}>({
            query:(batchParams) => ({
                url: `/goods/updateBatch/${batchParams.id}`,
                method: "PUT",
                body: {id: batchParams.id, size: batchParams.batchSize},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                },
            })
        }),
        // updateBasketItem: builder.mutation<goodPageInt, {id: string, quantity: number}>({
        //     query: (basketItem) => ({
        //         url: `/users/me/basket/updateItem`,
        //         method: "PUT",
        //         body: {id: basketItem.id, quantity: basketItem.quantity},
        //         credentials: "include",
        //         headers: {
        //             "Content-Type":"application/json",
        //         }
        //     })
        // }),
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
        getApplication: builder.query<ApplicationUploadedInterface, string>({
            query: (id) => ({
                url: `/applications/getApplication/${id}`
            })
        }),
        sendApplication: builder.mutation<ApplicationInterface, ApplicationInterface>({
            query: (applicationData) => ({
                url: `/applications/sendApplication`,
                method: "POST",
                body: {application: applicationData},
                headers: {
                    "Content-Type":"application/json",
                }
            })
        }),
        decideApplication: builder.mutation<{decision: string}, {id: string, decision: string}>({
            query: ({id, decision}) => ({
                url: `/applications/decideApplication/${id}`,
                method: "PUT",
                body: {decision: decision},
                headers: {
                    "Content-Type":"application/json",
                }
            })
        }),
        postCreateOrder: builder.mutation<{createdOrder: TransactionInterface}, {personalData: {name: string, phone: string, email: string, address: string, zipcode: string}, goods: BasketGoodInterface[], total: number}>({
            query: ({personalData, goods, total}) => ({
                url: "/transactions/create",
                method: "POST",
                body: {personalData: personalData, goods: goods, total: total},
                credentials: "include",
                headers: {
                    "Content-Type":"application/json",
                }
            })
        })
    })
});

export const { useGetOTPCodeMutation, useGetSellersQuery, usePutUserEditMutation, usePutAvatarEditMutation, useGetSellerQuery, useGetGoodsQuery, useGetAccountGoodsQuery, useGetCategoryQuery, useGetGoodQuery, useGetTransactionsQuery, useGetTransactionQuery, useLazyGetLoggedUserQuery, usePostGoodToBasketMutation, usePostGoodToFavouriteMutation, useUserLogoutMutation, usePostGoodToServerMutation, useUpdateGoodMutation, useUpdateGoodBatchMutation, useDeleteBasketItemMutation, useGetApplicationQuery, useSendApplicationMutation, useDecideApplicationMutation, usePostCreateOrderMutation} = apiSlice;
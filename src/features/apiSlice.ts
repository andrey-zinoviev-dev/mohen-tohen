import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../utils";
// import { UserInterface } from "./userSlice";

import { BrandsInterface, GoodInterface } from "../interfaces";
import { UserInterface } from "./userSlice";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: baseApi}),
    endpoints: builder => ({
        getOTPCode: builder.mutation<UserInterface, string>({
            query: (phone) => ({
                url: "/users/otp",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: { phone: phone },
            })
        }),
        getSellers: builder.query<BrandsInterface[], void>({
            query: () => {
                return "/brands/showBrands"
            }
        }),
        getSeller: builder.query<BrandsInterface, string>({
            query: (sellerId) => {
                return `/brands/showBrand/${sellerId}`
            }
        }),
        getGoods: builder.query<GoodInterface[], void>({
            query: () => {
                return "/goods/showGoods"
            }
        }),
    })
});

export const { useGetOTPCodeMutation, useGetSellersQuery, useGetSellerQuery, useGetGoodsQuery, } = apiSlice;
import { getApi, postApi, postFormData, deleteApi, putApi } from "./api/index";


// Get Areas
export const getAreas = () => getApi(`/areas`);

// Get Listings
export const getListings = (term , moveInDate , moveOutDate, bedrooms) => getApi(`/listings/${term ? `?term=${term}` : ''}${bedrooms ? `&bedrooms=${bedrooms}` : ''}${moveInDate ? `&moveInDate=${moveInDate}` : ''}${moveOutDate ? `&moveOutDate=${moveOutDate}` : ''}`);

// Get Listing
export const getListing = (id) => getApi(`/listings/${id}`);

export const homeRoute = (id) => getApi(`/`);

// Post Login data
export const userLogin = (data) => postApi('/login',data)

//  Register data
export const registerEmail = (data) => postApi('/register-email',data)

export const verifyEmail = (otp) => getApi(`/verify-email?verificationToken=${otp}`)

export const userRegister = (data) => postApi('/register',data)






import { getApi, postApi, postFormData, deleteApi, putApi } from "./api/index";


// Get Areas
export const getAreas = () => getApi(`/areas`);

// Get Listings
export const getListings = (term, moveInDate, moveOutDate, bedrooms) => getApi(`/listings/${term ? `?term=${term}` : ''}${bedrooms ? `&bedrooms=${bedrooms}` : ''}${moveInDate ? `&moveInDate=${moveInDate}` : ''}${moveOutDate ? `&moveOutDate=${moveOutDate}` : ''}`);

// Get Listing
export const getListing = (id) => getApi(`/listings/${id}`);

export const homeRoute = (id) => getApi(`/`);

// Post Login data
export const userLogin = (data) => postApi('/login', data)

// Post logout
export const userLogout = () => postApi('/logout')

// Register data 
export const registerEmail = (data) => postApi('/register-email', data)

export const verifyEmail = (otp) => getApi(`/verify-email?verificationToken=${otp}`)

export const resendVerifyEmail = (email) => postApi('/resend-verification-email', email)

export const userRegister = (data) => postApi('/register', data)

// Forgot Password 
export const forgotPassword = (email) => postApi('/forgot-password', email)

// Reset Password 
export const resetPassword = (data) => postApi('/reset-password', data)

// Get Reviews 
export const getReviews = (id) => getApi(`/apartments/${id}/reviews`)

// Post Review 
export const postReview = (id,data) => postApi(`/apartments/${id}/reviews`,data)


// Post Auth Google
export const googleLogin = () => getApi('/auth/google')

// Wish list
export const addRemoveWishList = (data) => postApi('/wishlist',data)

// Post newsletter api
export const emailSubscribe = (email)=> postApi('/newsletter',email)


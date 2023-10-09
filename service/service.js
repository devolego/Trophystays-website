import { getApi, postApi, postFormData, deleteApi, putApi } from "./api/index";


// Get Areas
export const getAreas = () => getApi(`/areas`);

// Get Listings
export const getListings = (term, moveInDate, moveOutDate, bedrooms, location, priceSortOrder) => {
    const queryParams = [
        term && `term=${term}`,
        bedrooms && `bedrooms=${bedrooms}`,
        moveInDate && `moveInDate=${moveInDate}`,
        moveOutDate && `moveOutDate=${moveOutDate}`,
        location && `location=${location}`,
        priceSortOrder && `priceSortOrder=${priceSortOrder}`
    ].filter(Boolean).join('&');

    return getApi(`/listings/${queryParams ? `?${queryParams}` : ''}`);
};


// Get Listing
export const getListing = (id) => getApi(`/listings/${id}`);

export const homeRoute = (id) => getApi(`/`);

//Get Reviews

export const getReviews = (keyword, apartmentId, rating, sortBy) => {
    const params = new URLSearchParams();

    if (keyword) params.append('keyword', keyword);
    if (apartmentId) params.append('apartmentId', apartmentId);
    if (rating) params.append('rating', rating);
    if (sortBy) params.append('sortBy', sortBy);

    return getApi(`/reviews?${params.toString()}`);
};

// //Get user
// export const getUser = (token) => getApi(`/user`, token)

//Register Data

export const registerEmail = (data) => postApi('/register-email', data)

export const verifyEmail = (otp) => getApi(`/verify-email?verificationToken=${otp}`)

export const userRegister = (data) => postApi('/register', data)

//Forgot password
export const forgotPassword = (email) => postApi('/forgot-password', email)

//Reset password
export const resetPassword = (data) => postApi('/reset-password', data)

// Post Login data
export const userLogin = (data) => postApi('/login', data)

// Post logout
export const userLogout = () => postApi('/logout')

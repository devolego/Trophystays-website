import { getApi, postApi, postFormData, deleteApi, putApi } from "./api/index";


// Get Areas
export const getAreas = () => getApi(`/areas`);

// Get Listings
export const getListings = (term, moveInDate, moveOutDate, bedrooms) => getApi(`/listings/${term ? `?term=${term}` : ''}${bedrooms ? `&bedrooms=${bedrooms}` : ''}${moveInDate ? `&moveInDate=${moveInDate}` : ''}${moveOutDate ? `&moveOutDate=${moveOutDate}` : ''}`);

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



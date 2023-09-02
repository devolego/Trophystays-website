import { getApi, postApi, postFormData, deleteApi, putApi } from "./api/index";


// Get Areas
export const getAreas = () => getApi(`/areas`);

// Get Listings
export const getListings = (term , moveInDate , moveOutDate, bedrooms) => getApi(`/listings/${term ? `?term=${term}` : ''}${bedrooms ? `&bedrooms=${bedrooms}` : ''}${moveInDate ? `&moveInDate=${moveInDate}` : ''}${moveOutDate ? `&moveOutDate=${moveOutDate}` : ''}`);

// Get Listing
export const getListing = (id) => getApi(`/listings/${id}`);

export const homeRoute = (id) => getApi(`/`);




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listingFormDetails: {
    dealType: "",
    selectedRegion: {},
    selectedCity: {},
    selectedAgent: {},
    address: "",
    zipAddress: "",
    price: "",
    area: "",
    roomsQuantity: "",
    description: "",
    imagePreview: null,
    imageName: "",
  },
};

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    updateSelectedRegion(state, action) {
      state.listingFormDetails.selectedRegion = action.payload;
    },
    updateSelectedCity(state, action) {
      state.listingFormDetails.selectedCity = action.payload;
    },
    updateDealType(state, action) {
      state.listingFormDetails.dealType = action.payload;
    },
    updateSelectedAgent(state, action) {
      state.listingFormDetails.selectedAgent = action.payload;
    },
    updateAddress(state, action) {
      state.listingFormDetails.address = action.payload;
    },
    updateZipAddress(state, action) {
      state.listingFormDetails.zipAddress = action.payload;
    },
    updatePrice(state, action) {
      state.listingFormDetails.price = action.payload;
    },
    updateArea(state, action) {
      state.listingFormDetails.area = action.payload;
    },
    updateRoomsQuantity(state, action) {
      state.listingFormDetails.roomsQuantity = action.payload;
    },
    updateDescription(state, action) {
      state.listingFormDetails.description = action.payload;
    },
    updateImagePreview(state, action) {
      state.listingFormDetails.imagePreview = action.payload;
    },
    updateImageName(state, action) {
      state.listingFormDetails.imageName = action.payload;
    },
    resetListingInfo(state) {
      state.listingFormDetails = initialState.listingFormDetails;
    },
  },
});

export const {
  updateSelectedRegion,
  updateSelectedCity,
  updateDealType,
  updateSelectedAgent,
  updateAddress,
  updateZipAddress,
  updatePrice,
  updateArea,
  updateRoomsQuantity,
  updateDescription,
  resetListingInfo,
  updateImagePreview,
  updateImageName,
} = listingSlice.actions;

export const getListingFormDetails = (store) =>
  store.listing.listingFormDetails;

export default listingSlice.reducer;

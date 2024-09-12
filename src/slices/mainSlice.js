// src/slices/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agentModalIsOpen: false,
};

export const counterSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    updateAgentModalIsOpen: (state, action) => {
      state.agentModalIsOpen = action.payload;
    },
  },
});

export const { updateAgentModalIsOpen } = counterSlice.actions;

export const getAgentModelIsOpen = (store) => store.main.agentModalIsOpen;

export default counterSlice.reducer;

// src/slices/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agentModalIsOpen: false,
  createAgentModalValues: {
    name: "",
    surname: "",
    email: "",
    phone: "",
  },
};

export const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    updateAgentModalIsOpen: (state, action) => {
      state.agentModalIsOpen = action.payload;
    },
    updateAgentName(state, action) {
      state.createAgentModalValues.name = action.payload;
    },
    updateAgentSurname(state, action) {
      state.createAgentModalValues.surname = action.payload;
    },
    updateAgentEmail(state, action) {
      state.createAgentModalValues.email = action.payload;
    },
    updateAgentPhone(state, action) {
      state.createAgentModalValues.phone = action.payload;
    },
    resetAgentInfo(state) {
      state.createAgentModalValues = {};
    },
  },
});

export const {
  updateAgentModalIsOpen,
  updateAgentName,
  updateAgentSurname,
  updateAgentEmail,
  updateAgentPhone,
  resetAgentInfo,
} = agentSlice.actions;

export const getAgentModelIsOpen = (store) => store.agent.agentModalIsOpen;
export const getAgentDetails = (store) => store.agent.createAgentModalValues;

export default agentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    "id": 1,
    "name": "Kallisté"
  }, {
    "id": 2,
    "name": "Uò"
  }, {
    "id": 3,
    "name": "Desirée"
  }]

  
  const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {}
  })
  export const selectAllUsers = (state) => state.users

  export default userSlice.reducer
  
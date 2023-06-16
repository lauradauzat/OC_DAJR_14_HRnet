
import { configureStore, createSlice } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
      addEmployee: (state, action) => {
        state.push(action.payload);
      },
    },
  });
  

export const { addEmployee } = employeesSlice.actions;

const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer,
    },
});


export { store};
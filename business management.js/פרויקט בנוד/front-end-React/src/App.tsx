import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './redux/features/userSlice';
import AllWorkshops from './components/AllWorkshops/AllWorkshops';
import FormPage from './components/FormPage/FormPage';
import GoodBye from './components/GoodBye/GoodBye';
import ListOfTherapists from './components/ListOfTherapists/ListOfTherapists';
import OpenPage from './components/OpenPage/OpenPage';
import TreatPage from './components/TreatPage/TreatPage';

function App() {
    const myStore = configureStore({
        reducer: {
            userSlice
        }
    });

    return (
        <Provider store={myStore}>
            <Routes>
            <Route path="/AllWorkshops" element={<AllWorkshops />} />
            <Route path="/FormPage" element={<FormPage />} />
            <Route path="/GoodBye" element={<GoodBye />} />
            <Route path="/ListOfTherapists" element={<ListOfTherapists />} />
            <Route path="/OpenPage" element={<OpenPage />} />
            <Route path="/TreatPage" element={<TreatPage />} />
            </Routes>
        </Provider>
    );
}

export default App;



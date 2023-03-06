import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { createStore } from 'redux';
import './styles/index.css';

import { Header } from './components/header';
import { Pricing } from './components/pricing';

// // // // // // // // // //

const initialState = {};
const reducer = function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(reducer);

// // // // // // // // // //

function Root() {
    return (
        <>
            <Outlet />
        </>
    );
}

function Home() {
    return (
        <>
            <Header />;
            <Pricing />
        </>
    );
}

function SignUp() {
    return null;
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// // // // // // // // // //

// index.js

// Basic
// Free
// Up to 5 users for free
// Basic document collaboration
// 2 gb storage
// Great security and support
// Try for Free

// Pro
// $9.99
// Per user, billed monthly
// All essential integrations
// 50 gb storage
// More control and insights
// Try for Free

// Ultimate
// $19.99
// Per user, billed monthly
// Robust work management
// 100 gb storage
// VIP support
// Try for Free

// <!-- If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page -->
// Coming 4 Nov 2020

// <!-- If you're choosing to make this timer dynamic, have it countdown from the date you set above -->
// 47 Days
// 07 Hours
// 56 Min
// 14 Sec
// Get Started

// // // // // // // // // // // // // // // // // // // //

// sign up html
// Work smarter. Save time.

// Easily manage your projects. Get on the list and receive in-app perks available only to
// early subscribers. We are moving into final development and getting ready for official launch soon.

// <!-- If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page -->
// Coming 4 Nov 2020

// <!-- If you're choosing to make this timer dynamic, have it countdown from the date you set above -->
// 47 Days
// 07 Hours
// 56 Min
// 14 Sec

// Name
// Email Address
// Basic Pack Free
// Basic Pack Free
// Pro Pack $9.99
// Ultimate Pack $19.99
// Phone Number
// Company
// Get on the list

// // // // // // // // // //

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    Outlet,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import './styles/index.css';
import { Header } from './components/header';
import { Pricing } from './components/pricing';
import { Footer } from './components/footer';
import { SignUp } from './components/signUp';

import { store } from './store.js';

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
            <Footer />
        </>
    );
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route
                path="sign-up"
                element={<SignUp state={store.getState()} />}
            />
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

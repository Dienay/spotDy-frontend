import React from 'react';
import useProtectedRoute from '../Hooks/useProtectedRoute';


function HomePage() {
    const token = useProtectedRoute();
    return (
        <h1>Home</h1>
    )
}

export default HomePage;
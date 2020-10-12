import React from 'react';
import useProtectedRoute from '../Hooks/useProtectedRoute';


function CreateMusicPage() {
    const token = useProtectedRoute();
    return (
        <h1>CreateMusicPage</h1>
    )
}

export default CreateMusicPage;
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

export default function App() {
    const routing = useRoutes(router(auth));
    
    return {routing};
}

import React, { useEffect } from 'react';
import Template from '../components/Template'
import Home from "../components/Home";

const Index = () => {
    useEffect(() => {
        document.title = 'Jonas Lennie | Developer';
    });

    return (
        <Template>
            <Home />
        </Template>
    )
}

export default Index;
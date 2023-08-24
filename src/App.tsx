import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App h-screen" data-testid="app">
            <HomePage/>
        </div>
    );
}

export default App;

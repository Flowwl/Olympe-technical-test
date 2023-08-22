import * as React from 'react';
import { FC } from 'react';
import logo from "../assets/logo.svg";
import { PlaylistContextProvider } from "../modules/songs";

const HomePage: FC = () => {

    return (
        <PlaylistContextProvider>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </PlaylistContextProvider>
    );
};

export default HomePage;

import * as React from 'react';
import { FC } from 'react';
import { PlaylistContextProvider } from "../modules/songs";
import { Library } from "../components/layout";

const HomePage: FC = () => {

    return (
        <PlaylistContextProvider>
            <Library/>
        </PlaylistContextProvider>
    );
};

export default HomePage;

import * as React from 'react';
import { FC } from 'react';
import { PlaylistContextProvider } from "../modules/songs";
import { Library } from "../components/layout";
import { PlaylistPlayer } from "../modules/songs/components";

const HomePage: FC = () => {

    return (
        <PlaylistContextProvider>
            <div className="flex h-full">
                <Library className="w-72 laptop:w-96"/>
                <PlaylistPlayer className="w-full"/>
            </div>
        </PlaylistContextProvider>
    );
};

export default HomePage;

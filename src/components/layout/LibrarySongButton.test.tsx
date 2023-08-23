import React from "react";
import { render, screen } from "@testing-library/react";

import LibrarySongButton from "./LibrarySongButton";
import { PlaylistContextProvider, Song } from "../../modules/songs";

describe('LibrarySongButton', () => {
    const song: Song = {
        id: "uuid",
        artist: "toto",
        name: "my Incredible Song",
        active: false,
        audio: "https://toto.fr",
        color: ["#123"],
        cover: "https://titi.fr"
    }

    it("should render LibrarySongButton", () => {
        render(
            <PlaylistContextProvider>
                <LibrarySongButton song={song}/>
            </PlaylistContextProvider>
        );


        expect(screen.getByTestId("library-song-button")).toBeInTheDocument();
    });

    it("should display the basic info of the song", () => {
        render(
            <PlaylistContextProvider>
                <LibrarySongButton song={song}/>
            </PlaylistContextProvider>
        );

        expect(screen.getByText(song.name)).toBeInTheDocument();
        expect(screen.getByText(song.artist)).toBeInTheDocument();
    })
});

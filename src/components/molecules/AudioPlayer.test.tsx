import React from "react";
import { render, screen } from "@testing-library/react";
import AudioPlayer from "./AudioPlayer";
import { AudioPlayerContextProvider, PlaylistContextProvider } from "../../modules/songs";

describe('AudioPlayer', () => {
    it("should render AudioPlayer", () => {
        render(
            <PlaylistContextProvider>
                <AudioPlayerContextProvider>
                    <AudioPlayer/>
                </AudioPlayerContextProvider>
            </PlaylistContextProvider>
        );

        expect(screen.getByTestId("audio-player")).toBeInTheDocument();
    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import AudioToolBar from "./AudioToolBar";
import { AudioPlayerContextProvider, PlaylistContextProvider } from "../../modules/songs";

describe('AudioToolBar', () => {
    it("should render AudioToolBar", () => {
        render(
            <PlaylistContextProvider>
                <AudioPlayerContextProvider>
                    <AudioToolBar/>
                </AudioPlayerContextProvider>
            </PlaylistContextProvider>
        );

        expect(screen.getByTestId("audio-toolbar")).toBeInTheDocument();
    });
});

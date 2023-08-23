import React from "react";
import { render, screen } from "@testing-library/react";
import Library from "./Library";
import { PlaylistContextProvider } from "../../modules/songs";

describe('Library', () => {
    it("should render Library", () => {
        render(
            <PlaylistContextProvider>
                <Library/>
            </PlaylistContextProvider>
        );

        expect(screen.getByTestId("library")).toBeInTheDocument();
    });
});

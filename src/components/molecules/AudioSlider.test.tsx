import React from "react";
import { render, screen } from "@testing-library/react";
import AudioSlider from "./AudioSlider";

describe('AudioSlider', () => {
    it("should render AudioSlider", () => {
        render(<AudioSlider currentDuration={100} songTotalDuration={300} onDurationChange={jest.fn}/>);

        expect(screen.getByTestId("audio-slider")).toBeInTheDocument();
    });
    it("should render AudioSlider", () => {
        const duration = 100;
        const currentTime = 20;
        render(<AudioSlider currentDuration={currentTime} songTotalDuration={duration} onDurationChange={jest.fn}/>);

        expect(screen.getByText("0:20")).toBeInTheDocument();
        expect(screen.getByTestId("slider")).toBeInTheDocument();
        expect(screen.getByText("1:40")).toBeInTheDocument();
    });
});

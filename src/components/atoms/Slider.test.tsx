import React from "react"
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe('Slider', () => {
    it("should render the slider", () => {
        render(<Slider value={0} maxValue={100} minValue={5} onSliderChange={jest.fn()}/>)

        screen.getByTestId("slider")
    })
});

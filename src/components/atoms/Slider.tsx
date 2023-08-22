import * as React from 'react';
import { FC } from 'react';
import cx from "classnames";

interface SliderProps {
    className?: string;
    value: number;
    minValue?: number;
    maxValue: number;
    onSliderChange?: (value: number) => void;
}

const Slider: FC<SliderProps> = ({ className, value, maxValue, minValue = 0, onSliderChange }) => {

    return (
        <input
            data-testid="slider"
            className={cx(className)} type={"range"}
            onChange={(e) => onSliderChange && onSliderChange(parseInt(e.target.value))} value={value}
            min={minValue}
            max={maxValue}
            readOnly
        />
    );
};

export default Slider;

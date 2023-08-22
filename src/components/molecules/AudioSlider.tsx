import * as React from 'react';
import { FC } from 'react';
import cx from "classnames";
import { Slider } from "../atoms";
import { formatDuration } from "../../modules/songs/utils";

interface AudioSliderProps {
    className?: string;
    currentDuration: number;
    songTotalDuration: number;
    onDurationChange: (value: number) => void;
}

const AudioSlider: FC<AudioSliderProps> = ({ className, currentDuration, songTotalDuration, onDurationChange }) => {
    return (
        <div className={cx("flex gap-2 w-3/4 mx-auto", className)} data-testid="audio-slider">
            <p>{formatDuration(currentDuration)}</p>
            <Slider value={currentDuration} maxValue={songTotalDuration} onSliderChange={onDurationChange} className="w-full"/>
            <p>{formatDuration(songTotalDuration)}</p>
        </div>
    );
};

export default AudioSlider;

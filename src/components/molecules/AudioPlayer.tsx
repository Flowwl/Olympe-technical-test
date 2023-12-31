import * as React from 'react';
import { FC } from 'react';
import cx from "classnames";
import AudioSlider from "./AudioSlider";
import { useAudioPlayerContext } from "../../modules/songs";
import AudioToolBar from "./AudioToolBar";

interface AudioPlayerProps {
    className?: string;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ className }) => {
    const { changeCurrentTime, songCurrentTime, songDuration } = useAudioPlayerContext();

    return (
        <div className={cx("w-full", className)} data-testid="audio-player">
            <p className="font-bold">Player</p>
            <AudioSlider
                currentDuration={songCurrentTime}
                songTotalDuration={songDuration}
                onDurationChange={changeCurrentTime}
            />
            <AudioToolBar className="mt-5"/>
        </div>
    );
};

export default AudioPlayer;

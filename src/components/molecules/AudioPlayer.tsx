import * as React from 'react';
import { FC } from 'react';
import cx from "classnames";

interface AudioPlayerProps {
    className?: string;
}

const AudioPlayer: FC<AudioPlayerProps> = ({ className }) => {

    return (
        <div className={cx(className)}>
            <p>AudioPlayer</p>
        </div>
    );
};

export default AudioPlayer;

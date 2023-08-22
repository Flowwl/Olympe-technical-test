import * as React from 'react';
import { FC } from 'react';
import cx from "classnames";
import { getIconComp } from "../../constants";
import { useAudioPlayerContext, usePlaylistContext } from "../../modules/songs";

interface AudioToolBarProps {
    className?: string;
}

const AudioToolBar: FC<AudioToolBarProps> = ({ className}) => {
    const { selectNextSong, selectPreviousSong } = usePlaylistContext();
    const { play, pause, isPlaying } = useAudioPlayerContext();

    const PlayIcon = getIconComp("PLAY");
    const PauseIcon = getIconComp("PAUSE");
    const PreviousIcon = getIconComp("PREVIOUS");
    const NextIcon = getIconComp("NEXT");
    return (
        <div className={cx("flex w-3/4 mx-auto items-center justify-evenly", className)} data-testid="audio-toolbar">
            <PreviousIcon className="h-8 w-8 cursor-pointer hover:opacity-70" onClick={selectPreviousSong}/>
            {isPlaying
                ? <PauseIcon className="h-16 w-16 cursor-pointer hover:opacity-70" onClick={() => pause()}/>
                : <PlayIcon className="h-16 w-16 cursor-pointer hover:opacity-70" onClick={() => play()}/>
            }
            <NextIcon className="h-8 w-8 cursor-pointer hover:opacity-70" onClick={selectNextSong}/>
        </div>
    );
};

export default AudioToolBar;

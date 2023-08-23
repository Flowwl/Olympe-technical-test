import * as React from 'react';
import { FC } from 'react';
import cx from "classnames";
import { usePlaylistContext } from "../contexts";
import { AudioPlayer } from '../../../components/molecules';
import { AudioPlayerContextProvider } from "../contexts";

interface PlaylistPlayerProps {
    className?: string;
}

const PlaylistPlayer: FC<PlaylistPlayerProps> = ({ className }) => {
    const { selectedSong } = usePlaylistContext();

    if (!selectedSong) {
        return null;
    }
    return (
        <AudioPlayerContextProvider>
            <div className={cx("mx-auto flex flex-col justify-center items-center gap-10", className)}>
                <div className="flex flex-col gap-5">
                    <img src={selectedSong.cover} alt={selectedSong.name} className="h-48 w-48 rounded-2xl"/>
                    <div>
                        <p>{selectedSong.name}</p>
                        <p>{selectedSong.artist}</p>
                    </div>
                </div>
                <AudioPlayer/>
            </div>
        </AudioPlayerContextProvider>
    );
};

export default PlaylistPlayer;

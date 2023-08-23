import * as React from 'react';
import { FC } from 'react';
import cx from "classnames";
import { usePlaylistContext, Song } from "../../modules/songs";

interface LibrarySongButtonProps {
    className?: string;
    song: Song;
}

const LibrarySongButton: FC<LibrarySongButtonProps> = ({ className, song }) => {
    const { selectSong, selectedSong } = usePlaylistContext();

    const isSelected = selectedSong?.id === song.id;
    return (
        <div
            data-testid="library-song-button"
            className={cx(
                "cursor-pointer flex items-center truncate gap-2 p-2",
                {
                    "hover:bg-blue-100": !isSelected,
                    "bg-blue-400": isSelected
                },
                className
            )}
            onClick={() => selectSong(song.id)}
        >
            <img src={song.cover} alt={song.name} className="h-16 w-16"/>
            <div className={"flex flex-col w-full text-left"}>
                <p>{song.name}</p>
                <p className="text-xs">{song.artist}</p>
            </div>
        </div>
    );
};

export default LibrarySongButton;

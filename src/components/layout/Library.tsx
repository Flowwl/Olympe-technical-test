import * as React from 'react';
import { FC } from 'react';
import cx from "classnames";
import { usePlaylistContext } from "../../modules/songs";
import LibrarySongButton from "./LibrarySongButton";

interface LibraryProps {
    className?: string;
}

const Library: FC<LibraryProps> = ({ className }) => {
    const { playlist } = usePlaylistContext();
    return (
        <div className={cx("w-72 overflow-y-auto shadow-library", className)} data-testid="library">
            <h2 className="font-bold text-left ml-2">Library</h2>
            <div className="flex flex-col mt-5 gap-1">
                {playlist.map((song) => <LibrarySongButton key={song.id} song={song}/>)}
            </div>
        </div>
    );
};

export default Library;

import React, { FC, ReactNode, useState } from "react";
import { createCtx } from "../../../utils";
import { generatePlaylist, Song } from "../dtos";

interface Props {
    children: ReactNode;
}

const playlist = generatePlaylist();
const PlaylistContextProvider: FC<Props> = ({ children }) => {
    const [selectedSong, setSelectedSong] = useState<Song>(playlist[0]);

    const selectSong = (id: string) => {
        const song = playlist.find((song) => song.id === id);
        if (song) {
            setSelectedSong(song);
        }
    };

    const selectNextSong = () => {
        if (!selectedSong) { return; }
        const currentSongIndex = playlist.findIndex((song) => song.id === selectedSong.id);

        if ((currentSongIndex + 1) < playlist.length) {
            setSelectedSong(playlist[currentSongIndex + 1]);
        }
    };

    const selectPreviousSong = () => {
        if (!selectedSong) { return; }
        const currentSongIndex = playlist.findIndex((song) => song.id === selectedSong.id);

        if ((currentSongIndex - 1) >= 0) {
            selectSong(playlist[currentSongIndex - 1].id);
        }
    };

    return (
        <PlaylistContextBaseProvider value={{
            playlist,
            selectedSong,
            selectSong,
            selectNextSong,
            selectPreviousSong
        }}>
            {children}
        </PlaylistContextBaseProvider>
    );
};

export default PlaylistContextProvider;

export interface PlaylistContext {
    playlist: Song[];
    selectSong: (id: string) => void;
    selectedSong: Song;
    selectNextSong: () => void;
    selectPreviousSong: () => void;
}

export const [usePlaylistContext, PlaylistContextBaseProvider] = createCtx<PlaylistContext>();

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { createCtx } from "../../../utils";
import { usePlaylistContext } from "./PlaylistContext";
import { useAudioAnalyzer } from "../../../hooks";

interface Props {
    children: ReactNode;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
const AudioPlayerContextProvider: FC<Props> = ({ children }) => {
    const { selectedSong, selectNextSong } = usePlaylistContext();

    const audioRef = useRef<null | HTMLAudioElement>(null);
    const intervalRef = useRef<NodeJS.Timer>();

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const { analyzerData } = useAudioAnalyzer(audioRef.current)

    const updateCurrentTime = () => setCurrentTime(Math.floor(audioRef.current?.currentTime || 0))
    const updateDuration = () => setDuration(Math.floor(audioRef.current?.duration || 0))


    const pause = () => setIsPlaying(false);
    const play = () => setIsPlaying(true);

    const changeCurrentTime = (value: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
            updateCurrentTime()
        }
    };

    const handleNextSong = () => {
        audioRef.current?.pause();
        selectNextSong();
        updateCurrentTime()
    };

    useEffect(() => {
        clearInterval(intervalRef.current);
        if (isPlaying) {
            audioRef.current?.play();
            intervalRef.current = setInterval(updateCurrentTime, 1000);
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        return () => {
            audioRef.current?.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        setCurrentTime(0)
    }, [selectedSong])


    return (
        <AudioPlayerContextBaseProvider value={{
            play,
            pause,
            changeCurrentTime,
            songCurrentTime: currentTime,
            songDuration: duration,
            isPlaying,
            analyzerData
        }}>
            <audio
                ref={audioRef}
                preload="auto"
                src={selectedSong?.audio}
                onDurationChange={updateDuration}
                onEnded={handleNextSong}
                autoPlay={isPlaying}
            />
            {children}
        </AudioPlayerContextBaseProvider>
    );
};

export default AudioPlayerContextProvider;

export interface AudioPlayerContext {
    play: () => void;
    pause: () => void;
    isPlaying: boolean;
    changeCurrentTime: (value: number) => void;

    songDuration: number;
    songCurrentTime: number;
    analyzerData: any;
}

export const [useAudioPlayerContext, AudioPlayerContextBaseProvider] = createCtx<AudioPlayerContext>();

import { useEffect, useState } from "react";

export const useAudioAnalyzer = (audio: HTMLAudioElement) => {
    const [analyzerData, setAnalyzerData] = useState({});

    const audioAnalyzer = () => {
        const audioCtx = new window.AudioContext();
        const analyzer = audioCtx.createAnalyser();
        analyzer.fftSize = 2048;

        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const source = audioCtx.createMediaElementSource(audio);

        source.connect(analyzer);
        source.connect(audioCtx.destination);
        // @ts-expect-error it exists
        source.onended = () => {
            source.disconnect();
        };

        // set the analyzerData state with the analyzer, bufferLength, and dataArray
        setAnalyzerData({ analyzer, bufferLength, dataArray });
    };

    useEffect(() => {
        audioAnalyzer();
    }, []);

    return { analyzerData, audioAnalyzer };
};

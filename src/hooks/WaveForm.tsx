import React, { FC, useEffect, useRef } from "react";
import { animateBars } from "./animateBars";
/* eslint-disable @typescript-eslint/no-explicit-any */
const WaveForm: FC<{ analyzerData: any }> = ({ analyzerData }: any) => {
    // Ref for the canvas element
    const canvasRef = useRef(null);
    const { dataArray, analyzer, bufferLength } = analyzerData;

    // Function to draw the waveform
    const draw = (dataArray: any, analyzer: any, bufferLength: any) => {
        const canvas = canvasRef.current;
        if (!canvas || !analyzer) {
            return;
        }
        // @ts-expect-error ert
        const canvasCtx = canvas.getContext("2d");

        const animate = () => {
            requestAnimationFrame(animate);
            // @ts-expect-error ert
            // eslint-disable-next-line no-self-assign
            canvas.width = canvas.width;
            animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength);
        };

        animate();
    };

    // Effect to draw the waveform on mount and update
    useEffect(() => {
        draw(dataArray, analyzer, bufferLength);
        console.log(dataArray, analyzer, bufferLength)
    }, [dataArray, analyzer, bufferLength]);

    // Return the canvas element
    return (
        <canvas
            className="w-96 h-96 mx-auto bg-gray-400"
            ref={canvasRef}
        />
    );
};

export default WaveForm;

import React from 'react';

interface VisualProps {
    className?: string;
    fill?: string;
    style?: React.CSSProperties;
}

/**
 * Világoskék, szögletesebb "splat" alakzat
 */
export const BlobBlue = ({ className, fill = "#c8e4fe", style }: VisualProps) => (
    <svg viewBox="0 0 151 153" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            d="M91.2.2a7 7 0 0 1 6.2 6.5q.3 9 .2 18.1c0 4.5.3 10-.3 14.4 9-5.3 18.6-10 28-14.7 4.7-2.5 8.5 0 10.8 4.3q6.9 13 13.5 26.4a8 8 0 0 1 0 5.2c-2 4-9 6.8-12.7 8.7-4.7 2.4-9.5 5.2-14 7.1 7.7 4.4 16.4 8.3 24 13.1.8.6 2.3 2.3 2.6 3.3.5 1.5.6 4-.2 5.4q-4 8.3-8.6 16.4c-1.9 3.3-4.7 9.4-7 12.2q-1 1.4-2.6 2c-4.3 1.6-9.5-2-13.3-4.1l-12.1-6.5q-4.1-2.4-8.4-4.5.3 2 .2 4c0 9.4.3 19-.2 28.3-.2 3.4-3.4 6-6.6 6.1-4.6.3-9.6.1-14.2.1H59.4c-3-.3-6-2.5-6.5-5.7-.5-4-.3-8.4-.3-12.4V113l-.4.3c-.8.5-2.2 1-3 1.6l-9.6 5-9 4.7q-3 1.8-6.4 3.2a7 7 0 0 1-9.3-3.2q-5.4-10.1-10.6-20.1C3 102 1.2 99 .3 96.3a7 7 0 0 1 0-3.8c1-4.3 7.5-6.5 11-8.5 5-2.8 10.7-5.2 15.7-8v-.3c-1.2-.8-4-2.1-5.3-2.9l-11.3-6c-2.6-1.3-5.2-2.4-7.5-4.3C.8 61-.5 57.4.6 55c1.7-4.3 4.2-8.4 6.4-12.5l4.8-9.1c1.9-3.5 4.1-9.2 8.3-10.1 3.6-.8 6.1 1.1 9 2.7l9.7 5.2 6.8 3.7c2.2 1.2 5 2.5 7 3.9.2-2.3.1-5.4.1-7.8V7.5c.6-9 9-7.4 15.2-7.4h11.6q5.8-.2 11.7.1"
        />
    </svg>
);

/**
 * Korall színű, buborékosabb alakzat
 */
export const BlobCoral = ({ className, fill = "#e8adaa", style }: VisualProps) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            d="M116.2.6a48.4 48.4 0 0 0-55.5 40 4 4 0 0 1-4.5 3.2 48.4 48.4 0 1 0-15.6 95.5 4 4 0 0 1 3.2 4.5 48.4 48.4 0 1 0 95.5 15.6 4 4 0 0 1 4.5-3.2 48.4 48.4 0 0 0 15.6-95.5 4 4 0 0 1-3.2-4.5 48.4 48.4 0 0 0-40-55.6"
        />
    </svg>
);

/**
 * Kézzel rajzolt korall szikra / accent
 */
export const SparkleAccent = ({ className, fill = "#e6a8a5", style }: VisualProps) => (
    <svg viewBox="0 0 87 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.5 43c7.1-1 14.3-2.6 21.5-1.4q.7 0 .9-.6 0-.8-.7-1c-7.3-1.2-14.6.4-21.9 1.5a.8.8 0 1 0 .2 1.6M62.1 33q2.7-3.7 6.7-5.7.7-.4.4-1a1 1 0 0 0-1-.4q-4.4 2.1-7.3 6a.8.8 0 1 0 1.2 1M52 12q.7-5.6 4.7-9.3a.8.8 0 0 0-1-1.1q-4.5 4-5.2 10.1a.8.8 0 0 0 1.6.2"
        />
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 13.3q-.7 1.3-1.2 2.6l-.3 1.9q0 1.1 1 1.5 1.5.2 2-.3.7-.4 1-1.5c.2-1.3-.2-3.1-.6-4.1q.7-1.2 1.7-2.2c5-5 13.4-5 20.8-.1 2.5 1.7 4.4 5.8 5.8 10.5 2.1 7.1 3 15.4 3.4 17.8l.3 1q.4.4.6.4l.7-.2q.3-.2.3-.8v-.7l-.1-.5q0-1.3.3-2.6.8-4.5 2.2-8.6c2.9-9 5.5-18.6 11.5-26.1a.8.8 0 1 0-1.2-1C58.6 8 55.8 17.7 52.9 26.9q-1.2 3.6-2 7.3c-.6-4.1-1.6-9.8-3.2-14.7-1.5-4.4-3.5-8-6-9.7-8-5.3-17.3-5.1-22.7.3L17.4 12a12.6 12.6 0 0 0-17-2.5.8.8 0 1 0 .8 1.3 11 11 0 0 1 15.3 2.5m.8 2-.5 1.1-.2 1v.4h.5q.2-.2.3-.6.1-1-.1-2"
        />
    </svg>
);

/**
 * Világoskék "mosolygó" ív két pöttyel
 */
export const SmileDoodle = ({ className, fill = "#8bb1c7", style }: VisualProps) => (
    <svg viewBox="0 0 85 43" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.7 5.8c-16 29.7-48 41.8-77.6 25a2 2 0 0 0-2.8.8 2 2 0 0 0 .7 2.8c31.9 18 66.2 5.2 83.3-26.7a2 2 0 0 0-.8-2.8 2 2 0 0 0-2.8.9"
        />
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            d="M28 18.1a6 6 0 1 0 0-12 6 6 0 0 0 0 12M52.8 11.7a5.9 5.9 0 1 0 0-11.7 5.9 5.9 0 0 0 0 11.7"
        />
    </svg>
);
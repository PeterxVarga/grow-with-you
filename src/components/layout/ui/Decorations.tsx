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
            stroke={fill === "currentColor" ? "currentColor" : fill}
            strokeWidth="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64.5 43c7.1-1 14.3-2.6 21.5-1.4q.7 0 .9-.6 0-.8-.7-1c-7.3-1.2-14.6.4-21.9 1.5a.8.8 0 1 0 .2 1.6M62.1 33q2.7-3.7 6.7-5.7.7-.4.4-1a1 1 0 0 0-1-.4q-4.4 2.1-7.3 6a.8.8 0 1 0 1.2 1M52 12q.7-5.6 4.7-9.3a.8.8 0 0 0-1-1.1q-4.5 4-5.2 10.1a.8.8 0 0 0 1.6.2"
        />
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            stroke={fill === "currentColor" ? "currentColor" : fill}
            strokeWidth="0.5"
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
            stroke={fill === "currentColor" ? "currentColor" : fill}
            strokeWidth="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.7 5.8c-16 29.7-48 41.8-77.6 25a2 2 0 0 0-2.8.8 2 2 0 0 0 .7 2.8c31.9 18 66.2 5.2 83.3-26.7a2 2 0 0 0-.8-2.8 2 2 0 0 0-2.8.9"
        />
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            stroke={fill === "currentColor" ? "currentColor" : fill}
            strokeWidth="0.5"
            d="M28 18.1a6 6 0 1 0 0-12 6 6 0 0 0 0 12M52.8 11.7a5.9 5.9 0 1 0 0-11.7 5.9 5.9 0 0 0 0 11.7"
        />
    </svg>
);

/**
 * Apró "Magic Sparkle" ikon (többszínű doodle)
 */
export const MagicSparkle = ({ className, fill = "currentColor" }: VisualProps) => (
    <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Alap forma - sötétebb réteg */}
        <path
            fill="#1e1e1e"
            d="m3.8 1.8 3.1 1q.7.3 1.4-.1L10.5 1Q12.8-.3 13 2.4v3q.1.7.8 1.3L16 8c1.7 1 1.5 2.3-.5 2.8l-2.7.7q-.8.4-1.2 1.2l-.7 2.7c-.5 2-1.8 2.2-2.8.5l-1.4-2.2Q6 13 5.3 13H2.4C.7 13 .2 12 1.1 10.5l1.6-2.2q.3-.6.2-1.4l-1-3q-.7-2.7 2-2"
        />
        {/* Színes kitöltés - alapértelmezetten korall, de a 'fill' prop felülírhatja */}
        <path
            fill={fill === "currentColor" ? "#dea09d" : fill}
            d="m3.8 1.8 3.1 1q.7.3 1.4-.1L10.5 1Q12.8-.3 13 2.4v3q.1.7.8 1.3L16 8c1.7 1 1.5 2.3-.5 2.8l-2.7.7q-.8.4-1.2 1.2l-.7 2.7c-.5 2-1.8 2.2-2.8.5l-1.4-2.2Q6 13 5.3 13H2.4C.7 13 .2 12 1.1 10.5l1.6-2.2q.3-.6.2-1.4l-1-3q-.7-2.7 2-2"
        />
        {/* Kontúr és a "szár" rész */}
        <path
            stroke="#f8eceb"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.3"
            d="m14.4 14.4 3.7 3.7M3.8 1.8l3.1 1q.7.3 1.4-.1L10.5 1Q12.8-.3 13 2.4v3q.1.7.8 1.3L16 8c1.7 1 1.5 2.3-.5 2.8l-2.7.7q-.8.4-1.2 1.2l-.7 2.7c-.5 2-1.8 2.2-2.8.5l-1.4-2.2Q6 13 5.3 13H2.4C.7 13 .2 12 1.1 10.5l1.6-2.2q.3-.6.2-1.4l-1-3q-.7-2.7 2-2"
        />
    </svg>
);

/**
 * Nagyobb, többrétegű korall háttér-blob (szekciókhoz vagy nagyobb blokkokhoz)
 */
export const BlobLargeCoral = ({ className, fill = "#e8adaa" }: VisualProps) => (
    <svg viewBox="0 0 388 255" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={className}>
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            d="M238.5 3.2c-50.7-11-101.5 7-113.4 39.9-1 2.7-5 4.1-9.2 3.2-50.7-10.9-101.4 7-113.4 39.9-11.9 33 19.5 68.5 70.2 79.4 4.1.9 6.6 3.8 5.7 6.4-12 33 19.4 68.5 70.1 79.4S250 244.5 262 211.6c1-2.7 5.1-4.1 9.2-3.3 50.7 11 101.4-6.9 113.4-39.8 12-33-19.5-68.5-70.2-79.4-4-1-6.6-3.8-5.7-6.5 12-33-19.4-68.5-70.1-79.4"
        />
    </svg>
);

/**
 * Nagyobb, kék háttér-blob (szekciókhoz vagy nagyobb blokkokhoz)
 */
export const BlobLargeBlue = ({ className, fill = "#c8e4fe" }: VisualProps) => (
    <svg viewBox="0 0 385 264" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={className}>
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            d="M149 10c7.7-3 17.1-1.9 21.1 2.4q10.3 12.1 19.5 24.9c4.6 6.2 11.3 13.5 14.5 20.1 15-16.8 32-33.4 48.2-49.8 8.3-8.4 19.6-9.1 29.4-5.6q29.6 10.8 58.6 22.1c2.5 1 5.7 5 5.6 7.2-.4 7.8-13.6 19-20 25.5-8.2 8.2-16 17.1-24.5 24.7 22.3-2.1 46.3-6 68.7-7.3 2.5-.2 7.8.6 9.4 1.6 2.7 1.6 5.5 4.9 5.4 7.7-.2 10.5-1.5 21.1-2.5 31.7-.7 6.6-.7 18-2.7 24.2q-1 3-4.1 5.5c-8.1 6.8-23.8 7.2-34.6 8.4l-34.6 3.8c-7.9.9-15.9 1.5-23.8 2.8 1.7 1.4 3.4 3.6 4.6 5.2 9.8 13 20.8 25.8 29.5 39.3 3.2 5-1.4 11.7-8.5 15.4-10.3 5.2-21.8 10.2-32.4 15.1L250 247c-3.3 1.6-10 4.9-13.1 6-7.2 2.7-16.6 3-20.8-1-5.4-4.9-9.6-11.2-13.8-16.8-7.1-9.6-15-19-22-28.6l-.6.8c-1.4 1.6-3.8 3.8-5.3 5.5q-8.1 8.5-16.4 17l-15.5 16c-3.8 3.8-7.2 7.5-11.4 11.2a26 26 0 0 1-24.7 5.4c-15.2-5.4-30-11.3-45.2-16.6-5.8-2-13.1-4.4-17.9-7.3a9 9 0 0 1-4.3-5.1c-1.9-7.2 10.5-16.9 16.4-23.4 8.5-9.2 19-18.5 27.2-27.7l-.2-.2c-3.6 0-11.3 1-15.2 1.5l-32 3.7c-7.4.8-14.5 2.1-21.8 2-6.4 0-13-3.6-13.3-8.1-.4-7.8.8-16 1.4-24L3 139.5c.5-6.7-.4-17 8.2-22.7 7.3-4.8 15.2-4.9 23.6-5.8l27.3-3 19.5-2c6.2-.8 14-2 20.1-2.1-2-3.4-5.5-7.6-8-10.8L79 74c-3.3-4.4-7-8.7-10-13.3-8.3-13 12.6-19.5 26.7-26.2l26.4-12.3c8.7-4 18-8.5 26.9-12.1"
        />
    </svg>
);

/**
 * Nagyobb, bézs/sárgás háttér-blob
 */
export const BlobLargeYellow = ({ className, fill = "#feebba", style }: VisualProps) => (
    <svg viewBox="0 0 392 272" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={className} style={style}>
        <path
            fill={fill === "currentColor" ? "currentColor" : fill}
            d="M159.4 272h-.2c-9.4-1.2-19-2.8-27.5-5.8-7.6-2.7-15-6.5-20.8-10.7-14.2-11.6-23-26.1-34.8-38.8-9.3-10-22.6-21.3-42.3-20.6-.7 0-2.8-.1-3.6-.3C7.4 192.6-9.6 171 8.3 158.6c3.3-2.3 7.7-3.7 11.6-5.5 26.8-11.9 7.2-23.8-6.6-35.4-19.2-16.8-17.4-41.8 3.9-57.4a86 86 0 0 1 46.3-14.5c4-.2 9.2.7 13.3.9a63 63 0 0 0 34.1-7.8c6-3.4 11.2-8.7 14.7-13.3 3.2-4.3 5.3-8.9 8.3-13.1 7-10 19.7-15 36-11.3a70 70 0 0 1 24.5 10.9 64 64 0 0 0 24.9 8.3c13 1.7 25.4-.6 37.5-3.5l9.3-2.3a90 90 0 0 1 49.5 3.4c9.1 3.4 17.8 9 22.7 15.2a33 33 0 0 1 7.4 22.3q-.1 2.5-.6 4.8c-.4 4.2 0 7.5 2.1 11.5 3 6 9.2 10.6 16.4 14.6 3.3 1.7 7.4 3.2 10.7 4.9 10.6 5.3 13.8 12.8 9.8 21.2-1.5 3.3-4.3 6.2-6.7 9.2-6.9 8.8-10.2 17.4-3 26.7 2.9 3.7 5.7 5.7 8.7 9q9.2 10 8.9 21.6c-.2 4.6-.2 6-2.2 10.7-6 13.1-23.8 23.8-41.6 30-18.7 6.3-42 7.4-62.3 10-9 1.2-18.4 3.1-26.7 5.8a87 87 0 0 0-22.4 11c-3.8 2.5-5.9 4.7-9.2 7.3q-9.4 7.5-22.1 12-9.5 3.5-20 5l-8.8 1.2z"
        />
    </svg>
);
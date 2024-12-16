import { useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

function YouTubePlayer({ videoLink, onlyAudio }: Props) {
    const videoId = videoLink.split("=")[1];
    const playerRef = useRef<YouTubeProps['onReady']>();

    const onReady: YouTubeProps['onReady'] = (event) => {
        playerRef.current = event.target; // This is the player instance
        event.target.setVolume(100); // Set volume to 100%
        event.target.playVideo(); // Start playback
    };

    const opts: YouTubeProps['opts'] = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            loop: 1,
        },
    };

    return <div className={onlyAudio ? "z-[-1]" : "z-1"}><YouTube videoId={videoId} opts={opts} onReady={onReady} /></div>;
};

interface Props {
    videoLink: string
    onlyAudio: boolean
}

export default YouTubePlayer;
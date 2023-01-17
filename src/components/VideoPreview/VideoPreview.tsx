import React from 'react';
import { VIDEO_MAX_WIDTH, VIDEO_MAX_HEIGHT } from './constants';
import { useVideo } from './useVideo';

const Video = ({ src, height = VIDEO_MAX_HEIGHT, width = VIDEO_MAX_WIDTH }) => {
  const { videoRef } = useVideo();

  return (
    <video
      style={{ height: `${height}px`, width: `${width}px` }}
      ref={videoRef}
      controls
      disablePictureInPicture
      playsInline
      muted
    >
      <source src={src} />
    </video>
  );
};

export default Video;

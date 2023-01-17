import React from 'react';
import { VIDEO_MAX_WIDTH } from './constants';
import { useVideo } from './useVideo';

const Video = ({ src, width = VIDEO_MAX_WIDTH }) => {
  const { videoRef } = useVideo();

  return (
    <video
      style={{ width: `${width}px` }}
      ref={videoRef}
      controls
      disablePictureInPicture
      playsInline
      muted
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;

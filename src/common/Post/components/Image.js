import React, { useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import TipRibbon from "./TipRibbon";
import "react-medium-image-zoom/dist/styles.css";
import "../css/index.css";
import { useCallback } from "react";

const IMAGE_TRANSITION_MS = 200;

const Image = ({ id, item, index, postId, tipValue, tipCounter }) => {
  const [zoomed, setZoomed] = useState(false);
  const [zoomLoaded, setZoomLoaded] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(true);
  const [animationTimer, setAnimationTimer] = useState(null);

  const handleZoomChange = useCallback(
    value => {
      clearTimeout(animationTimer);
      setZoomed(value);
      if (!value && zoomLoaded) {
        setZoomLoaded(false);
        const timer = setTimeout(() => {
          setPreviewVisible(true);
        }, IMAGE_TRANSITION_MS);
        setAnimationTimer(timer);
      }

      if (value) {
        setPreviewVisible(false);
      }
    },
    [animationTimer, zoomLoaded]
  );

  return (
    <div className="media-container">
      <ControlledZoom
        isZoomed={zoomed}
        onZoomChange={handleZoomChange}
        overlayBgColorStart="#16191c00"
        overlayBgColorEnd="#16191c"
      >
        <img
          className={`torrent-img torrent-img-${postId}-${id}`}
          alt="Post Media"
          data-torrent={item.magnetURI}
          data-file-key={index}
          src={decodeURIComponent(item.magnetURI.split("ws=")[1])}
          style={{ opacity: previewVisible ? 1 : 0 }}
        />
        <img
          className={`enlarged-img enlarged-img-${postId}-${id}`}
          alt="Post Media"
          data-file-key={index}
          onLoad={() => {
            setZoomLoaded(true);
          }}
          style={{ opacity: zoomLoaded ? 1 : 0 }}
          src={decodeURIComponent(item.magnetURI.split("ws=")[1])}
        />
        <TipRibbon
          tipCounter={tipCounter}
          tipValue={tipValue}
          zoomed={zoomed}
        />
      </ControlledZoom>
    </div>
  );
};

export default Image;

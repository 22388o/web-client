import React, { useEffect } from "react";
import moment from "moment";
import av1 from "../images/av1.jpg";

const Post = ({
  id,
  timestamp,
  avatar,
  contentItems = {},
  username,
  webTorrentClient
}) => {
  const attachMedia = () => {
    Object.entries(contentItems)
      .filter(([key, item]) => item.type === "video/embedded")
      .map(([key, video]) => {
        webTorrentClient.add(video.magnetURI, torrent => {
          const file = torrent.files.find(file => file.name.endsWith(".mp4"));
          //file.appendTo('body') // append the file to the DOM

          file.renderTo(`video#torrent-video-${id}-${key}`, {
            autoplay: true,
            muted: true
          });
        });
      });

    Object.entries(contentItems)
      .filter(([key, item]) => item.type === "image/embedded")
      .map(([key, image]) => {
        webTorrentClient.add(image.magnetURI, torrent => {
          const file = torrent.files.find(
            file => file.name.endsWith(".jpg") || file.name.endsWith(".png")
          );

          file.renderTo(`img#torrent-image-${id}-${key}`);
        });
      });
  };

  // const setVideoRef = (key, ref) => {
  //   setVideoRefs({
  //     ...videoRefs,
  //     [key]: ref
  //   });
  // };

  const parseContent = ([key, item]) => {
    if (item.type === "text/paragraph") {
      return <p key={key}>{item.text}</p>;
    }

    if (item.type === "image/embedded") {
      return (
        <img
          id={`torrent-image-${id}-${key}`}
          key={key}
          style={{
            width: "100%",
            maxWidth: 800,
            maxHeight: 800,
            objectFit: "contain"
          }}
        />
      );
    }

    if (item.type === "video/embedded") {
      return (
        <video
          id={`torrent-video-${id}-${key}`}
          key={key}
          className="torrent-video"
          autoPlay={true}
          muted={true}
        />
      );
    }

    return null;
  };

  useEffect(() => {
    attachMedia();
  }, [contentItems.length]);

  return (
    <div className="post">
      <div className="head">
        <div className="user">
          <div
            className="av"
            style={{
              backgroundImage: `url(${avatar})`
            }}
          ></div>
          <div className="details">
            <p>{username}</p>
            <p>{moment.utc(timestamp).fromNow()}</p>
          </div>
        </div>
      </div>

      <div className="content">
        {Object.entries(contentItems).map(parseContent)}
      </div>

      <div className="actions">
        <img src="" alt="" />
        <i className="fas fa-external-link-alt"></i>
      </div>
    </div>
  );
};

export default Post;

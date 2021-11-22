import React from 'react';
import Layout from '@theme/Layout';


export default function MyReactPage() {
  return (
    <Layout>
      <h1>Video Tutorials</h1>
      <h2>Error Reporting</h2>
      <p>The error reporting developers' introductory video by Brian Kim.</p>
        <head>
          <link href="https://vjs.zencdn.net/7.15.4/video-js.css" rel="stylesheet" />
        </head>

        <body>
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            width="720"
            height="480"
            data-setup="{}"
          >
            <source src="/video/Error_Report_guide.mp4" type="video/mp4" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a
              web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
          <script src="https://vjs.zencdn.net/7.15.4/video.min.js"></script>
        </body>
    </Layout>
  );
}



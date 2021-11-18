import React from 'react';
import Layout from '@theme/Layout';
// import party from "party-js";

// party.settings.debug = false;
// 
// document.body.addEventListener("click", function (e) {
//     e.preventDefault();
//     party.confetti(e);
// });
// document.body.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     party.sparkles(e);
// });



export default function MyReactPage() {
  return (
    <Layout>
      <h1>🎉Happy Birthday Professor Sequin!</h1>
      <p>Happy Birthday and thank you for bring us so much great memory. Thank you for giving me a chance 
        to learn from you from academics to attitude.</p>
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
            poster="img/prof.jpg"
            data-setup="{}"
          >
            <source src="/video/song.mp4" type="video/mp4" />
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

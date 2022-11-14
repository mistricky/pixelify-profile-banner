import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixelify profile banner</title>
        <link
          href="https://unpkg.com/nes.css/css/nes.min.css"
          rel="stylesheet"
        />
        <link href="/kongtext.ttf" />
        <link href="/global.css" rel="stylesheet" />
      </Head>
      <div class="wrapper">
        <p class="title">Pixelify GitHub Profile Generator</p>
        <img id="banner" src="./banner_empty.png" />
        <div class="nes-field">
          <input
            type="text"
            id="text"
            class="nes-input"
            placeholder="Write down what you want to show"
          />
        </div>
        <div class="actions">
          <button class="nes-btn download-btn" href="#">
            Download
          </button>
          <button type="button" class="nes-btn is-success">
            Copy to clipboard
          </button>
        </div>
        <div id="octocat">
          <p class="cursor nes-balloon from-right nes-pointer">
            Fork me on GitHub
          </p>
          <i class="nes-octocat animate"></i>
        </div>
      </div>
    </>
  );
}

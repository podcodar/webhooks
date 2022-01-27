import { React, h, tw } from "../../deps.ts";

function App() {
  return (
    <div class={tw`bg-white flex h-screen`}>
      <h1 class={tw`text-5xl text-gray-600 m-auto mt-20`}>
        Welcome to PodCodar WebHooks! Check our repository <a href="https://github.com/podcodar/webhooks">here</a>
      </h1>
    </div>
  )
}

export default App

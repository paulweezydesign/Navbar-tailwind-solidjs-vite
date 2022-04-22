const App = () => {
  return (
    <div>
      <nav class="grid grid-cols-2 items-center w-[100vw] h-[100px] bg-[#222] text-white/90 shadow-xl">
        <div class="">
          <h1 class="ml-[12%] text-3xl font-black">Vite App</h1>
        </div>
        <div class="flex justify-end mr-[12%] text-xl uppercase">
          <a class="ml-8" href="/">
            Home
          </a>
          <a class="ml-8" href="/about">
            About
          </a>
          <a class="ml-8" href="/contact">
            contact
          </a>
          <a class="ml-8" href="/blog">
            Blog
          </a>
        </div>
      </nav>
    </div>
  );
};

export default App;

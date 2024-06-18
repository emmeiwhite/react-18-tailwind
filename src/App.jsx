function App() {
  return (
    <section className="text-center text-emerald-700">
      <nav className="bg-yellow-500">Main Navigation</nav>

      <main>
        <div className="bg-slate-200 text-3xl text-blue-500 py-4 my-8 border-b-4 border-blue-600">
          <h1>Left Side</h1>
        </div>
        <div className="bg-stone-300">
          <h1 className="font-semibold uppercase tracking-[0.5rem]">Right Side</h1>
          <p className="text-semibold tracking-widest">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, recusandae debitis.
            Minima tempore, quibusdam unde voluptas veritatis quod rerum dicta corporis fugiat,
            perspiciatis dolore distinctio magnam, nemo consequuntur. Quidem, facere.
          </p>
        </div>

        <div className="flex space-x-7 mb-10">
          <p className="inline">TOTAL:</p>
          <p className="inline">$25</p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-8 sm:flex-row justify-center text-sm sm:text-lg">
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
          <div>Item</div>
        </div>
      </main>
    </section>
  )
}

export default App

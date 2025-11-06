export default function Home() {
  const candyItems = [
    { name: "Candy Mix", arabic: "كاندي مشكل", price: 400 },
    { name: "1/2 Candy Mix", arabic: "نص كاندي مشكل", price: 200 },
    { name: "1/4 Candy Mix", arabic: "ربع كاندي مشكل", price: 100 },
    { name: "Marshmallow", arabic: "مارشميلو", price: 500 },
    { name: "1/2 Marshmallow", arabic: "نص مارشميلو", price: 250 },
    { name: "1/4 Marshmallow", arabic: "ربع مارشميلو", price: 125 },
  ];

  const nutsItems = [
    { name: "Nuts Mix", arabic: "مكسرات مشكل", price: 900 },
    { name: "1/2 Nuts Mix", arabic: "نص مكسرات مشكل", price: 450 },
    { name: "1/4 Nuts Mix", arabic: "ربع مكسرات مشكل", price: 225 },
    { name: "Pistachio", arabic: "كيلو فسدق", price: 1000 },
    { name: "Cashews", arabic: "كيلو كاجو", price: 1000 },
    { name: "Hazelnuts", arabic: "كيلو بندق", price: 1100 },
    { name: "Walnuts", arabic: "كيلو عين جمل", price: 800 },
    { name: "Roasted Almonds", arabic: "كيلو لوز محمص", price: 850 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl sm:text-8xl opacity-20 animate-bounce">🎀</div>
        <div className="absolute top-32 right-20 text-5xl sm:text-7xl opacity-20 animate-pulse">🍭</div>
        <div className="absolute bottom-32 left-20 text-5xl sm:text-7xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🍬</div>
        <div className="absolute bottom-20 right-10 text-6xl sm:text-8xl opacity-20 animate-pulse" style={{ animationDelay: '0.7s' }}>🎀</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-md sm:max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center pt-12 pb-8 sm:pt-16 sm:pb-12">
          <div className="inline-block mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-4xl sm:text-5xl">🎀</span>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 bg-clip-text text-transparent leading-tight">
                DODO<br />CANDY
              </h1>
              <span className="text-4xl sm:text-5xl">🎀</span>
            </div>
          </div>
          <p className="text-pink-600 text-xl sm:text-2xl font-bold tracking-widest">✨ Premium Selection ✨</p>
        </div>

        {/* Menu Container */}
        <div className="pb-16">
          {/* CANDY Section */}
          <section className="mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <span className="text-3xl sm:text-4xl">🎀</span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-pink-600">CANDY</h2>
              <span className="text-3xl sm:text-4xl">🎀</span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {candyItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white/60 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-7 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 border-2 border-pink-200 hover:border-pink-400"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex-1">
                      <p className="text-pink-600 font-bold text-xl sm:text-2xl md:text-3xl">{item.name}</p>
                      <p className="text-pink-500 text-base sm:text-lg md:text-xl font-medium">{item.arabic}</p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-pink-600 font-black text-3xl sm:text-4xl md:text-5xl min-w-[80px] text-right">
                        {item.price}
                      </span>
                      <span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform">🍭</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-12 sm:my-16">
            <div className="h-2 flex-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
            <span className="text-4xl sm:text-5xl">🎀</span>
            <div className="h-2 flex-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full"></div>
          </div>

          {/* NUTS Section */}
          <section className="mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <span className="text-3xl sm:text-4xl">🎀</span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-pink-600">NUTS</h2>
              <span className="text-3xl sm:text-4xl">🎀</span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {nutsItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white/60 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-7 shadow-lg hover:shadow-2xl hover:bg-white/80 transition-all duration-300 border-2 border-pink-200 hover:border-pink-400"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex-1">
                      <p className="text-pink-600 font-bold text-xl sm:text-2xl md:text-3xl">{item.name}</p>
                      <p className="text-pink-500 text-base sm:text-lg md:text-xl font-medium">{item.arabic}</p>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-pink-600 font-black text-3xl sm:text-4xl md:text-5xl min-w-[80px] text-right">
                        {item.price}
                      </span>
                      <span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform">🥜</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Decorative Footer Section */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 my-12 sm:my-16 text-4xl sm:text-5xl">
            <span className="animate-bounce">🍬</span>
            <span className="animate-pulse">❤️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍬</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 text-white text-center py-8 sm:py-10 px-4 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl">🎀</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">DODO CANDY</h3>
              <span className="text-3xl sm:text-4xl">🎀</span>
            </div>

            <div className="flex justify-center gap-6 mb-4 sm:mb-6 items-center">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/17KvoUymHL/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
                  <path d="M22.675 0h-21.35C.595 0 0 .6 0 1.333v21.333C0 23.4.595 24 1.325 24h11.495v-9.294H9.692V11.41h3.128V8.709c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.1 2.794.144v3.24h-1.918c-1.505 0-1.797.716-1.797 1.765v2.31h3.588l-.467 3.296h-3.121V24h6.116C23.405 24 24 23.4 24 22.667V1.333C24 .6 23.405 0 22.675 0z" />
                </svg>
              </a>

              <span className="text-pink-300 text-2xl sm:text-3xl">•</span>

              {/* Instagram */}
              <a href="https://www.instagram.com/dodo_candyyy?igsh=MWdvNml0YnZvaDA0MA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
                  <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                </svg>
              </a>
            </div>

        
          </div>
        </footer>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="w-full py-10 bg-gradient-to-r from-purple-600 dark:from-red-400 via-pink-500 dark:via-pink-600 to-red-500 dark:to-purple-400">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl overflow-y-hidden">
            FD & RD Interest Calculator
          </h1>
          <p className="mx-auto max-w-[700px] text-white md:text-xl">
            Calculate your interest and maturity amount from various banks with ease
          </p>
        </div>
      </div>
    </section>
  )
}
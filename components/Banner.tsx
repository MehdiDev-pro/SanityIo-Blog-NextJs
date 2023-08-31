export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Mehdi&apos;s Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to <span className="underline decoration-4 decoration-[#F7AB0A]">Every Developers</span> favourite blog in the devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">Unlock the world of coding with our blog! Explore new programming paradigms and stay updated on the latest technological advancements. Join us on a journey through the realm of programming excellence!</p>
    </div>
  );
}

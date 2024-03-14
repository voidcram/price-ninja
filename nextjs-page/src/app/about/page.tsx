const AboutPage = () => {
  return (
    <div className="flex gap-16">
      <div className="flex-1 flex flex-col gap-8 justify-center text-center">
        <h1 className="text-6xl font-bold">Your Destination to Save Time & Money</h1>
        <h2 className="text-gray-400 font-semibold">About Price Ninja</h2>
        <div className="text-xl text-gray-500 font-semibold text-justify mt-10">
          <p className="mb-4">
            <strong className="text-black font-bold text-3xl">Explore & Track:</strong>
          </p>
          <p className="mb-4">
            Our platform offers an extensive database of components.
            From processors and graphics cards to motherboards and
            storage drives. You can easily search for the product
            you need, whether computers, laptops, monitors, etc.
          </p>
          <p className="mb-8">
            <strong className="text-black font-bold text-3xl">Price Alerts:</strong>
          </p>
          <p className="mb-4">
            Don't miss out on any offer. Receive notifications when the products
            you have chosen go down in price.
          </p>
          <p>
            At Price Ninja, we believe that every component counts. Discover, compare
            and take your configuration to the next level with us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

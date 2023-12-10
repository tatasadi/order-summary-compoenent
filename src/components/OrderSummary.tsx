export default function OrderSummary() {
  return (
    <div className=" w-[20.4375rem] lg:w-[28.125rem] rounded-[1.25rem] bg-white shadow-[0_40px_40px_-20px_rgba(13,48,189,0.15)]">
      <img
        src="/images/illustration-hero.svg"
        alt="hero-image"
        className="rounded-t-[1.25rem]"
      />
      <div className="flex flex-col items-center px-6 py-8 lg:px-12 lg:p-12 text-center">
        <h1 className="mt-8 text-darkblue font-black text-[1.375rem] lg:text-[1.75rem]">
          Order Summary
        </h1>
        <p className="mt-4 text-desaturatedblue font-medium text-[0.9375rem] leading-[1.5625rem] lg:text-base lg:leading-[1.625rem]">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex items-center bg-verypaleblue p-4 rounded-[0.6875rem] mt-6 justify-between gap-2 w-full">
          <img src="/images/icon-music.svg" alt="music-icon" />
          <div className="flex flex-col">
            <div className="text-darkblue font-black text-sm lg:text-base">
              Annual Plan
            </div>
            <div className="text-desaturatedblue font-medium text-sm lg:text-base">
              $59.99/year
            </div>
          </div>
          <a className="text-brightblue underline font-bold text-[0.8125rem] lg:text-sm hover:text-brightbluelight cursor-pointer">
            Change
          </a>
        </div>
        <button className="mt-6 text-white bg-brightblue hover:bg-brightbluelight font-black px-16 py-4 rounded-[0.6875rem] text-[0.9375rem] cursor-pointer w-full">
          Proceed to Payment
        </button>
        <button className="mt-6 text-desaturatedblue hover:text-darkblue cursor-pointer font-black text-[0.9375rem]">
          Cancel Order
        </button>
      </div>
    </div>
  )
}

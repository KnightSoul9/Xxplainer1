import Link from "next/link"

const CTA = () => {
  return (
    <div className="xl:container xl:mx-auto px-10">
      <div className="flex flex-col justify-center items-center">
        <Link href='/'>
          <button className="bg-[#0070F4] rounded-[46px] px-4 lg:px-11 py-5 text-sm lg:text-2xl font-semibold text-white">Unleash the Power of Content Creation for just Rs.2999! ₹7,999</button>
        </Link>
        <p className="pt-5 px-3 pb-8 text-center text-[#515151]">Reserve a seat before February 5, 2023 to unlock <strong className="text-black">Bonuses worth ₹25,000</strong></p>
      </div>
    </div>
  )
}

export default CTA
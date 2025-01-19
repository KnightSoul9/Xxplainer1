import { footerColOne, footerColTwo, policy } from '@/src/config/constants'
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { ImFacebook, ImLinkedin2, ImTwitter } from 'react-icons/im'



const MobileFooter = () => {
  const getYear = new Date().getFullYear()
  return (
    <div className='px-2'>
      <h2 className='text-[30px] font-bold'>Xplainerr</h2>
      {/* Links  */}
      <div className='grid grid-cols-2 py-5'>
        <div>
          <h3 className='font-medium pb-6'>Column One</h3>
          <div>
            {footerColOne.map((item, index) => (
              <Link key={index} href={`${item.slug}`}><p className='text-[#515151] text-sm font-medium pb-4'>{item.text}</p></Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className='font-medium pb-6'>Column Two</h3>
          <div>
            {footerColTwo.map((item, index) => (
              <Link key={index} href={`${item.slug}`}><p className='text-[#515151] text-sm font-medium pb-4'>{item.text}</p></Link>
            ))}
          </div>
        </div>
      </div>

      {/* Social Icons  */}
      <div className="flex gap-5 items-center pb-5">
        <Link href='/'><ImFacebook size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md' /></Link>
        <Link href='/'><BsInstagram size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md' /></Link>
        <Link href='/'><ImLinkedin2 size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md' /></Link>
        <Link href='/'><ImTwitter size={24} className='text-[#0070F4] bg-[#D7E9FF] p-1 rounded-md' /></Link>
      </div>

      {/* Policy Description  */}
      <p className='text-black text-sm'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>

      {/* Policy Links  */}
      <div className='flex flex-col space-y-2 py-4'>
        {policy.map((item, index) => (
          <Link key={index} href={`${item.slug}`}><span className='border-black border-b'>{item.text}</span></Link>
        ))}
      </div>
      {/* Copyright  */}
      <p className="border-black">{getYear} Xplainerr. All right reserved.</p>
    </div>
  )
}

export default MobileFooter
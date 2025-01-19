import { certificateTexts } from "@/src/config/constants"
import Image from "next/image"

const Certificate = () => {
  return (
    <div className="bg-[#FEF1F0] lg:bg-[#F8FAFF]">
      <div className="container mx-auto py-10 lg:py-24 px-5 lg:px-12 big:px-36 large:px-96">
        <div className="text-center ">
          <h3 className="text-[38px] text-[#FAB804] lg:text-[#101828DE] font-bold leading-[48px]">Get Certified</h3>
          <p className="text-lg text-[#333333] font-medium pt-3 pb-12">Yes! You will be <span className="text-[#FFC000] ">certified</span> for this program once you submit your assignment.</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
          {/******************** Left  ********************/}
          <div className="basis-1/2 order-last lg:order-first">
            {certificateTexts.map((text, index) => (
              <div key={index} className="flex gap-5 justify-center items-center pb-12">
                <div className="basis-1/12">
                  <Image className="bg-[#E28C1926] rounded-md" width={48} height={45} src={`/images/courses/${text.icon}`} alt="icon" />
                </div>
                <p className="basis-11/12 text-sm font-[300]">{text.description}</p>
              </div>
            ))}
          </div>
          {/******************* Right ****************** */}
          <div className="basis-1/2 ">
            <Image src="/images/courses/certificate.svg" width={502} height={365} alt="certificate" className="border border-[#FDBE5F26] rounded-[20px]" />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Certificate
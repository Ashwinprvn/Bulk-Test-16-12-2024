import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
      <div className="bg-blue-200 h-auto w-screen ml-2 mr-2 text-center items-center justify-center">
        <h1 className="font-tafel text-3xl font-extrabold p-2 mt-3 text-blue-950">Essential Vitamins</h1>

        <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-center">
            <h1 className="text-xxs truncate pl-1 text-gray-700" >Online Medicinal Supplies</h1>
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-xxs font-bold pl-2 font-tafel text-blue-900">Get Your Vitamins</h1>
                <h1 className="text-xxs font-bold pl-2 font-tafel text-blue-900">& Minerals</h1>
                <Link href= "https://www.elbrit.org/">
                  <button className="rounded-full bg-blue-900 text-xs scale-75 text-white p-1 w-auto pl-4 pr-4 font-bold">Explore</button>
                </Link>
            </div>
          </div>


         
          <div className="flex justify-center items-center object-fill">
            <Image src="/f2-1.png.png" alt="img" width={150} height={300} className="transform scale-x-[-1]" priority />
          </div>


          <div className="flex flex-col justify-center space-y-1">
            <div className="bg-blue-200 flex flex-row" >
              <Image src="/vitamin.png" width={20} height={1} alt="logo" className="object-contain" loading="lazy"></Image>
              <div className="flex flex-col items-start">
               <p className="text-xxs font-tafel text-blue-900">Vitamins</p>
               <p className="text-xxxs ml-0.5">Increases Vitamis and</p>
               <p className="text-xxxs">minerals in your diet</p>
              </div>
            </div>
            <div className="bg-blue-200 flex flex-row" >
              <Image src="/machine.png" width={20} height={1} alt="logo" className="object-contain" loading="lazy"></Image>
              <div className="flex flex-col items-start">
               <p className="text-xxs font-tafel text-blue-900">Weight Loss</p>
               <p className="text-xxxs ml-0.5">Weight Loss</p>
               <p className="text-xxxs">Find scientifically proven solutions</p>
              </div>
            </div>
            <div className="bg-blue-200 flex flex-row" >
              <Image src="/functional-foods.png" width={20} height={1} alt="logo" className="object-contain" loading="lazy"></Image>
              <div className="flex flex-col items-start">
               <p className="text-xxs font-tafel text-blue-900">Functional Foods</p>
               <p className="text-xxxs ml-0.5">Functional Foods</p>
               <p className="text-xxxs">From protein powers to baby formula</p>
              </div>
            </div>
            </div>
            </div>
            
            <div className="h-auto w-screen text-start items-start">
              <div className="flex space-x-1 ml-7 ">
                <img src="/blue.png" className="h-5 w-5" loading="lazy"></img>
                <img src="/blue.png" className="h-5 w-5" loading="lazy"></img>
              </div>
            </div>

            <div>
               <div className="bg-blue-900 rounded-t-3xl justify-evenly flex-row flex ml-4 mr-4 mt-2 mb-0">
                <div className="flex  flex-col mt-2 items-center justify-center text-center object-center">
                  <Image src="/clinic.png" height={45} width={45} alt="img" className="object-contain object-center" loading="lazy"></Image>
                  <h1 className="text-xs text-white">Clinically Studied</h1>
                  <h1 className="text-xxs text-white font-thin scale-75">All products that we offer have</h1>
                  <h1 className="text-xxs text-white font-thin scale-75">undergone lab and safety test</h1>
                </div>
                <div className="flex  flex-col mt-2 items-center justify-center text-center object-center">
                  <Image src="/vegan.png" height={45} width={45}  alt="img" className="object-contain" loading="lazy"></Image>
                  <h1 className="text-xs text-white"> Vegetarian Friendly</h1>
                  <h1 className="text-xxs text-white font-thin scale-75"> We have a wide selection of vegetarian</h1>
                  <h1 className="text-xxs text-white font-thin scale-75">products to meet your needs</h1>
                </div>
                <div className="flex  flex-col mt-2 items-center justify-center text-center object-center">
                  <Image src="/flag.png" height={45} width={45}  alt="img" className="object-contain" loading="lazy"></Image>
                  <h1 className="text-xs text-white">Clinically Studied</h1>
                  <h1 className="text-xxs text-white font-thin scale-75"> Shop local and explore health products </h1>
                  <h1 className="text-xxs text-white font-thin scale-75">made right here in India</h1>
                </div>
               </div>
            </div>
            <div className="bg-white">
               <div className="bg-blue-900 rounded-b-3xl justify-evenly flex-row flex ml-4 mr-4 border border-blue-900">
                <div className="flex  flex-col mt-6 items-center justify-center text-center object-center mb-8">
                  <Image src="/trolley.png" height={45} width={45} alt="img" className="object-contain object-center" loading="lazy"></Image>
                  <h1 className="text-xs text-white">Free Shipping</h1>
                  <h1 className="text-xxs text-white font-thin scale-75">We deliver to your door with no</h1>
                  <h1 className="text-xxs text-white font-thin scale-75">shipping costs on your orders</h1>
                </div>
                <div className="flex  flex-col mt-6 items-center justify-center text-center object-center mb-8">
                  <Image src="/loop-arrow.png" height={45} width={45}  alt="img" className="object-contain" loading="lazy"></Image>
                  <h1 className="text-xs text-white"> No Risk</h1>
                  <h1 className="text-xxs text-white  font-thin scale-75">  We ensure that all products are safe </h1>
                  <h1 className="text-xxs text-white font-thin scale-75">and within their use-by date</h1>
                </div>
                <div className="flex  flex-col mt-6 items-center justify-center text-center object-center mb-8">
                  <Image src="/gmo-free.png" height={45} width={45}  alt="img" className="object-contain" loading="lazy"></Image>
                  <h1 className="text-xs text-white">GMO Free</h1>
                  <h1 className="text-xxs text-white font-thin scale-75">Natural, no modified products and</h1>
                  <h1 className="text-xxs text-white font-thin scale-75">derivatives for those who need it</h1>
                </div>
               </div>
            </div>
      </div>

    )
}

export default Header

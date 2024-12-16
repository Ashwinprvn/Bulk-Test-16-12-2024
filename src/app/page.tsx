import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Body from "./components/body";
import Blog from "./components/blog";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">

      <div>
        <Link href= "https://www.elbrit.org/">
          <Image src="/cropped-logo-original-2.png" alt="img" height={100} width={100} loading="eager" className="p-2 ml-14"/>
        </Link>
      </div>
      <Header/>
      <Body/>
      <Blog />

      <div className="bg-blue-900 w-full items-center justify-center text-center flex flex-col">
        
        <div className="flex-row flex space-x-2 mt-2">
        <Link href="tel: +974 3118 1843">
        <div className="flex bg-blue-700 p-1 rounded-lg">
          <Image src="/phone.svg" height={20} width={20} alt="phone"/>
          <div>
          <p className="text-white text-xxs">Phone Number</p>
          <p className="text-white text-xxs"> +974 3118 1843</p>
          </div>
          
        </div>
        </Link>

        <Link href="mailto: Elbrithcqhr@gmail.com">
        <div className="flex bg-blue-700 p-1 rounded-lg">
          <Image src="/email.svg" height={20} width={20} alt="phone"/>
          <div>
          <p className="text-white text-xxs">Email Address</p>
          <p className="text-white text-xxs"> Elbrithcqhr@gmail.com</p>
          </div>
          
        </div>
        </Link>

        <Link href="https://www.google.com/maps/search/ambassador+street+zone+61+kolkata+map/@22.5353434,88.1825411,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
        <div className="flex bg-blue-700 p-1 rounded-lg">
          <Image src="/location.svg" height={20} width={20} alt="phone"/>
          <div>
          <p className="text-white text-xxs">Office Location</p>
          <p className="text-white text-xxs">  Ambassador Street, Zone 61,</p>
          </div>
          
        </div>
        </Link>

        </div>
        <div className="bg-white flex items-start mt-2">
        <Image src="/cropped-logo-original-2.png" alt="img" height={100} width={100} loading="lazy" className="p-2"/>
        <div className="bg-blue-900">
        <p className="text-white text-xxs"> Your health, physical and emotional well-being is important 
to us. We are always by your side and have made it even 
easier for you to find the necessary vitamins</p>
        </div>
        </div>
        

      </div>

      <div></div>

    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-blue-200 h-auto w-screen text-center items-center justify-center">
      <h1 className="font-tafel text-3xl font-extrabold text-blue-950 p-4">Essential Vitamins</h1>

      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-center">
          <h1 className="text-xxs text-gray-700 pl-1 truncate">Online Medicinal Supplies</h1>
          <div className="flex flex-col items-start">
            <h1 className="text-xxs font-bold pl-2 font-tafel text-blue-900">Get Your Vitamins</h1>
            <h1 className="text-xxs font-bold pl-2 font-tafel text-blue-900">& Minerals</h1>
            <Link href="#">
              <button className="rounded-full bg-blue-900 text-xs text-white p-1 px-4 font-bold mt-2">
                Explore
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image 
            src="/f2-1.png.webp" 
            alt="img" 
            width={150} 
            height={300} 
            className="transform scale-x-[-1]" 
            quality={50} 
            loading="eager"
          />
        </div>

        <div className="flex flex-col justify-center space-y-2">
          {[
            { src: "/vitamin.png", title: "Vitamins", desc1: "Increases Vitamins and", desc2: "minerals in your diet" },
            { src: "/machine.png", title: "Weight Loss", desc1: "Find scientifically proven", desc2: "solutions" },
            { src: "/functional-foods.png", title: "Functional Foods", desc1: "From protein powders", desc2: "to baby formula" },
          ].map((item, index) => (
            <div key={index} className="bg-blue-200 flex flex-row items-center">
              <Image src={item.src} width={20} height={20} alt={item.title} className="object-contain" />
              <div className="flex flex-col items-start ml-2">
                <p className="text-xxs font-tafel text-blue-900">{item.title}</p>
                <p className="text-xxxs">{item.desc1}</p>
                <p className="text-xxxs">{item.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

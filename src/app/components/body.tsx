import Image from "next/image";

const Body = () => {
    return (
<div className="flex flex-col w-screen mt-10">
        <div className="flex flex-row justify-evenly">

          <div className="ml-2">
            <h1 className="font-bold text-blue-900 text-xxs">INCREDIENTS</h1>
            <h1 className="font-bold text-black text-sm truncate">Better Incredients</h1>
            <h1 className=" text-black text-xxxs truncate mt-4"> Only the best when you choose products offered on our platform - high-quality</h1>
            <h1 className=" text-black text-xxxs truncate">ingredients for high quality products!</h1>
          </div>

          <div className="w-[110px] h-[70px] bg-[url('/vitamin-c.webp')] bg-cover bg-center rounded-lg flex-col justify-between ">
            <div>
              <h1 className="font-bold text-black text-xxs mt-2 truncate ml-1">Vitamin C</h1>
              <h1 className=" text-black text-xxxs truncate ml-1">Vitamin C as ascorbic acid</h1>
            </div>
            <a href="https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/#:~:text=Vitamin%20C%2C%20also%20known%20as,essential%20dietary%20component%20%5B1%5D."  className=" text-blue-700 underline font-bold text-xxxs ml-1 mt-7">See More</a>  
          </div>

          <div className="w-[110px] h-[70px] bg-[url('/bn2-2.jpg.webp')] bg-cover bg-center rounded-lg flex-col justify-between">
            <div>
              <h1 className="font-bold text-black text-xxs mt-2 truncate ml-1">Vitamin B3</h1>
              <h1 className=" text-black text-xxxs truncate ml-1">Niacin for healthy gut and skin</h1>
            </div>
            <a href="https://www.webmd.com/diet/supplement-guide-niacin"  className=" text-blue-700 underline font-bold text-xxxs ml-1 mt-7">See More</a>
          </div>
        </div>

        <div className="flex flex-row justify-evenly mt-2 mb-4">

        <div className="w-[110px] h-[70px] bg-[url('/magnesium.webp')] bg-cover bg-center rounded-lg flex-col justify-between">
            <div>
              <h1 className="font-bold text-black text-xxs mt-2 truncate ml-1">Magnesium</h1>
              <h1 className=" text-black text-xxxs truncate ml-1">Boost energy and support</h1>
              <h1 className=" text-black text-xxxs truncate ml-1">muscle function</h1>
            </div>
            <a href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/#:~:text=Magnesium%20is%20a%20cofactor%20in,%2C%20oxidative%20phosphorylation%2C%20and%20glycolysis."  className=" text-blue-700 underline font-bold text-xxxs ml-1 mt-7">See More</a>
          </div>

           <div className="w-[110px] h-[70px] bg-[url('/hyaluronic.webp')] bg-cover bg-center rounded-lg flex-col justify-between">
            <div>
              <h1 className="font-bold text-black text-xxs mt-2 truncate ml-1">Hyaluronic Acid</h1>
              <h1 className=" text-black text-xxxs truncate ml-1">For smooth,</h1>
              <h1 className=" text-black text-xxxs truncate ml-1">supple and soft skin!</h1>
            </div>
            <a href="https://www.webmd.com/vitamins/ai/ingredientmono-1062/hyaluronic-acid"  className=" text-blue-700 underline font-bold text-xxxs ml-1 mt-7">See More</a>
          </div>

          <div className="w-[110px] h-[70px] bg-[url('/lactobacilus.webp')] bg-cover bg-center rounded-lg flex-col justify-between">
            <div>
              <h1 className="font-bold text-black text-xxs mt-2 truncate ml-1">Lactobaculus</h1>
              <h1 className=" text-black text-xxxs truncate ml-1">Invigorate your gut</h1>
              <h1 className=" text-black text-xxxs truncate ml-1">microbiome</h1>
            </div>
            <a href="https://www.britannica.com/science/Lactobacillus"  className=" text-blue-700 underline font-bold text-xxxs ml-1 mt-7">See More</a>
          </div>
          <Image src="/color.webp" height={40} width={40} alt="img" loading="lazy"/>
        </div>
      </div>
)
}

export default Body

import Image from "next/image";

const Blog = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-sans font-bold text-sm text-blue-900">OUR BLOG</h1>
      <h1 className="text-md font-bold text-green-900">Latest News</h1>

      <div className="flex flex-row justify-evenly mt-4 space-x-4">
        {[
          { img1: "/top.webp", img2: "/bottom.webp", text: "The Covid-19 Epidemic In 2023 Is Back" },
          { img1: "/top.webp", img2: "/bottom.webp", text: "Hac hendrerit mus nons semper suspendisse" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="w-[110px] h-[150px] relative rounded-lg">
              <Image 
                src={item.img1} 
                alt="Blog Top Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute top-2 left-2 text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
            </div>
            <div className="w-[110px] h-[70px] relative rounded-lg">
              <Image 
                src={item.img2} 
                alt="Blog Bottom Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute top-2 left-2 text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="text-white text-xxs font-bold px-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

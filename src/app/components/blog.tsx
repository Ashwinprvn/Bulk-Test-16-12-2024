import Image from "next/image";

const Blog = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-sans font-bold text-sm text-blue-900">OUR BLOG</h1>
      <h1 className="text-md font-bold text-green-900">Latest News</h1>

      <div className="flex flex-row justify-evenly mt-4 space-x-2">
       
        <div  className="flex flex-row space-x-1">
          <div  className="flex flex-col space-y-2">
            <div className="w-[110px] h-[150px] relative rounded-lg">
              <Image 
                src="/top.webp" 
                alt="Blog Top Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="absolute top-6 text-white text-xxs font-bold px-2 justify-center">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
            <div className="w-[110px] h-[70px] relative rounded-lg">
              <Image 
                src="/bottom.webp" 
                alt="Blog Bottom Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="absolute top-6 text-white text-xxs font-bold px-2 justify-center">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
          </div>
          <div  className="flex flex-col space-y-2">
            <div className="w-[110px] h-[70px] relative rounded-lg">
              <Image 
                src="/top.webp" 
                alt="Blog Top Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="absolute top-6 text-white text-xxs font-bold px-2 justify-center">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
            <div className="w-[110px] h-[150px] relative rounded-lg">
              <Image 
                src="/bottom.webp" 
                alt="Blog Bottom Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="absolute top-6 text-white text-xxs font-bold px-2 justify-center">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
          </div>
          <div  className="flex flex-col space-y-2">
            <div className="w-[110px] h-[150px] relative rounded-lg">
              <Image 
                src="/top.webp" 
                alt="Blog Top Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="absolute top-6 text-white text-xxs font-bold px-2 justify-center">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
            <div className="w-[110px] h-[70px] relative rounded-lg">
              <Image 
                src="/bottom.webp" 
                alt="Blog Bottom Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="absolute top-6 text-white text-xxs font-bold px-2 justify-center">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
          </div>
          <div  className="flex flex-col space-y-2">
            <div className="w-[110px] h-[70px] relative rounded-lg">
              <Image 
                src="/top.webp" 
                alt="Blog Top Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="absolute top-6 text-white text-xxs font-bold px-2 justify-center">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
            <div className="w-[110px] h-[150px] relative rounded-lg">
              <Image 
                src="/bottom.webp" 
                alt="Blog Bottom Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
              <p className="absolute text-white text-xxs bg-blue-900 px-2 py-1 rounded-r-3xl">20 APR</p>
              <p className="absolute top-6 text-white text-xxs font-bold px-2 justify-center">Hac hendrerit mus nons semper suspendisse</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Blog;

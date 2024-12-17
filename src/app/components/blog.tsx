const Blog = () => {
    return(
        <div className="flex flex-col items-center">
        <h1 className="font-sans font-bold text-sm text-blue-900">OUR BLOG</h1>
        <h1 className="text-md font-bold text-green-900 ">Latest News</h1>
        <div className="flex flex-row justify-evenly mt-4 space-x-1">
          <div >
            <div className="w-[110px] h-[150px] bg-[url('/top.webp')] bg-cover bg-center rounded-lg flex-col">
              <div >
                <p className="text-white text-xxs rounded-r-3xl bg-blue-900 w-10">20 APR</p>
                <p className="text-white text-xxs font-bold p-1">The Covid-19 Epidemic In 2023 Is Back</p>
              </div>
          
            </div>
            <div className="w-[110px] h-[70px] bg-[url('/bottom.webp')] bg-cover bg-center rounded-lg flex-col mt-2">
            <p className="text-white text-xxs rounded-r-3xl bg-blue-900 w-10">20 APR</p>
            <p className="text-white text-xxs font-bold p-1">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
          </div>
          <div >
            <div className="w-[95px] h-[70px] bg-[url('/top.webp')] bg-cover bg-center rounded-lg flex-col ">
            <p className="text-white text-xxs rounded-r-3xl bg-blue-900 w-10">20 APR</p>
            <p className="text-white text-xxs font-bold p-1">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
            <div className="w-[95px] h-[150px] bg-[url('/bottom.webp')] bg-cover bg-center rounded-lg flex-col mt-2">
            <p className="text-white text-xxs rounded-r-3xl bg-blue-900 w-10">20 APR</p>
            <p className="text-white text-xxs font-bold p-1">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
          </div>
          <div >
            <div className="w-[95px] h-[150px] bg-[url('/top.webp')] bg-cover bg-center rounded-lg flex-col">
              <div >
                <p className="text-white text-xxs rounded-r-3xl bg-blue-900 w-10">20 APR</p>
                <p className="text-white text-xxs font-bold p-1">The Covid-19 Epidemic In 2023 Is Back</p>
              </div>
          
            </div>
            <div className="w-[95px] h-[70px] bg-[url('/bottom.webp')] bg-cover bg-center rounded-lg flex-col mt-2">
            <p className="text-white text-xxs rounded-r-3xl bg-blue-900 w-10">20 APR</p>
            <p className="text-white text-xxs font-bold p-1">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
          </div>
          <div >
            <div className="w-[110px] h-[70px] bg-[url('/top.webp)] bg-cover bg-center rounded-lg flex-col ">
            <p className="text-white text-xxs rounded-r-3xl bg-blue-900 w-10">20 APR</p>
            <p className="text-white text-xxs font-bold p-1">The Covid-19 Epidemic In 2023 Is Back</p>
            </div>
            <div className="w-[110px] h-[150px] bg-[url('/bottom.wepb')] bg-cover bg-center rounded-lg flex-col mt-2">
            <p className="text-white text-xxs rounded-r-3xl bg-blue-900 w-10">20 APR</p>
            <p className="text-white text-xxs font-bold p-1">Hac hendrerit mus nons semper suspendisse</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Blog

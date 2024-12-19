import Image from "next/image";

const Blog = () => {
  const blogPosts = [
    { 
      date: "20 APR", 
      title: "The Covid-19 Epidemic In 2022 Is Back", 
      image: "/image1.webp" 
    },
    { 
      date: "20 APR", 
      title: "The Covid-19 Epidemic In 2023 Is Back", 
      image: "/image2.webp" 
    },
    { 
      date: "17 MAR", 
      title: "Hac hendrerit mus nons semper suspendisse", 
      image: "/image3.webp" 
    },
    { 
      date: "20 APR", 
      title: "The Covid-19 Epidemic In 2022 Is Back", 
      image: "/image1.webp" 
    },
    { 
      date: "20 APR", 
      title: "The Covid-19 Epidemic In 2023 Is Back", 
      image: "/image2.webp" 
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-blue-900 font-bold text-sm uppercase">Our Blog</h1>
      <h2 className="text-green-900 font-bold text-2xl mt-2">Latest News</h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogPosts.map((post, index) => (
          <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            <Image 
              src={post.image} 
              alt={post.title} 
              width={400} 
              height={300} 
              className="object-cover w-full h-64"
            />
            <div className="absolute top-3 left-3 bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded-r-full">
              {post.date}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-sm font-bold">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

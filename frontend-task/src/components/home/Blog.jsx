import BlogPosts from "./BlogPosts";

const Blog = () => {
  return (
    <>
    <div className="flex flex-col items-center px-6 py-12">
      {/* Blog Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 mb-10 w-full px-4 sm:px-8 md:px-38">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <p className="text-red-500 font-semibold">Our blog</p>
          <h3 className="text-3xl sm:text-4xl font-medium text-gray-800">
            Latest blog posts
          </h3>
          <p className="text-sm sm:text-md text-gray-600">
           Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>

  {/* View All Posts Button */}
        <div className="mt-4 sm:mt-0">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition duration-300">
            View all posts
          </button>
        </div>
      </div>

      {/* Blog Posts */}
      <BlogPosts/>

    </div>

    {/* trail section */}
    <div className="flex flex-col items-center justify-center bg-slate-50 mt-20 py-10 w-full shadow-sm space-y-4"> 
    <h4 className="text-4xl font-semibold pt-10 text-gray-800">
       Start your free trial
    </h4>
    <p className="text-gray-600 text-center text-xl">
       Join over 4000+ startups already growing with Untitled.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 pb-12 sm:space-y-0 sm:space-x-5">
   <button className="bg-white border border-slate-300 font-medium rounded-lg px-8 py-3 sm:px-6 sm:py-2 transition duration-300">
      Learn more
   </button>
   <button className="bg-red-500 text-white font-medium rounded-md px-8 py-3 sm:px-6 sm:py-2 transition duration-300">
     Get Started
   </button>
  </div>
 </div>
 </>
  );
};

export default Blog;

import { assets } from "../../assets/assets";
import { GoArrowUpRight } from "react-icons/go";

const BlogPosts = () => {
    return(
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {/* Blog Post 1 */}
        <div className="overflow-hidden">
          <img
            src={assets.image}
            alt="Design Post"
            className="w-[384px] h-[240px] object-cover"
          />
          <div className="py-6">
            <span className="text-md text-red-500 font-semibold">
              Design
            </span>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                UX review presentations
              </h4>
              <GoArrowUpRight className="text-2xl text-gray-500" />
            </div>
            <p className="text-gray-600 mt-2">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
          </div>
          <div className="flex items-center gap-3 py-1">
            <img
              src={assets.profile_img}
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">Olivia Rhye</p>
              <p className="text-sm text-gray-500">20 Jan 2024</p>
            </div>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="overflow-hidden">
          <img
            src={assets.image_1}
            alt="Product Post"
            className="w-[384px] h-[240px] object-cover"
          />
          <div className="py-6">
            <span className="text-md text-red-500 font-semibold">
              Product
            </span>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                Migrating to Linear 101
              </h4>
              <GoArrowUpRight className="text-2xl text-gray-500" />
            </div>
            <p className="text-gray-600 mt-2">
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here's how to get started.
            </p>
          </div>
          <div className="flex items-center gap-3 py-1">
            <img
              src={assets.Avatar_1}
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                Phoenix Baker
              </p>
              <p className="text-sm text-gray-500">19 Jan 2024</p>
            </div>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="overflow-hidden">
          <img
            src={assets.image_2}
            alt="Software Engineering Post"
            className="w-[384px] h-[240px] object-cover"
          />
          <div className="py-6">
            <span className="text-md text-red-500 font-semibold">
              Software Engineering
            </span>
            <div className="flex items-center justify-between mt-4">
              <h4 className="text-2xl font-semibold text-gray-800">
                Building Your API Stack
              </h4>
              <GoArrowUpRight className="text-2xl text-gray-500" />
            </div>
            <p className="text-gray-600 mt-2">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </p>
          </div>
          <div className="flex items-center gap-3 py-1">
            <img
              src={assets.Avatar_2}
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">Lana Steiner</p>
              <p className="text-sm text-gray-500">18 Jan 2024</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default BlogPosts;
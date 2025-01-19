import { PiChatsCircle } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { BsChatHeart } from "react-icons/bs";
import { RiCommandLine } from "react-icons/ri";
import { RiShareBoxFill } from "react-icons/ri";


const Feature = () => {
return(
   <div className='flex flex-col items-center pt-24'>
    <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
  <h4 className="flex items-center text-red-500 font-semibold text-base sm:text-lg">
    Features
  </h4>
  <div className="max-w-3xl">
    <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold py-3">
      Analytics that feels like it's from the future
    </h1>
    <h4 className="text-base sm:text-lg md:text-xl text-gray-600">
      Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4000 Startups.
    </h4>
  </div>
</div>


      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10 md:px-20 p-20">
  <div className="flex flex-col items-center text-center mb-7">
    <div className="border p-2 rounded-lg shadow-lg">
      <PiChatsCircle className="text-2xl text-gray-700" />
    </div>
    <h4 className="font-semibold text-md m-2">Share team inboxes</h4>
    <p className="text-gray-600">
      Whether you have 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
    </p>
  </div>
  <div className="flex flex-col items-center text-center">
    <div className="border p-2 rounded-lg shadow-lg">
      <BsLightningCharge className="text-2xl text-gray-700" />
    </div>
    <h4 className="font-semibold text-md m-2">Deliver instant answers</h4>
    <p className="text-gray-600">
      An all-in-one customer service platform that helps you balance everything your customers need to be happy.
    </p>
  </div>
  <div className="flex flex-col items-center text-center">
    <div className="border p-2 rounded-lg shadow-lg">
      <RiShareBoxFill className="text-2xl text-gray-700" />
    </div>
    <h4 className="font-semibold text-md m-2">Manage your team with reports</h4>
    <p className="text-gray-600">
      Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.
    </p>
  </div>
  <div className="flex flex-col items-center text-center">
    <div className="border p-2 rounded-lg shadow-lg">
      <TfiCommentsSmiley className="text-2xl text-gray-700" />
    </div>
    <h4 className="font-semibold text-md m-2">Connect with customers</h4>
    <p className="text-gray-600">
      Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
    </p>
  </div>
  <div className="flex flex-col items-center text-center">
    <div className="border p-2 rounded-lg shadow-lg">
      <RiCommandLine className="text-2xl text-gray-700" />
    </div>
    <h4 className="font-semibold text-md m-2">Connect the tools you already use</h4>
    <p className="text-gray-600">
      Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
    </p>
  </div>
  <div className="flex flex-col items-center text-center">
    <div className="border p-2 rounded-lg shadow-lg">
      <BsChatHeart className="text-2xl text-gray-700" />
    </div>
    <h4 className="font-semibold text-md m-2">Our people make the difference</h4>
    <p className="text-gray-600">
      We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
    </p>
  </div>
</div>


   </div>
)
}

export default Feature;
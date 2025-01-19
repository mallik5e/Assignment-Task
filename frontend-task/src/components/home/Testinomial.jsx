import { assets } from "../../assets/assets";

const Testinomial = () => {
  return (
    <div className="flex flex-col items-center text-center bg-slate-50 py-16 px-8">
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <img src={assets.logo_mark} alt="Logo Mark" className="h-12 w-12" />
        <img src={assets.logo_type} alt="Logo Type" className="h-8" />
      </div>

      {/* Testimonial Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-relaxed text-gray-800 mb-6">
          "We've been using Untitled to kick-start every new project and can't imagine working without it."
        </h1>
        <div className="flex flex-col items-center mt-8">
          <img
            src={assets.Avatar}
            alt="Avatar"
            className="h-16 w-16 rounded-full mb-4 shadow-lg"
          />
          <h4 className="text-lg font-medium text-gray-900">Candice Wu</h4>
          <p className="text-md text-gray-600">Project Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;

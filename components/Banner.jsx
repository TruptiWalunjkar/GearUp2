// import React from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";

// const Banner = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
//       <Image
//         className="max-w-56"
//         src={assets.jbl_soundbox_image}
//         alt="jbl_soundbox_image"
//       />
//       <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
//         <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px]">
//         Adventure Starts Here
//         </h2>
//         <p className="max-w-[343px] font-medium text-gray-800/60">
//         Gear Up for the Wild – From rugged packs to reliable tools, everything you need to conquer the outdoors
//         </p>
//         <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">
//           Buy now
//           <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="arrow_icon_white" />
//         </button>
//       </div>
//       <Image
//         className="hidden md:block max-w-80"
//         src={assets.md_controller_image}
//         alt="md_controller_image"
//       />
//       <Image
//         className="md:hidden"
//         src={assets.sm_controller_image}
//         alt="sm_controller_image"
//       />
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] my-16 rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/banner.jpg" // ✅ Use public path
        alt="GearUp Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 space-y-4 text-white">
        <h2 className="text-3xl md:text-4xl font-semibold max-w-xl">
          Adventure Starts Here
        </h2>
        <p className="max-w-md font-medium text-white/90">
          Gear Up for the Wild – From rugged packs to reliable tools, everything you need to conquer the outdoors
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-orange-600 rounded text-white">
          Buy now
          {/* <Image
            className="group-hover:translate-x-1 transition"
            src="/icons/arrow_icon_white.svg" // if in /public/icons
            alt="arrow icon"
            width={20}
            height={20}
          /> */}
        </button>
      </div>
    </div>
  );
};

export default Banner;

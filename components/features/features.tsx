import React from "react";

import FeaturesPack from "./featuresPack";

function Features() {
  return (
    <div className="mb-10 bg-gradient w-[99vw] lg:w-[100%] h-16 lg:h-20 ml-[-1.5rem] lg:ml-0">
      <div className="mt-36 w-[100.1%] ml-[-0.05%] h-16 lg:h-20 rotate-[-2.5deg] flex items-center justify-center bg-lighter text-primary overflow-hidden skew-x-[-2.5deg]">
        <FeaturesPack />
        <FeaturesPack />
        <FeaturesPack />
      </div>
    </div>
  );
}

export default Features;

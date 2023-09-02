import React from "react";

import FeaturesPack from "./featuresPack";

function Features() {
  return (
    <div className="mb-10 mx-auto bg-gradient w-[100vw] xl:w-[100%] 2xl:w-[95rem] h-16 lg:h-20">
      <div className="mt-36 w-[100.1%] ml-[-0.05%] h-16 lg:h-20 rotate-[-2.5deg] flex items-center justify-center bg-lighter text-primary overflow-hidden skew-x-[-2.5deg]">
        <FeaturesPack />
        <FeaturesPack />
        <FeaturesPack />
      </div>
    </div>
  );
}

export default Features;

import React from "react";

import Feature from "./feature";

function FeaturesPack() {
  return (
    <div className="flex justify-center animate-x-scrolling delay-1000">
      <Feature title="Bookbark" />
      <Feature title="Free & Open source" />
      <Feature title="Dark mode" />
      <Feature title="NoTracking" />
      <Feature title="Based on your intersets" />
      <Feature title="Modren UI" />
    </div>
  );
}

export default FeaturesPack;

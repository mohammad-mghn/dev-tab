import React from "react";

import StatusSection from "./statusSection";

function Statuses() {
  return (
    <section className="mt-16 flex justify-between gap-16 flex-col md:flex-row ">
      <StatusSection title="broswer's Extension" />

      <StatusSection title="Web App" />
    </section>
  );
}

export default Statuses;

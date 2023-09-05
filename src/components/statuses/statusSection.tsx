import React from "react";

import Status from "./status";

type Props = {
  title: string;
  delay?: string;
};

function StatusSection({ title, delay }: Props) {
  return (
    <div className="flex-1">
      <h3
        className="text-gradient font-medium text-2xl lg:text-4xl w-fit"
        data-aos="fade-left"
        data-aos-delay={delay}
      >
        {title}
      </h3>

      <div className="mt-12">
        <Status
          title="Download"
          description="Based on chrome store's statistics"
          value={"1,000+ users"}
        />
        <Status
          title="Rate"
          description="Based on chrome store's statistics"
          value="17"
        />
        <Status
          title="Updated"
          description="Based on chrome store's statistics"
          value="January 11, 2023"
        />
      </div>
    </div>
  );
}

export default StatusSection;

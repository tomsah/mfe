import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const marketingRef = useRef(null);

  useEffect(() => {
    mount(marketingRef.current);
  });

  return <div ref={marketingRef} />;
};

export default MarketingApp;

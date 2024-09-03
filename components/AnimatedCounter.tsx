"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp duration={3} decimal="," prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;

import { useState } from "react";
import "./Chart.css";

interface IChartItemProps {
  day: string;
  amount: number;
  maxAmount?: boolean;
}

const ChartItem: React.FunctionComponent<IChartItemProps> = ({
  day,
  amount,
  maxAmount,
}) => {
  const [showAmount, setShowAmount] = useState(false);
  return (
    <div className="week">
      <div
        className={`tooltip ${showAmount ? "hover" : ""}`}
      >{`$${amount}`}</div>
        <div
          onMouseEnter={() => setShowAmount(true)}
          onMouseLeave={() => setShowAmount(false)}
          className={`bar ${ maxAmount? "cyan" : ""}`}
          style={{ height: `calc(${amount}px * 3)` }}
        ></div>
      <span>{day}</span>
    </div>
  );
};

export default ChartItem;

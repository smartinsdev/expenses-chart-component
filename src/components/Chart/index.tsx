import "./Chart.css";
import ChartItem from "./ChartItem";

export type Data = {
  day: string,
  amount: number
}

interface IChartProps {
  data: Data[]
}

export const Chart: React.FunctionComponent<IChartProps> = ({ data }) => {
  let maxAmount = Math.max(...data.map(o => o.amount))
  return (
    <div className="wrap-chart">
      { data.map((item, index) => {
        if(maxAmount === item.amount){
          return <ChartItem day={item.day} amount={item.amount} maxAmount key={index}  />
        }
        return <ChartItem day={item.day} amount={item.amount} key={index} />
      })}
    </div>
  );
};

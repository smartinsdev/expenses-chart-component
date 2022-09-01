import "./Spending.css"
import { Chart, Data } from "../Chart";

interface ISpendingProps {
    data: Data[],
    value: string,
    lastMonth: string
}

export const Spending: React.FunctionComponent<ISpendingProps> = ({ value, lastMonth, data }) => {
  return (
    <div className='wrap-spending'>
        <h1>Spending - Last 7 days</h1>
        <Chart data={data} />
        <div className="line"></div>
        <div className="wrap-month">
            <div className="total-value">
                <span>Total this month</span>
                <p>${value}</p>
            </div>
            <div className="percent-month">
                <p>{lastMonth}</p>
                <span>from last month</span>
            </div>
        </div>
    </div>
  );
};
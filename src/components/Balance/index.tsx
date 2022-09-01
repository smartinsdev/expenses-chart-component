import "./Balance.css"
import logo from "../../assets/logo.svg"

interface IBalanceProps {
    value: string
}

export const Balance: React.FunctionComponent<IBalanceProps> = ({ value }) => {
  return (
    <div className="box-balance">
      <div className="balance">
        <span>My balance</span>
        <p>${ value }</p>
      </div>
      <div className="brand">
        <img src={logo} alt="Logo marca" />
      </div>
    </div>
  )
};
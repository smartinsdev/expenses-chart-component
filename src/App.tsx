import data from "./api/data.json";

import { Balance } from "./components/Balance"
import { Spending } from "./components/Spending"

function App() {
  return (
    <>
        <Balance value='921.48' />
        <Spending data={data} value='478.33' lastMonth="+2.4%"/>
    </>
  )
}

export default App

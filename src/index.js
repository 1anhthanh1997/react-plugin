import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import { Provider } from "react-redux";
import Feedback from "./feedback";
import store from "./redux/store";

let cardIds = [
  5490733695893504, 5680755036389376, 5117805082968064, 6243704989810688,
  4836330106257408, 5962230013100032, 5399280059678720, 6525179966521344,
  4695592617902080, 5821492524744704, 6076485974622208, 5513536021200896,
  6639435928043520, 4598742346891264, 5724642253733888, 5161692300312576,
  6287592207155200, 4880217323601920, 6006117230444544, 5443167277023232,
  6156300157190144, 5593350203768832, 6719250110611456, 4573003413192704,
  5698903320035328, 5135953366614016, 6261853273456640, 4854478389903360,
  5980378296745984, 5417428343324672, 6057711095513088, 5494761142091776,
  6620661048934400, 4579967467782144, 5705867374624768, 5142917421203456,
  6268817328046080, 4861442444492800, 5987342351335424, 5424392397914112,
];
let data = {
  elementId: "root",
  appShortName: "asvab",
};

ReactDOM.render(
  <Provider store={store}>
    {/* <App jsData={data} />
     */}
    <Feedback appShortName={data.appShortName} />
    {/*<h1>Hello</h1>*/}
  </Provider>,
  document.getElementById("root")
);

// export const init = (data) => {
//   data.endpoint = ''
//   // let data = { elementId: 'root' }
//   ReactDOM.render(
//     <Provider store={store}>
//       <App jsData={data} />
//     </Provider>,
//     document.getElementById(data.elementId));
// }

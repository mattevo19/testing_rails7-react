// import React, { useEffect, useState } from 'react';
// import Clock from 'react-clock';
import h from "components/htm_create";

// function TimeTeller() {
//   const [value, setValue] = useState(new Date());
 
//   useEffect(() => {
//     const interval = setInterval(
//       () => setValue(new Date()),
//       1000
//     );
 
//     return () => {
//       clearInterval(interval);
//     }
//   }, []);
 
//   return h`
//     <div>
//       ${console.log(value)}
//     </div>
//   `
// }

// export default TimeTeller

import {Component} from 'react';
import Clock from 'react-live-clock';

class TimeTeller extends Component {
    render() {
      return h`
        <${Clock} format=${'HH:mm:ss'} ticking=${true} timezone=${'US/Pacific'} />
      `
    }
}
export default TimeTeller

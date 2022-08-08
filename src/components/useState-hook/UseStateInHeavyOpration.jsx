/***Whenever You call Heavy Operation directly in useState() hooks. It render on evertime
 * changes of component. This way your application consume lots of memory.
 * What we can do for this is - directly write return function inside useState(()=>return 0)
 * this will be called only once
 */

import React, {useState} from 'react'
const myFunction =()=>{ console.log("Clicked");return 0}
function UseStateInHeavyOpration() {

    const [value, setValue] = useState(myFunction());
    function onClicked(){
    setValue((prevCount)=>prevCount+1);
}
  return (
    <>
            <div>{value}</div>
            <button onClick={onClicked}>Click ME</button>
</>
  )
}

export default UseStateInHeavyOpration
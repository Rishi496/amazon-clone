import React from 'react'
import Head1 from './com/Head1'
import Leftside from './com/Leftside'
import Head2 from './com/Head2'
import Rightside from './com/Rightside'
import Maincon from './com/Maincon'

const App = () => {
  return (
    <div>
    {/*  <div className="leftside1">
        <Leftside/>
     </div> */}

     {/* head1 */}
      <div className="mainhead1">
        <Head1/>
      </div> 
      {/* head2 */}
      <div className="mainhead2">
        <Head2/>
      </div>
      {/* rigtside-----------maincon */}
      <div className="main">
      <div className="mainrightside">
        <Rightside/>
      </div>
      <div className="main-maincon">
        <Maincon/>
      </div>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Header from './components/Header';


function RouteConfig() {
  return (
    <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Header comp={'Home'}/>}/>
                <Route exact path="/Home" element={<Header comp={'Home'}/>}/>
                <Route exact path="/Products" element={<Header comp={'Products'}/>}/>
                <Route exact path="/Order/:id/:quantity" element={<Header comp={'Order Placement'}/>}/>
                <Route exact path="/Products/:id" element={<Header comp={'Buy Product'}/>}/>
                <Route exact path="/About" element={<Header comp={'About'}/>}/>
                <Route exact path="/Ordered/:amount" element={<Header comp={'Product Bought'}/>}/>
                <Route exact path="*" element={<Header/>} />
            </Routes> 
        </Router>
    </>
  );
}

export default RouteConfig
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import Lista from './components/ListSolicitudes'
import Estadistica from './components/statistics/index'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin">
                    <Route path="" element={<Home/>}/>
                    <Route path="aclaraciones" element={<Lista/>}/>
                    <Route path="estadisticas" element={<Estadistica/>}/>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;

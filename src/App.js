import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const style = {
  margin: '1rem', 
  padding: '1rem', 
  border: '2px solid black',
}

const navLinks = {
  display: 'flex',
  justifyContent: 'center',
}

function Home() {
  return( 
    <div style={{...style , borderColor: 'red'}}>
      <h2>Home Screen</h2>
    </div>
)}

function Bikes() {
  return( 
    <div style={{...style , borderColor: 'green'}}>
      <h2>Bikes Screen</h2>
      <nav style={navLinks}>
        <Link to="moutainbike">Mountain Bike</Link>&nbsp;&nbsp;
        <Link to="urbanbike">Urban Bike</Link>
      </nav>
      <Routes>
        <Route path="moutainbike" element={<MountainBike />} /> 
        <Route path="urbanbike" element={<UrbanBike />} /> 
      </Routes>
    </div>
)}


function MountainBike() {
  return( 
    <div style={{...style , borderColor: 'black'}}>
      <h2>MountainBike Screen</h2>
    </div>
)}

function UrbanBike() {
  return( 
    <div style={{...style , borderColor: 'blue'}}>
      <h2>UrbanBike Screen</h2>
    </div>
)}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={navLinks}>
        <Link to='/'>Home</Link>&nbsp;&nbsp;
        <Link to='bikes'>Bikes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="bikes/*" element={<Bikes />}/> 
       </Routes>
    </BrowserRouter>
  );
}
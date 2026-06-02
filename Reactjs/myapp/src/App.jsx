import './App.css'
// import './Mystyle.css'
import First from './components/First'
import Second from './components/Second'
import  Laptop from './components/Laptop'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  // var tech = "MERN";

  // const fun=()=>{
  //   return "Welcome to React Programming"
  // }

  // var mystyle={
  //   color:"green",
  //   fontSize:"30px",
  //   fontFamily:"Arial"
  // }
  return (
    // <>
    // <h1 className='newcolor'>Welcome to React JSX Prgming ........</h1>
    // <h3>Result of 50 + 50 = {50 + 50}</h3>
    // <h3>Web development: {tech}</h3>
    // <h3>{fun()}</h3>
    // <h3 style={mystyle}>Hello, React!</h3>
    // <h3 style={{fontSize:"20px",color:"blue"}}>Hello 1 2 3 4 5</h3>
    // </>
    //Component calling in App.jsx file
    <>
    <First/>
    <Second/>  
    <Laptop brand="hp"/>  
    </>


  )
}

export default App

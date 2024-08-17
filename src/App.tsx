import { Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={ <SplashPage/> } />
    </Routes>
  );
   
}
console.log("Rendering App");
export default App;


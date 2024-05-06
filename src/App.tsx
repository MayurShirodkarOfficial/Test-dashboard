import './App.css'
import Dashboard from './components/Dashboard';
import { DashBoardContextProvider } from './context/dashboard';

function App() {
return(
  <div className='dashboard'>
    <DashBoardContextProvider>
      <Dashboard/>
    </DashBoardContextProvider>
   
  </div>
);
}

export default App

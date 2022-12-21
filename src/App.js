import { Routes, Route } from 'react-router-dom';
//import Main from './routes/navigation/main-component';
//import Navigation from './routes/navigation/navigation.component';
//import Main from './main/main.component';
import Main1 from './routes/navigation/main-component.jsx';
import Main2 from './routes/navigation/secondary-component.jsx';

    const App = () => {
      return(
        
    <Routes>
      <Route path='/' element={<Main1 />}>
      
      
        </Route>
      </Routes>
  );
};

export default App;

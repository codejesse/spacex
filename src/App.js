import './index.css';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Main from './components/Main';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for n seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return isLoading ? (
    // If page is still loading then splash screen
    <Loader isLoading={isLoading} />
  ) : (
    <Main />
  );
};

export default App;

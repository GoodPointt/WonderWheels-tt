import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Routings from './router/Routings';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from './redux/store';

function App() {
  return (
    <Router>
      <Layout>
        <PersistGate loading={null} persistor={persistor}>
          <Routings />
        </PersistGate>
      </Layout>
    </Router>
  );
}

export default App;

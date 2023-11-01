import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Routings from './router/Routings';
import './i18n';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  );
}

export default App;

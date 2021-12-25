import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import TitleBar from './components/titlebar';

const Hello = () => {
  return (
    <div>
      <p>Hola</p>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <TitleBar />
      <Hello />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '@pages/Main';

import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

import { Route } from 'wouter';
import Home from './components/Home';
import StudentReference from './components/StudentReference';

const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/student-reference" component={StudentReference} />
    </>
  );
};

export default Routes;

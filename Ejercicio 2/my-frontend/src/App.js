import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './containers/NotFound'
import Home from './containers/Home'
import StudentForm from './containers/Student/StudentForm'
import Students from './containers/Student/Students'
import Classrooms from './containers/ClassRoom/Classrooms'
import ClassroomForm from './containers/ClassRoom/ClassroomForm'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/404' component={NotFound} />
        <Route exact path='/' render={ (props) => <Home {...props} />} />
        <Route exact path='/classrooms' render={ (props) => <Classrooms {...props} />} />
        <Route exact path='/classroomForm' render={ (props) => <ClassroomForm {...props} />} />
        <Route exact path='/students' render={ (props) => <Students {...props} />} />
        <Route exact path='/studentForm' render={ (props) => <StudentForm {...props} />} />
        <Redirect from='*' to='/404' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

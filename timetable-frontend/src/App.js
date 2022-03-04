import Login from './auth/Login.js';
import Sign from './auth/Sign.js';
import Register from './auth/Register.js';
import Admin from './Admin.js';
import Faculty from './Faculty';
import {BrowserRouter as Router,Link, Switch,Route } from 'react-router-dom';

import SideBar from './admin/components/SideBar'
import CourseSection from './admin/components/CourseSection'
import SubjectSection from './admin/components/SubjectSection'
import FacultySection from './admin/components/FacultySection'
import ClassSection from './admin/components/ClassSection'
import ConstrainSection from './admin/components/ConstrainSection'
import TimetableSection from './admin/components/TimetableSection'
import AdminSection from './admin/components/AdminSection'
import Main from './admin/components/Main'
import Timetable from './admin/components/Timetable'

import SideBarf from './faculty/components/SideBar'
import CourseSectionf from './faculty/components/CourseSection'
import SubjectSectionf from './faculty/components/SubjectSection'
import ClassSectionf from './faculty/components/ClassSection'
import TimetableSectionf from './faculty/components/TimetableSection'
import FacultySectionf from './faculty/components/FacultySection'
import SettingSectionf from './faculty/components/SettingSection'
import Mainf from './faculty/components/Main'
function App() {
  return (
    <div >
      <Router >
          <Switch>
            {/* //auth routing// */}
              <Route exact path="/" component={Sign}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/admin" component={Admin}></Route>
              <Route exact path="/faculty" component={Faculty}></Route>
              <Route exact path="/SideBar" component={SideBar}></Route>
              {/* //admin routing// */}
                  <Route exact path="/admin" component={Main}></Route>
                  <Route exact path="/course" component={CourseSection}></Route>
                  <Route exact path="/subject" component={SubjectSection}></Route>
                  <Route exact path="/faculty" component={FacultySection}></Route>
                  <Route exact path="/class" component={ClassSection}></Route>
                  <Route exact path="/constrain" component={ConstrainSection}></Route>
                  <Route exact path="/timetable" component={TimetableSection}></Route>
                  <Route exact path="/profile" component={AdminSection}></Route>
                  <Route exact path="/result" component={Timetable}></Route>
            {/* //Faculty routing// */}
            <Route exact path="/fSideBar" component={SideBarf}></Route>
              <Route exact path="/faculty" component={Mainf}></Route>
              <Route exact path="/fcourse" component={CourseSectionf}></Route>
              <Route exact path="/fsubject" component={SubjectSectionf}></Route>
              <Route exact path="/ffaculty" component={FacultySectionf}></Route>
              <Route exact path="/fclass" component={ClassSectionf}></Route>
              <Route exact path="/ftimetable" component={TimetableSectionf}></Route>
              <Route exact path="/fsetting" component={SettingSectionf}></Route>
          </Switch>
          </Router> 
    </div>
  );
}

export default App;

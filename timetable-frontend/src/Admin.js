import React from 'react'
import SideBar from './admin/components/SideBar'
import CourseSection from './admin/components/CourseSection'
import SubjectSection from './admin/components/SubjectSection'
import FacultySection from './admin/components/FacultySection'
import ClassSection from './admin/components/ClassSection'
import ConstrainSection from './admin/components/ConstrainSection'
import TimetableSection from './admin/components/TimetableSection'
import Main from './admin/components/Main'
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
function Admin() {
    
  const history = useHistory();
  useEffect(()=> {
    if (!(localStorage.getItem('user_login'))&&!(localStorage.getItem('admin_login')))
    {
       history.push("/")
    }
    else
    {
        history.push("/admin")
    }
  },[])
  return (
      <div>
      <Router>
          <SideBar/>
              <Switch>
                  <Route exact path="/admin" component={Main}></Route>
                  <Route exact path="/course" component={CourseSection}></Route>
                  <Route exact path="/subject" component={SubjectSection}></Route>
                  <Route exact path="/faculty" component={FacultySection}></Route>
                  <Route exact path="/class" component={ClassSection}></Route>
                  <Route exact path="/constrain" component={ConstrainSection}></Route>
                  <Route exact path="/timetable" component={TimetableSection}></Route>
              </Switch>
      </Router>
      
      </div>
  )

}


export default Admin


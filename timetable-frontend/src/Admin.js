import React from 'react'
import SideBar from './components/SideBar'
import CourseSection from './components/CourseSection'
import SubjectSection from './components/SubjectSection'
import FacultySection from './components/FacultySection'
import ClassSection from './components/ClassSection'
import ConstrainSection from './components/ConstrainSection'
import TimetableSection from './components/TimetableSection'
import Main from './components/Main'
function Admin() {
    return (
        <div>
            <SideBar/>
            {/* <Main/> */}
            {/* <CourseSection/> */}
            {/* <SubjectSection/> */}
            {/* <FacultySection/> */}
            <ClassSection/>
            {/* <ConstrainSection/> */}
            {/* <TimetableSection/> */}
        </div>
    )
}

export default Admin

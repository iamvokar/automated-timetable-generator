import React from 'react'
import SideBar from './components/SideBar'
import CourseSection from './components/CourseSection'
import SubjectSection from './components/SubjectSection'
function Course() {
    return (
        <div>
            <SideBar/>
            {/* <CourseSection/> */}
            <SubjectSection/>
        </div>
    )
}

export default Course

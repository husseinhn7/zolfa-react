/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router'
import Test from './pages/test'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import ForgotPasswordPage from './pages/forgotPasswordPage'
import Page from './components/m'
import Exam from './components/exam'
import Wizard from './components/wizzard'
import ExamAnswer from './components/examAnswer'
import Layout from './components/layout'
import Exams from './components/exams'
// import HomePage from './pages/homePage'
import ExamsPage from './pages/exams/examsPage'
import LessonsPage from './pages/lessons/lessonsPage'
import SettingPage from './pages/settings/settingPage'
import HomePage from './pages/home/homePage'
import SubjectsPage from './pages/subjects/subjectsPage'
import StudentsPage from './pages/students/studentsPage'
import ProtectedRoutes from './components/featuers/protectedRoutes'
import SupervisorsPage from './pages/supervisors/supervisorsPage'
import IntakesPage from './pages/intakes/intakesPage'
import LevelsPage from './pages/levels/levelsPage'
import AddExamPage from './pages/addExam/addExamPage'
import ScoresPage from './pages/scores/scoresPage'
import MainLayout from './components/mainLayout'
import AdminProfile from './pages/adminProfile'
import StudentProfile from './pages/studentProfile'
import useLocalStorage from './hooks/localstorage'

import StudentResults from './student/results/resultesPage'
import PastExams from './student/pastExams/pastExamsPage'
import AvailableExams from './student/avilableExams/avilableExamsPage'
import GlobalModal from './components/featuers/globalModal'



function App() {
  const [user] = useLocalStorage("user")
  return (
    <>
       


   
    <Routes>
      <Route element={<ProtectedRoutes/>}>


       
        {  user && user.role === "admin"   ? <>
        <Route  path='/add-exam'  element={<AddExamPage/>}   />
        <Route  path='/exams'  element={<ExamsPage/>}   />
        <Route  path='/students'  element={<StudentsPage/>}   />
        <Route  path='/subjects'  element={<SubjectsPage/>}   />
        <Route  path='/lessons'  element={<LessonsPage/>}   />
        <Route  path='/supervisors'  element={<SupervisorsPage/>}   />
        <Route  path='/intakes'  element={<IntakesPage/>}   />
        <Route  path='/scores'  element={<ScoresPage/>}   />
        <Route  path='/profile'  element={<AdminProfile/>}   />
        <Route  path='/levels'  element={<LevelsPage/>}   />
        <Route  path='/home'  element={<div/>}   />
        <Route  path='/settings'  element={<div/>}   />
        </> : <> 
        <Route  path='/results'  element={<StudentResults />}   />
        <Route  path='/next-exams'  element={<AvailableExams/>}   />
        <Route  path='/past-exams'  element={<PastExams/>}   />
        <Route  path='/profile'  element={<StudentProfile/>}   />
        </>}
      </Route>
        <Route  path='/take-exam/:id'  element={<ExamAnswer/>}   />
        <Route  path='/login'  element={<LoginPage/>}   />
        <Route  path='/signUp'  element={<SignUpPage/>}   />
        <Route  path='/forgot-password'  element={<ForgotPasswordPage/>}   />
      
 



    </Routes>
    <GlobalModal/>
      </>
  )
}

export default App

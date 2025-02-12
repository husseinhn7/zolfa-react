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
function App() {

  return (
    <Routes>
      <Route element={<ProtectedRoutes/>}>

        <Route  path='/add-exam'  element={<AddExamPage/>}   />
        <Route  path='/exams'  element={<ExamsPage/>}   />
        <Route  path='/students'  element={<StudentsPage/>}   />
        <Route  path='/subjects'  element={<SubjectsPage/>}   />
        <Route  path='/lessons'  element={<LessonsPage/>}   />
        <Route  path='/supervisors'  element={<SupervisorsPage/>}   />
        <Route  path='/intakes'  element={<IntakesPage/>}   />
        <Route  path='/scores'  element={<ScoresPage/>}   />

        <Route  path='/levels'  element={<LevelsPage/>}   />
        <Route  path='/home'  element={<div/>}   />

        <Route  path='/settings'  element={<div/>}   />





        

        
          <Route  path='/m'  element={<Wizard/>}   />
          <Route  path='/s'  element={<ExamAnswer/>}   />
          <Route  path='/ss'  element={<Exam/>}   />
          <Route  path='/'  element={<HomePage />}   />
          <Route  path='/test'  element={<Test />}   />

      </Route>
      {/* <Route element={<MainLayout/>}> */}

        <Route  path='/login'  element={<LoginPage/>}   />
        <Route  path='/signUp'  element={<SignUpPage/>}   />
        <Route  path='/forgot-password'  element={<ForgotPasswordPage/>}   />
      
      {/* </Route> */}




    </Routes>
     
  )
}

export default App

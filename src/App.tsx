import React from 'react'
import LanguageSelect from './pages/LanguageSelect'
import Routes from './Routes'
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage } from './redux/actions/LanguageActions'
import { RootReducerType } from './redux/RootReducer'

const App = () => {
  const dispatch = useDispatch()
  const setLang = (language: string) =>{
       window.localStorage.setItem('language', language) 
       dispatch(setLanguage(language))
    }

    const lang = useSelector((state: RootReducerType) => state.LanguageReducer) 

    return (
      <>
        { !lang && !window.localStorage.getItem('language')
          ? <LanguageSelect setLang={setLang} /> 
          : <Routes />
        }
      </>
    )
}

export default App

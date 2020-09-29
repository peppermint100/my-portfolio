import React, { useEffect } from 'react'
import LanguageSelect from './pages/LanguageSelect'
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { setLanguage } from './redux/actions/LanguageActions'
import { RootReducerType } from './redux/RootReducer'
import Home from './pages/Home'

const App = () => {
  const dispatch = useDispatch()
  const localLang = window.localStorage.getItem('language')  
  const setLang = (language: string) =>{
       window.localStorage.setItem('language', language) 
       dispatch(setLanguage(language))
    }

    const lang = useSelector((state: RootReducerType) => state.LanguageReducer) 

    useEffect(() => {
      if(!lang && localLang){
        setLang(localLang)  
      }
    }, [])

    return (
      <>
        { !lang && !window.localStorage.getItem('language')
          ? <LanguageSelect setLang={setLang} /> 
          : <Home />
        }
      </>
    )
}

export default App

import QuoteType from "../types/QuoteType"
import { useSelector } from "react-redux"
import { RootReducerType } from '../../redux/RootReducer'

const useQuote = <T>(quote: QuoteType<T>) =>{
    const lang = useSelector((state: RootReducerType) => state.LanguageReducer)
    return lang == "ENGLISH" ? quote.english : quote.korean
}

export default useQuote;


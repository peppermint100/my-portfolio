import { useSelector } from "react-redux"
import { RootReducerType } from '../../redux/RootReducer'
import QuoteType from "../types/QuoteType"

const useQuote = (quote: QuoteType) => {
    const lang = useSelector((state: RootReducerType) => state.LanguageReducer)
    
    return lang == "ENGLISH" ? quote.english : quote.korean
}

export default useQuote;


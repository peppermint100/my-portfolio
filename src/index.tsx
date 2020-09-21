import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { createStore } from "redux"
import RootReducer from "./redux/RootReducer"
import { Provider } from "react-redux"
import { Helmet } from "react-helmet"

import "./../assets/favicon/favicon.ico"

const store = createStore(RootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Helmet>
          <title>PEPPERMINT100</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="theme-color" content="#c4c4c4" />
          <link rel="shortcut icon" href="../assets/favicon/favicon.ico" />
          <meta name="og:title" content="Peppermint100's Web Portfolio" />
          <meta name="og:image" content="../assets/img/face.jpg" />
          <meta
            name="og:description"
            content="웹 개발자 Peppermint100의 웹 포트폴리오 입니다."
          />
          <meta name="keywords" content="Portfolio, 개발자, developer, 포트폴리오" />
          <meta name="author" content="Peppermint100, InGyu Lee" />
        </Helmet>
            <App />
    </Provider>
, document.getElementById('root'))
import Router from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./App.css";

function App() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Hong Hai Official</title>
                <meta
                    name="keywords"
                    content="Portfolio, Hong Hai Official, Hong Hai Portfolio, Hong Hai Blog, Anthony Hai Official, anthonyhai, Anthony Hai Portfolio"
                />

                <style type="text/css">{`
                .app{
                    background-color: #fff;
                }
                .header{
                    background-color: #f8f9fa;
                    color: black;
                }`}</style>
                <meta name="title" content="Hong Hai Official" />
                <meta
                    name="description"
                    content="This is the portfolio website of Hong Hai. You can take a look at my portfolio and see how you contact me"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.anthonyhai.tk/" />
                <meta property="og:title" content="Hong Hai Official" />
                <meta
                    property="og:description"
                    content="This is the portfolio website of Hong Hai. You can take a look at my portfolio and see how you contact me"
                />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.anthonyhai.tk/"
                />
                <meta property="twitter:title" content="Hong Hai Official" />
                <meta
                    property="twitter:description"
                    content="This is the portfolio website of Hong Hai. You can take a look at my portfolio and see how you contact me"
                />
                <meta property="twitter:image" content=""></meta>
            </Helmet>
            <div className="App">
                <Router />
            </div>
        </HelmetProvider>
    );
}

export default App;

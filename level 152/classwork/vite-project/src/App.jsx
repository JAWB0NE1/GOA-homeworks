import "./App.css";
import Footer from "./Container/Footer";
import Header from "./Container/Header";
import Main from "./Container/Main";
function app() {
  return (<div className="app-container">
    <div>
      <Header />
      <Main />
    </div>
    <Footer />
  </div>)
}
export default app;
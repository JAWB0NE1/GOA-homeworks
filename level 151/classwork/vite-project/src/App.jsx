import "./App.css";
function App() {
  const current_location = window.location.pathname;
  switch (current_location) {
    case "/":
      return <>Home</>;
    case "/contacts":
      return <Contacts />;
    case "/about":
      return <About />;
  }

}
export default App;
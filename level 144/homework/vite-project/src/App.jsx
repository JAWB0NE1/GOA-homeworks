function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
import image from './assets/image.jpg';
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <img src={image} alt="My Asset" width="300" />
    </div>
  );
}

export default App;
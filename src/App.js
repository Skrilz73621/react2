import './App.css';
import { Title } from './components/title/Title';
import { About } from './components/about/About';

function App() {
  return (
    <div className="App">
      <Title text={'Hello world'}/>
      <About info={{title: "Some Title", body:"Some body"}}/>
    </div>
  );
}

export default App;

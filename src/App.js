import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '테스트 글 하나';

  return (
    <div className="App">
      <div className="black-nav">
        <div>상단 바</div>
      </div>
      <img src="{logo}"></img>
      <h4 style={{color:'blue'}}>{posts}</h4>  데이터 바인딩.
    </div>
  );
}

export default App;

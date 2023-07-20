//import './App.css';

function App() {
  const name = "KH정보교육원";
  let classB = '공공데이터 융합반';
  const fun1 = () => {
    return "함수에서 문자 반환"
  }
  return (
    <div className="App">
      <h1>{name}에 오신것을 환영합니다</h1>
      <h2>{classB}</h2>
      <h3>{fun1()}</h3>
      <br/>

      <h2>중괄호 안에 넣을 수 있는 것들</h2>
      <ul>
        <li>{"문자"}와 {1+2}숫자가능</li>
        <li>{fun1()} : 함수 가능</li>
      </ul>
      <br/>

      <h2>그 외에는 중괄호 안에 넣을 수 없다</h2>
      <ul>
        <li>{true} 불리언 불가</li>
        <li>{[1, 2]} 배열 불가</li>
      </ul>
    </div>
  );
}

export default App;

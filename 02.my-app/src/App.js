// import './App.css';
/*
function App() {
  return (
    <div className="App">
      <h1>KH정보교육원에 오신것을 환영합니다</h1>
      <h3>공공데이터 융합반</h3>
      <p>react 수업시간 입니다</p>
      <p>외부스타일 파일에서 스타일 주기(클래스를 이용한)</p>
    </div>
  );
}
*/

// inline방식 스타일 주기
function App() {
  const style1 = {
    App : {
      backgroundColor : 'yellow',
      textAlign : 'center',
      padding : '40px'
    },
    h1 : {
      color : 'red'
    }
  }
  return (
    <div style={style1.App}>
      <h1 style={style1.h1}>KH정보교육원에 오신것을 환영합니다</h1>
      <h3>공공데이터 융합반</h3>
      <p>react 수업시간 입니다</p>
      <p>외부스타일 파일에서 스타일 주기(클래스를 이용한)</p>
    </div>
  );
}
export default App;

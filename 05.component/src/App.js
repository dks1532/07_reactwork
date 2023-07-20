import './App.css';
import MyFooter from './component/MyFooter';
import MyHeader from './component/MyHeader';

// 3. 외부에 함수형 컴포넌트 만들기(반드시 import하기)
function App() {
  return (
    <div className="App">
      <MyHeader/>
      <section>
        <h1>본문</h1>
      </section>
      <MyFooter/>
    </div>
  );
}

/* 2. 같은 위치에 함수형 컴포넌트 만들기
const user = {
  firstName : 'Hong',
  lastName : 'GilDong'
}

function App() {
  const isStudent = true;
  return isStudent ? <h1>{Student(user)}님 환영합니다.</h1> : <h1>학생 아님</h1>
}

function Student(user) {
  return user.firstName + " " + user.lastName;
}
*/

/* 1. 같은 위치에 함수형 컴포넌트 만들기
function App() {
  return (
    <div className="App">
      <h1>Start React 2023_KH정보교육원</h1>
      <FunComponent/>
    </div>
  );
}

function FunComponent() {
  return <h2>[THIS IS FUNCTION COMPONENT]</h2>
}
*/
export default App;

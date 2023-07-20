import logo from './logo.svg';
import './App.css';

function App() {
  const isStudent = true;
  const name = "REACT";

  // 오류 if문은 return문 안에 넣을 수 없다
  /*
  return (
    <div className="App">
      if({isStudent}) {
        <h2>학생입니다</h2>
      } else {
        <h2>학생이 아닙니다</h2>
      }
    </div>
  );
  */

  // 실행됨
  /*
  if(isStudent) {
    return <h2>학생입니다</h2>
  } else {
    return <h2>학생이 아닙니다</h2>
  }
  */

  // return문 안에서 삼항 연사자 사용(여러줄 일때)
  /*
  return (
    <div>
      { name === 'REACT' ? <h2>React이다</h2> : <h2>React가 아니다</h2> }
    </div>
  );
  */
  const stName = "홍길동"; 
  return isStudent === true ? <h2>{stName}은 학생이다</h2> : <h2>학생이 아니다</h2>
}

export default App;

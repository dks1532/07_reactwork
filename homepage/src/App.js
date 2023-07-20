import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import { Route, Routes } from 'react-router-dom';
import MemberEnroll from './member/MemberEnroll';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={
                            <section>
                              <img src={logo} className="App-logo" alt="logo" />
                            </section>} 
        />
        <Route path="/memberEnroll" element={<MemberEnroll/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

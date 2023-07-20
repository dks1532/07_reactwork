import hlogo from './hlogo.png';
import './common.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <header id="header">
            <Link to="/"><img src={hlogo} alt="logo"/></Link>
            <h1>KH정보교육원</h1>
            <div>
                <button><Link to="/memberEnroll" className='link'>회원가입</Link></button>&emsp;
                <button onClick={openModal}>로그인</button>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal}/>
        </header>
    );
}

function Modal({isOpen, closeModal}) {
    return (
        <div style={{display:isOpen? "block" : "none"}} className="modal">
            <h3>로그인</h3>
            <input type="text" id="id" placeholder="ID" /><br/>
            <input type="password" id="pwd" placeholder="PW" /><br/>
            <button type="submit">로그인</button>&emsp;
            <button onClick={closeModal}>닫기</button>
        </div>
    )
}

export default Header;

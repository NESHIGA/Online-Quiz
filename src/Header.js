import React from 'react';
const Header = ({ onNavigate }) => {
    return (
        <header style={styles.header}>
            <div style={styles.logo} onClick={() => onNavigate('landing')}>
                 <span>QuizMaster</span>
            </div>
            <nav style={styles.nav}>
                <button style={styles.navLink} onClick={() => onNavigate('login')}>
                    Login
                </button>
                <button style={styles.registerBtn} onClick={() => onNavigate('register')}>
                    Register
                </button>
            </nav>
        </header>
    );
};

const styles = {
    header: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 40px', 
        backgroundColor: '#ffffff', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        fontFamily: 'Arial, sans-serif' 
    },
    logo: { 
        fontSize: '22px', 
        fontWeight: 'bold', 
        color: 'darkgreen', 
        cursor: 'pointer', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px' 
    },
    nav: { 
        display: 'flex', 
        alignItems: 'center', 
        gap: '20px' 
    },
    navLink: { 
        background: 'none', 
        border: 'none', 
        color: '#333', 
        fontSize: '15px', 
        fontWeight: '600', 
        cursor: 'pointer', 
        padding: '8px 12px' 
    },
    registerBtn: { 
        backgroundColor: '#28a745', 
        color: '#fff', 
        border: 'none', 
        padding: '8px 16px', 
        borderRadius: '5px', 
        fontWeight: 'bold', 
        cursor: 'pointer' 
    }
};

export default Header;

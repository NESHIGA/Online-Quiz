import React from 'react';
const Header=({isLoggedIn,currentRole,onLogout,onNavigate}) => {
    const styles={
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
        fontSize:'22px',
        fontWeight:'bold',
        color: '#007bff',
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
    welcomeText: {
        fontSize: '14px',
        color: '#555'
    },
    roleTag: {
        color: '#28a745',
        textTransform: 'capitalize'
    },
    navLink: {
        background: 'none',
        border: 'none',
        color: '#333',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
        padding: '8px 12px',
        transition: 'color 0.2s'
    },
    registerBtn: {
        backgroundColor:'#007bff',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    logoutBtn: {
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer'
    }    
}
    return (
        <header style={styles.header}>
            <div style={styles.logo} onClick={()=>onNavigate('landing')}>
                <span>QuizMaster</span>
            </div>
            <nav style={styles.nav}>
                {isLoggedIn ? (
                    <>
                        <span style={styles.welcomeText}>
                            Welcome,<strong style={styles.roleTag}>{currentRole}</strong>
                        </span>
                        <button style={styles.navLink} onClick={() => onNavigate('dashboard')}>
                            Dashboard
                        </button>
                        <button style={styles.logoutBtn}onClick={onLogout}>
                            Logout
                        </button>
                    </>
                ):(
                    <>
       <button style={styles.navLink} onClick={()=>onNavigate('login')}>Login</button>
       <button style={styles.registerBtn} onClick={()=>onNavigate('register')}>Register</button>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;

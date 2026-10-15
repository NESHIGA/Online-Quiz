import React, { useState } from 'react';

const Login = ({ currentPage, setCurrentPage }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');

    return (
        <div style={styles.card}>
            {currentPage === 'landing' && (
                <div>
                    <h2>Welcome to Online Quiz System</h2>
                    <p style={{ color: '#666', fontSize: '14px' }}>Test your knowledge and enhance your skills!</p>
                    <button style={styles.btn} onClick={() => setCurrentPage('login')}>
                        Go to Login
                    </button>
                    <p style={{ fontSize: '14px' }}>
                        New user?{' '}
                        <span style={styles.link} onClick={() => setCurrentPage('register')}>
                            Register here
                        </span>
                    </p>
                </div>
            )}

            {currentPage==='login'&&(
                <div>
                    <h2>Login</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Username / Email</label>
                            <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} required />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Password</label>
                            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
                        </div>
                        <button type="submit" style={styles.btn}>Sign In</button>
                    </form>
                    <p style={{ fontSize: '14px' }}>Back to <span style={styles.link} onClick={() => setCurrentPage('landing')}>Home</span></p>
                </div>
            )}
            {currentPage === 'register' && (
                <div>
                    <h2>Register</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Full Name</label>
                            <input type="text" placeholder="Enter your name" value={fullName} onChange={(e) => setFullName(e.target.value)} style={styles.input} required />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Email</label>
                            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Password</label>
                            <input type="password" placeholder="Create password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
                        </div>
                        <button type="submit" style={styles.btn}>Sign Up</button>
                    </form>
                    <p style={{ fontSize:'14px'}}>Already have an account? <span style={styles.link} onClick={() => setCurrentPage('login')}>Login</span></p>
                </div>
            )}
        </div>
    );
};

const styles = {
    card: { 
        background: '#fff',
        padding: '40px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)', 
        width: '360px', 
        textAlign: 'center', 
        fontFamily: 'Arial' 
    },
    inputGroup: { 
        marginBottom: '15px', 
        textAlign: 'left' 
    },
    label: { 
        fontSize: '14px', 
        fontWeight: 'bold', 
        color: '#555' },
    input: { 
        width: '100%', 
        padding: '10px', 
        marginTop: '5px', 
        borderRadius: '5px', 
        border: '1px solid #ccc',
         boxSizing: 'border-box' 
        },
    btn: { 
        width: '100%', 
        padding: '12px', 
        backgroundColor: 'darkgreen', 
        color: '#fff', 
        border: 'none', 
        borderRadius: '5px', 
        fontSize: '16px', 
        cursor: 'pointer', 
        fontWeight: 'bold', 
        marginTop: '10px' },
    link: { 
        color: 'darkgreen', 
        cursor: 'pointer', 
        fontWeight: 'bold' }
};

export default Login;

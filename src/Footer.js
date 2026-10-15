import React from 'react';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const styles={
        footer: {
        backgroundColor:'#222',
        color:'#bbbbbb',
        padding:'20px 40px',
        textAlign:'center',
        position:'fixed',
        bottom:0,
        left:0,
        right:0,
        fontFamily:'Arial, sans-serif',
        fontSize:'14px'
    },
    footerContent:{
        display:'flex',
        flexDirection:'column',
        gap:'8px',
        maxWidth:'1200px',
        margin:'0 auto'
    },
    copyText:{
        margin:0
    },
    footerLinks:{
        fontSize:'13px',
        color:'#888'
    },
    fLink:{
        cursor:'pointer',
        margin:'0 5px',
        transition:'color 0.2s'
    }
}
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <p style={styles.copyText}>
                    &copy; {currentYear} <strong>QuizMaster Portal</strong>. All Rights are Reserved.
                </p>
                <div style={styles.footerLinks}>
                    <span style={styles.fLink}>About Us</span> | 
                    <span style={styles.fLink}>Terms of Service</span> | 
                    <span style={styles.fLink}>Privacy Policy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

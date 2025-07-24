import Navbar from '../components/Navbar';

export default function Contact() {
  const contactInfo = {
    address: '서울시 강동구 00로 00길',
    mobile: '010-0000-0000',
    github: 'https://github.com/ddooing',
    email: '@naver.com'
  };

  return (
    <div>
      <Navbar />
      <main style={{
        minHeight: '100vh',
        padding: '6rem 2rem 2rem',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#333',
            textAlign: 'center'
          }}>Contact Me</h1>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px'
            }}>
              <h2 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: '#444'
              }}>📍 Address</h2>
              <p style={{ color: '#666', margin: 0 }}>{contactInfo.address}</p>
            </div>

            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px'
            }}>
              <h2 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: '#444'
              }}>📱 Mobile</h2>
              <p style={{ color: '#666', margin: 0 }}>{contactInfo.mobile}</p>
            </div>

            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px'
            }}>
              <h2 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: '#444'
              }}>💻 GitHub</h2>
              <a href={contactInfo.github}
                 target="_blank"
                 style={{
                   color: '#007bff',
                   textDecoration: 'none'
                 }}>
                {contactInfo.github}
              </a>
            </div>

            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px'
            }}>
              <h2 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: '#444'
              }}>✉️ Email</h2>
              <a href={`mailto:${contactInfo.email}`}
                 style={{
                   color: '#007bff',
                   textDecoration: 'none'
                 }}>
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
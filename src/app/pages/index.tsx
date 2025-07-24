import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{
        minHeight: '100vh',
        padding: '6rem 2rem 2rem',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            color: '#333'
          }}>김도영</h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#666',
            marginBottom: '2rem'
          }}>
            WEB 개발자 / 신입
          </p>
          <div style={{
            fontSize: '1.2rem',
            color: '#888',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'left',
            lineHeight: '1.8'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              안녕하세요, 사용자 중심의 서비스 개발에 열정을 가진 신입 웹 개발자입니다.
            </p>
            <p>
              HTML, CSS, JavaScript 기본기와 Spring Framework, React를 활용한 웹 개발 경험을 쌓았습니다.
              문제 해결에 있어 효율성을 중시하며, 이는 제가 개발자로서 추구하는 핵심 가치입니다.
            </p>
          </div>
          
          <div style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            <a href="https://github.com/ddooing" 
               target="_blank"
               style={{
                 padding: '0.8rem 2rem',
                 backgroundColor: '#333',
                 color: '#fff',
                 textDecoration: 'none',
                 borderRadius: '5px',
                 fontWeight: 'bold'
               }}>
              GitHub
            </a>
            <a href="mailto:@naver.com"
               style={{
                 padding: '0.8rem 2rem',
                 backgroundColor: '#007bff',
                 color: '#fff',
                 textDecoration: 'none',
                 borderRadius: '5px',
                 fontWeight: 'bold'
               }}>
              Contact Me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
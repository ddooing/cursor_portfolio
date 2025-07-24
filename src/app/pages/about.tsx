import Navbar from '../components/Navbar';

export default function About() {
  const skills = {
    Frontend: [
      { name: 'HTML5', desc: '내용 구성 태그를 활용한 웹 페이지의 기본 레이아웃을 구성 가능' },
      { name: 'CSS3', desc: 'class와 id를 활용한 세밀한 스타일링, 반응형 웹 디자인을 위한 미디어 쿼리 작성 가능' },
      { name: 'JavaScript', desc: 'Ajax를 활용하여 비동기 통신 구현 가능' }
    ],
    Backend: [
      { name: 'JAVA Spring', desc: 'Spring MVC 패턴에 대한 이해와 설계 가능' }
    ],
    Database: [
      { name: 'Oracle & MariaDB', desc: 'DDL과 DML을 이용하여 쿼리문 작성 가능' }
    ],
    Tools: [
      { name: 'Git & Github', desc: '팀 프로젝트를 통해 팀원과 작업할 수 있는 환경을 구축 가능' },
      { name: 'Docs & Discord', desc: '진행도 관리, 발표 준비 등 프로젝트 관리에 있어 공동 작업할 수 있는 툴을 사용해본 경험' }
    ]
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
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#333'
          }}>About Me</h1>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#444'
            }}>보유기술</h2>
            
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  color: '#555'
                }}>{category}</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0
                }}>
                  {items.map((skill, index) => (
                    <li key={index} style={{
                      marginBottom: '1rem',
                      padding: '1rem',
                      backgroundColor: '#fff',
                      borderRadius: '5px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <strong style={{ color: '#333' }}>{skill.name}</strong>
                      <p style={{
                        margin: '0.5rem 0 0',
                        color: '#666'
                      }}>{skill.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#444'
            }}>학력</h2>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>신한대학교 소프트웨어융합학과</h3>
              <p style={{ color: '#666', margin: '0' }}>2019.03 ~ 2024.02</p>
              <p style={{ color: '#666', margin: '0.5rem 0 0' }}>졸업 | 4.0 / 4.5</p>
            </div>
          </section>

          <section>
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#444'
            }}>자격증</h2>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{
                marginBottom: '1rem',
                padding: '1rem',
                backgroundColor: '#fff',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <strong style={{ color: '#333' }}>정보처리기사</strong>
                <p style={{ color: '#666', margin: '0.5rem 0 0' }}>2023.06 | 한국산업인력공단</p>
              </li>
              <li style={{
                marginBottom: '1rem',
                padding: '1rem',
                backgroundColor: '#fff',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <strong style={{ color: '#333' }}>TOPCIT</strong>
                <p style={{ color: '#666', margin: '0.5rem 0 0' }}>2023.10 | 458/1000점 | 정보통신기획평가원</p>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
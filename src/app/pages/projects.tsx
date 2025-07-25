import Navbar from '../components/Navbar';

export default function Projects() {
  const projects = [
    {
      title: 'ARTMEE - 전시회 정보 및 예약 관리 웹 사이트',
      period: '2024.02.01 ~ 2024.02.22 (총 21일)',
      github: 'https://github.com/ddooing/soldesk_artme',
      team: '총 4명 (팀장)',
      tech: ['HTML5/CSS3/JavaScript', 'Spring', 'Java', 'Oracle', 'Toss Payments Api'],
      roles: [
        '프로젝트 일정 관리 - 구글 Docs를 이용하여 팀원들의 할 일을 작성하고, 체크',
        'Toss API를 사용한 결제 기능 - Toss 결제 API 문서를 참고하여 결제 요청과 요청에 대한 에러 처리, 결제 승인과 승인에 대한 에러 처리 작업을 수행',
        'Session을 통한 장바구니 기능 - 사용자가 전시회 상품에 대해 session을 통해 장바구니를 추가하게끔 구현',
        '결제 관리자 페이지 구현 - 관리자가 결제건을 조회하고 결제 날짜, 결제 수단 등 검색 조건에 따른 검색과 취소할 수 있도록 페이지를 구현'
      ]
    },
    {
      title: 'Photo Cabinet - 사진 분류 서비스를 제공하는 사진 작가의 포트폴리오 사이트',
      period: '2023.08 ~ 2023.11 (총 3개월)',
      github: 'https://github.com/ddooing/Capstone-project',
      team: '총 4명',
      contribution: '30%',
      tech: ['React.js', 'Node.js', 'Docker', 'MariaDB', 'Naver Login Api'],
      roles: [
        '반응형 웹 구현 - 데스크톱 모니터부터 태블릿, 모바일 기기에 맞는 화면을 제공',
        '취향 테스트 구현 - 트리 형식의 퀴즈 페이지와 퀴즈 결과 페이지를 구현',
        '게시글 조회 페이지 구현',
        '이미지 분류 모델을 위한 데이터 전처리 - 이미지에 대한 유효성 검사 수행'
      ]
    }
  ];

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
          }}>Projects</h1>

          {projects.map((project, index) => (
            <div key={index} style={{
              marginBottom: '3rem',
              padding: '2rem',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                marginBottom: '1rem',
                color: '#333'
              }}>{project.title}</h2>

              <div style={{
                marginBottom: '1.5rem',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <a href={project.github}
                   target="_blank"
                   style={{
                     padding: '0.5rem 1rem',
                     backgroundColor: '#333',
                     color: '#fff',
                     textDecoration: 'none',
                     borderRadius: '5px',
                     fontSize: '0.9rem'
                   }}>
                  GitHub
                </a>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: '#666', margin: '0.5rem 0' }}>기간: {project.period}</p>
                <p style={{ color: '#666', margin: '0.5rem 0' }}>팀 구성: {project.team}</p>
                <p style={{ color: '#666', margin: '0.5rem 0' }}>기여도: {project.contribution}</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                  color: '#444'
                }}>사용 기술</h3>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{
                      padding: '0.3rem 0.8rem',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem',
                  color: '#444'
                }}>주요 역할</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {project.roles.map((role, i) => (
                    <li key={i} style={{
                      margin: '0.5rem 0',
                      padding: '0.5rem',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '5px',
                      color: '#666'
                    }}>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
import Image from 'next/image';
import {
  ProjectSection,
  ProjectItem,
  ProjectTitle,
  ProjectSubSection,
  ProjectSubTitle,
  ProjectInfo,
  ProjectInfoItem,
  ProjectInfoLabel,
  ProjectInfoValue,
  TechStack,
  TechTag,
  RoleList,
  RoleItem,
  ProjectImageContainer,
  SectionTitle,
  ProjectGithub,
  ProjectInfoRow,
  StyledLink,
} from '../../styles';

const projects = [
  {
    title: 'ARTMEE - 전시회 정보 및 예약 관리 웹 사이트',
    image: '/projects/artme.png',
    period: '2024.02.01 ~ 2024.02.22 (총 21일)',
    duration: '총 21일',
    team: '총 4명 (팀장)',
    contribution: '35%',
    github: 'https://github.com/ddooing/soldesk_artme',
    tech: ['Spring', 'Java', 'Oracle','Eclipse','Docker','Toss Payments Api'],
    roles: [
      '프로젝트 일정 관리 - 구글 Docs를 이용하여 팀원들의 할 일을 작성하고, 지속적으로 공유·확인함',
      '결제 기능 - Toss Payments API 공식 문서를 참고해 결제 기능을 구현하고, 결제 중 발생하는 에러에 대해서는 사용자에게 팝업 메시지로 보여줌',
      '장바구니 기능 - 사용자가 전시회에 대해 session을 통해 장바구니를 사용할 수 있도록 구현함',
      '결제 관리자 페이지 - 관리자가 결제 내역을 조회하고, 결제 날짜·결제 수단 등 검색 조건에 따른 조회 및 결제 취소할 수 있도록 페이지를 구현함'
    ]
  },
  {
    title: 'Photo Cabinet - 사진 분류 서비스를 제공하는 사진 작가의 포트폴리오 사이트',
    image: '/projects/photocabinet.png',
    period: '2023.08 ~ 2023.11',
    duration: '총 3개월',
    team: '총 4명',
    contribution: '30%',
    github: 'https://github.com/ddooing/Capstone-project',
    tech: ['React', 'Node.js', 'Python','MariaDB','VS Code','Docker', 'Naver Login Api','KakaoShare Api'],
    roles: [
      '프론트엔드 - 컴포넌트 구조를 설계하고, 미디어쿼리를 통해 반응형 웹으로 구현',
      '헤더 사용자 표시 - 로그인 상태에 따라 헤더에서 사용자 아이콘과 닉네임을 조건부로 렌더링하고, 아이콘 클릭 시 로그인 여부에 따라 마이페이지·로그아웃 메뉴 또는 로그인 모달을 노출함.',
      '취향 테스트 - 트리 형식의 퀴즈 페이지와 퀴즈 결과 페이지를 구현함',
      '게시글 조회 - 게시글 조회 API와 조회 페이지를 구현함',
      '테스트 결과 공유 - 테스트 결과를 링크 복사와 KakaoShare API를 활용해 공유할 수 있도록 구현함.',
      
    ]
  }
];

export default function Project() {
  return (
    <ProjectSection>
      <SectionTitle>🗂️ 프로젝트</SectionTitle>
      {projects.map((project, index) => (
        <ProjectItem key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>

          {project.image && (
            <ProjectImageContainer>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={300}
                priority
              />
            </ProjectImageContainer>
          )}

          <ProjectGithub>
            <StyledLink href={project.github} target="_blank">
              <Image 
                src="/icon/Github-Dark.svg"
                alt="github"
                width={25}
                height={25}
              />
              {project.github}
            </StyledLink>
          </ProjectGithub>

          {/* 기간 및 개발 인원 */}
          <ProjectInfo>
            <ProjectInfoRow>
              <ProjectInfoItem>
                <ProjectInfoLabel>📅 개발 기간</ProjectInfoLabel>
                <ProjectInfoValue>{project.period}</ProjectInfoValue>
              </ProjectInfoItem>
            </ProjectInfoRow>
            <ProjectInfoRow>
              <ProjectInfoItem>
                <ProjectInfoLabel>👪 팀원 구성</ProjectInfoLabel>
                <ProjectInfoValue>{project.team}</ProjectInfoValue>
              </ProjectInfoItem>
            </ProjectInfoRow>
          </ProjectInfo>

          {/* 사용 기술 */}
          <ProjectSubSection>
            <ProjectSubTitle>🛠️ 개발 환경</ProjectSubTitle>
            <TechStack>
              {project.tech.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </TechStack>
          </ProjectSubSection>

          {/* 역할 */}
          <ProjectSubSection>
            <ProjectSubTitle>👨‍💻 역할</ProjectSubTitle>
            <RoleList>
              {project.roles.map((role, i) => {
                const [title, description] = role.split(' - ');
                return (
                  <RoleItem key={i}>
                    <div className="role-title">{title}</div>
                    <div className="role-description">{description}</div>
                  </RoleItem>
                );
              })}
            </RoleList>
          </ProjectSubSection>
        </ProjectItem>
      ))}
    </ProjectSection>
  );
} 
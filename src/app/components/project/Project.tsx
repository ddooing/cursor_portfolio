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
      '프로젝트 일정 관리 - 구글 Docs를 이용하여 팀원들의 할 일을 작성하고, 체크',
      'Toss API를 사용한 결제 기능 - Toss 결제 API 문서를 참고하여 결제 요청과 요청에 대한 에러 처리, 결제 승인과 승인에 대한 에러 처리 작업을 수행',
      'Session을 통한 장바구니 기능 - 사용자가 전시회 상품에 대해 session을 통해 장바구니를 추가하게끔 구현',
      '결제 관리자 페이지 구현 - 관리자가 결제건을 조회하고 결제 날짜, 결제 수단 등 검색 조건에 따른 검색과 취소할 수 있도록 페이지를 구현'
    ]
  },
  {
    title: 'Photo Cabinet - 사진 분류 서비스를 제공하는 사진 작가의 포트폴리오 사이트',
    image: '/projects/photocabinet.png',
    period: '2023.08 ~ 2023.11',
    duration: '총 8개월',
    team: '총 4명',
    contribution: '30%',
    github: 'https://github.com/ddooing/Capstone-project',
    tech: ['React', 'Node.js', 'Python','MariaDB','VS Code','Docker', 'Naver Login Api'],
    roles: [
      '반응형 웹 구현 - 데스크톱 모니터부터 태블릿, 모바일 기기에 맞는 화면을 제공',
      '취향 테스트 구현 - 트리 형식의 퀴즈 페이지와 퀴즈 결과 페이지를 구현',
      '게시글 조회 페이지 구현',
      '이미지 분류 모델을 위한 데이터 전처리 - 이미지에 대한 유효성 검사 수행'
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
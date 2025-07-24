'use client';

import {
  MainContainer,
  ContentWrapper,
  TopSection,
  ProfileCard,
  ProfileSection,
  ProfileImage,
  InfoSection,
  InfoRow,
  InfoLabel,
  InfoValue,
  StyledLink,
  BriefIntro,
  IntroductionSection,
  SectionTitle,
  IntroText,
  DetailSection,
  DetailItem,
  DetailTitle,
  DetailContent,
  DetailPeriod,
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
  EducationSection,
  EducationItem,
  EducationDate,
  EducationContent,
  EducationTitle,
  EducationSubTitle,
  EducationDetail,
  EducationOrg,
  GradeText
} from './styles';

export default function Home() {
  const projects = [
    {
      title: 'ARTMEE - 전시회 정보 및 예약 관리 웹 사이트',
      period: '2024.02.01 ~ 2024.02.22',
      duration: '총 21일',
      team: '총 4명 (팀장)',
      contribution: '35%',
      github: 'https://github.com/ddooing/soldesk_artme',
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
      period: '2023.03 ~ 2023.11',
      duration: '총 8개월',
      team: '총 4명',
      contribution: '30%',
      github: 'https://github.com/ddooing/Capstone-project',
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
    <MainContainer>
      <ContentWrapper>
        <TopSection>
          <ProfileCard>
            <ProfileSection>
              <ProfileImage>
                프로필 사진
              </ProfileImage>
            </ProfileSection>

            <InfoSection>
              <InfoRowComponent label="이름" value="임승연" />
              <InfoRowComponent label="생년월일" value="2000.12.5 (24세)" />
              <InfoRowComponent label="주소" value="서울시 강동구 00로 00길" />
              <InfoRowComponent label="전화번호" value="010-9329-0000" />
              <InfoRowComponent 
                label="Github" 
                value="https://github.com/ddooing"
                isLink={true}
              />
              <InfoRowComponent 
                label="Email" 
                value="stpaq125@naver.com"
                isLink={true}
                mailTo={true}
              />
            </InfoSection>
          </ProfileCard>

          <BriefIntro>
          안녕하세요, 사용자 중심의 서비스 개발에 열정을 가진 신입 웹 개발자 임승연입니다. <br /> 
          저는 HTML, CSS, JavaScript 기본기와 Spring Framework , React 을 활용한 웹 개발 경험을 쌓았습니다. 
          문제 해결에 있어 효율성을 중시하며, 이는 제가 개발자로서 추구하는 핵심 가치입니다. <br />
          팀 프로젝트를 통해 다양한 관점을 고려하는 협업의 중요성을 배웠고, 이는 제가 더 큰 성장으로 이어진다고 믿습니다. 
          저는 사용자의 일상을 개선할 수 있는 서비스를 개발하여 기술적 도전을 해결하는 데 기여하고자 합니다.
          </BriefIntro>
        </TopSection>

        

        {/* 학력 섹션 */}
        <EducationSection>
          <SectionTitle>학력</SectionTitle>
          <EducationItem>
            <EducationDate>2019.03 ~ 2024.02</EducationDate>
            <EducationContent>
              <EducationTitle>
                신한대학교 (의정부)
                <EducationSubTitle>소프트웨어융합학과</EducationSubTitle>
              </EducationTitle>
              <GradeText>졸업 | 4.0 / 4.5</GradeText>
            </EducationContent>
          </EducationItem>
        </EducationSection>

        {/* 교육 섹션 */}
        <EducationSection>
          <SectionTitle>교육</SectionTitle>
          <EducationItem>
            <EducationDate>2023.08 ~ 2024.03</EducationDate>
            <EducationContent>
              <EducationTitle>
                빅데이터 활용 인공지능 기반 개인화 서비스 구축 개발자 과정
                <EducationOrg>솔데스크</EducationOrg>
              </EducationTitle>
              <EducationDetail>
                Spring framework 기반 웹 개발에 있어 필요한 지식을 배우고 프로젝트를 통해 경험과 협업 경험을 쌓았습니다.
              </EducationDetail>
            </EducationContent>
          </EducationItem>
        </EducationSection>

        {/* 자격증 섹션 */}
        <EducationSection>
          <SectionTitle>자격증</SectionTitle>
          <EducationItem>
            <EducationDate>2023.10</EducationDate>
            <EducationContent>
              <EducationTitle>
                TOPCIT 458점 / 1000점
                <EducationOrg>정보통신기획평가원</EducationOrg>
              </EducationTitle>
            </EducationContent>
          </EducationItem>
          <EducationItem>
            <EducationDate>2023.06</EducationDate>
            <EducationContent>
              <EducationTitle>
                정보처리기사
                <EducationOrg>한국산업인력공단</EducationOrg>
              </EducationTitle>
            </EducationContent>
          </EducationItem>
          <EducationItem>
            <EducationDate>2023.04</EducationDate>
            <EducationContent>
              <EducationTitle>
                파이썬 프로그래밍 활용 능력 2급
                <EducationOrg>한국정보인재개발원</EducationOrg>
              </EducationTitle>
            </EducationContent>
          </EducationItem>
          <EducationItem>
            <EducationDate>2020.02</EducationDate>
            <EducationContent>
              <EducationTitle>
                2종보통운전면허
                <EducationOrg>경찰청</EducationOrg>
              </EducationTitle>
            </EducationContent>
          </EducationItem>
        </EducationSection>

        {/* 자기소개 섹션 */}
        <IntroductionSection>
          <SectionTitle>자기소개</SectionTitle>
          <IntroText>
            효율성을 가치관으로 삼고 있는 저는 어렸을 때부터 문제 해결의 효율적인 방법에 흥미를 느꼈습니다. 
            대학에서의 프로젝트를 통해 사용자에게 필요한 서비스를 제공하여 그들의 일상을 효율적으로 개선할 수 있는 가능성에 큰 흥미를 느꼈습니다. 
            또한 개발의 궁극적 목적이 사용자와 시스템에 더 나은 효율성을 제공하는 것임을 깨달았고, 최적화된 코드와 팀워크의 중요성을 배웠습니다. 
            이 경험으로 인해 저는 효율성을 생각하는 개발자가 되기로 결심했습니다. 
            사용자의 일상을 개선할 수 있는 서비스 개발에 대한 열정을 가지고, 기술적 도전을 해결하며 지속해서 성장해 나갈 것입니다.
          </IntroText>
        </IntroductionSection>

        {/* 성격의 장단점 섹션 */}
        <DetailSection>
          <SectionTitle>성격의 장단점</SectionTitle>
          <DetailItem>
            <DetailContent>
              <IntroText>
                저는 새로운 문제에 대한 두려움이 있을지언정 이를 극복할 자신감을 가지고 있습니다. 
                프로젝트 초반에는 그저 첫 프로젝트에 대한 기대감만 있었습니다. 
                그러나 개발이 진행됨에 따라 점차 어렵고 복잡하게 느껴지며 두려움이 커져만 갔습니다. 
                하지만 저는 계속해서 공부하고 기능을 하나씩 구현해나가면서 두려움보다는 해낼 수 있겠다는 마음을 갖게 되었습니다. 
                이 경험은 저에게 새로운 문제나 어려움에 직면했을 때, 차근차근 해결해 나갈 수 있는 능력을 키워주었습니다. 
                <br />
                저는 어려운 문제에 있어 혼자 해결하려는 경향이 있었습니다. 
                학원 수강을 시작하면서 점점 더 복잡한 문제들이 발생하기 시작했습니다. 
                따라서 저는 친구들과 멘토님께 도움을 요청하기 시작했고, 이 과정에서 혼자 해결하는 방법이 항상 옳지 않다는 것을 깨달았습니다. 
                이 깨달음으로 해결해야 할 문제에 있어 상황에 따른 긍정적인 접근 방식을 취하는데 도움이 되었습니다.
              </IntroText>
            </DetailContent>
          </DetailItem>
          
        </DetailSection>

        {/* 지원 동기 및 입사 후 포부 섹션 */}
        <DetailSection>
          <SectionTitle>지원 동기 및 입사 후 포부</SectionTitle>
          <IntroText>
            대학과 국비 지원 수업을 통해 개발에 필요한 기본 지식을 쌓고, Spring Framework 기반 웹 사이트를 개발한 경험이 있습니다. 
            이 과정에서 사용자 중심의 개발 방식의 중요성을 깨닫고, 실제 프로젝트에 이를 적용하는 방법을 배웠습니다. 
            이러한 경험을 통해 지원하는 직무에 필요한 역량을 갖추었다고 판단하여, 이를 바탕으로 지원하게 되었습니다.
          <br />
            입사하게 된다면, 저는 신입 개발자로서 개발에 필요한 기술적 기초를 다져 직무에 빠르게 투입될 수 있도록 할 것입니다.
            또한 현재에 안주하지 않는 배우려는 자세로 개발 능력을 꾸준히 강화하고, 팀의 목표 달성에 기여하며, 
            더 나아가 핵심 인재로 성장할 수 있도록 최선을 다할 것입니다.

          </IntroText>
          
        </DetailSection>

        {/* 프로젝트 섹션 */}
        <ProjectSection>
          <SectionTitle>프로젝트</SectionTitle>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>

              {/* 기간 */}
              <ProjectSubSection>
                <ProjectSubTitle>기간</ProjectSubTitle>
                <ProjectInfo>
                  <ProjectInfoItem>
                    <ProjectInfoLabel>개발 기간</ProjectInfoLabel>
                    <ProjectInfoValue>{project.period}</ProjectInfoValue>
                  </ProjectInfoItem>
                  <ProjectInfoItem>
                    <ProjectInfoLabel>소요 기간</ProjectInfoLabel>
                    <ProjectInfoValue>{project.duration}</ProjectInfoValue>
                  </ProjectInfoItem>
                </ProjectInfo>
              </ProjectSubSection>

              {/* 개발 인원 */}
              <ProjectSubSection>
                <ProjectSubTitle>개발 인원</ProjectSubTitle>
                <ProjectInfo>
                  <ProjectInfoItem>
                    <ProjectInfoLabel>팀 구성</ProjectInfoLabel>
                    <ProjectInfoValue>{project.team}</ProjectInfoValue>
                  </ProjectInfoItem>
                  <ProjectInfoItem>
                    <ProjectInfoLabel>기여도</ProjectInfoLabel>
                    <ProjectInfoValue>{project.contribution}</ProjectInfoValue>
                  </ProjectInfoItem>
                  <ProjectInfoItem>
                    <ProjectInfoLabel>GitHub</ProjectInfoLabel>
                    <ProjectInfoValue>
                      <StyledLink href={project.github} target="_blank">
                        {project.github}
                      </StyledLink>
                    </ProjectInfoValue>
                  </ProjectInfoItem>
                </ProjectInfo>
              </ProjectSubSection>

              {/* 사용 기술 */}
              <ProjectSubSection>
                <ProjectSubTitle>사용 기술</ProjectSubTitle>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectSubSection>

              {/* 역할 */}
              <ProjectSubSection>
                <ProjectSubTitle>주요 역할</ProjectSubTitle>
                <RoleList>
                  {project.roles.map((role, i) => (
                    <RoleItem key={i}>{role}</RoleItem>
                  ))}
                </RoleList>
              </ProjectSubSection>
            </ProjectItem>
          ))}
        </ProjectSection>

      </ContentWrapper>
    </MainContainer>
  );
}

// 정보 행을 표시하는 컴포넌트
function InfoRowComponent({ 
  label, 
  value, 
  isLink = false,
  mailTo = false 
}: { 
  label: string;
  value: string;
  isLink?: boolean;
  mailTo?: boolean;
}) {
  return (
    <InfoRow>
      <InfoLabel>
        {label}
      </InfoLabel>
      <InfoValue>
        {isLink ? (
          <StyledLink 
            href={mailTo ? `mailto:${value}` : value}
            target={mailTo ? undefined : "_blank"}
          >
            {value}
          </StyledLink>
        ) : (
          value
        )}
      </InfoValue>
    </InfoRow>
  );
}
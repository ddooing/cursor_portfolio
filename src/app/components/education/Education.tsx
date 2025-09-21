import {
  EducationSection,
  EducationItem,
  EducationDate,
  EducationContent,
  EducationTitle,
  EducationSubTitle,
  EducationDetail,
  EducationOrg,
  GradeText,
  SectionTitle,
} from '../../styles';

export default function Education() {
  return (
    <>
      {/* 학력 섹션 */}
      <EducationSection>
        <SectionTitle>🎓 학력</SectionTitle>
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
        <SectionTitle>📖 교육</SectionTitle>
        <EducationItem>
          <EducationDate>2023.08 ~ 2024.03</EducationDate>
          <EducationContent>
            <EducationTitle>
              빅데이터 활용 인공지능 기반 개인화 서비스 구축 개발자 과정
              <EducationOrg>솔데스크</EducationOrg>
            </EducationTitle>
            <EducationDetail>
              Spring framework 기반 웹 개발에 있어 필요한 지식을 배우고 프로젝트를 통해 실습과 협업 경험을 쌓았습니다.
            </EducationDetail>
          </EducationContent>
        </EducationItem>

        <EducationItem>
          <EducationDate>2025.08.18 ~ 8.20 
            <br/>(20시간)</EducationDate>
          <EducationContent>                                                                                                                                                                                                                                                                                                                                                                          
            <EducationTitle>
            소프트웨어 아키텍처 과정
              <EducationOrg>대구디지털혁신진흥원(DIP)</EducationOrg>
            </EducationTitle>
            <EducationDetail>                                                                 
            Spring Boot 기반 미니 프로젝트를 기획·구현하고 AWS 환경에 배포하여 서버 운영까지 경험을 쌓았습니다.
            </EducationDetail>
          </EducationContent>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        </EducationItem>
      </EducationSection>

      {/* 자격증 섹션 */}
      <EducationSection>
        <SectionTitle>📚 자격증</SectionTitle>
        <EducationItem>
          <EducationDate>2025.09</EducationDate>
          <EducationContent>
            <EducationTitle>
              SQLD
              <EducationOrg>한국산업인력공단</EducationOrg>
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
    </>
  );
} 
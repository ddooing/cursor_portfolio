import styled from 'styled-components';

export const MainContainer = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TopSection = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProfileCard = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 1.5rem;
`;

export const ProfileSection = styled.div`
  width: 200px;
  flex-shrink: 0;
`;

export const ProfileImage = styled.div`
  width: 150px;
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 1px solid #eee;
`;

export const InfoLabel = styled.div`
  width: 100px;
  font-weight: 500;
  color: #333;
  letter-spacing: -0.01em;
`;

export const InfoValue = styled.div`
  flex: 1;
  color: #555;
  letter-spacing: -0.01em;
`;

export const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const BriefIntro = styled.div`
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
  letter-spacing: -0.01em;
  
  strong {
    color: #333;
    font-weight: 700;
  }
`;

export const IntroductionSection = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  //border-bottom: 3px solid #888;
  display: inline-block;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

export const IntroText = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

export const DetailSection = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DetailItem = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DetailTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const DetailContent = styled.div`
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const DetailPeriod = styled.span`
  color: #888;
  font-size: 0.9rem;
`; 

export const ProjectSection = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProjectItem = styled.div`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 38%;
  //height: 300px;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: #f8f8f8;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const ProjectSubSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const ProjectSubTitle = styled.h4`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  letter-spacing: -0.01em;
  /*
  &:before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 1em;
    background-color: #000;
    margin-right: 0.5rem;
    border-radius: 2px;
  }
  */
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 1.5rem 0;
`;

export const ProjectInfoRow = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ProjectInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProjectInfoLabel = styled.span`
  font-weight: 500;
  color: #555;
  white-space: nowrap;
  letter-spacing: -0.01em;
  
  &:after {
    content: ":";
    margin-right: 4px;
  }
`;

export const ProjectInfoValue = styled.span`
  color: #666;
  letter-spacing: -0.01em;
`;

export const ProjectGithub = styled.div`
  margin: 1rem 0 2rem 0;
  
  a {
    color: #0066cc;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const TechTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: #f0f0f0;
  color: #666;
  border-radius: 15px;
  font-size: 0.9rem;
`;

export const RoleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const RoleItem = styled.li`
  color: #666;
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #007bff;
  }

  .role-title {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.3rem;
  }

  .role-description {
    color: #666;
    padding-left: 1rem;
  }
`; 

export const EducationSection = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const EducationItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const EducationDate = styled.div`
  width: 180px;
  flex-shrink: 0;
  color: #666;
`;

export const EducationContent = styled.div`
  flex: 1;
`;

export const EducationTitle = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const EducationSubTitle = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

export const EducationDetail = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

export const EducationOrg = styled.span`
  color: #888;
  font-size: 0.9rem;
  &:before {
    content: "•";
    margin: 0 0.5rem;
  }
`;

export const GradeText = styled.div`
  color: #666;
  margin-top: 0.2rem;
  font-size: 0.9rem;
`; 
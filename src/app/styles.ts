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
  width: 200px;
  height: 250px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  font-weight: bold;
  color: #333;
`;

export const InfoValue = styled.div`
  flex: 1;
  color: #666;
`;

export const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const BriefIntro = styled.div`

  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  
  strong {
    color: #333;
    font-weight: 600;
  }
`;

export const IntroductionSection = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #007bff;
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
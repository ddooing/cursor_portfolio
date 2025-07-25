'use client';

import { MainContainer, ContentWrapper, TopSection } from './styles';
import Profile from './components/profile/Profile';
import Education from './components/education/Education';
import Project from './components/project/Project';
import Introduction from './components/introduction/Introduction';

export default function Home() {
  return (
    <MainContainer>
      <ContentWrapper>
        <TopSection>
          <Profile />
        </TopSection>
        <Education />
        <Introduction />
        <Project />
      </ContentWrapper>
    </MainContainer>
  );
}
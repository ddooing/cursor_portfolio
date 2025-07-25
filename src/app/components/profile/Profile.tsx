import Image from 'next/image';
import {
  ProfileCard,
  ProfileSection,
  ProfileImage,
  InfoSection,
  InfoRow,
  InfoLabel,
  InfoValue,
  StyledLink,
  BriefIntro,
} from '../../styles';

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

export default function Profile() {
  return (
    <>
      <ProfileCard>
        <ProfileSection>
          <ProfileImage>
            <Image 
              src="/projects/이력서.jpg"
              alt="프로필 사진"
              width={250}
              height={300}
              priority
            />
          </ProfileImage>
        </ProfileSection>

        <InfoSection>
          <InfoRowComponent label="🗣️ 이름" value="임승연" />
          <InfoRowComponent label="📅 생년월일" value="2000.12.5 (24세)" />
          <InfoRowComponent label="📍 Address" value="서울시 강동구 상암로 23길" />
          <InfoRowComponent label="📱 Mobile" value="010-9329-7729" />
          <InfoRowComponent 
            label="⚙️ Github" 
            value="https://github.com/ddooing"
            isLink={true}
          />
          <InfoRowComponent 
            label="📧 Email" 
            value="stpaq125@naver.com"
            isLink={true}
            mailTo={true}
          />
        </InfoSection>
      </ProfileCard>

      <BriefIntro>
        안녕하세요, 사용자 중심의 서비스 개발에 열정을 가진 신입 개발자 임승연입니다.🙌 <br /> 
        저는 HTML, CSS, JavaScript 기본기와 Spring Framework, React 을 활용한 웹 개발 경험을 쌓았습니다. <br /> 
        문제 해결에 있어 효율성을 중시하며, 이는 제가 개발자로서 추구하는 핵심 가치입니다. <br />
        팀 프로젝트를 통해 다양한 관점을 고려하는 협업의 중요성을 배웠고, 이는 제가 더 큰 성장으로 이어진다고 믿습니다. <br /> 
        저는 사용자의 일상을 개선할 수 있는 서비스를 개발하여 기술적 도전을 해결하는 데 기여하고자 합니다.
      </BriefIntro>
    </>
  );
} 
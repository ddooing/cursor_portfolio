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
      처음에는 문제 앞에서 주저하기도 했지만, 도전과 협업 경험을 통해 어려움을 극복하는 힘을 기를 수 있었습니다. < br/>
       앞으로도 동료들과 함께 성장하며, 새로운 도전에 적극적으로 임하는 개발자가 되고자 합니다.
      </BriefIntro>
    </>
  );
} 
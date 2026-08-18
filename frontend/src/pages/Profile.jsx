import DashboardLayout from "../components/layout/DashboardLayout";

import ProfileHeader from "../components/profile/ProfileHeader";
import PersonalInfo from "../components/profile/PersonalInfo";
import Education from "../components/profile/Education";
import Experience from "../components/profile/Experience";
import Skills from "../components/profile/Skills";
import Projects from "../components/profile/Projects";
import ResumeCard from "../components/profile/ResumeCard";
import Certifications from "../components/profile/Certifications";
import SocialLinks from "../components/profile/SocialLinks";

function Profile() {
  return (
    <DashboardLayout>

      <ProfileHeader />

      <div className="mt-8">
        <PersonalInfo />
      </div>

      <div className="mt-8">
        <Education />
      </div>

      <div className="mt-8">
        <Experience />
      </div>

      <div className="mt-8">
        <Skills />
      </div>

      <div className="mt-8">
        <Projects />
      </div>

      <div className="mt-8">
        <ResumeCard />
      </div>

      <div className="mt-8">
        <Certifications />
      </div>

      <div className="mt-8">
        <SocialLinks />
      </div>

    </DashboardLayout>
  );
}

export default Profile;
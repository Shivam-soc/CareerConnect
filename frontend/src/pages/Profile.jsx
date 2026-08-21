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

      <div className="mt-6 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">

        {/* Left Column */}

        <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">

          <PersonalInfo />

          <ResumeCard />

          <SocialLinks />

        </aside>

        {/* Right Column */}

        <div className="space-y-6">

          <Education />

          <Experience />

          <Skills />

          <Projects />

          <Certifications />

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Profile;
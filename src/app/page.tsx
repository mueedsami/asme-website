import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import EventsPreview from "@/components/sections/EventsPreview";
import AnnouncementsPreview from "@/components/sections/AnnouncementsPreview";
import AchievementsPreview from "@/components/sections/AchievementsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <EventsPreview />
      <AnnouncementsPreview />
      <AchievementsPreview />
    </>
  );
}

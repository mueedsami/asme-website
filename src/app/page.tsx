import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import EventsPreview from "@/components/sections/EventsPreview";
import AnnouncementsPreview from "@/components/sections/AnnouncementsPreview";
import AchievementsPreview from "@/components/sections/AchievementsPreview";
import FromTheDeskPreview from "@/components/sections/FromTheDeskPreview";
import MagazinesPreview from "@/components/sections/MagazinePreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import ExecutiveHeadsPreview from "@/components/sections/ExecutiveHeadsPreview";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <EventsPreview />
      <AnnouncementsPreview />
      <AchievementsPreview />
      <ExecutiveHeadsPreview />
      {/* <FromTheDeskPreview /> */}
      <MagazinesPreview />
      {/* <GalleryPreview /> */}
      <Footer />
    </>
  );
}

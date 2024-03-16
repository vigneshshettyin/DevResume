import Header from "./components/header";
import AboutMe from "./components/about";
import WorkSection from "./components/work";

export default function Resume() {
  return (
    <>
      <div className="flex min-h-screen flex-col max-w-4xl items-center p-6 lg:p-24 mx-auto">
        <Header />
        <AboutMe />
        <WorkSection />
      </div>
    </>
  );
}

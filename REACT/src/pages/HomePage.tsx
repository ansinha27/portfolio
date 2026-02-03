import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// import { Stats } from "@/components/Stats";
import { Divider } from "@/components/Divider";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Features } from "@/components/Features";
import { LaunchSection } from "@/components/LaunchSection";
import { Footer } from "@/components/Footer";

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#030303]">
            <Header />
            <main>
                <Hero />
                {/* <Divider />
                <Stats />
                <Divider /> */}
                <Experience />
                <Divider />
                <Education />
                <Divider />
                <Projects />
                <Divider />
                <Features />
                <Divider />
                <LaunchSection />
            </main>
            <Footer />
        </div>
    );
}

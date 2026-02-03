"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { AnimatedDots } from "@/components/ui/animated-dots";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { GridPattern } from "@/components/ui/grid-pattern";
import { siteConfig } from "@/config/site";

interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
}

interface EducationCardProps extends EducationItem {
    index: number;
}

function EducationCard({
    degree,
    institution,
    location,
    period,
    description,
    achievements,
    index,
}: EducationCardProps) {
    const gradients = [
        "from-cyan-500 via-blue-500 to-indigo-500",
        "from-violet-500 via-purple-500 to-fuchsia-500",
        "from-emerald-500 via-teal-500 to-cyan-500",
    ];
    const gradient = gradients[index % gradients.length];

    const iconBgs = [
        "from-cyan-500/20 to-indigo-500/5",
        "from-violet-500/20 to-fuchsia-500/5",
        "from-emerald-500/20 to-cyan-500/5",
    ];
    const iconBg = iconBgs[index % iconBgs.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative"
        >
            {/* Card */}
            <div className="relative h-full p-8 rounded-3xl bg-[#0e0e14]/80 border border-white/[0.08] backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)] overflow-hidden">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                    >
                        <GraduationCap className="w-8 h-8 text-violet-400" />
                    </motion.div>

                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium mb-4">
                        <Calendar className="w-3 h-3" />
                        {period}
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl md:text-2xl font-bold text-white font-['Outfit'] mb-2 leading-tight">
                        {degree}
                    </h3>

                    {/* Institution & Location */}
                    <div className="flex flex-col gap-1 mb-4">
                        <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm">
                            <BookOpen className="w-4 h-4" />
                            {institution}
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <MapPin className="w-3 h-3" />
                            {location}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed mb-6 text-sm">
                        {description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-wider">
                            <Award className="w-3 h-3 text-amber-400" />
                            Achievements
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {achievements.map((achievement) => (
                                <span
                                    key={achievement}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300/90 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
                                >
                                    {achievement}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-violet-500/10 via-transparent to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
}

export function Education() {
    const education = (siteConfig.education || []) as EducationItem[];

    if (education.length === 0) return null;

    return (
        <section id="education" className="relative py-24 bg-gradient-to-b from-[#0a0a0e] via-[#0c0c12] to-[#0e0e16]">
            {/* Animated backgrounds */}
            <GridPattern />
            <AnimatedDots speed={0.2} />
            <FloatingParticles count={18} />

            {/* Gradient accents */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.05)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.04)_0%,_transparent_50%)]" />

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-['Outfit']">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/80">
                            Education &
                        </span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                            Qualifications
                        </span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        Strong foundation in computer science and artificial intelligence from world-class institutions
                    </p>
                </motion.div>

                {/* Education cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {education.map((edu, index) => (
                        <EducationCard
                            key={`${edu.institution}-${edu.period}`}
                            {...edu}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

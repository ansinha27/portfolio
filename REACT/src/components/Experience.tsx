"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { AnimatedDots } from "@/components/ui/animated-dots";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { siteConfig } from "@/config/site";

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    highlights: string[];
    technologies: string[];
}

interface ExperienceCardProps extends ExperienceItem {
    index: number;
    isLast: boolean;
}

function ExperienceCard({
    title,
    company,
    location,
    period,
    description,
    highlights,
    technologies,
    index,
    isLast,
}: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-8"
        >
            {/* Timeline connector - Mobile */}
            <div className="lg:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

            {/* Left side content (or empty for alternating) */}
            <div className={`${index % 2 === 0 ? "lg:block" : "lg:invisible lg:order-3"} hidden lg:block`}>
                {index % 2 === 0 && (
                    <div className="text-right pr-8">
                        <span className="inline-flex items-center gap-2 text-white/60 text-sm font-medium">
                            <Calendar className="w-4 h-4" />
                            {period}
                        </span>
                    </div>
                )}
            </div>

            {/* Center timeline node */}
            <div className="hidden lg:flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 p-[2px] shadow-lg shadow-indigo-500/25"
                >
                    <div className="w-full h-full rounded-2xl bg-[#0c0c12] flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-indigo-400" />
                    </div>
                </motion.div>
                {!isLast && (
                    <div className="w-[2px] flex-1 min-h-[100px] bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />
                )}
            </div>

            {/* Card content */}
            <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`${index % 2 === 0 ? "lg:order-3" : ""} relative ml-14 lg:ml-0 group`}
            >
                {/* Mobile timeline node */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="lg:hidden absolute -left-14 top-4 z-10 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 p-[2px] shadow-lg shadow-indigo-500/25"
                >
                    <div className="w-full h-full rounded-xl bg-[#0c0c12] flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-indigo-400" />
                    </div>
                </motion.div>

                <div className="p-6 md:p-8 rounded-3xl bg-[#0e0e14]/80 border border-white/[0.08] backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] overflow-hidden">
                    {/* Gradient accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    <div className="relative z-10">
                        {/* Mobile period badge */}
                        <div className="lg:hidden flex items-center gap-2 text-white/50 text-xs font-medium mb-3">
                            <Calendar className="w-3 h-3" />
                            {period}
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-xl md:text-2xl font-bold text-white font-['Outfit'] mb-1">
                            {title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-white/60 text-sm mb-4">
                            <span className="font-semibold text-indigo-400">{company}</span>
                            <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {location}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-white/50 leading-relaxed mb-5">
                            {description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-5">
                            {highlights.map((highlight, i) => (
                                <div key={i} className="flex items-start gap-2 text-white/40 text-sm">
                                    <ChevronRight className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/25 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right side date (for alternating) */}
            {index % 2 !== 0 && (
                <div className="hidden lg:block text-left pl-8 order-1">
                    <span className="inline-flex items-center gap-2 text-white/60 text-sm font-medium">
                        {period}
                        <Calendar className="w-4 h-4" />
                    </span>
                </div>
            )}
        </motion.div>
    );
}

export function Experience() {
    const experience = (siteConfig.experience || []) as ExperienceItem[];

    if (experience.length === 0) return null;

    return (
        <section id="experience" className="relative py-24 bg-gradient-to-b from-[#0e0e14] via-[#0c0c12] to-[#0a0a0e]">
            {/* Animated backgrounds */}
            <AnimatedDots speed={0.25} />
            <FloatingParticles count={20} />

            {/* Gradient accents */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(99,102,241,0.06)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.06)_0%,_transparent_50%)]" />

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
                            Professional
                        </span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">
                            Experience
                        </span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        Building innovative solutions and leading teams across AI, machine learning, and software engineering
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto space-y-8 lg:space-y-12">
                    {experience.map((exp, index) => (
                        <ExperienceCard
                            key={`${exp.company}-${exp.period}`}
                            {...exp}
                            index={index}
                            isLast={index === experience.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

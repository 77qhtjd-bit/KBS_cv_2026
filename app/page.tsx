"use client";

import { cv } from "@/data/cv";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Tag from "@/components/Tag";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-14">
        {/* Header / Hero */}
        <header className="space-y-4">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">{cv.profile.name}</h1>
            <p className="mt-2 text-lg text-zinc-600">{cv.profile.headline}</p>
          </div>

          {/* Quick Links & Resume Button */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={`mailto:${cv.profile.email}`}
                className="underline underline-offset-4 hover:text-zinc-600"
              >
                {cv.profile.email}
              </a>
              <a
                href={cv.profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-zinc-600"
              >
                GitHub
              </a>
              <a
                href={cv.profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-zinc-600"
              >
                LinkedIn
              </a>
            </div>
            <a
              href="/resume.pdf"
              className="rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-medium hover:bg-zinc-100"
              download
            >
              📄 Resume PDF
            </a>
          </div>
        </header>

        {/* About Section */}
        <Section title="About" emoji="👤">
          <div className="space-y-4">
            {cv.about.summary.map((paragraph, idx) => (
              <p key={idx} className="leading-7 text-zinc-700">
                {paragraph}
              </p>
            ))}
            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-zinc-600">Keywords:</p>
              <div className="flex flex-wrap gap-2">
                {cv.about.keywords.map((keyword) => (
                  <Tag key={keyword} label={keyword} variant="secondary" />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Experience" emoji="💼">
          <div className="space-y-4">
            {cv.experience.map((exp, idx) => (
              <Card key={idx} hoverable={false}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-sm text-zinc-600">{exp.org}</p>
                    {exp.location && (
                      <p className="text-xs text-zinc-500">{exp.location}</p>
                    )}
                  </div>
                  <p className="text-sm font-medium text-zinc-500 sm:text-right">
                    {exp.period}
                  </p>
                </div>
                <ul className="mt-3 space-y-1">
                  {exp.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex gap-2 text-sm text-zinc-700">
                      <span className="text-zinc-400">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projects" emoji="🚀">
          <div className="grid gap-4 sm:grid-cols-2">
            {cv.projects.map((project, idx) => (
              <Card key={idx} hoverable className="flex flex-col">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-sm text-zinc-600">{project.subtitle}</p>
                  )}
                  {project.status && (
                    <p className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                      {project.status}
                    </p>
                  )}
                </div>
                <p className="mt-2 text-sm text-zinc-700">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Tag key={tech} label={tech} variant="default" />
                  ))}
                </div>
                {project.links && (
                  <div className="mt-3 flex gap-2">
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-blue-600 hover:underline"
                      >
                        Repo
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-blue-600 hover:underline"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills & Tools Grid */}
        <Section title="Skills & Tools" emoji="🛠️">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cv.skills.map((skillGroup, idx) => (
              <Card key={idx}>
                <h3 className="font-semibold">{skillGroup.category}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <Tag key={item} label={item} variant="secondary" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section title="Education" emoji="🎓">
          <div className="space-y-4">
            {cv.education.map((edu, idx) => (
              <Card key={idx}>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-sm text-zinc-600">{edu.school}</p>
                <p className="text-sm font-medium text-zinc-500">{edu.period}</p>
                {edu.details && edu.details.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {edu.details.map((detail, didx) => (
                      <li key={didx} className="text-sm text-zinc-600">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* Hobbies Section */}
        {cv.hobbies.length > 0 && (
          <Section title="Hobbies & Interests" emoji="🎯">
            <div className="flex flex-wrap gap-2">
              {cv.hobbies.map((hobby) => (
                <Tag key={hobby} label={hobby} variant="secondary" />
              ))}
            </div>
          </Section>
        )}

        {/* Social / Contact Links */}
        <Section title="Connect" emoji="🔗">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cv.social.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-lg border border-zinc-200 p-3 text-center hover:bg-zinc-50"
              >
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-zinc-600">{item.value}</p>
              </a>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-14 border-t pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {cv.profile.name} · Built with Next.js & React
        </footer>
      </div>
    </main>
  );
}

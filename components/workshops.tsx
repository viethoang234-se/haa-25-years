'use client'

import { Mic, Users, GraduationCap, Network, ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const events = [
  {
    icon: GraduationCap,
    type: 'Workshop',
    title: 'Crafting Ideas That Travel',
    desc: 'A hands-on session on building advertising concepts with global appeal and local soul.',
    date: 'Aug 12, 2026',
  },
  {
    icon: Mic,
    type: 'Industry Talk',
    title: 'The Future of Vietnamese Creativity',
    desc: 'Leading creative directors share where the industry is heading over the next decade.',
    date: 'Aug 20, 2026',
  },
  {
    icon: Users,
    type: 'Mentorship',
    title: 'Future Sparks Mentor Circles',
    desc: 'Small-group mentoring pairing finalists with senior industry professionals.',
    date: 'Sep 2, 2026',
  },
  {
    icon: Network,
    type: 'Networking',
    title: '25th Anniversary Creative Mixer',
    desc: 'Connect with agencies, brands, and fellow creatives celebrating 25 years of HAA.',
    date: 'Sep 18, 2026',
  },
]

export function Workshops() {
  return (
    <section id="events" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Workshops &amp; Community
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Learn, connect, and grow
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => {
            const Icon = e.icon
            return (
              <Reveal key={e.title} delay={(i % 4) * 0.07}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10">
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {e.type}
                  </span>
                  <h3 className="mt-1 text-lg font-bold leading-tight">
                    {e.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {e.desc}
                  </p>
                  <span className="mt-4 font-mono text-sm font-semibold text-primary">
                    {e.date}
                  </span>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
          >
            Join Events
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

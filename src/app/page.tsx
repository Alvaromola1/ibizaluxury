"use client";

import { LanguageProvider, useT } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Faq } from "@/components/Faq";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobileCTA } from "@/components/MobileCTA";
import { brand } from "@/lib/content";
import { galleryImages, galleryAlts } from "@/lib/translations";

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

function HomeContent() {
  const t = useT();

  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden bg-[#0c1520]">
          <img
            src="/images/hero-dramatic.svg"
            alt="Luxury cliffside villa with infinity pool at sunset in Ibiza"
            className="media-fill"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="container-wide relative grid min-h-screen items-center gap-10 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20">
            <div className="max-w-[720px]">
              <p className="anim-rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#f7f3ec]/90 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                {t.hero.badge}
              </p>
              <h1 className="anim-rise-delay-1 mt-5 font-display text-5xl leading-[0.9] text-[#f7f3ec] md:text-[4.8rem] md:leading-[0.9]">
                {t.hero.h1a}
                <span className="mt-2 block text-gold-gradient">{t.hero.h1b}</span>
              </h1>
              <p className="anim-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-[#f7f3ec]/85 md:text-lg">
                {t.hero.sub.before}
                <strong className="font-semibold text-[#f7f3ec]">{t.hero.sub.emphasis}</strong>
                {t.hero.sub.after}
              </p>

              <div className="anim-rise-delay-3 mt-8 flex flex-wrap gap-3">
                <a href="#reserva" className="btn-primary">
                  {t.hero.cta1} →
                </a>
                <a
                  href="#chill"
                  className="rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#f7f3ec] backdrop-blur transition hover:bg-white/15"
                >
                  {t.hero.cta2}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur">
                    <p className="font-display text-3xl text-[#d4b06a]">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-[#f7f3ec]/90">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[11px] tracking-[0.14em] text-[#f7f3ec]/70">{t.hero.conceptLine}</p>
            </div>

            <div className="anim-rise-delay-2 rounded-[28px] border border-white/15 bg-[#0c1520]/80 p-5 shadow-2xl backdrop-blur-xl md:p-7">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#d4b06a]">{t.hero.formTitle}</p>
                  <h2 className="mt-1 font-display text-3xl text-[#f7f3ec]">{t.hero.formTitle}</h2>
                  <p className="mt-1 text-xs text-[#f7f3ec]/60">{t.hero.formSub}</p>
                </div>
                <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-emerald-200">
                  Online
                </span>
              </div>
              <LeadForm compact dark />
            </div>
          </div>
        </section>

        {/* INVENTORY STRIP */}
        <section className="border-y border-[#e6dfd2] bg-white py-0">
          <div className="container-wide grid gap-0 divide-y divide-[#e6dfd2] md:grid-cols-4 md:divide-x md:divide-y-0">
            {t.inventory.map((item) => (
              <div key={item.label} className="flex items-center gap-4 px-6 py-6">
                <p className="font-display text-4xl text-[#0c1520]">{item.value}</p>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0c1520]">{item.label}</p>
                  <p className="mt-0.5 text-xs text-[#6d655a]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERS LOGO BAR */}
        <section className="bg-white py-8">
          <div className="container-wide">
            <p className="text-center text-[11px] uppercase tracking-[0.22em]" style={{ color: "#6d655a" }}>
              {t.partners.label}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {t.partners.names.map((name) => (
                <span key={name} className="font-display text-xl md:text-2xl" style={{ color: "#9a9083" }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="overflow-hidden border-b border-[#e6dfd2] bg-[#efe8db] py-4">
          <div className="marquee-track flex gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.24em] text-[#6d655a]">
            {t.marquee.map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span className="text-[#b8924a]">◆</span>
              </span>
            ))}
          </div>
        </section>

        {/* CHILL CONCEPT — versión B clara */}
        <section id="chill" className="relative overflow-hidden bg-[#fcfaf6] py-20 md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="section-label">{t.chill.label}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-[#0c1520] md:text-6xl md:leading-[0.9]">
                {t.chill.headline}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#6d655a] md:text-lg">{t.chill.sub}</p>

              <div className="mt-10 grid gap-4">
                {t.chill.bullets.map((b) => (
                  <div key={b.title} className="card-lux flex gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f3ec] text-lg text-[#b8924a]">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[#0c1520]">{b.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#6d655a]">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#b8924a]/20 bg-[#b8924a]/5 p-5 text-sm leading-relaxed text-[#6d655a]">
                <strong className="text-[#0c1520]">{t.chill.scene}</strong>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] bg-[#0c1520]">
                <img src="/images/chill-concept.svg" alt="Relaxing at infinity pool with everything handled" className="media-card media-card-tall" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-[20px] border border-[#e6dfd2] bg-white p-4 shadow-xl md:block">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#6d655a]">{t.chill.exampleLabel}</p>
                <p className="mt-1 max-w-[220px] font-display text-lg leading-tight text-[#0c1520]">{t.chill.exampleText}</p>
                <p className="mt-2 text-xs text-[#6d655a]">{t.chill.exampleReply}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <img src="/images/chef-villa.svg" alt="Private chef at villa" className="h-40 w-full rounded-2xl object-cover" />
                <img src="/images/champagne-yacht.svg" alt="Champagne on yacht" className="h-40 w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* NO CATALOG */}
        <section id="modelo" className="bg-[#0c1520] py-20 text-[#f7f3ec] md:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="section-label" style={{ color: "#d4b06a" }}>{t.noCatalog.eyebrow}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl md:leading-[0.95]">{t.noCatalog.headline}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f7f3ec]/80 md:text-lg">{t.noCatalog.text}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.noCatalog.points.map((p) => (
                  <div key={p.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b8924a]/15 text-[#d4b06a]">{p.icon}</div>
                    <h3 className="mt-3 font-display text-xl text-[#f7f3ec]">{p.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#f7f3ec]/65">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur">
                <div className="grid grid-cols-3 border-b border-white/10 text-[10px] uppercase tracking-[0.14em]">
                  <div className="px-4 py-4 text-[#f7f3ec]/45">{t.noCatalog.compareHead[0]}</div>
                  <div className="px-4 py-4 text-[#f7f3ec]/55">{t.noCatalog.compareHead[1]}</div>
                  <div className="px-4 py-4 text-[#d4b06a]">{t.noCatalog.compareHead[2]}</div>
                </div>
                {t.noCatalog.compare.map((row) => (
                  <div key={row.aspect} className="grid grid-cols-3 gap-2 border-t border-white/10 text-sm">
                    <div className="px-4 py-4 font-medium text-[#f7f3ec]/90">{row.aspect}</div>
                    <div className="flex items-center gap-2 px-4 py-4 text-[#f7f3ec]/45">
                      <span className="text-red-300/70">✕</span>
                      <span>{row.others}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-4 text-[#f7f3ec]">
                      <span className="text-[#d4b06a]">✓</span>
                      <span>{row.us}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[24px] border border-[#b8924a]/30 bg-gradient-to-r from-[#b8924a]/15 to-transparent p-6">
                <p className="font-display text-2xl leading-snug text-[#f7f3ec]">{t.noCatalog.quote}</p>
                <a href="#reserva" className="btn-primary mt-5">{t.noCatalog.cta} →</a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicios" className="bg-[#f7f3ec] py-20 md:py-28">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="section-label">{t.services.label}</p>
              <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-6xl">{t.services.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-[#6d655a]">{t.services.intro}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {t.services.items.map((service, idx) => (
                <article key={idx} className="card-lux overflow-hidden">
                  <div className="relative h-72 overflow-hidden bg-[#0c1520]">
                    <img src={galleryImages[idx]} alt={service.title} className="media-cover transition duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1520]/90 via-[#0c1520]/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#d4b06a] backdrop-blur">{service.subtitle}</p>
                      <h3 className="mt-3 font-display text-3xl text-[#f7f3ec] md:text-4xl">{service.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-5 p-6 md:p-8">
                    <p className="text-sm leading-relaxed text-[#6d655a]">{service.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {service.highlights.map((item) => (
                        <li key={item} className="rounded-full border border-[#b8924a]/30 bg-[#b8924a]/10 px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#8f6d34]">{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="experiencias" className="relative overflow-hidden bg-[#0c1520] py-20 text-[#f7f3ec] md:py-28">
          <img src="/images/night-vip.svg" alt="" className="media-fill opacity-30" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1520] via-[#0c1520]/92 to-[#0c1520]/72" />

          <div className="container-wide relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-label" style={{ color: "#d4b06a" }}>{t.why.label}</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">{t.why.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-[#f7f3ec]/80">{t.why.intro}</p>

              <div className="mt-8 space-y-4">
                {t.why.items.map((item) => (
                  <div key={item.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="font-display text-2xl">{item.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#f7f3ec]/70">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] bg-[#132033]">
                <img src="/images/yacht-glamour.svg" alt="Superyacht in turquoise waters" className="media-card sm-h-22" />
              </div>
              <div className="overflow-hidden rounded-[28px] bg-[#132033] sm:mt-12">
                <img src="/images/cars-fleet.svg" alt="Supercar fleet" className="media-card sm-h-22" />
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="paquetes" className="soft-grid bg-[#f7f3ec] py-20 md:py-28">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label">{t.packages.label}</p>
              <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-6xl">{t.packages.title}</h2>
              <p className="mt-4 text-[#6d655a]">{t.packages.intro}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.packages.items.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`relative flex h-full flex-col rounded-[28px] border p-7 ${
                    pkg.popular ? "border-[#b8924a]/50 bg-white shadow-[0_24px_60px_rgba(184,146,74,0.16)]" : "border-[#e6dfd2] bg-white/90"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#b8924a] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0c1520]">
                      {t.packages.badge}
                    </span>
                  )}
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#b8924a]">{pkg.name}</p>
                  <p className="mt-3 font-display text-4xl text-[#0c1520]">{pkg.price}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#6d655a]">{pkg.period}</p>
                  <p className="mt-5 text-sm leading-relaxed text-[#6d655a]">{pkg.description}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#0c1520]/80">
                        <span className="mt-0.5 text-[#b8924a]">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#reserva" className={pkg.popular ? "btn-primary mt-8" : "btn-secondary mt-8"}>{pkg.cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="proceso" className="bg-[#fcfaf6] py-20 md:py-28">
          <div className="container-wide">
            <p className="section-label">{t.process.label}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-[#0c1520] md:text-6xl">{t.process.title}</h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {t.process.items.map((step) => (
                <div key={step.step} className="card-lux h-full p-6">
                  <p className="font-display text-5xl text-[#b8924a]/40">{step.step}</p>
                  <h3 className="mt-4 font-display text-2xl text-[#0c1520]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6d655a]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="galeria" className="bg-[#efe8db] py-20 md:py-28">
          <div className="container-wide">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="section-label">{t.gallery.label}</p>
                <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-6xl">{t.gallery.title}</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#6d655a]">{t.gallery.intro}</p>
            </div>

            <div className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-4">
              {t.gallery.labels.map((label, index) => (
                <figure key={index} className="group relative overflow-hidden rounded-[24px] bg-[#0c1520]">
                  <img src={galleryImages[index]} alt={galleryAlts[index]} className="media-card media-card-sq transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-[11px] uppercase tracking-widest text-[#f7f3ec]">
                    <span className="inline-block rounded-full border border-white/20 bg-black/30 px-3 py-1 backdrop-blur">{label}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-[#fcfaf6] py-20 md:py-28">
          <div className="container-wide">
            <p className="section-label">{t.testimonials.label}</p>
            <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-6xl">{t.testimonials.title}</h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.testimonials.items.map((item) => (
                <blockquote key={item.name} className="card-lux flex h-full flex-col p-7">
                  <div className="text-[#b8924a]">{"★".repeat(item.rating)}</div>
                  <p className="mt-5 flex-1 font-display text-2xl leading-snug text-[#0c1520]">“{item.quote}”</p>
                  <footer className="mt-8 border-t border-[#e6dfd2] pt-5">
                    <p className="text-sm font-semibold text-[#0c1520]">{item.name}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-[#6d655a]">{item.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FORM */}
        <section id="reserva" className="relative overflow-hidden bg-[#0c1520] py-20 text-[#f7f3ec] md:py-28">
          <img src="/images/hero-villa.svg" alt="" className="media-fill opacity-35" aria-hidden />
          <div className="absolute inset-0 bg-[#0c1520]/82" />

          <div className="container-wide relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <p className="section-label" style={{ color: "#d4b06a" }}>{t.cta.label}</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">{t.cta.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f7f3ec]/80">{t.cta.text}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.cta.points.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-[#f7f3ec]/90 backdrop-blur">
                    <span className="mr-2 text-[#d4b06a]">◆</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#f7f3ec]/90">
                <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" className="underline decoration-[#b8924a]/50 underline-offset-4 hover:text-[#d4b06a]">
                  {t.cta.whatsapp}
                </a>
                <a href={`mailto:${brand.email}`} className="underline decoration-[#b8924a]/50 underline-offset-4 hover:text-[#d4b06a]">
                  {brand.email}
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white p-6 text-[#0c1520] shadow-2xl md:p-8">
              <h3 className="font-display text-3xl">{t.cta.formTitle}</h3>
              <p className="mt-2 text-sm text-[#6d655a]">{t.cta.formSub}</p>

              <div className="mt-5 grid grid-cols-3 gap-3 border-y border-[#e6dfd2] py-4">
                {t.guarantee.items.map((g) => (
                  <div key={g.t} className="text-center">
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#b8924a]/10 text-[#b8924a]">{g.icon}</div>
                    <p className="mt-1.5 text-[10px] font-bold uppercase leading-tight tracking-wide" style={{ color: "#0c1520" }}>{g.t}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#f7f3ec] py-20 md:py-28">
          <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-label">{t.faq.label}</p>
              <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-5xl">{t.faq.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6d655a]">{t.faq.intro}</p>
            </div>
            <Faq />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTA />
    </>
  );
}

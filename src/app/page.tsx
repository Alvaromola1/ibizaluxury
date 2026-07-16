"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Faq } from "@/components/Faq";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CookieBanner } from "@/components/CookieBanner";
import { brand } from "@/lib/content";
import { useLang, galleryItems, B } from "@/lib/i18n";

const HERO_VIDEO = "/videos/hero-loop.mp4";

const fleetBrands = [
  "Azimut",
  "Sunseeker",
  "Sanlorenzo",
  "Ferrari",
  "Lamborghini",
  "Mercedes-AMG",
  "Rolls-Royce",
  "Mangusta",
];

const marquee = [
  "Villas Cala Jondal",
  "Yacht Charter Formentera",
  "G63 & SL AMG",
  "Private Chef",
  "Beach Club Access",
  "Jet & Transfers",
  "Ultra Private Events",
  "24/7 Concierge",
];

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden bg-[#0c1520]">
          <img
            src="/images/hero-dramatic.jpg"
            alt="Ibiza luxury villa"
            className="media-fill"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="container-wide relative grid min-h-screen items-center gap-10 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20">
            <div className="max-w-2xl">
              <p className="anim-rise section-label" style={{ color: "#d4b06a" }}>
                {t.hero.label}
              </p>
              <h1 className="anim-rise-delay-1 mt-4 font-display text-5xl leading-none text-[#f7f3ec] md:text-7xl">
                {t.hero.h1a}
                <span className="mt-2 block text-gold-gradient">{t.hero.h1b}</span>
              </h1>
              <p className="anim-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-[#f7f3ec]/cc md:text-lg">
                <B text={t.hero.sub} />
              </p>

              <div className="anim-rise-delay-3 mt-8 flex flex-wrap gap-3">
                <a href="#reserva" className="btn-primary">
                  {t.hero.cta1}
                </a>
                <a
                  href="#servicios"
                  className="rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#f7f3ec] backdrop-blur transition hover:bg-white/15"
                >
                  {t.hero.cta2}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {t.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur"
                  >
                    <p className="font-display text-3xl text-[#d4b06a]">{stat.value}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-[#f7f3ec]/99">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="anim-rise-delay-2 rounded-[28px] border border-white/15 bg-[#0c1520]/80 p-5 shadow-2xl backdrop-blur-xl md:p-7">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#d4b06a]">
                    {t.hero.priority}
                  </p>
                  <h2 className="mt-1 font-display text-3xl text-[#f7f3ec]">
                    {t.hero.formTitle}
                  </h2>
                </div>
                <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-emerald-200">
                  {t.hero.online}
                </span>
              </div>
              <LeadForm compact dark />
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="overflow-hidden border-y border-[#e6dfd2] bg-[#efe8db] py-4">
          <div className="marquee-track flex gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.24em] text-[#6d655a]">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span className="text-[#b8924a]">◆</span>
              </span>
            ))}
          </div>
        </section>

        {/* ACCESS NUMBERS */}
        <section className="bg-[#0c1520] py-16 text-[#f7f3ec] md:py-20">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="section-label" style={{ color: "#d4b06a" }}>
                {t.access.label}
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">{t.access.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-[#f7f3ec]/75 md:text-lg">
                <B text={t.access.p1} />
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#f7f3ec]/60">
                {t.access.p2}
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.proof.map((item) => (
                <div
                  key={item.small}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
                >
                  <p className="font-display text-5xl text-[#d4b06a]">{item.big}</p>
                  <p className="mt-2 text-sm uppercase tracking-wider text-[#f7f3ec]/70">
                    {item.small}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-10">
              {fleetBrands.map((name) => (
                <span
                  key={name}
                  className="font-display text-xl tracking-[0.14em] text-[#f7f3ec]/40 transition hover:text-[#d4b06a]/70 md:text-2xl"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicios" className="bg-[#fcfaf6] py-20 md:py-28">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="section-label">{t.services.label}</p>
              <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-6xl">
                {t.services.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6d655a]">
                {t.services.sub}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {t.services.items.map((service) => (
                <article key={service.title} className="card-lux overflow-hidden">
                  <div className="relative h-64 overflow-hidden bg-[#0c1520]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="media-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1520]/85 via-[#0c1520]/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#d4b06a]">
                        {service.subtitle}
                      </p>
                      <h3 className="mt-1 font-display text-3xl text-[#f7f3ec] md:text-4xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-5 p-6 md:p-8">
                    <p className="text-sm leading-relaxed text-[#6d655a]">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-[#b8924a]/30 bg-[#b8924a]/10 px-3 py-1.5 text-[11px] uppercase tracking-wide text-[#8f6d34]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROMISE */}
        <section id="experiencias" className="relative overflow-hidden bg-[#0c1520] py-20 text-[#f7f3ec] md:py-28">
          <img
            src="/images/chill-luxury.jpg"
            alt=""
            className="media-fill opacity-35"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1520] via-[#0c1520]/90 to-[#0c1520]/65" />

          <div className="container-wide relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-label" style={{ color: "#d4b06a" }}>
                {t.promise.label}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">{t.promise.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-[#f7f3ec]/b3">
                {t.promise.text}
              </p>

              <div className="mt-8 space-y-4">
                {t.promise.cards.map((item) => (
                  <div
                    key={item.t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <p className="font-display text-2xl">{item.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#f7f3ec]/a6">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] bg-[#132033]">
                <img
                  src="/images/yacht-glamour.jpg"
                  alt="Superyacht"
                  className="media-card sm-h-22"
                />
              </div>
              <div className="overflow-hidden rounded-[28px] bg-[#132033] sm:mt-12">
                <img
                  src="/images/car-convertible.jpg"
                  alt="Supercar"
                  className="media-card sm-h-22"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="paquetes" className="soft-grid bg-[#f7f3ec] py-20 md:py-28">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label">{t.packs.label}</p>
              <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-6xl">
                {t.packs.title}
              </h2>
              <p className="mt-4 text-[#6d655a]">{t.packs.sub}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.packs.items.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`relative flex h-full flex-col rounded-[28px] border p-7 ${
                    pkg.popular
                      ? "border-[#b8924a]/50 bg-white shadow-[0_24px_60px_rgba(184,146,74,0.16)]"
                      : "border-[#e6dfd2] bg-white/90"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#b8924a] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0c1520]">
                      {t.packs.popular}
                    </span>
                  )}
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#b8924a]">
                    {pkg.name}
                  </p>
                  <p className="mt-3 font-display text-4xl text-[#0c1520]">{pkg.price}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#6d655a]">
                    {pkg.period}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-[#6d655a]">{pkg.description}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#0c1520]/cc">
                        <span className="mt-0.5 text-[#b8924a]">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#reserva"
                    className={pkg.popular ? "btn-primary mt-8" : "btn-secondary mt-8"}
                  >
                    {pkg.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="proceso" className="bg-[#fcfaf6] py-20 md:py-28">
          <div className="container-wide">
            <p className="section-label">{t.process.label}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl text-[#0c1520] md:text-6xl">
              {t.process.title}
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {t.process.steps.map((step) => (
                <div key={step.step} className="card-lux h-full p-6">
                  <p className="font-display text-5xl text-[#b8924a]/66">{step.step}</p>
                  <h3 className="mt-4 font-display text-2xl text-[#0c1520]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6d655a]">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] border border-[#b8924a]/25 bg-gradient-to-r from-[#b8924a]/10 to-transparent p-6 md:p-8">
              <p className="section-label">{t.process.feelLabel}</p>
              <p className="mt-3 font-display text-2xl md:text-3xl" style={{ color: "#0c1520" }}>
                {t.process.quote}
              </p>
              <p className="mt-4 text-sm uppercase tracking-wider text-[#6d655a]">
                {t.process.author}
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="galeria" className="bg-[#efe8db] py-20 md:py-28">
          <div className="container-wide">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="section-label">{t.gallery.label}</p>
                <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-6xl">
                  {t.gallery.title}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-[#6d655a]">
                {t.gallery.sub}
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-12">
              {galleryItems.map((item, index) => {
                const featured = index === 0 || index === 1;
                return (
                  <figure
                    key={item.src}
                    className={`group relative overflow-hidden rounded-[24px] bg-[#0c1520] ${
                      featured ? "md:col-span-6" : "md:col-span-3"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className={featured ? "media-card media-card-tall" : "media-card"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 text-[11px] uppercase tracking-widest text-[#f7f3ec]">
                      <span className="inline-block rounded-full border border-white/20 bg-black/30 px-3 py-1 backdrop-blur">
                        {item.label}
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-[#fcfaf6] py-20 md:py-28">
          <div className="container-wide">
            <p className="section-label">{t.testis.label}</p>
            <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-6xl">
              {t.testis.title}
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.testis.items.map((item) => (
                <blockquote key={item.name} className="card-lux flex h-full flex-col p-7">
                  <div className="text-[#b8924a]">★★★★★</div>
                  <p className="mt-5 flex-1 font-display text-2xl leading-snug text-[#0c1520]">
                    "{item.quote}"
                  </p>
                  <footer className="mt-8 border-t border-[#e6dfd2] pt-5">
                    <p className="text-sm font-semibold text-[#0c1520]">{item.name}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-[#6d655a]">
                      {item.role}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FORM */}
        <section id="reserva" className="relative overflow-hidden bg-[#0c1520] py-20 text-[#f7f3ec] md:py-28">
          <img
            src="/images/hero-villa.jpg"
            alt=""
            className="media-fill opacity-35"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#0c1520]/82" />

          <div className="container-wide relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div>
              <p className="section-label" style={{ color: "#d4b06a" }}>
                {t.cta.label}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">{t.cta.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f7f3ec]/b3">
                {t.cta.sub}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.cta.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-[#f7f3ec]/d9 backdrop-blur"
                  >
                    <span className="mr-2 text-[#d4b06a]">◆</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#f7f3ec]/99">
                <a
                  href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(t.whatsMsg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 px-4 py-2.5 font-semibold text-[#f7f3ec] transition hover:bg-[#25D366]/25"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" aria-hidden>
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.1.55 4.1 1.6 5.9L0 24l6.4-1.7a11.8 11.8 0 0 0 5.65 1.45h.05c6.55 0 11.85-5.3 11.85-11.85 0-3.15-1.25-6.15-3.45-8.4Z" />
                  </svg>
                  {brand.phone}
                </a>
                <a
                  href={`mailto:${brand.email}`}
                  className="underline decoration-[#b8924a]/50 underline-offset-4 hover:text-[#d4b06a]"
                >
                  {brand.email}
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white p-6 text-[#0c1520] shadow-2xl md:p-8">
              <h3 className="font-display text-3xl">{t.cta.formTitle}</h3>
              <p className="mt-2 text-sm text-[#6d655a]">{t.cta.formSub}</p>
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
              <h2 className="mt-3 font-display text-4xl text-[#0c1520] md:text-5xl">
                {t.faq.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6d655a]">{t.faq.sub}</p>
            </div>
            <Faq />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </>
  );
}

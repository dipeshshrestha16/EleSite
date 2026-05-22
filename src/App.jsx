import { useState } from "react";
import TopBanner from "./components/TopBanner";
import {
  AlertTriangle,
  BadgeCheck,
  Bolt,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Fan,
  FileCheck2,
  Gauge,
  Home,
  LampCeiling,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlugZap,
  ShieldCheck,
  Star,
  ToggleRight,
  Wrench,
  X
} from "lucide-react";

const phone = "(555) 018-2400";
const phoneHref = "tel:+15550182400";
const email = "service@voltguardelectric.com";

const navLinks = [
  ["Services", "#services"],
  ["About", "#about"],
  ["Reviews", "#reviews"],
  ["Areas", "#areas"],
  ["Free Quote", "#quote"]
];

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Repair",
    text: "Fast help for outages, sparks, buzzing panels, and unsafe electrical issues."
  },
  {
    icon: Bolt,
    title: "Wiring",
    text: "Safe wiring repairs and upgrades for remodels, additions, and older homes."
  },
  {
    icon: LampCeiling,
    title: "Lighting",
    text: "Indoor, outdoor, recessed, and security lighting installed with clean finishes."
  },
  {
    icon: ToggleRight,
    title: "Switches & Sockets",
    text: "Replace worn outlets, add GFCI protection, and fix loose switches quickly."
  },
  {
    icon: Gauge,
    title: "Breaker Repairs",
    text: "Diagnose tripping breakers and restore dependable power to key circuits."
  },
  {
    icon: PlugZap,
    title: "Panel Upgrades",
    text: "Modern panels sized for today's appliances, EV chargers, and safer living."
  },
  {
    icon: Fan,
    title: "Fan Installation",
    text: "Ceiling fans installed securely with proper support and balanced operation."
  },
  {
    icon: FileCheck2,
    title: "Safety Inspection",
    text: "Whole-home checks that identify fire risks, code issues, and aging components."
  }
];

const whyUs = [
  {
    title: "Certified Electricians",
    text: "Every visit is handled by trained pros who understand safe residential and light commercial systems."
  },
  {
    title: "Code-Compliant Work",
    text: "Repairs and installs are completed to current electrical standards, permit needs, and inspection expectations."
  },
  {
    title: "Clear Upfront Pricing",
    text: "You get a plain-language scope and price before work begins, with no surprise add-ons."
  },
  {
    title: "Background-Checked Team",
    text: "Courteous, vetted electricians arrive in marked vehicles and respect your home from start to finish."
  },
  {
    title: "Clean Jobsite Promise",
    text: "We protect nearby surfaces, organize materials, and leave the work area tidy after the repair."
  },
  {
    title: "Warranty On Repairs",
    text: "Approved repairs include workmanship protection so you can feel confident after we leave."
  }
];

const areas = [
  "Downtown",
  "North Hills",
  "River District",
  "Oak Grove",
  "West Park",
  "Maple Heights",
  "Lakeview",
  "Cedar Crossing"
];

const reviews = [
  {
    name: "Maya R.",
    area: "North Hills",
    text: "The electrician traced the issue to an overloaded circuit, walked me through the repair, and had our kitchen power back the same afternoon."
  },
  {
    name: "Daniel K.",
    area: "Oak Grove",
    text: "We needed recessed lighting and two new outlets. The quote was clear, the cuts were clean, and every switch was labeled before they left."
  },
  {
    name: "Alicia M.",
    area: "West Park",
    text: "I called after an outlet started sparking. They arrived quickly, made the room safe, and replaced the damaged wiring without pressure."
  }
];

const galleryItems = [
  {
    title: "Electrical Panel Upgrade",
    beforeTitle: "Crowded Old Panel",
    afterTitle: "Labeled Safe Panel",
    beforeAlt: "Older residential electrical panel before a safety upgrade",
    afterAlt: "Neatly organized upgraded electrical panel with labeled breakers",
    beforeImage: "/electrical-assets/old-panel.svg",
    afterImage: "/electrical-assets/new-panel.svg",
    summary: "Clear labeling, safer breaker organization, and room for modern electrical demand."
  },
  {
    title: "Wiring Repair",
    beforeTitle: "Frayed Wiring",
    afterTitle: "Protected Routing",
    beforeAlt: "Damaged electrical wiring identified during a safety inspection",
    afterAlt: "Clean electrical wiring routed safely after repair",
    beforeImage: "/electrical-assets/damaged-wiring.svg",
    afterImage: "/electrical-assets/improved-wiring.svg",
    summary: "Damaged conductors replaced with clean, protected routing for safer everyday use."
  },
  {
    title: "Lighting Installation",
    beforeTitle: "Dim Fixture",
    afterTitle: "Bright Even Light",
    beforeAlt: "Dim room lighting before an electrical lighting upgrade",
    afterAlt: "Bright modern lighting installed safely in a residential space",
    beforeImage: "/electrical-assets/dim-lighting.svg",
    afterImage: "/electrical-assets/safer-lighting.svg",
    summary: "Better fixture placement and safer installation for brighter, more useful rooms."
  }
];

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-black uppercase tracking-wide ${light ? "text-[#FFC107]" : "text-brand"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black leading-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${light ? "text-white/85" : "text-slate-700"}`}>{text}</p> : null}
    </div>
  );
}

function CtaButton({ children, href = "#quote", variant = "primary", className = "", ariaLabel, onClick }) {
  const base =
    "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full border px-6 py-3 text-sm font-black transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#FFC107]/45 [&_svg]:shrink-0 [&_svg]:stroke-[2.75]";
  const styles =
    variant === "secondary"
      ? "border-brand bg-white text-brand shadow-[0_10px_24px_rgba(18,60,99,0.10)] hover:border-[#F59E0B] hover:bg-[#FFC107] hover:text-ink"
      : "border-[#B45309]/20 bg-[#F59E0B] text-ink shadow-[0_12px_28px_rgba(245,158,11,0.32)] hover:bg-[#FFC107] hover:shadow-[0_16px_34px_rgba(245,158,11,0.38)]";
  return (
    <a href={href} onClick={onClick} aria-label={ariaLabel} className={`${base} ${styles} ${className}`}>
      <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/60" aria-hidden="true" />
      {children}
    </a>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow/40" aria-label="VoltGuard Electric home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand shadow-sm ring-1 ring-brand/10">
            <Bolt size={25} className="text-[#FFC107] drop-shadow-sm" strokeWidth={3} aria-hidden="true" />
          </span>
          <span className="text-lg font-black text-brand">VoltGuard Electric</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex">
          {navLinks.map(([label, href]) => (
            <a key={label} className="rounded-md hover:text-brand focus:outline-none focus:ring-4 focus:ring-yellow/40" href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={phoneHref} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black text-brand hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-yellow/40 sm:inline-flex" aria-label={`Call VoltGuard Electric at ${phone}`}>
            <Phone size={18} aria-hidden="true" />
            {phone}
          </a>
          <CtaButton href={phoneHref} ariaLabel="Call for emergency electrical service" className="hidden sm:inline-flex">
            <Bolt size={18} aria-hidden="true" />
            Emergency Call
          </CtaButton>
          <a href={phoneHref} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F59E0B] text-ink shadow-sm focus:outline-none focus:ring-4 focus:ring-[#FFC107]/45 sm:hidden" aria-label={`Call VoltGuard Electric at ${phone}`}>
            <Phone size={20} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-brand focus:outline-none focus:ring-4 focus:ring-[#FFC107]/45 lg:hidden"
            aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-3 shadow-sm lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-xl px-4 py-3 font-black text-brand hover:bg-paper focus:outline-none focus:ring-4 focus:ring-[#FFC107]/45"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  const badges = [
    ["Licensed & Insured", BadgeCheck],
    ["Same-Day Help", Clock3],
    ["Safety First", ShieldCheck]
  ];

  return (
    <section id="top" className="overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-brand shadow-sm ring-1 ring-slate-200">
            <Bolt size={16} className="text-[#F59E0B]" strokeWidth={3} aria-hidden="true" />
            24/7 Licensed Local Electricians
          </p>
          <h1 className="mt-5 max-w-4xl text-[2.45rem] font-black leading-[1.08] text-ink sm:text-5xl sm:leading-[1.08] lg:text-[3.75rem] lg:leading-[1.06]">
            Professional Electrician Services: Fast, Safe, & Reliable Help
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            Get dependable electrical repairs, installations, and inspections from certified electricians who put your safety first. Same-day appointments and emergency support are available.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#quote" ariaLabel="Get a free electrical service quote">
              <FileCheck2 size={19} aria-hidden="true" />
              Get A Free Quote
            </CtaButton>
            <CtaButton href={phoneHref} variant="secondary" ariaLabel={`Call ${phone} for emergency service`}>
              <Phone size={19} aria-hidden="true" />
              Emergency Service
            </CtaButton>
          </div>
          <p className="mt-4 text-sm font-bold text-slate-700">
            <span className="text-ink">4.9 average rating</span> from local homeowners · Typical callback in under 10 minutes.
          </p>
          <div className="mt-6 grid max-w-xl grid-cols-3 gap-3">
            {badges.map(([label, Icon]) => (
              <div key={label} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-200/70">
                <Icon className="mx-auto text-brand" size={24} aria-hidden="true" />
                <p className="mt-2 text-sm font-black text-brand">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-brand shadow-soft ring-1 ring-brand/10">
            <img
              src="https://fraserbond.com/oc-content/plugins/blog/img/blog/12149.jpg"
              alt="Licensed electrician inspecting a residential electrical panel with safety tools"
              className="h-[360px] w-full object-cover brightness-95 contrast-105 sm:h-[430px] lg:h-[500px]"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 via-ink/45 to-transparent p-5 sm:p-6">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <p className="text-sm font-bold text-slate-600">Need Help Today?</p>
                <a href={phoneHref} className="mt-1 flex items-center gap-2 text-2xl font-black text-brand focus:outline-none focus:ring-4 focus:ring-yellow/40" aria-label={`Call VoltGuard Electric at ${phone}`}>
                  <Phone size={24} className="text-[#F59E0B]" strokeWidth={2.75} aria-hidden="true" />
                  {phone}
                </a>
                <p className="mt-2 text-sm text-slate-600">Licensed, insured, and ready for urgent electrical problems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, onBook }) {
  const Icon = service.icon;
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-yellow hover:shadow-soft">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC107]/20 text-brand transition group-hover:bg-[#FFC107] group-hover:text-ink">
        <Icon size={28} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-black text-ink">{service.title}</h3>
      <p className="mt-3 min-h-20 text-slate-700">{service.text}</p>
      <a
        href="#quote"
        onClick={() => onBook(service.title)}
        className="mt-5 inline-flex items-center gap-1 rounded-md font-black text-brand hover:text-ink focus:outline-none focus:ring-4 focus:ring-yellow/40"
        aria-label={`Book ${service.title} service`}
      >
        Book Service
        <ChevronRight size={18} aria-hidden="true" />
      </a>
    </article>
  );
}

function Services({ onBook }) {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Electrical Services"
          title="Expert Help For The Work Your Home Depends On"
          text="From urgent repairs to planned upgrades, every service is handled by trained electricians with a safety-first process."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="about" className="bg-brand py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Electrical Work Done With Care, Clarity, And Accountability"
          text="We focus on keeping your home safe, your schedule respected, and your repair explained before work begins."
          light
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white/10 p-6 text-white ring-1 ring-white/15 transition hover:bg-white/15">
              <CheckCircle2 className="text-[#FFC107]" size={28} strokeWidth={2.75} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-2 leading-7 text-white/85">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmergencyCta() {
  return (
    <section className="bg-ink py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-[#FFC107]">Electrical Emergency?</p>
          <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">Sparks, Smoke, Or Power Loss? Call A Licensed Electrician Now.</h2>
          <p className="mt-3 max-w-2xl text-white/80">Do not touch damaged outlets, hot panels, or exposed wiring. Call now so we can help make the area safe.</p>
        </div>
        <CtaButton href={phoneHref} ariaLabel={`Call VoltGuard Electric now at ${phone}`} className="animate-ring-pulse whitespace-nowrap">
          <Phone size={20} aria-hidden="true" />
          Call Now: {phone}
        </CtaButton>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before And After"
          title="Clean Installs, Safer Systems, Better Peace Of Mind"
          text="A quick look at the kind of visible care we bring to electrical panels, wiring, and home lighting upgrades."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="grid grid-cols-2">
                <div className="relative border-r-2 border-white">
                  <img
                    src={item.beforeImage}
                    alt={item.beforeAlt}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-xs font-black uppercase tracking-wide text-white shadow-sm">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={item.afterImage}
                    alt={item.afterAlt}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-black uppercase tracking-wide text-[#FFC107] shadow-sm">
                    After
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-slate-200 text-center text-sm font-black">
                <p className="bg-slate-100 px-3 py-3 text-ink">{item.beforeTitle}</p>
                <p className="bg-[#FFC107]/20 px-3 py-3 text-brand">{item.afterTitle}</p>
              </div>
              <figcaption className="p-5">
                <h3 className="text-xl font-black text-brand">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{item.summary}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Contact",
      label: "Step 1",
      icon: Phone,
      text: "Call or request a quote and tell us what you need checked, repaired, or installed."
    },
    {
      title: "Schedule",
      label: "Step 2",
      icon: CalendarCheck,
      text: "Choose the soonest appointment window that works for your home and urgency."
    },
    {
      title: "Quote",
      label: "Step 3",
      icon: FileCheck2,
      text: "Your electrician explains the repair path and price clearly before work begins."
    },
    {
      title: "Resolution",
      label: "Step 4",
      icon: ShieldCheck,
      text: "We complete the approved work, test the system, and leave the area clean."
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Process" title="From First Call To Safe Resolution" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#FFC107] hover:shadow-soft">
                {index < steps.length - 1 ? (
                  <div className="absolute left-[calc(50%+3.5rem)] top-20 hidden h-px w-[calc(100%-7rem)] bg-slate-200 lg:block" aria-hidden="true" />
                ) : null}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-paper ring-1 ring-slate-200 transition group-hover:bg-[#FFC107]/20">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand shadow-[0_10px_24px_rgba(18,60,99,0.18)]">
                    <Icon size={29} className="text-[#FFC107]" strokeWidth={2.75} aria-hidden="true" />
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B] text-xs font-black text-ink ring-4 ring-white">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-xs font-black uppercase tracking-wide text-brand">{step.label}</p>
                <h3 className="mt-2 text-2xl font-black uppercase leading-tight text-brand">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-700">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section id="areas" className="bg-paper py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-brand">Service Area</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Local Electricians Serving Nearby Neighborhoods</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">We help homeowners and small businesses across the metro area with safe repairs, upgrades, and emergency electrical service.</p>
          <a href={phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-md font-black text-brand hover:text-ink focus:outline-none focus:ring-4 focus:ring-yellow/40" aria-label={`Call to confirm service in your area at ${phone}`}>
            <MapPin size={20} aria-hidden="true" />
            Do Not See Your Area? Call Us To Confirm Availability.
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Home className="text-brand" size={22} aria-hidden="true" />
              <span className="font-black text-brand">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Trusted For Safe, Straightforward Electrical Service"
          text="Homeowners call us when they want a careful electrician, plain answers, and work that feels solid."
        />
        <div className="mb-6 flex flex-col items-center justify-center gap-2 rounded-2xl bg-paper p-4 text-center sm:flex-row">
          <span className="flex gap-1 text-cta" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={20} fill="currentColor" />
            ))}
          </span>
          <p className="font-black text-ink">4.9 average rating from local homeowners.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-slate-200 bg-paper p-6 shadow-sm">
              <div className="flex gap-1 text-cta" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={19} fill="currentColor" />
                ))}
              </div>
              <span className="sr-only">5 out of 5 stars</span>
              <p className="mt-5 text-slate-800">"{review.text}"</p>
              <div className="mt-6">
                <p className="font-black text-ink">{review.name}</p>
                <p className="text-sm font-bold text-brand">{review.area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm({ selectedService, onServiceChange }) {
  return (
    <section id="quote" className="bg-brand py-16 pb-28 sm:py-20 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="text-white">
          <p className="text-sm font-black uppercase tracking-wide text-[#FFC107]">Free Quote</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Tell Us What You Need Fixed</h2>
          <p className="mt-4 text-lg leading-8 text-white/85">Share a few details and our team will call back with next steps. For urgent issues, call now so we can help make the area safe.</p>
          <a href={phoneHref} className="mt-7 inline-flex items-center gap-2 rounded-md text-2xl font-black text-white hover:text-[#FFC107] focus:outline-none focus:ring-4 focus:ring-[#FFC107]/45" aria-label={`Call VoltGuard Electric at ${phone}`}>
            <Phone className="text-[#FFC107]" size={26} strokeWidth={2.75} aria-hidden="true" />
            {phone}
          </a>
        </div>
        <form className="rounded-2xl bg-white p-6 shadow-soft sm:p-8" aria-label="Electrical service quote form">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-black text-ink">Name</label>
            <input id="name" className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-ink outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#FFC107]/40" type="text" name="name" autoComplete="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-black text-ink">Phone</label>
              <input id="phone" className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-ink outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#FFC107]/40" type="tel" name="phone" autoComplete="tel" placeholder="(555) 000-0000" />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="service" className="block text-sm font-black text-ink">Service Type</label>
            <select id="service" className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-ink outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#FFC107]/40" name="service" value={selectedService} onChange={(event) => onServiceChange(event.target.value)}>
              <option value="">Select A Service</option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>{service.title}</option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-black text-ink">Tell Us What Is Happening</label>
            <textarea id="message" name="message" rows="4" className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-ink outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#FFC107]/40" placeholder="Example: Outlet sparks when used, breaker keeps tripping..." />
          </div>
          <label htmlFor="emergency" className="mt-5 flex items-start gap-3 rounded-2xl bg-paper p-4">
            <input id="emergency" className="mt-1 h-5 w-5 accent-[#F59E0B] focus:outline-none focus:ring-4 focus:ring-[#FFC107]/40" type="checkbox" name="emergency" />
            <span>
              <span className="block font-black text-ink">Emergency Request</span>
              <span className="text-sm text-slate-700">Choose this if there are sparks, heat, smoke, or power loss.</span>
            </span>
          </label>
          <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#B45309]/20 bg-[#F59E0B] px-6 py-3 text-sm font-black text-ink shadow-[0_12px_28px_rgba(245,158,11,0.32)] transition hover:bg-[#FFC107] hover:shadow-[0_16px_34px_rgba(245,158,11,0.38)] focus:outline-none focus:ring-4 focus:ring-[#FFC107]/45" aria-label="Submit electrical quote request">
            <Wrench size={19} strokeWidth={2.75} aria-hidden="true" />
            Request My Quote
          </button>
          <p className="mt-4 text-center text-sm text-slate-600">Your information stays private. We only use it to respond to your electrical service request.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand">
              <Bolt size={22} className="text-[#FFC107]" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="font-black">VoltGuard Electric</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/75">Licensed electricians for safe repairs, installations, and inspections.</p>
        </div>
        <div>
          <h3 className="font-black">Sitemap</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow/40">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Contact Info</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            <a href={phoneHref} className="hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow/40" aria-label={`Call VoltGuard Electric at ${phone}`}>{phone}</a>
            <a href={`mailto:${email}`} className="hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow/40">{email}</a>
            <span>Open 24/7 For Emergencies</span>
            <span>Licensed & Insured · License No. EL-20480</span>
          </div>
        </div>
        <div>
          <h3 className="font-black">Service Areas</h3>
          <p className="mt-4 text-sm leading-6 text-white/75">Downtown, North Hills, River District, Oak Grove, West Park, and nearby neighborhoods.</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/65 sm:px-6 lg:px-8">
        Copyright 2026 VoltGuard Electric. All Rights Reserved.
      </div>
    </footer>
  );
}

function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(31,41,51,0.12)] backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-black text-white focus:outline-none focus:ring-4 focus:ring-yellow/40" aria-label={`Call VoltGuard Electric at ${phone}`}>
          <Phone size={18} aria-hidden="true" />
          Call Now
        </a>
        <a href="#quote" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-4 py-3 text-sm font-black text-ink shadow-sm focus:outline-none focus:ring-4 focus:ring-[#FFC107]/45" aria-label="Go to free quote form">
          <FileCheck2 size={18} aria-hidden="true" />
          Free Quote
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="min-h-screen bg-paper pb-20 font-sans text-ink sm:pb-0">
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <Services onBook={setSelectedService} />
        <WhyChooseUs />
        <EmergencyCta />
        <Gallery />
        <Process />
        <ServiceArea />
        <Reviews />
        <LeadForm selectedService={selectedService} onServiceChange={setSelectedService} />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}

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
  MapPin,
  Menu,
  Phone,
  PlugZap,
  ShieldCheck,
  Sparkles,
  Star,
  ToggleRight,
  Wrench
} from "lucide-react";

const phone = "(555) 018-2400";
const phoneHref = "tel:+15550182400";

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
    title: "Switch And Socket",
    text: "Replace worn outlets, add GFCI protection, and fix loose switches quickly."
  },
  {
    icon: Gauge,
    title: "Breakers",
    text: "Diagnose tripping breakers and restore dependable power to key circuits."
  },
  {
    icon: PlugZap,
    title: "Panel Upgrades",
    text: "Modern panels sized for today's appliances, EV chargers, and safer living."
  },
  {
    icon: Fan,
    title: "Fan Install",
    text: "Ceiling fans installed securely with proper support and balanced operation."
  },
  {
    icon: FileCheck2,
    title: "Safety Inspection",
    text: "Whole-home checks that identify fire risks, code issues, and aging components."
  }
];

const whyUs = [
  "Certified Electricians",
  "Code-Compliant Work",
  "Clear Upfront Pricing",
  "Background-Checked Team",
  "Clean Jobsite Promise",
  "Warranty On Repairs"
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
    text: "The team found the problem in our panel, explained the repair clearly, and had power restored the same afternoon."
  },
  {
    name: "Daniel K.",
    area: "Oak Grove",
    text: "Our kitchen lighting looks excellent. They protected the floors, cleaned up, and the price matched the quote."
  },
  {
    name: "Alicia M.",
    area: "West Park",
    text: "I called after an outlet started sparking. A licensed electrician arrived quickly and made the area safe."
  }
];

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-bold uppercase tracking-wide ${light ? "text-info" : "text-brand"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-extrabold sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-lg ${light ? "text-white/80" : "text-slate-700"}`}>{text}</p> : null}
    </div>
  );
}

function CtaButton({ children, href = "#quote", variant = "primary", className = "", ariaLabel }) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition focus:outline-none focus:ring-4 focus:ring-info/35";
  const styles =
    variant === "secondary"
      ? "border-2 border-brand bg-white text-brand hover:bg-brand hover:text-white"
      : "bg-success text-white shadow-sm hover:bg-[#126b12] hover:shadow-md";
  return (
    <a href={href} aria-label={ariaLabel} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="VoltGuard Electric home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white">
            <Bolt size={24} aria-hidden="true" />
          </span>
          <span className="text-lg font-black text-brand">VoltGuard Electric</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex">
          <a className="hover:text-brand" href="#services">Services</a>
          <a className="hover:text-brand" href="#about">About</a>
          <a className="hover:text-brand" href="#reviews">Reviews</a>
          <a className="hover:text-brand" href="#areas">Areas</a>
        </div>
        <div className="flex items-center gap-2">
          <a href={phoneHref} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black text-brand hover:bg-slate-100 sm:inline-flex" aria-label={`Call ${phone}`}>
            <Phone size={18} aria-hidden="true" />
            {phone}
          </a>
          <CtaButton href={phoneHref} ariaLabel="Call for emergency electrical service" className="hidden sm:inline-flex">
            <Bolt size={18} aria-hidden="true" />
            Emergency Call
          </CtaButton>
          <a href={phoneHref} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-success text-white sm:hidden" aria-label={`Call ${phone}`}>
            <Phone size={20} aria-hidden="true" />
          </a>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-brand lg:hidden" aria-label="Open menu">
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const badges = [
    ["Licensed", BadgeCheck],
    ["Same-Day", Clock3],
    ["Safety First", ShieldCheck]
  ];

  return (
    <section id="top" className="overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-brand shadow-sm">
            <Sparkles size={16} className="text-info" aria-hidden="true" />
            24/7 Licensed Local Electricians
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            Professional Electrician Services: Fast, Safe, & Reliable Help
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Get dependable electrical repairs, installations, and inspections from certified electricians who put your safety first. Same-day appointments and emergency support are available.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#quote" ariaLabel="Get a free electrical service quote">
              <FileCheck2 size={19} aria-hidden="true" />
              Get A Free Quote
            </CtaButton>
            <CtaButton href={phoneHref} variant="secondary" ariaLabel={`Call ${phone} for emergency service`}>
              <Phone size={19} aria-hidden="true" />
              Emergency Service
            </CtaButton>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
            {badges.map(([label, Icon]) => (
              <div key={label} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <Icon className="mx-auto text-info" size={24} aria-hidden="true" />
                <p className="mt-2 text-sm font-black text-brand">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-info/20" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl bg-brand shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
              alt="Licensed electrician safely inspecting a residential electrical panel"
              className="h-[460px] w-full object-cover opacity-95"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/85 to-transparent p-6">
              <div className="rounded-2xl bg-white p-5 shadow-md">
                <p className="text-sm font-bold text-slate-600">Need Help Today?</p>
                <a href={phoneHref} className="mt-1 flex items-center gap-2 text-2xl font-black text-brand" aria-label={`Call ${phone}`}>
                  <Phone size={24} className="text-success" aria-hidden="true" />
                  {phone}
                </a>
                <p className="mt-2 text-sm text-slate-600">Average callback in under 10 minutes during business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-info/15 text-brand">
        <Icon size={28} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-black text-ink">{service.title}</h3>
      <p className="mt-3 min-h-20 text-slate-700">{service.text}</p>
      <a href="#quote" className="mt-5 inline-flex items-center gap-1 font-extrabold text-brand hover:text-success" aria-label={`Book ${service.title}`}>
        Book Service
        <ChevronRight size={18} aria-hidden="true" />
      </a>
    </article>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Electrical Services"
          title="Expert Help For The Work Your Home Depends On"
          text="From urgent repairs to planned upgrades, every service is handled by trained electricians with a safety-first process."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="about" className="bg-brand py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Electrical Work Done With Care, Clarity, And Accountability"
          text="We focus on keeping your home safe, your schedule respected, and your repair explained before work begins."
          light
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-6 text-white ring-1 ring-white/15">
              <CheckCircle2 className="text-info" size={28} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-black">{item}</h3>
              <p className="mt-2 text-white/80">Dependable service standards designed to protect your home and make the next step clear.</p>
            </div>
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
          <p className="text-sm font-black uppercase tracking-wide text-info">Electrical Emergency?</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">Do Not Wait On Sparks, Smoke, Or Power Loss</h2>
          <p className="mt-3 max-w-2xl text-white/75">Call now for urgent help from a licensed electrician who can make the area safe and explain the repair.</p>
        </div>
        <CtaButton href={phoneHref} ariaLabel={`Call now at ${phone}`} className="animate-ring-pulse whitespace-nowrap">
          <Phone size={20} aria-hidden="true" />
          Call Now: {phone}
        </CtaButton>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    {
      label: "Before: Aging Wiring",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
    },
    {
      label: "After: Organized Panel",
      image: "https://images.unsplash.com/photo-1565608087341-404b25492fee?auto=format&fit=crop&w=900&q=80"
    },
    {
      label: "Before: Dim Exterior",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
    },
    {
      label: "After: Safer Lighting",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Before And After"
          title="Clean Installs, Safer Systems, Better Peace Of Mind"
          text="A quick look at the kind of visible care we bring to electrical panels, lighting, and home safety upgrades."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <figure key={item.label} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={item.image} alt={item.label} className="h-56 w-full object-cover" />
              <figcaption className="p-4 text-sm font-black text-brand">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Contact", Phone, "Call or request a quote and tell us what is happening."],
    ["Schedule", CalendarCheck, "Choose the soonest time that works for your home."],
    ["Quote", FileCheck2, "Get a clear scope and price before work begins."],
    ["Resolution", ShieldCheck, "Approve the repair and enjoy safer, reliable power."]
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Process" title="From First Call To Safe Resolution" />
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map(([title, Icon, text], index) => (
            <article key={title} className="relative rounded-2xl bg-paper p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                <Icon size={22} aria-hidden="true" />
              </div>
              <p className="mt-5 text-sm font-black text-info">Step {index + 1}</p>
              <h3 className="mt-1 text-xl font-black text-ink">{title}</h3>
              <p className="mt-3 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section id="areas" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-brand">Service Area</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Local Electricians Serving Nearby Neighborhoods</h2>
          <p className="mt-4 text-lg text-slate-700">We help homeowners and small businesses across the metro area with safe repairs, upgrades, and emergency electrical service.</p>
          <a href={phoneHref} className="mt-6 inline-flex items-center gap-2 font-black text-brand hover:text-success" aria-label={`Call to confirm service in your area at ${phone}`}>
            <MapPin size={20} aria-hidden="true" />
            Call To Confirm Availability
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Home className="text-info" size={22} aria-hidden="true" />
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
    <section id="reviews" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Trusted For Safe, Straightforward Electrical Service"
          text="Homeowners call us when they want a careful electrician, plain answers, and work that feels solid."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl bg-paper p-6 shadow-sm">
              <div className="flex gap-1 text-success" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={19} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
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

function LeadForm() {
  return (
    <section id="quote" className="bg-brand py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="text-white">
          <p className="text-sm font-black uppercase tracking-wide text-info">Free Quote</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Tell Us What You Need Fixed</h2>
          <p className="mt-4 text-lg text-white/80">Share a few details and our team will call back with next steps. For urgent issues, call now so we can help make the area safe.</p>
          <a href={phoneHref} className="mt-7 inline-flex items-center gap-2 text-2xl font-black text-white hover:text-info" aria-label={`Call ${phone}`}>
            <Phone className="text-success" size={26} aria-hidden="true" />
            {phone}
          </a>
        </div>
        <form className="rounded-2xl bg-white p-6 shadow-soft sm:p-8" aria-label="Electrical service quote form">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black text-ink">Name</span>
              <input className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-ink outline-none focus:border-info focus:ring-4 focus:ring-info/20" type="text" name="name" autoComplete="name" placeholder="Your Name" />
            </label>
            <label className="block">
              <span className="text-sm font-black text-ink">Phone</span>
              <input className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-ink outline-none focus:border-info focus:ring-4 focus:ring-info/20" type="tel" name="phone" autoComplete="tel" placeholder="(555) 000-0000" />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-black text-ink">Service Type</span>
            <select className="mt-2 h-12 w-full rounded-lg border border-slate-300 px-4 text-ink outline-none focus:border-info focus:ring-4 focus:ring-info/20" name="service" defaultValue="">
              <option value="" disabled>Select A Service</option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>{service.title}</option>
              ))}
            </select>
          </label>
          <label className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-paper p-4">
            <span>
              <span className="block font-black text-ink">Emergency Request</span>
              <span className="text-sm text-slate-700">Choose this if there are sparks, heat, smoke, or power loss.</span>
            </span>
            <input className="h-6 w-6 accent-success" type="checkbox" name="emergency" aria-label="Mark this quote request as an emergency" />
          </label>
          <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-success px-6 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#126b12] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-info/35" aria-label="Submit quote request">
            <Wrench size={19} aria-hidden="true" />
            Request My Quote
          </button>
          <p className="mt-4 text-center text-sm text-slate-600">By submitting, you agree to be contacted about your electrical service request.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand">
              <Bolt size={22} aria-hidden="true" />
            </span>
            <span className="font-black">VoltGuard Electric</span>
          </div>
          <p className="mt-4 text-sm text-white/70">Licensed electricians for safe repairs, installations, and inspections.</p>
        </div>
        <div>
          <h3 className="font-black">Sitemap</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#quote" className="hover:text-white">Free Quote</a>
          </div>
        </div>
        <div>
          <h3 className="font-black">Contact Info</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <a href={phoneHref} className="hover:text-white">{phone}</a>
            <span>Open 24/7 For Emergencies</span>
            <span>License Placeholder: EL-20480</span>
          </div>
        </div>
        <div>
          <h3 className="font-black">Service Areas</h3>
          <p className="mt-4 text-sm text-white/70">Downtown, North Hills, River District, Oak Grove, West Park, and nearby neighborhoods.</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/55 sm:px-6 lg:px-8">
        Copyright 2026 VoltGuard Electric. All Rights Reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <EmergencyCta />
        <Gallery />
        <Process />
        <ServiceArea />
        <Reviews />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

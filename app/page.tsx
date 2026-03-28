import Image from "next/image";

const WHATSAPP_NUMBER = "27684720563";
const whatsappMessage = encodeURIComponent(
  "Hi Wemoovemed, I need same-day prescription collection and delivery in Carletonville."
);
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const howItWorks = [
  {
    title: "Message us on WhatsApp",
    description:
      "Tell us your location in Carletonville and share your collection details.",
    icon: "message-circle",
  },
  {
    title: "We confirm your request",
    description:
      "Our team confirms the same-day delivery slot and any special instructions.",
    icon: "check-circle",
  },
  {
    title: "Rider collects and delivers",
    description:
      "Your assigned rider executes the instructions and keeps you updated until delivery.",
    icon: "truck",
  },
];

const scheduleOptions = [
  {
    code: "Schedule 0",
    time: "OTC",
    detail:
      "No prescription needed. Usually available in supermarkets and pharmacies.",
  },
  {
    code: "Schedule 1",
    time: "OTC at pharmacy",
    detail:
      "No doctor script required, but sold through pharmacies with pharmacist guidance.",
  },
  {
    code: "Schedule 2",
    time: "OTC at pharmacy",
    detail:
      "No doctor script required, but supply and advice are managed by a pharmacist.",
  },
];

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center border border-[var(--wm-dark)] bg-[var(--wm-turquoise)] text-white">
      {children}
    </span>
  );
}

function WhatsAppGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M6.4 20l1-3.6a7.5 7.5 0 1 1 2.8 2.4L6.4 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3 9.8c.2-.4.4-.5.8-.3.2 0 .6.8.8 1.2.1.2 0 .4-.1.5-.2.2-.3.4-.4.5-.1.2 0 .4.1.5.4.7 1 1.3 1.7 1.7.2.1.4.2.5.1.1-.1.3-.2.5-.4.1-.1.3-.2.5-.1.4.2 1.2.6 1.2.8.2.4.1.6-.3.8-.3.2-.7.4-1.1.4-.5 0-1.1-.1-1.8-.5A8.3 8.3 0 0 1 9.5 13c-.5-.7-.7-1.3-.7-1.8 0-.4.2-.8.4-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 5.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 5v-5.1a2 2 0 0 1-2-1.9v-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m8.5 12.2 2.3 2.3 4.7-4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M3 7.5A1.5 1.5 0 0 1 4.5 6h9A1.5 1.5 0 0 1 15 7.5V15h-1.2a2.3 2.3 0 0 0-4.6 0H8a2.3 2.3 0 0 0-4.6 0H3V7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M15 9h3l3 3v3h-1.2a2.3 2.3 0 0 0-4.6 0H15V9Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="6" cy="15.8" r="1.2" fill="currentColor" />
      <circle cx="17" cy="15.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 8.5h4a3 3 0 0 1 3 3v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13.5 14 1.5-1.5L16.5 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M6.5 4.5h2.8l1.1 3.5-1.6 1.4a14.8 14.8 0 0 0 5.8 5.8l1.4-1.6 3.5 1.1v2.8a1 1 0 0 1-1 1A14.5 14.5 0 0 1 5.5 5.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-[var(--wm-surface)] text-[var(--wm-dark)]">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Wemoovemed on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex min-h-11 items-center gap-2 border-2 border-[var(--wm-dark)] bg-[var(--wm-green)] px-4 py-3 text-sm font-extrabold text-white shadow-[6px_6px_0px_rgba(30,55,73,0.85)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wm-dark)]"
      >
        <WhatsAppGlyph className="h-5 w-5" />
        Order via WhatsApp
      </a>

      <main className="relative mx-auto flex w-full max-w-[1380px] flex-col px-5 pb-20 pt-4 sm:px-8 lg:px-12 xl:px-16">
        <header className="mb-8 flex items-center justify-between border-b-2 border-[var(--wm-dark)] pb-2">
          <div className="flex items-center gap-3">
            <Image
              src="/wemovelogog.png"
              alt="Wemoovemed logo"
              width={154}
              height={42}
              priority
            />
            <span className="hidden border border-[var(--wm-dark)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--wm-dark)] sm:inline-flex">
              Carletonville only
            </span>
          </div>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-[var(--wm-dark)] bg-white px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-[var(--wm-dark)] transition-colors duration-200 hover:bg-[var(--wm-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wm-green)]"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppGlyph />
            Chat now
          </a>
        </header>

        <section className="grid gap-8 border-x-2 border-y-2 border-[var(--wm-dark)] bg-white px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex w-fit border border-[var(--wm-dark)] bg-[var(--wm-muted)] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--wm-dark)]">
              Same-day courier | Carletonville
            </p>
            <h1 className="max-w-2xl font-[var(--font-heading)] text-5xl font-bold uppercase leading-[0.95] text-[var(--wm-dark)] sm:text-6xl">
              Need meds collected today?
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--wm-dark)]/80">
              Send us a WhatsApp and we handle the courier side from there.
              Quick chats, clear updates, same-day delivery. We collect existing
              prescriptions, we do not issue new ones.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-[var(--wm-dark)] bg-[var(--wm-green)] px-6 py-3 text-base font-extrabold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wm-dark)]"
              >
                <WhatsAppGlyph className="h-5 w-5" />
                Place order on WhatsApp
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-11 items-center justify-center border-2 border-[var(--wm-dark)] bg-white px-6 py-3 text-base font-extrabold uppercase tracking-wide text-[var(--wm-dark)] transition-colors duration-200 hover:bg-[var(--wm-muted)]"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="border-2 border-[var(--wm-dark)] bg-[var(--wm-dark)] p-5 text-white">
            <div className="mb-4 flex items-center justify-between text-sm text-[#d8e4eb]">
              <span>Live service details</span>
              <span className="inline-flex items-center gap-1 text-[var(--wm-green)]">
                <span className="h-2 w-2 bg-[var(--wm-green)]" />
                Online now
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="border border-white/25 bg-white/95 p-3 text-[var(--wm-dark)]">
                <p className="font-extrabold">Delivery schedule</p>
                <p className="mt-1 text-[var(--wm-gray)]">
                  Deliveries are fulfilled same day.
                </p>
              </div>
              <div className="border border-white/25 bg-white/95 p-3 text-[var(--wm-dark)]">
                <p className="font-extrabold">Service area</p>
                <p className="mt-1 text-[var(--wm-gray)]">Carletonville only</p>
              </div>
              <div className="border border-white/25 bg-white/95 p-3 text-[var(--wm-dark)]">
                <p className="font-extrabold">Prescription policy</p>
                <p className="mt-1 text-[var(--wm-gray)]">
                  We collect prescriptions. We do not issue prescriptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="mt-14 border-2 border-[rgba(30,55,73,0.35)] bg-white p-6 sm:p-8"
        >
          <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase text-[var(--wm-dark)] sm:text-5xl">
            How it works
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[var(--wm-gray)] sm:text-lg">
            Super simple: message us, confirm details, then our rider gets it done.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <article
                key={step.title}
                className="border border-[var(--wm-dark)] bg-[var(--wm-muted)] p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <IconBubble>
                  {step.icon === "message-circle" ? (
                    <MessageIcon />
                  ) : step.icon === "check-circle" ? (
                    <CheckIcon />
                  ) : (
                    <TruckIcon />
                  )}
                </IconBubble>
                <p className="mb-1 text-sm font-extrabold uppercase text-[var(--wm-green)]">
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-extrabold text-[var(--wm-dark)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[var(--wm-gray)]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border-2 border-[var(--wm-dark)] bg-white p-5 sm:p-7">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold uppercase text-[var(--wm-dark)] sm:text-4xl">
              Medication schedules explained
            </h2>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--wm-green)]">
              We dont sell, we deliver !
            </p>
          </div>
          <p className="mb-6 max-w-4xl text-[var(--wm-gray)]">
            Schedule 0, 1 and 2 refer to medicine categories, not delivery
            priority. Your delivery is still arranged same-day once collection is
            confirmed.
          </p>

          <div className="grid gap-5 lg:grid-cols-3">
          {scheduleOptions.map((option) => (
            <article
              key={option.code}
              className="border-2 border-[rgba(69,162,145,0.55)] bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-[var(--font-heading)] font-bold uppercase text-[var(--wm-dark)]">
                  {option.code}
                </h3>
                <span className="text-[var(--wm-turquoise)]">
                  <RouteIcon />
                </span>
              </div>
              <p className="mt-2 text-sm font-extrabold uppercase tracking-wide text-[var(--wm-green)]">
                {option.time}
              </p>
              <p className="mt-2 text-[var(--wm-gray)]">{option.detail}</p>
            </article>
          ))}
          </div>

          <div className="mt-5">
            <article className="border-2 border-[rgba(69,162,145,0.55)] bg-[var(--wm-muted)] p-5">
              <h3 className="text-2xl font-[var(--font-heading)] font-bold uppercase text-[var(--wm-dark)]">
                Schedule 3 to 6
              </h3>
              <p className="mt-2 text-[var(--wm-gray)]">
                Prescription required. These medicines must be dispensed by a
                pharmacist with a valid doctor&apos;s written prescription.
              </p>
            </article>
          </div>

          <p className="mt-4 text-sm text-[var(--wm-gray)]">
            Note: medicine regulations and delivery rules can change. Dispensing
            decisions remain with registered pharmacies.
          </p>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="border-2 border-[var(--wm-dark)] bg-[var(--wm-muted)] p-6">
            <h3 className="font-[var(--font-heading)] text-3xl font-bold uppercase text-[var(--wm-dark)]">
              Where we deliver
            </h3>
            <p className="mt-3 text-[var(--wm-gray)]">
              Right now, we only serve <strong>Carletonville</strong>. Keeping it
              local helps us stay fast and keep communication tight.
            </p>
            <p className="mt-3 text-sm text-[var(--wm-gray)]">
              We will add more areas as we grow.
            </p>
          </article>

          <article className="border-2 border-[var(--wm-dark)] bg-white p-6">
            <h3 className="font-[var(--font-heading)] text-3xl font-bold uppercase text-[var(--wm-dark)]">
              Quick policy note
            </h3>
            <p className="mt-3 text-[var(--wm-gray)]">
              We do <strong>not</strong> create or issue prescriptions. We handle
              courier logistics only: collect valid scripts and deliver medication
              based on your instructions.
            </p>
          </article>
        </section>

        <section className="mt-12 border-2 border-[var(--wm-dark)] bg-[var(--wm-dark)] p-7 text-white sm:p-10">
          <h2 className="font-[var(--font-heading)] text-4xl font-bold uppercase sm:text-5xl">
            Ready to send your order?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/90">
            Hit WhatsApp, send your details, and we handle the rest today.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 border-2 border-white bg-[var(--wm-green)] px-6 py-3 text-base font-extrabold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            Start WhatsApp Conversation
          </a>
        </section>

        <footer className="mt-12 border-t border-[rgba(145,154,159,0.3)] py-8 text-sm text-[var(--wm-gray)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Wemoovemed Courier Services</p>
            <p className="inline-flex items-center gap-2">
              <PhoneIcon />
              +27 60 384 6470
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

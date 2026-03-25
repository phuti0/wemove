import Image from "next/image";

const WHATSAPP_NUMBER = "27603846470";
const whatsappMessage = encodeURIComponent(
  "Hi WemooveMed, I need same-day prescription collection and delivery in Carletonville."
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
    time: "ASAP same-day",
    detail: "Urgent same-day pickup and delivery based on current rider availability.",
  },
  {
    code: "Schedule 1",
    time: "Standard same-day",
    detail: "Same-day delivery with a confirmed daytime collection and drop-off window.",
  },
  {
    code: "Schedule 2",
    time: "Flexible same-day",
    detail:
      "Still delivered today, with a later route window when timing is less urgent.",
  },
];

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--wm-turquoise)] text-white">
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
    <div className="relative overflow-x-clip bg-[var(--wm-surface)] text-[var(--wm-ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(69,162,145,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(84,172,70,0.16),transparent_38%)]" />

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message WemooveMed on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex min-h-11 items-center gap-2 rounded-full bg-[var(--wm-green)] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_35px_rgba(84,172,70,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wm-dark)]"
      >
        <WhatsAppGlyph className="h-5 w-5" />
        Order on WhatsApp
      </a>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-20 pt-6 sm:px-8 lg:px-12">
        <header className="mb-10 flex items-center justify-between rounded-2xl border border-[rgba(30,55,73,0.1)] bg-white/80 px-4 py-3 backdrop-blur-sm sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/wemovelogo.png"
              alt="WemooveMed logo"
              width={154}
              height={42}
              priority
            />
            <span className="hidden rounded-full bg-[var(--wm-muted)] px-3 py-1 text-xs font-semibold text-[var(--wm-dark)] sm:inline-flex">
              Carletonville only
            </span>
          </div>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--wm-dark)] px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#284c65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wm-green)]"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppGlyph />
            Chat on WhatsApp
          </a>
        </header>

        <section className="grid gap-8 rounded-[2rem] bg-gradient-to-br from-[var(--wm-dark)] to-[#274a64] px-6 py-10 text-white sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex w-fit items-center rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
              Same-day courier in Carletonville
            </p>
            <h1 className="max-w-2xl font-[var(--font-heading)] text-4xl font-extrabold leading-tight sm:text-5xl">
              Prescription collection and delivery made simple.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[#d5dee4]">
              WemooveMed does not create prescriptions. We collect existing
              prescriptions and deliver medication the same day, with updates
              through WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--wm-green)] px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <WhatsAppGlyph className="h-5 w-5" />
                Place Order on WhatsApp
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/20 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between text-sm text-[#d8e4eb]">
              <span>Live service details</span>
              <span className="inline-flex items-center gap-1 text-[var(--wm-green)]">
                <span className="h-2 w-2 rounded-full bg-[var(--wm-green)]" />
                Online now
              </span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="rounded-xl bg-white/90 p-3 text-[var(--wm-dark)]">
                <p className="font-semibold">Delivery schedule: 0 / 1 / 2</p>
                <p className="mt-1 text-[var(--wm-gray)]">
                  All options are fulfilled same day.
                </p>
              </div>
              <div className="rounded-xl bg-white/90 p-3 text-[var(--wm-dark)]">
                <p className="font-semibold">Service area</p>
                <p className="mt-1 text-[var(--wm-gray)]">Carletonville only</p>
              </div>
              <div className="rounded-xl bg-white/90 p-3 text-[var(--wm-dark)]">
                <p className="font-semibold">Prescription policy</p>
                <p className="mt-1 text-[var(--wm-gray)]">
                  We collect prescriptions. We do not issue prescriptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="mt-14 rounded-3xl border border-[rgba(30,55,73,0.12)] bg-white p-6 sm:p-8"
        >
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-[var(--wm-dark)] sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[var(--wm-gray)] sm:text-lg">
            One clear flow from request to delivery, with your WhatsApp chat as
            the command center.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl bg-[var(--wm-muted)] p-5 transition-transform duration-200 hover:-translate-y-1"
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
                <p className="mb-1 text-sm font-bold text-[var(--wm-green)]">
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-bold text-[var(--wm-dark)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[var(--wm-gray)]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-3">
          {scheduleOptions.map((option) => (
            <article
              key={option.code}
              className="rounded-2xl border border-[rgba(69,162,145,0.26)] bg-white p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[var(--wm-dark)]">
                  {option.code}
                </h3>
                <span className="text-[var(--wm-turquoise)]">
                  <RouteIcon />
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[var(--wm-green)]">
                {option.time}
              </p>
              <p className="mt-2 text-[var(--wm-gray)]">{option.detail}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl bg-[var(--wm-muted)] p-6">
            <h3 className="font-[var(--font-heading)] text-2xl font-extrabold text-[var(--wm-dark)]">
              Service area right now
            </h3>
            <p className="mt-3 text-[var(--wm-gray)]">
              We currently serve <strong>Carletonville</strong> only. Keeping our
              focus local helps us deliver faster and communicate clearly.
            </p>
            <p className="mt-3 text-sm text-[var(--wm-gray)]">
              Expansion areas can be added later as operations grow.
            </p>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(30,55,73,0.1)]">
            <h3 className="font-[var(--font-heading)] text-2xl font-extrabold text-[var(--wm-dark)]">
              Important policy
            </h3>
            <p className="mt-3 text-[var(--wm-gray)]">
              We do <strong>not</strong> create or issue prescriptions. Our role
              is courier logistics: collecting valid prescriptions and delivering
              medication according to your instructions.
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-3xl bg-[linear-gradient(120deg,#54ac46,#45a291)] p-7 text-white sm:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold sm:text-4xl">
            Ready to place your same-day order?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/90">
            Tap WhatsApp, send your details, and we will take it from there.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-extrabold text-[var(--wm-dark)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            Start WhatsApp Conversation
          </a>
        </section>

        <footer className="mt-12 border-t border-[rgba(145,154,159,0.3)] py-8 text-sm text-[var(--wm-gray)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>WemooveMed Courier Services</p>
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

"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Beams from "./Beams";

type ContactSectionProps = {
  includeNav?: boolean;
};

const budgetCurrencyCode = "USD";
const budgetCurrencySymbol = "$";
const budgetMinimum = 500;

const contactOptions = [
  {
    label: "Email",
    href: "mailto:contact@oelrix.com",
    sublabel: "contact@oelrix.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M3 6.75h18v10.5H3V6.75zm1.5 1.5v7.5h15v-7.5l-7.5 4.5-7.5-4.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    sublabel: "@oelrix",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    sublabel: "Direct line",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M12 3a9 9 0 00-7.8 13.5L3 21l4.7-1.2A9 9 0 1012 3zm4.6 12.2c-.2.5-1 .9-1.6 1-.4.1-1 .1-1.7-.1-2.1-.7-3.7-2.4-4.5-4.3-.3-.7-.3-1.3-.2-1.7.1-.6.6-1.3 1.2-1.5.3-.1.6-.1.8.1.2.2.6.9.7 1.1.1.3.1.5 0 .7-.2.2-.3.4-.5.6-.1.1-.2.3-.1.6.2.6.8 1.6 1.8 2.5 1 .9 2.1 1.2 2.7 1.1.2 0 .4-.2.5-.3.2-.2.5-.8.7-1 .2-.2.4-.2.7-.1.3.1 1.7.8 1.9.9.2.1.4.2.4.4-.1.2-.2.5-.3.9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    sublabel: "Oelrix Studio",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M6.5 9H3.8v11h2.7V9zM5.1 4.1a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM20.2 14.2c0-3-1.6-5.2-4.7-5.2-1.5 0-2.5.8-2.9 1.6V9H9.9v11h2.7v-5.9c0-1.6.3-3.1 2.2-3.1 1.9 0 1.9 1.8 1.9 3.2V20h2.7v-5.8z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const helpOptions = ["Branding", "Design", "Development"];
const meetingOptions = [
  {
    id: "15",
    title: "15 Min Meeting",
    minutes: 15,
    description: "Quick alignment call to understand your goals and timeline.",
  },
  {
    id: "30",
    title: "30 Min Meeting",
    minutes: 30,
    description: "Deeper discovery call covering scope, direction, and next steps.",
  },
] as const;

const timeZones = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Toronto",
  "America/Vancouver",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Madrid",
  "Europe/Rome",
  "Europe/Amsterdam",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Asia/Seoul",
  "Australia/Sydney",
  "Pacific/Auckland",
  "UTC",
];

const getDateOptions = () =>
  Array.from({ length: 14 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date;
  });

const timeSlots12h = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
];

export default function ContactSection({ includeNav = false }: ContactSectionProps) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [activeMode, setActiveMode] = useState<"quote" | "call">("quote");
  const [bookingStep, setBookingStep] = useState<"menu" | "calendar" | "details">("menu");
  const [selectedMeetingId, setSelectedMeetingId] = useState<"15" | "30" | null>(null);
  const [selectedDateIso, setSelectedDateIso] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const [budgetInr, setBudgetInr] = useState("");
  const [budgetTouched, setBudgetTouched] = useState(false);
  const [selectedHelp, setSelectedHelp] = useState<string[]>([]);
  const [quoteName, setQuoteName] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [quoteMessage, setQuoteMessage] = useState("");
  const [quoteStatus, setQuoteStatus] = useState<null | "success" | "error">(null);
  const [quoteSending, setQuoteSending] = useState(false);
  const [callerName, setCallerName] = useState("");
  const [callerEmail, setCallerEmail] = useState("");
  const [callerNotes, setCallerNotes] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [meetingStatus, setMeetingStatus] = useState<null | "success" | "error">(null);
  const [meetingSending, setMeetingSending] = useState(false);
  const emailRef = useRef<HTMLDivElement | null>(null);
  const dateOptions = getDateOptions();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const systemTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (systemTimezone) {
      setSelectedTimezone(systemTimezone);
    }
  }, []);

  useEffect(() => {
    if (!emailRef.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEmailVisible(true);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(emailRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleHelpOption = (option: string) => {
    setSelectedHelp((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const parsedBudget = Number(budgetInr);
  const hasBudget = budgetInr.trim() !== "";
  const budgetTooLow =
    budgetTouched &&
    hasBudget &&
    !Number.isNaN(parsedBudget) &&
    parsedBudget < budgetMinimum;
  const budgetMinLabel = `${budgetMinimum.toLocaleString()} ${budgetCurrencyCode}`;
  const selectedMeeting =
    meetingOptions.find((option) => option.id === selectedMeetingId) ?? null;

  const handleMeetingSelect = (meetingId: "15" | "30") => {
    setSelectedMeetingId(meetingId);
    setSelectedDateIso("");
    setSelectedTime("");
    setBookingStep("calendar");
  };

  const handleConfirmSlot = () => {
    if (!selectedDateIso || !selectedTime || !selectedMeetingId) return;
    setBookingStep("details");
  };

  const selectedDateLabel = selectedDateIso
    ? new Date(selectedDateIso).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "No date selected";

  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const emailJsQuoteTemplateId = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID ?? "";
  const emailJsMeetingTemplateId = process.env.NEXT_PUBLIC_EMAILJS_MEETING_TEMPLATE_ID ?? "";
  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

  const hasEmailJsConfig =
    emailJsServiceId && emailJsQuoteTemplateId && emailJsMeetingTemplateId && emailJsPublicKey;

  const handleQuoteSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuoteStatus(null);

    if (!hasEmailJsConfig) {
      setQuoteStatus("error");
      return;
    }

    if (budgetTooLow || !quoteName.trim() || !quoteEmail.trim()) {
      setQuoteStatus("error");
      return;
    }

    setQuoteSending(true);
    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsQuoteTemplateId,
        {
          client_name: quoteName,
          business_email: quoteEmail,
          project_notes: quoteMessage,
          budget: budgetInr ? budgetInr : "Not provided",
          help_topics: selectedHelp.length ? selectedHelp.join(", ") : "Not specified",
          source: "Request a quote",
        },
        { publicKey: emailJsPublicKey }
      );
      setQuoteStatus("success");
      setQuoteName("");
      setQuoteEmail("");
      setQuoteMessage("");
      setBudgetInr("");
      setSelectedHelp([]);
    } catch (error) {
      setQuoteStatus("error");
    } finally {
      setQuoteSending(false);
    }
  };

  const handleMeetingSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMeetingStatus(null);

    if (!hasEmailJsConfig) {
      setMeetingStatus("error");
      return;
    }

    if (!callerName.trim() || !callerEmail.trim() || !selectedMeeting) {
      setMeetingStatus("error");
      return;
    }

    setMeetingSending(true);
    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsMeetingTemplateId,
        {
          client_name: callerName,
          client_email: callerEmail,
          meeting_type: selectedMeeting.title,
          meeting_date: selectedDateLabel,
          meeting_time: selectedTime || "Not selected",
          timezone: selectedTimezone,
          notes: callerNotes || "None",
          guests: guestEmail || "None",
          source: "Request a meeting",
        },
        { publicKey: emailJsPublicKey }
      );
      setMeetingStatus("success");
      setCallerName("");
      setCallerEmail("");
      setCallerNotes("");
      setGuestEmail("");
    } catch (error) {
      setMeetingStatus("error");
    } finally {
      setMeetingSending(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-screen overflow-hidden bg-[#050505] text-white">
      <style jsx>{`
        @keyframes glowFloat {
          0% {
            transform: translate3d(0%, 0%, 0);
          }
          50% {
            transform: translate3d(-3%, -2%, 0);
          }
          100% {
            transform: translate3d(0%, 0%, 0);
          }
        }
        @keyframes letterRise {
          0% {
            letter-spacing: 0.6em;
            opacity: 0;
          }
          100% {
            letter-spacing: 0.18em;
            opacity: 1;
          }
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Let’s Work Together
          </h1>
          <p className="mt-6 text-lg text-white/70 sm:text-xl">
            If you’re ready to elevate your online presence, we’d love to hear from you.
          </p>
        </div>
      </div>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.14em] text-white/70">
            Let&apos;s make it happen
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Got questions or a project in mind?
            <br />
            We&apos;re here to help!
          </h2>
          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setActiveMode("quote")}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                activeMode === "quote"
                  ? "bg-white/30 text-white"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              Request a quote
            </button>
            <button
              type="button"
              onClick={() => setActiveMode("call")}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                activeMode === "call"
                  ? "bg-white/30 text-white"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              Book a free call
            </button>
          </div>
        </div>

        {activeMode === "quote" ? (
          <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:p-10">
            <p className="text-left text-2xl font-semibold text-white sm:text-3xl">Contact information</p>
            <form className="mt-8 space-y-6" onSubmit={handleQuoteSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  value={quoteName}
                  onChange={(event) => setQuoteName(event.target.value)}
                  className="h-14 rounded-2xl border border-white/10 bg-black/20 px-5 text-white placeholder:text-white/35 focus:border-white/30 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Business email"
                  value={quoteEmail}
                  onChange={(event) => setQuoteEmail(event.target.value)}
                  className="h-14 rounded-2xl border border-white/10 bg-black/20 px-5 text-white placeholder:text-white/35 focus:border-white/30 focus:outline-none"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Tell us about your project"
                value={quoteMessage}
                onChange={(event) => setQuoteMessage(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white placeholder:text-white/35 focus:border-white/30 focus:outline-none"
              />

              <div>
                <label className="mb-2 block text-left text-sm font-semibold text-white/90">
                  Budget
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={budgetMinimum}
                    step={500}
                    value={budgetInr}
                    onChange={(event) => setBudgetInr(event.target.value)}
                    onBlur={() => setBudgetTouched(true)}
                    placeholder={`Minimum ${budgetMinLabel}`}
                    className="h-14 w-full rounded-2xl border border-white/15 bg-[#151515] px-5 pr-20 text-white placeholder:text-white/45 focus:border-white/35 focus:outline-none"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-sm font-medium text-white/60">
                    {budgetCurrencySymbol}
                  </span>
                </div>
                {budgetTooLow ? (
                  <p className="mt-2 text-left text-xs text-red-300/90">
                    Minimum budget is {budgetMinLabel}.
                  </p>
                ) : (
                  <p className="mt-2 text-left text-xs text-white/50">
                    Minimum budget: {budgetMinLabel}.
                  </p>
                )}
              </div>

              <div>
                <p className="text-left text-sm font-semibold text-white/90">
                  How can we help you <span className="text-white/60">*</span>
                </p>
                <div className="mt-3 space-y-2">
                  {helpOptions.map((option) => {
                    const selected = selectedHelp.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleHelpOption(option)}
                        className="flex items-center gap-3 rounded-lg px-1 py-1 text-left transition-colors hover:text-white"
                      >
                        <span
                          className={`h-5 w-5 rounded border ${
                            selected
                              ? "border-white bg-white"
                              : "border-white/20 bg-transparent"
                          }`}
                        />
                        <span className="text-lg font-medium text-white/90">{option}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={quoteSending}
                className="mt-2 h-14 w-full rounded-2xl bg-white text-lg font-semibold text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {quoteSending ? "Sending..." : "Send message"}
              </button>
              {quoteStatus === "success" ? (
                <p className="text-sm text-emerald-200/90">Thanks! We received your request.</p>
              ) : null}
              {quoteStatus === "error" ? (
                <p className="text-sm text-red-300/90">
                  {hasEmailJsConfig
                    ? "Something went wrong. Please check the form and try again."
                    : "Email service is not configured yet."}
                </p>
              ) : null}
            </form>
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:p-10">
            {bookingStep === "menu" ? (
              <div className="space-y-8">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-6 sm:p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black/70">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9 text-white">
                      <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-semibold tracking-tight text-white">No sales pitch</h3>
                  <p className="mt-3 max-w-3xl text-lg text-white/75">
                    Just honest advice on whether we&apos;re the right fit. Let&apos;s bring your vision to life.
                  </p>
                </div>
                <div className="space-y-4">
                  {meetingOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleMeetingSelect(option.id)}
                      className="flex w-full items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-left transition-colors hover:bg-white/10"
                    >
                      <div>
                        <p className="text-3xl font-semibold text-white">{option.title}</p>
                        <p className="mt-2 text-base text-white/65">{option.description}</p>
                        <span className="mt-4 inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-white/70">
                          {option.minutes}m
                        </span>
                      </div>
                      <span className="ml-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white/90">
                        &#8594;
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {bookingStep === "calendar" && selectedMeeting ? (
              <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr_1fr]">
                <aside className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-sm text-white/50">oelrix.studio</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">{selectedMeeting.title}</h3>
                  <p className="mt-2 text-base text-white/70">{selectedMeeting.minutes}m | Call Video</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-white/80">Timezone</p>
                    <div className="mt-3 max-h-56 space-y-1 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-2">
                      {timeZones.map((zone) => {
                        const active = zone === selectedTimezone;
                        return (
                          <button
                            key={zone}
                            type="button"
                            onClick={() => setSelectedTimezone(zone)}
                            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                              active ? "bg-white/20 text-white" : "text-white/75 hover:bg-white/10"
                            }`}
                          >
                            {zone}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </aside>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">Pick a day</p>
                    <button
                      type="button"
                      onClick={() => setBookingStep("menu")}
                      className="text-sm text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
                    >
                      Back
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                    {dateOptions.map((date) => {
                      const iso = date.toISOString().slice(0, 10);
                      const active = selectedDateIso === iso;
                      return (
                        <button
                          key={iso}
                          type="button"
                          onClick={() => setSelectedDateIso(iso)}
                          className={`rounded-xl border px-3 py-3 text-left transition-colors ${
                            active
                              ? "border-white bg-white text-black"
                              : "border-white/10 bg-white/5 text-white/85 hover:bg-white/10"
                          }`}
                        >
                          <p className="text-xs uppercase">{date.toLocaleDateString("en-US", { weekday: "short" })}</p>
                          <p className="text-xl font-semibold">{date.getDate()}</p>
                          <p className="text-xs">
                            {date.toLocaleDateString("en-US", { month: "short" })}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/60">Time slots</p>
                  <div className="max-h-[22rem] space-y-2 overflow-y-auto pr-1">
                    {timeSlots12h.map((slot) => {
                      const active = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`w-full rounded-xl border px-4 py-3 text-center text-lg font-semibold transition-colors ${
                            active
                              ? "border-white bg-white text-black"
                              : "border-white/15 bg-black/40 text-white hover:bg-white/10"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={handleConfirmSlot}
                    disabled={!selectedDateIso || !selectedTime}
                    className="mt-4 h-12 w-full rounded-xl bg-white text-base font-semibold text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Confirm slot
                  </button>
                </div>
              </div>
            ) : null}

            {bookingStep === "details" && selectedMeeting ? (
              <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                <aside className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <p className="text-sm text-white/50">oelrix.studio</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">{selectedMeeting.title}</h3>
                  <p className="mt-4 text-white/80">{selectedDateLabel}</p>
                  <p className="text-white/80">{selectedTime}</p>
                  <p className="mt-3 text-white/70">{selectedMeeting.minutes}m | Call Video</p>
                  <p className="mt-2 text-white/70">{selectedTimezone}</p>
                </aside>
                <form
                  className="rounded-2xl border border-white/10 bg-black/20 p-6"
                  onSubmit={handleMeetingSubmit}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white/90">Your name *</label>
                      <input
                        type="text"
                        required
                        value={callerName}
                        onChange={(event) => setCallerName(event.target.value)}
                        className="h-12 w-full rounded-xl border border-white/15 bg-black/40 px-4 text-white focus:border-white/40 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white/90">Email address *</label>
                      <input
                        type="email"
                        required
                        value={callerEmail}
                        onChange={(event) => setCallerEmail(event.target.value)}
                        className="h-12 w-full rounded-xl border border-white/15 bg-black/40 px-4 text-white focus:border-white/40 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white/90">Additional notes</label>
                      <textarea
                        rows={4}
                        value={callerNotes}
                        onChange={(event) => setCallerNotes(event.target.value)}
                        placeholder="Please share anything that will help prepare for our meeting."
                        className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/45 focus:border-white/40 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-white/90">Add guests</label>
                      <input
                        type="email"
                        value={guestEmail}
                        onChange={(event) => setGuestEmail(event.target.value)}
                        placeholder="Email"
                        className="h-12 w-full rounded-xl border border-white/15 bg-black/40 px-4 text-white placeholder:text-white/45 focus:border-white/40 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingStep("calendar")}
                      className="rounded-xl px-4 py-2 text-white/75 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={meetingSending}
                      className="rounded-xl bg-white px-5 py-2 font-semibold text-black hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {meetingSending ? "Sending..." : "Confirm"}
                    </button>
                  </div>
                  {meetingStatus === "success" ? (
                    <p className="mt-4 text-sm text-emerald-200/90">
                      Your meeting request has been sent.
                    </p>
                  ) : null}
                  {meetingStatus === "error" ? (
                    <p className="mt-4 text-sm text-red-300/90">
                      {hasEmailJsConfig
                        ? "Something went wrong. Please check the details and try again."
                        : "Email service is not configured yet."}
                    </p>
                  ) : null}
                </form>
              </div>
            ) : null}
          </div>
        )}
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : undefined}
              rel={option.href.startsWith("http") ? "noreferrer" : undefined}
              className="group relative flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
            >
              <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white/80">
                  {option.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">{option.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{option.sublabel}</p>
                </div>
              </div>
              <span className="relative text-sm uppercase tracking-[0.4em] text-white/50">Open</span>
            </a>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24 text-center">
        <div
          ref={emailRef}
          className={`transition-all duration-1000 ${
            emailVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className="text-2xl font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-4xl"
            style={{ animation: emailVisible ? "letterRise 1.2s ease-out" : "none" }}
          >
            contact@oelrix.com
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-28 text-center">
        <p className="text-lg text-white/60 transition-opacity duration-1000">
          We work with brands that value presence.
        </p>
      </section>
    </section>
  );
}

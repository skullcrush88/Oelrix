"use client";

const tickerItems = [
  "Brand Websites",
  "Landing Pages",
  "Site Refinement",
  "UI/UX Design",
  "Clean Code",
  "Fast Delivery",
  "Mobile First",
  "Conversion Focused",
];

function TickerRow() {
  return (
    <div className="flex items-center whitespace-nowrap">
      {tickerItems.map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center">
          <span className="text-sm uppercase tracking-widest text-white/60">{item}</span>
          {index < tickerItems.length - 1 ? (
            <span className="mx-4 text-white/30">·</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function MarqueeTicker() {
  return (
    <section className="my-0 w-full border-y border-white/10 py-6">
      <div className="overflow-hidden">
        <div className="flex w-max animate-[marquee_40s_linear_infinite]">
          <TickerRow />
          <span className="mx-4 text-white/30">·</span>
          <TickerRow />
          <span className="mx-4 text-white/30">·</span>
          <TickerRow />
          <span className="mx-4 text-white/30">·</span>
          <TickerRow />
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

const FooterSection = () => (
  <footer className="w-full border-t border-border bg-background px-8 md:px-16 lg:px-24 py-8">
    <div className="flex items-center justify-between">
      <span className="font-mono-tech text-foreground">VELOX</span>
      <span className="font-mono-tech text-muted-foreground hidden sm:inline">
        Crafted for those who move differently.
      </span>
      <span className="font-mono-tech text-muted-foreground">2026</span>
    </div>
    <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
      Designed by Oelrix
    </p>
  </footer>
);

export default FooterSection;

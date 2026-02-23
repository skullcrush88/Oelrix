const installRepeatDebugger = () => {
  if (process.env.NODE_ENV !== "development") return;

  const globalAny = globalThis as typeof globalThis & {
    __oelrixRepeatDebug?: boolean;
  };

  if (globalAny.__oelrixRepeatDebug) return;
  globalAny.__oelrixRepeatDebug = true;

  const originalRepeat = String.prototype.repeat;
  String.prototype.repeat = function repeatPatched(count: number) {
    if (count < 0) {
      // Log a stack trace to locate the caller causing negative repeats.
      // eslint-disable-next-line no-console
      console.error("String.repeat called with negative count", {
        count,
        value: String(this),
      });
      // eslint-disable-next-line no-console
      console.error(new Error("repeat stack").stack);
    }
    return originalRepeat.call(this, count);
  };
};

installRepeatDebugger();

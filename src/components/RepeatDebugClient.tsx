"use client";

const installClientRepeatDebugger = () => {
  if (process.env.NODE_ENV !== "development") return;

  const globalAny = globalThis as typeof globalThis & {
    __oelrixRepeatDebugClient?: boolean;
  };

  if (globalAny.__oelrixRepeatDebugClient) return;
  globalAny.__oelrixRepeatDebugClient = true;

  const originalRepeat = String.prototype.repeat;
  String.prototype.repeat = function repeatPatched(count: number) {
    if (count < 0) {
      // eslint-disable-next-line no-console
      console.error("Client String.repeat called with negative count", {
        count,
        value: String(this),
      });
      // eslint-disable-next-line no-console
      console.error(new Error("repeat stack").stack);
    }
    return originalRepeat.call(this, count);
  };
};

installClientRepeatDebugger();

export default function RepeatDebugClient() {
  return null;
}

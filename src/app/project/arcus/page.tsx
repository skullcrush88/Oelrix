"use client";

import ArcusApp from "../../../../project/Arcus/src/App";

export default function ArcusPage() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400&display=swap");
        .arcus-native-shell {
          font-family: "Inter", sans-serif;
          color: #1a1a1a;
          background: #ffffff;
        }
        .arcus-native-shell h1,
        .arcus-native-shell h2,
        .arcus-native-shell h3,
        .arcus-native-shell h4,
        .arcus-native-shell h5,
        .arcus-native-shell h6 {
          font-family: "Playfair Display", serif;
        }
      `}</style>
      <div className="arcus-native-shell">
        <ArcusApp />
      </div>
    </>
  );
}

"use client";

import ContactSection from "../../components/ContactSection";
import CustomCursor from "../../components/CustomCursor";
import SmoothScroll from "../../components/SmoothScroll";

export default function Contact() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <ContactSection includeNav />
      </SmoothScroll>
    </>
  );
}

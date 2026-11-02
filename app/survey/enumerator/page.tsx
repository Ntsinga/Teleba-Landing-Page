import type { Metadata } from "next";
import { SurveyShell } from "../SurveyShell";

export const metadata: Metadata = {
  title: "Agent Survey for Enumerators",
  description: "Collect Teleba agent survey responses in person.",
  alternates: {
    canonical: "https://teleba.io/survey/enumerator",
  },
  robots: { index: false, follow: false },
};

export default function EnumeratorSurveyPage() {
  return (
    <SurveyShell
      eyebrow="Enumerator survey"
      title="Collect an agent survey"
      intro="Use this page for in-person interviews. Your name is remembered on this phone, so you only type it once."
      steps={[
        <span key="start">
          At the business, tap{" "}
          <strong className="text-foreground">Start survey</strong> and allow
          location. Your name is filled in for you.
        </span>,
        "Go through the questions with the agent.",
        <span key="next">
          After submitting, tap{" "}
          <strong className="text-foreground">New survey</strong> at the top to
          start with the next agent.
        </span>,
      ]}
      enumerator
    />
  );
}

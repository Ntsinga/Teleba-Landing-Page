import type { Metadata } from "next";
import { SurveyShell } from "./SurveyShell";

export const metadata: Metadata = {
  title: "Agent Survey",
  description:
    "Help us build better tools for mobile money and banking agents in Uganda. The survey takes about 15 minutes.",
  alternates: {
    canonical: "https://teleba.io/survey",
  },
  robots: { index: false, follow: false },
};

export default function SurveyPage() {
  return (
    <SurveyShell
      eyebrow="Agent survey"
      title="Help us build better tools for agents"
      intro="Tell us how you started your agent business and how you run it day to day. It takes about 15 minutes."
      steps={[
        <span key="start">
          Tap <strong className="text-foreground">Start survey</strong> and
          allow location when your phone asks. We record where the business is
          so we can see which areas we have reached.
        </span>,
        "Answer the questions. We never ask for exact earnings, balances or losses.",
        "Your answers are confidential and only used to improve Teleba.",
      ]}
    />
  );
}

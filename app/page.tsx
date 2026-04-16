"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  personalityOrder,
  personalityProfiles,
  quizQuestions,
  type PersonalityKey,
} from "@/lib/quiz-data";

type Stage = "intro" | "quiz" | "results";

type ScoreMap = Record<PersonalityKey, number>;

const emptyScores = (): ScoreMap => ({
  boldExplorer: 0,
  smoothOperator: 0,
  cozyClassic: 0,
  wildCard: 0,
  brightIdealist: 0,
  craftPurist: 0,
});

const percentage = (score: number, total: number) => {
  if (!total) return 0;
  return Math.round((score / total) * 100);
};

export default function Home() {
  const [stage, setStage] = useState<Stage>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState<ScoreMap>(emptyScores);
  const [copied, setCopied] = useState(false);
  const [lineupSaved, setLineupSaved] = useState(false);

  const totalQuestions = quizQuestions.length;
  const progress = ((questionIndex + (stage === "results" ? 1 : 0)) / totalQuestions) * 100;
  const currentQuestion = quizQuestions[questionIndex];

  const rankedResults = useMemo(() => {
    return personalityOrder
      .map((key) => {
        const profile = personalityProfiles[key];
        return {
          ...profile,
          score: scores[key],
          percentage: percentage(scores[key], totalQuestions),
        };
      })
      .sort((a, b) => b.score - a.score);
  }, [scores, totalQuestions]);

  const primaryResult = rankedResults[0];

  const allCoffeeOptions = useMemo(() => {
    const seen = new Set<string>();

    return personalityOrder.flatMap((key) =>
      personalityProfiles[key].coffees.filter((coffee) => {
        if (seen.has(coffee.name)) return false;
        seen.add(coffee.name);
        return true;
      }),
    );
  }, []);

  const additionalCoffeeOptions = useMemo(() => {
    const primaryCoffeeNames = new Set(primaryResult.coffees.map((coffee) => coffee.name));

    return allCoffeeOptions.filter((coffee) => !primaryCoffeeNames.has(coffee.name));
  }, [allCoffeeOptions, primaryResult.coffees]);

  const handleStart = () => {
    setStage("quiz");
    setQuestionIndex(0);
    setScores(emptyScores());
    setCopied(false);
    setLineupSaved(false);
  };

  const handleAnswer = (key: PersonalityKey) => {
    setScores((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));

    if (questionIndex === totalQuestions - 1) {
      setStage("results");
      return;
    }

    setQuestionIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setStage("intro");
    setQuestionIndex(0);
    setScores(emptyScores());
    setCopied(false);
    setLineupSaved(false);
  };

  const handleShare = async () => {
    const summary = `I got ${primaryResult.name} on the NovaBrew Coffee Taste Profile Quiz. My top coffee match is ${primaryResult.coffees[0].name}.`;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSaveLineup = async () => {
    const lineup = [
      `NovaBrew Coffee Lineup`,
      `Primary personality: ${primaryResult.name}`,
      "",
      "Top matches:",
      ...primaryResult.coffees.map(
        (coffee) => `- ${coffee.name}: ${coffee.description}`,
      ),
      "",
      "More to explore:",
      ...additionalCoffeeOptions.map(
        (coffee) => `- ${coffee.name}: ${coffee.description}`,
      ),
    ].join("\n");

    try {
      await navigator.clipboard.writeText(lineup);
      setLineupSaved(true);
      window.setTimeout(() => setLineupSaved(false), 2200);
    } catch {
      setLineupSaved(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,213,184,0.85),_transparent_30%),radial-gradient(circle_at_90%_15%,_rgba(246,185,109,0.5),_transparent_20%),radial-gradient(circle_at_90%_90%,_rgba(124,63,84,0.14),_transparent_22%),linear-gradient(180deg,_#fffaf3_0%,_#fde9d8_100%)] text-[#4a2e22]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="mb-8 flex items-center justify-between rounded-full bg-white/70 px-4 py-3 shadow-sm ring-1 ring-[#c96a4d]/10 backdrop-blur sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c96a4d]">
              NovaBrew
            </p>
            <p className="text-sm text-[#7d5a49]">Coffee Taste Profile Quiz</p>
          </div>
          <div className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-medium text-[#7c3f54]">
            {stage === "intro"
              ? "Ready to discover your match?"
              : stage === "quiz"
                ? `Question ${questionIndex + 1} of ${totalQuestions}`
                : "Results are in"}
          </div>
        </header>

        {stage !== "intro" ? (
          <div className="mb-5">
            <div className="h-3 overflow-hidden rounded-full bg-white/60 ring-1 ring-[#c96a4d]/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#f6b96d] via-[#c96a4d] to-[#7c3f54] transition-all duration-500"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        ) : null}

        <section className="flex flex-1">
          <div className="relative overflow-hidden rounded-[34px] border border-white/60 bg-white/75 p-6 shadow-[0_24px_60px_rgba(113,66,39,0.14)] backdrop-blur sm:p-8 lg:p-10">
            <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-[#f6b96d]/20 blur-2xl" />
            <div className="absolute bottom-[-50px] left-[-30px] h-36 w-36 rounded-full bg-[#7c3f54]/10 blur-2xl" />

            {stage === "intro" ? (
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div className="space-y-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-semibold text-[#c96a4d]">
                    ☕ Built from your NovaBrew strategy work
                  </span>
                  <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                    Discover the coffee personality behind your perfect cup.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-[#7d5a49] sm:text-xl">
                    This playful NovaBrew experience turns your vibe, ritual, and taste energy
                    into a personalized coffee match. Seven questions. Six personalities. One
                    highly shareable result.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <FeatureCard
                    title="Lifestyle-led"
                    copy="Questions feel like a premium personality quiz, not a product survey."
                    icon="✨"
                  />
                  <FeatureCard
                    title="Personalized results"
                    copy="You get a full percentage breakdown plus a coffee match you can act on."
                    icon="📈"
                  />
                  <FeatureCard
                    title="Built to share"
                    copy="Playful visuals, icons, and result cards that feel portfolio-ready."
                    icon="🎉"
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={handleStart}
                    className="inline-flex items-center justify-center rounded-full bg-[#c96a4d] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#c96a4d]/25 transition hover:-translate-y-0.5 hover:bg-[#b95d41]"
                  >
                    Start the quiz
                  </button>
                  <p className="text-sm leading-6 text-[#7d5a49]">
                    No coding to use it. No setup for your subscribers. Just a more personal first
                    impression from day one.
                  </p>
                </div>
              </div>
            ) : null}

            {stage === "quiz" && currentQuestion ? (
              <div key={currentQuestion.id} className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#c96a4d]">
                      Question {questionIndex + 1}
                    </p>
                    <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                      {currentQuestion.prompt}
                    </h2>
                  </div>
                  <div className="hidden rounded-3xl bg-[#fff4ea] px-4 py-3 text-right sm:block">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7d5a49]">
                      Progress
                    </p>
                    <p className="text-lg font-semibold text-[#4a2e22]">
                      {questionIndex + 1}/{totalQuestions}
                    </p>
                  </div>
                </div>

                <div className="mb-6 overflow-hidden rounded-[28px] border border-[#c96a4d]/10 bg-[#fff7ef] shadow-sm">
                  <img
                    src={currentQuestion.imageUrl}
                    alt={currentQuestion.imageAlt}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                </div>

                <div className="grid gap-4">
                  {currentQuestion.options.map((option) => {
                    const profile = personalityProfiles[option.personality];

                    return (
                      <button
                        key={`${currentQuestion.id}-${option.personality}`}
                        type="button"
                        onClick={() => handleAnswer(option.personality)}
                        className="group grid grid-cols-[60px_1fr] items-center gap-4 rounded-[26px] border border-[#c96a4d]/12 bg-[#fffaf5] p-4 text-left shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#c96a4d]/40 hover:bg-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c96a4d]/40 sm:grid-cols-[72px_1fr] sm:p-5"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#fff0de] to-[#ffe3ca] text-2xl shadow-inner shadow-white/60 sm:h-16 sm:w-16 sm:text-3xl">
                          {profile.icon}
                        </div>
                        <div>
                          <p className="text-lg font-semibold leading-7 text-[#4a2e22] transition group-hover:text-[#7c3f54]">
                            {option.text}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {stage === "results" ? (
              <div className="relative z-10 flex h-full flex-col gap-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[28px] bg-[#fffaf5] p-5 shadow-sm ring-1 ring-[#c96a4d]/10 sm:p-6">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-semibold text-[#c96a4d]">
                        Your top result
                      </span>
                      <span className="rounded-full bg-[#f9efe7] px-4 py-2 text-sm font-medium text-[#7c3f54]">
                        {primaryResult.percentage}% match
                      </span>
                    </div>

                    <div className="mb-6 overflow-hidden rounded-[26px] border border-[#c96a4d]/10 bg-[#fffdf9]">
                      <Image
                        src={primaryResult.image}
                        alt={primaryResult.name}
                        width={1200}
                        height={720}
                        className="h-auto w-full"
                        priority
                      />
                    </div>

                    <h2 className="text-3xl font-bold sm:text-4xl">{primaryResult.name}</h2>
                    <p className="mt-2 text-base font-medium text-[#c96a4d]">{primaryResult.vibe}</p>
                    <p className="mt-4 text-base leading-8 text-[#7d5a49]">
                      {primaryResult.description}
                    </p>

                    <div className="mt-6 rounded-[24px] bg-gradient-to-r from-[#fff1e4] to-[#ffe0ca] p-5 ring-1 ring-[#c96a4d]/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c96a4d]">
                        Top coffee match
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-[#4a2e22]">
                        {primaryResult.coffees[0].name}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#7d5a49]">
                        {primaryResult.coffees[0].description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={handleShare}
                        className="rounded-full bg-[#7c3f54] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#693347]"
                      >
                        {copied ? "Result copied" : "Copy my result"}
                      </button>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="rounded-full border border-[#c96a4d]/20 bg-white px-5 py-3 text-sm font-semibold text-[#4a2e22] transition hover:-translate-y-0.5 hover:border-[#c96a4d]/50 hover:bg-[#fff7ef]"
                      >
                        Retake quiz
                      </button>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-[28px] bg-white/90 p-5 shadow-sm ring-1 ring-[#c96a4d]/10 sm:p-6">
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c96a4d]">
                            Recommended for you
                          </p>
                          <h3 className="mt-2 text-3xl font-bold">Your NovaBrew lineup</h3>
                        </div>
                        <span className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-medium text-[#7c3f54]">
                          Built from your strongest signals
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#7d5a49]">
                        Instead of a generic subscription, these are the coffees that best fit your result right now.
                      </p>
                      <div className="mt-5 grid gap-4">
                        <div className="rounded-[26px] bg-gradient-to-br from-[#7c3f54] via-[#91506a] to-[#c96a4d] p-6 text-white shadow-[0_18px_40px_rgba(124,63,84,0.24)]">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffd5b8]">
                            Best first shipment
                          </p>
                          <h4 className="mt-3 text-3xl font-bold">{primaryResult.coffees[0].name}</h4>
                          <p className="mt-3 max-w-xl text-sm leading-7 text-[#fff1e8]">
                            {primaryResult.coffees[0].description}
                          </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {primaryResult.coffees.slice(1).map((coffee) => (
                            <div
                              key={coffee.name}
                              className="rounded-[24px] bg-[#fff7ef] p-5 ring-1 ring-[#c96a4d]/10"
                            >
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c96a4d]">
                                Also a fit
                              </p>
                              <p className="mt-2 text-xl font-semibold text-[#4a2e22]">{coffee.name}</p>
                              <p className="mt-2 text-sm leading-7 text-[#7d5a49]">
                                {coffee.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[28px] bg-white/85 p-5 shadow-sm ring-1 ring-[#c96a4d]/10 sm:p-6">
                      <h3 className="text-2xl font-bold">Full personality mix</h3>
                      <p className="mt-2 text-sm leading-6 text-[#7d5a49]">
                        Because your taste is more nuanced than one label.
                      </p>

                      <div className="mt-5 space-y-4">
                        {rankedResults.map((result) => (
                          <div key={result.key}>
                            <div className="mb-2 flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fff1e4] text-lg">
                                  {result.icon}
                                </span>
                                <span className="font-medium">{result.name}</span>
                              </div>
                              <span className="text-sm font-semibold text-[#7d5a49]">
                                {result.percentage}%
                              </span>
                            </div>
                            <div className="h-3 overflow-hidden rounded-full bg-[#fde5d2]">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: `${result.percentage}%`,
                                  backgroundColor: result.accent,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] bg-white/85 p-5 shadow-sm ring-1 ring-[#c96a4d]/10 sm:p-6">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c96a4d]">
                        More to explore
                      </p>
                      <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                        Other NovaBrew flavors you might like later
                      </h3>
                    </div>
                    <span className="rounded-full bg-[#fff1e4] px-4 py-2 text-sm font-medium text-[#7c3f54]">
                      Beyond your top match
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-[#7d5a49]">
                    Your quiz result points to the best starting coffees, but NovaBrew can still
                    show the wider lineup so subscribers feel there is more to discover over time.
                  </p>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={handleSaveLineup}
                      className="rounded-full bg-[#c96a4d] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b95d41]"
                    >
                      {lineupSaved ? "Coffee lineup saved" : "Save my coffee lineup"}
                    </button>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {additionalCoffeeOptions.map((coffee) => (
                      <div
                        key={coffee.name}
                        className="rounded-[24px] bg-[#fffaf5] p-5 ring-1 ring-[#c96a4d]/10"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c96a4d]">
                          Explore later
                        </p>
                        <p className="mt-2 text-xl font-semibold text-[#4a2e22]">{coffee.name}</p>
                        <p className="mt-2 text-sm leading-7 text-[#7d5a49]">
                          {coffee.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}

function FeatureCard({
  title,
  copy,
  icon,
}: {
  title: string;
  copy: string;
  icon: string;
}) {
  return (
    <div className="rounded-[28px] bg-[#fffaf5] p-5 shadow-sm ring-1 ring-[#c96a4d]/10">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1e4] text-xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#7d5a49]">{copy}</p>
    </div>
  );
}

import { guideFiles, notebookFiles, outputFiles } from "./legacyCatalog";

export const coreTracks = [
  {
    slug: "excel",
    stage: "Stage 1",
    title: "Excel Foundations",
    level: "Beginner",
    duration: "3 to 5 days",
    summary:
      "Learn cleaning, formulas, sorting, filters, charts, and pivot tables on business-friendly datasets.",
    guideFile: "excel-data-analysis-guide.html",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    skills: [
      "Understand rows, columns, and clean worksheet structure",
      "Use formulas without getting lost in syntax",
      "Summarize data with pivots and charts",
    ],
    datasets: [
      "excel-project-sales-raw.csv",
      "excel-project-region-targets.csv",
      "excel-project-sales-large.csv",
    ],
    extras: ["data-analysis-quick-revision.html"],
  },
  {
    slug: "sql",
    stage: "Stage 2",
    title: "SQL For Analysis",
    level: "Beginner to Intermediate",
    duration: "1 week",
    summary:
      "Move from simple SELECT statements to joins, CTEs, and window functions with practical tables.",
    guideFile: "sql-data-analysis-guide.html",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    skills: [
      "Write clear filtering, grouping, and joining queries",
      "Answer business questions from multiple tables",
      "Practice analytical SQL patterns used in interviews",
    ],
    datasets: [
      "sql-practice-users.csv",
      "sql-practice-orders.csv",
      "sql-practice-products.csv",
      "sql-practice-events.csv",
      "sql-practice-subscriptions.csv",
    ],
    notebook: "sql-data-analysis-guide.ipynb",
    output: "sql-data-analysis-guide-output.html",
    extras: ["sql-interview-cheat-sheet.html", "data-analyst-practice-problems-30.html"],
  },
  {
    slug: "python",
    stage: "Stage 3",
    title: "Python Data Workflows",
    level: "Intermediate",
    duration: "1 week",
    summary:
      "Use pandas and NumPy to clean, join, aggregate, and explore larger datasets with repeatable workflows.",
    guideFile: "python-data-analysis-guide.html",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    skills: [
      "Load CSV files and inspect them confidently",
      "Clean messy values and group data for reporting",
      "Turn notebook work into reusable analysis habits",
    ],
    datasets: [
      "python-sales.csv",
      "python-users.csv",
      "python-transactions.csv",
      "python-products.csv",
    ],
    notebook: "python-data-analysis-guide.ipynb",
    output: "python-data-analysis-guide-output.html",
    extras: ["data-analysis-projects.html"],
  },
  {
    slug: "powerbi",
    stage: "Stage 4",
    title: "Power BI Dashboards",
    level: "Intermediate",
    duration: "4 to 6 days",
    summary:
      "Model data, build measures, and design dashboards that explain what changed and why.",
    guideFile: "powerbi-data-analysis-guide.html",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    skills: [
      "Connect data sources and shape them in Power Query",
      "Create simple measures before moving to advanced DAX",
      "Build readable reports for real decision-making",
    ],
    datasets: ["excel-project-sales-large.csv", "sql-finance-monthly-budget.csv"],
    extras: ["data-analyst-master-cheat-sheet-2.html"],
  },
];

export const supportGuides = [
  {
    slug: "interview",
    title: "Interview Preparation",
    summary: "Turn your study into answers, stories, and portfolio talking points.",
    guideFile: "data-analyst-interview-preparation-guide.html",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "projects",
    title: "Project Ideas",
    summary: "Pick realistic projects that show business thinking, not just tool usage.",
    guideFile: "data-analysis-projects.html",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "revision",
    title: "Quick Revision",
    summary: "Use a shorter refresher when you need the main concepts back fast.",
    guideFile: "data-analysis-quick-revision.html",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cheat",
    title: "Master Cheat Sheet",
    summary: "Keep one compact reference nearby while practicing across tools.",
    guideFile: "data-analyst-master-cheat-sheet.html",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const quickStartSteps = [
  {
    title: "Start with one track",
    text: "Do not open everything at once. Finish Excel or SQL first, then stack the next skill.",
  },
  {
    title: "Practice on the real files",
    text: "Each track points to datasets, notebooks, or outputs so the learning stays hands-on.",
  },
  {
    title: "Build one small proof",
    text: "Save one cleaned sheet, one useful query, or one notebook summary after each track.",
  },
  {
    title: "Finish with interview prep",
    text: "Once the tools feel familiar, use the projects and interview guides to package your progress.",
  },
];

export const featuredResources = [
  {
    title: "Notebook Learning",
    description: "Use guided notebooks when you want to see the thinking step by step.",
    href: "/notebooks",
  },
  {
    title: "Practice Tools",
    description: "Open the CSV viewer, notebook viewer, and web practice lab in one place.",
    href: "/tools",
  },
  {
    title: "Legacy Library",
    description: "Keep the older hub available while you move into the cleaner roadmap.",
    href: "/legacy",
  },
];

export const toolCatalog = [
  {
    title: "Notebook Viewer",
    description: "Open notebooks in the browser when you want a quick read without Jupyter.",
    href: "/notebook-viewer.html",
    previewSrc: "/notebook-viewer.html",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Practice Lab",
    description: "Use the in-browser lab for quick experiments and practice sessions.",
    href: "/web-practice-lab.html",
    previewSrc: "/web-practice-lab.html",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "CSV Viewer",
    description: "Inspect CSV files fast when you need a quick look before deeper analysis.",
    href: "/csv-viewer.html",
    previewSrc: "/csv-viewer.html",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const datasetGroups = [
  {
    title: "Excel Practice Files",
    files: [
      "excel-project-sales-raw.csv",
      "excel-project-region-targets.csv",
      "excel-project-sales-large.csv",
    ],
  },
  {
    title: "SQL Practice Files",
    files: [
      "sql-practice-users.csv",
      "sql-practice-orders.csv",
      "sql-practice-products.csv",
      "sql-practice-events.csv",
      "sql-practice-subscriptions.csv",
      "sql-finance-customers.csv",
      "sql-finance-invoices.csv",
      "sql-finance-payments.csv",
      "sql-finance-monthly-budget.csv",
    ],
  },
  {
    title: "Python Practice Files",
    files: [
      "python-sales.csv",
      "python-users.csv",
      "python-transactions.csv",
      "python-products.csv",
    ],
  },
];

export const notebookDetails = notebookFiles.map((file) => ({
  file,
  title:
    file === "python-data-analysis-guide.ipynb"
      ? "Python notebook walkthrough"
      : "SQL notebook walkthrough",
  description:
    file === "python-data-analysis-guide.ipynb"
      ? "Step through pandas-based analysis on practice datasets."
      : "Follow SQL practice examples and reasoning in notebook form.",
}));

export const outputDetails = outputFiles.map((file) => ({
  file,
  title: toTitle(file),
}));

export const guideLibrary = guideFiles.map((file) => {
  const match =
    [...coreTracks, ...supportGuides].find((item) => item.guideFile === file) ?? null;

  return {
    slug: match?.slug ?? file.replace(/\.html$/i, ""),
    title: match?.title ?? toTitle(file),
    summary: match?.summary ?? "Open the original guide file from the learning library.",
    guideFile: file,
    image:
      match?.image ??
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    isCore: Boolean(match && "stage" in match),
  };
});

export function toTitle(file) {
  return file
    .replace(/\.(html|ipynb|csv)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getGuideBySlug(slug) {
  const directMatch = guideLibrary.find((guide) => guide.slug === slug);
  if (directMatch) return directMatch;

  return guideLibrary.find((guide) => guide.guideFile === slug) ?? null;
}

export function getTrackBySlug(slug) {
  return coreTracks.find((track) => track.slug === slug) ?? null;
}

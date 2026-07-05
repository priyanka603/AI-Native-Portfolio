// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
// NOTE: several image paths below are placeholders reused from the original
// template — replace them with your own screenshots when you have them.
const PROJECT_CONTENT = [
  {
    title: 'IrishPath',
    tagline: 'An agentic AI navigator for Irish immigration.',
    description:
      'IrishPath is an agentic AI system that helps people navigate Irish immigration. A supervisor agent routes queries to specialist agents for RAG-based factual answers, checklist generation, and document explanation. Every output is structured and auditable, and the whole system ships as a containerised stack built to production standards — from design through to deployment readiness.',
    techStack: [
      'LangGraph',
      'Azure OpenAI',
      'FAISS',
      'sentence-transformers',
      'FastAPI',
      'PostgreSQL',
      'React',
      'Docker Compose',
      'GitHub Actions',
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/priyanka603/Immigration-Navigator',
      },
    ],
    images: [
      { src: '/projects/irishpath/home.png', alt: 'IrishPath home page' },
      { src: '/projects/irishpath/home-working.png', alt: 'IrishPath home page answering an immigration question' },
      { src: '/projects/irishpath/checklist.png', alt: 'IrishPath checklist generator page' },
      { src: '/projects/irishpath/checklist-working.png', alt: 'IrishPath generating a personalised immigration checklist' },
      { src: '/projects/irishpath/docs.png', alt: 'IrishPath document explanation page' },
      { src: '/projects/irishpath/docs-working.png', alt: 'IrishPath explaining an immigration document' },
    ],
  },
  {
    title: 'Compliance Q&A Assistant',
    tagline: 'Every answer backed by a citation. No hallucinated policy.',
    description:
      'A RAG-based compliance assistant that answers questions over public regulatory and governance documents using Pinecone as the vector store. Every answer returns direct citations to the source document and section. It includes a retrieval evaluation harness measuring precision and recall across a test set of policy questions, comparing baseline and tuned retrieval configurations to improve answer relevance.',
    techStack: [
      'Python',
      'LangChain',
      'Pinecone',
      'OpenAI API',
      'FastAPI',
      'Citation Retrieval',
      'Evaluation Metrics',
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/priyanka603/Compliance-Policy-Document-Q-A-Assistant',
      },
    ],
    images: [
      { src: '/projects/qa-agent/home.png', alt: 'Compliance Q&A Assistant home page' },
      { src: '/projects/qa-agent/working.png', alt: 'Compliance Q&A Assistant answering with citations to source documents' },
      { src: '/projects/qa-agent/eval-harness.png', alt: 'Retrieval evaluation harness measuring precision and recall' },
    ],
  },
  {
    title: 'Azure DevOps Backlog Automation',
    tagline: 'Multi-agent AI that plans your sprint before you do.',
    description:
      'A production AI platform built at Techdome that automates Azure DevOps backlog creation. Multiple agents built with Azure OpenAI and LangGraph plan, call tools, and self-correct to generate structured backlog items automatically — with Azure Cosmos DB for stateful agent memory, Azure Service Bus for event-driven agent communication, and an Azure Bot Framework conversational interface the team used daily. Deployed and maintained with CI/CD via Azure DevOps.',
    techStack: [
      'Azure OpenAI',
      'LangGraph',
      'Azure Cosmos DB',
      'Azure Service Bus',
      'Azure Bot Framework',
      'Azure DevOps (CI/CD)',
      'Python',
    ],
    date: 'Jul 2024 – Feb 2026',
    links: [],
    images: [
      // TODO: replace with a real screenshot or architecture diagram (mind the NDA)
      { src: '/projects/cwt-dashboard.png', alt: 'Multi-agent platform preview placeholder' },
    ],
  },
  {
    title: 'AI Native Portfolio',
    tagline: 'Meet my AI before you meet me.',
    description:
      'Static portfolios are boring. Mine talks back. An AI-native portfolio where an AI avatar answers your questions about me in real time — my skills, projects, experience, and how to reach me.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'AI SDK',
      'Node.js',
      'Vercel',
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub Profile',
        url: 'https://github.com/priyanka603', // TODO: replace with your portfolio repo URL
      },
    ],
    images: [
      { src: '/projects/portfolio/home.png', alt: 'Homepage of the AI Native Portfolio' },
      { src: '/projects/portfolio/chat.png', alt: 'The AI answering questions about Priyanka in the chat interface' },
    ],
  },
  {
    title: 'Production Data Pipeline & BI',
    tagline: '1M+ records, 40% faster reporting.',
    description:
      'As a Data Analyst Intern at Techdome, I processed over 1 million production records using Python and SQL, improving dataset reliability for downstream AI pipelines. I built Power BI dashboards and optimised SQL queries, reducing reporting latency by 40% and improving data reliability by 30%.',
    techStack: [
      'Python',
      'SQL',
      'Power BI',
      'Data Cleaning',
      'Dashboard Design',
    ],
    date: 'Jun 2022 – Aug 2022',
    links: [],
    images: [
      // TODO: replace with real dashboard screenshots
      { src: '/projects/Zomato_Interactive Zomato Dashboard.png', alt: 'BI dashboard preview placeholder' },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Tagline — shown only when available */}
      {projectData.tagline && (
        <p className="font-sans text-base font-medium tracking-wide text-neutral-500 dark:text-neutral-400 italic">
          {projectData.tagline}
        </p>
      )}

      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  // 1. IrishPath
  {
    category: 'Agentic AI System',
    title: 'IrishPath',
    src: '/projects/irishpath/logo.jpg',
    coverSrc: '/projects/irishpath/logo.jpg',
    content: (
      <ProjectContent project={{ title: 'IrishPath' }} />
    ),
  },
  // 2. Compliance Q&A Assistant
  {
    category: 'RAG & Evaluation',
    title: 'Compliance Q&A Assistant',
    shortTitle: 'Compliance Q&A',
    src: '/projects/qa-agent/logo.jpg',
    coverSrc: '/projects/qa-agent/logo.jpg',
    content: (
      <ProjectContent project={{ title: 'Compliance Q&A Assistant' }} />
    ),
  },
  // 3. Azure DevOps Backlog Automation
  {
    category: 'Multi-Agent Platform',
    title: 'Azure DevOps Backlog Automation',
    shortTitle: 'Backlog Automation',
    src: '/projects/backlog/logo.jpg',
    coverSrc: '/projects/backlog/logo.jpg',
    content: (
      <ProjectContent project={{ title: 'Azure DevOps Backlog Automation' }} />
    ),
  },
  // 4. AI Native Portfolio
  {
    category: 'Interactive AI Portfolio',
    title: 'AI Native Portfolio',
    src: '/projects/portfolio/logo.jpg',
    coverSrc: '/projects/portfolio/logo.jpg',
    content: (
      <ProjectContent project={{ title: 'AI Native Portfolio' }} />
    ),
  },
  // 5. Production Data Pipeline & BI
  {
    category: 'Data Analytics & BI',
    title: 'Production Data Pipeline & BI',
    shortTitle: 'Data Pipeline & BI',
    src: '/projects/Zomato_Interactive Zomato Dashboard.png',
    coverSrc: '/projects/Zomato_coverpage.png',
    content: (
      <ProjectContent project={{ title: 'Production Data Pipeline & BI' }} />
    ),
  },
];

import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  videoUrl: string;
  relatedTool?: { label: string; tab: string };
}

const caseStudies: CaseStudy[] = [
  {
    title: "Iconic Fusion",
    problem:
      "Manual tracking of riders’ attendance and remittance was slow and error-prone.",
    solution:
      "Tatua built an automation that integrates the Bolt API with their bank to track discrepancies and added a WhatsApp registration chatbot.",
    impact:
      "Significant time savings, letting them focus on customer support and expansion.",
    videoUrl: "/videos/iconic-fusion.mp4",
    relatedTool: { label: "WhatsApp Follow-up Calculator", tab: "whatsapp" },
  },
  {
    title: "Tinlip Autocare",
    problem:
      "Manual WhatsApp reminders for policy renewals and payment tracking were tedious.",
    solution:
      "Tatua developed an automation that reminds users, tracks payments, and schedules future reminders automatically.",
    impact: "Eliminated repetitive admin tasks and improved customer experience.",
    videoUrl: "/videos/tinlip-autocare.mp4",
    relatedTool: { label: "WhatsApp Follow-up Calculator", tab: "whatsapp" },
  },
  {
    title: "DrinkSwig & Organic Bistro",
    problem:
      "Collecting event feedback and reconciling M-Pesa payments was inconsistent.",
    solution:
      "Tatua’s automation used QR payments, automated bookkeeping, and WhatsApp feedback collection.",
    impact: "Higher engagement and returning customers after events.",
    videoUrl: "/videos/drinkswig.mp4",
    relatedTool: { label: "Bookkeeping Calculator", tab: "bookkeeping" },
  },
  {
    title: "Noist Apparel, Odamo Wear & Satin Revolution",
    problem:
      "Frequent daily transactions for materials, tailors, and clients were manually recorded in notebooks, consuming time and causing errors.",
    solution:
      "Tatua created a voice-based system where entrepreneurs describe transactions via WhatsApp or Telegram, which are then logged automatically into categorized Google Sheets.",
    impact:
      "Simplified bookkeeping through voice automation and real-time financial organization.",
    videoUrl: "/videos/noistapparel.mp4",
    relatedTool: { label: "Bookkeeping Calculator", tab: "bookkeeping" },
  },
  {
    title: "LinkedIn Automations",
    problem:
      "Many professionals struggled to consistently post or represent their personal brands on LinkedIn.",
    solution:
      "Tatua developed an AI assistant that learns user preferences, curates relevant content, and automatically drafts posts to maintain professional presence.",
    impact:
      "Enabled business leaders to stay visible and engaged on LinkedIn without manual effort.",
    videoUrl: "/videos/linkedinautomations.mp4",
    relatedTool: { label: "Social Media Calculator", tab: "social-media" },
  },
  {
    title: "GHR Garage — Smart Surveillance",
    problem:
      "Manually counting vehicles serviced per day was inaccurate and time-consuming, making it impossible to verify staff claims or track throughput.",
    solution:
      "Tatua deployed a computer vision model on existing CCTV footage that automatically counts vehicles entering and exiting, logging results in real time.",
    impact:
      "Owners can now verify daily vehicle counts remotely — eliminating guesswork and enabling data-driven staffing decisions.",
    videoUrl: "/videos/ghr-garage.mp4",
    relatedTool: { label: "Smart Surveillance Calculator", tab: "surveillance" },
  },
];

const CaseStudies = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-24 bg-background text-foreground w-full transition-colors duration-500">
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: var(--foreground);
            background: var(--accent);
            backdrop-filter: blur(8px);
            border: 1px solid var(--border);
            width: 46px;
            height: 46px;
            border-radius: 50%;
            transition: all 0.25s ease-in-out;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: var(--accent);
            opacity: 0.8;
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              width: 36px;
              height: 36px;
            }
          }
        `}
      </style>

      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent border border-border text-muted-foreground text-sm font-medium backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          Client Impact
        </span>
      </div>
      <h2 className="text-center text-4xl font-bold mb-4 text-foreground">
        Case Studies
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-muted-foreground">
        Real businesses, real transformations — powered by Tatua.
      </p>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="rounded-2xl"
        >
          {caseStudies.map((study, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl shadow-sm bg-card border border-border">
                <video
                  src={study.videoUrl}
                  controls
                  className="rounded-xl w-full md:w-1/2 h-[300px] object-cover border border-border shadow-sm"
                />
                <div className="text-left w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    {study.title}
                  </h3>
                  <p className="mb-2 text-muted-foreground">
                    <strong className="text-foreground">Problem:</strong> {study.problem}
                  </p>
                  <p className="mb-2 text-muted-foreground">
                    <strong className="text-foreground">Solution:</strong> {study.solution}
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    <strong className="text-foreground">Impact:</strong> {study.impact}
                  </p>
                  {study.relatedTool && (
                    <Link
                      to={`/tools?tab=${study.relatedTool.tab}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground border border-border bg-accent/50 hover:bg-accent px-4 py-2 rounded-full transition-colors"
                    >
                      Try the {study.relatedTool.label} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CaseStudies;

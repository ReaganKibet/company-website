import { Briefcase } from 'lucide-react';

const JobsPage = () => {
  return (
    <div className="space-y-8 min-h-screen px-6 bg-background text-foreground transition-colors duration-500">
      <div className='mt-20'>
        <h1 className="text-3xl font-bold text-foreground font-playfair">Jobs</h1>
        <p className="text-muted-foreground mt-2 font-montserrat">
          Find AI-related job opportunities and talent in Kenya and beyond.
        </p>
      </div>
      
      <div className="bg-card border border-border rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-md">
        <Briefcase className="h-16 w-16 text-primary mb-4" />
        <h2 className="text-xl font-semibold mb-2 text-foreground font-playfair">Job Board Coming Soon</h2>
        <p className="text-muted-foreground max-w-md text-sm font-montserrat">
          We're building a specialized job board for professionals and young talents. Check back soon to post or find opportunities.
        </p>
      </div>
    </div>
  );
};

export default JobsPage;

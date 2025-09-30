import { Home, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-16 h-16 rounded-full bg-primary/30 blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 rounded-full bg-primary/20 blur-xl"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="relative mb-8">
            <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-gradient-to-br from-primary via-primary/80 to-primary/50 bg-clip-text leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-primary/10 blur-sm leading-none select-none">
              404
            </div>
          </div>

          <div className="animate-fade-in-delay-1 space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the digital cosmos. 
              Let's get you back on track!
            </p>
          </div>

          <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/"
              className={cn(
                "cosmic-button flex items-center gap-2 text-lg px-8 py-3",
                "shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              )}
            >
              <Home size={20} />
              Back to Home
            </a>
            
            <button
              onClick={() => window.history.back()}
              className={cn(
                "flex items-center gap-2 text-lg px-8 py-3 rounded-full",
                "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                "transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              )}
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          <div className="animate-fade-in-delay-3 mt-12">
            <div className="inline-flex items-center gap-2 text-foreground/50 text-sm">
              <span>Error Code: 404 - Lost in Space</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

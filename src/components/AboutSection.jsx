import { Code, PenTool } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text / Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Programmer & Creative Editor
            </h3>

            <p className="text-muted-foreground">
              I specialize in building modern web applications and crafting
              engaging content. From coding dynamic websites to creating and
              editing visual or written materials, I combine technical skill
              with creativity.
            </p>

            <p className="text-muted-foreground">
              Whether programming a new feature or editing media for maximum
              impact, I enjoy solving problems and bringing ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
  <a href="#contact" className="cosmic-button">
    Get In Touch
  </a>

  <a
    href="../../public/hitam dan putih modern cv resume riwayat hidup_20250427_134330_0000.pdf"
    download="Muhamad_Riffa_CV.pdf"
    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    Download CV
  </a>
</div>

          </div>

          {/* Roles / Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Programmer</h4>
                  <p className="text-muted-foreground">
                    Writing clean, efficient, and scalable code for websites
                    and applications using modern frameworks and tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Editor</h4>
                  <p className="text-muted-foreground">
                    Editing content, visuals, or media with precision to create
                    polished and professional outputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { Code, Database } from "lucide-react";
import {
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiVite,
} from "react-icons/si";

export const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mapping skill ke icon
  const skillIcons = {
    React: <SiReact className="w-6 h-6 text-primary" />,
    Tailwind: <SiTailwindcss className="w-6 h-6 text-primary" />,
    Bootstrap: <SiBootstrap className="w-6 h-6 text-primary" />,
    Laravel: <SiLaravel className="w-6 h-6 text-primary" />,
    Vue: <SiVuedotjs className="w-6 h-6 text-primary" />,
    Vite: <SiVite className="w-6 h-6 text-primary" />,
    SQL: <Database className="w-6 h-6 text-primary" />,
    default: <Code className="w-6 h-6 text-primary" />,
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/faturahaman/repos"
        );
        const repos = await response.json();

        // Hitung jumlah repos per bahasa
        const languageCount = {};
        repos.forEach((repo) => {
          if (repo.language) {
            languageCount[repo.language] =
              (languageCount[repo.language] || 0) + 1;
          }
        });

        // Konversi ke array skill
        const skillArray = Object.keys(languageCount).map((lang) => ({
          name: lang,
        }));

        // Tambahkan beberapa framework manually
        const frameworks = [
          "React",
          "Tailwind",
          "Bootstrap",
          "Laravel",
          "Vue",
          "Vite",
        ];
        frameworks.forEach((fw) => {
          skillArray.push({ name: fw });
        });

        setSkills(skillArray);
      } catch (error) {
        console.error("Error fetching GitHub skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Languages & <span className="text-primary">Frameworks/Tools</span>
        </h2>

        {loading ? (
          <p className="text-center">Loading skills from GitHub...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-lg shadow-xs flex flex-col items-center gap-4 card-hover"
              >
                {/* Icon */}
                <div className="p-3 rounded-full bg-primary/10">
                  {skillIcons[skill.name] || skillIcons.default}
                </div>

                {/* Skill Name */}
                <h3 className="font-semibold text-lg text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

import { SiReact, SiVue, SiTailwindcss, SiBootstrap, SiLaravel, SiVite } from "react-icons/si";
import { Database, Code } from "lucide-react";
import { useEffect, useState } from "react";

export const IconBackground = () => {
  const [meteors, setMeteors] = useState([]);

  const allIcons = [
    <SiReact className="text-primary" />,
    <SiVue className="text-primary" />,
    <SiTailwindcss className="text-primary" />,
    <SiBootstrap className="text-primary" />,
    <SiLaravel className="text-primary" />,
    <SiVite className="text-primary" />,
    <Database className="text-primary" />,
    <Code className="text-primary" />,
  ];

  useEffect(() => {
    generateMeteors();
    const handleResize = () => generateMeteors();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      const randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
      newMeteors.push({
        id: i,
        icon: randomIcon,
        x: Math.random() * 100,
        y: Math.random() * 20,
        size: Math.random() * 2 + 1.5,
        delay: Math.random() * 10,
        animationDuration: Math.random() * 4 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute animate-meteor"
          style={{
            left: meteor.x + "%",
            top: meteor.y + "%",
            fontSize: meteor.size + "rem",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        >
          {meteor.icon}
        </div>
      ))}
    </div>
  );
};

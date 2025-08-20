import { ArrowUp, Linkedin, Twitter, Instagram, Twitch } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Logo / Nama */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-primary">Muhamad Riffa Faturahman</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Fullstack Developer & Portfolio
          </p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 justify-center">
           <a href="https://www.linkedin.com/in/muhamad-riffa-faturahman-71ba5a279/" target="_blank">
                      <Linkedin className="h-6 w-6 text-primary hover:text-blue-600 transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/riffa_122" target="_blank">
                      <Instagram className="h-6 w-6 text-primary hover:text-pink-500 transition-colors" />
                    </a>
        </div>

        {/* Scroll to top */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center"
        >
          <ArrowUp size={20} />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Muhamad Riffa Faturahman. All rights reserved.
      </div>
    </footer>
  );
};

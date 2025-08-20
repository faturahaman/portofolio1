import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12">
          Feel free to reach out via email, phone, or connect with me on social media.
        </p>

        {/* Contact Info */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-4">
            <Mail className="h-6 w-6 text-primary" />
            <a
              href="mailto:faturahaman@example.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              faturahaman@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <Phone className="h-6 w-6 text-primary" />
            <a
              href="tel:+6281234567890"
              className="text-foreground hover:text-primary transition-colors"
            >
              +62 856-9723-3837
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <MapPin className="h-6 w-6 text-primary" />
            <p className="text-foreground">Bogor, Indonesia</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/muhamad-riffa-faturahman-71ba5a279/" target="_blank">
            <Linkedin className="h-6 w-6 text-primary hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://www.instagram.com/riffa_122" target="_blank">
            <Instagram className="h-6 w-6 text-primary hover:text-pink-500 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

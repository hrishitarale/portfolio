import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contact <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Want to hire me? Feel free to reach out. I'm always open to discussing
          new opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-left">
          {/* Email */}
          <div className="flex items-center space-x-4 overflow-hidden">
            <div className="shrink-0 p-3 rounded-full bg-primary/30">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="min-w-0">
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:hrishikeshtarale@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors truncate"
                title="hrishikeshtarale@gmail.com"
              >
                hrishikeshtarale@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="shrink-0 p-3 rounded-full bg-primary/30">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+919423357137"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                +91 9423357137
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="shrink-0 p-3 rounded-full bg-primary/30">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <span className="block text-muted-foreground">
                Amravati, Maharashtra, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

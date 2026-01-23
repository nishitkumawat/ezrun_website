import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const whatsappUrl = "https://wa.me/919974776076?text=I%20have%20an%20inquiry%20regarding%20EzRun%20Automation.";

  const contactDetails = [
    { icon: Phone, label: "Call Us", value: "+91 9974776076", link: "tel:9974776076" },
    { icon: Mail, label: "Email Us", value: "contact@ezrun.in", link: "mailto:contact@ezrun.in" },
    { icon: MapPin, label: "Visit Us", value: "Ahmedabad, Gujarat, India", link: "#" },
    { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9 AM - 7 PM", link: "#" },
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-muted-foreground">Have questions about our products? We're here to help you automate.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 gap-4">
                {contactDetails.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.link}
                    className="flex items-center gap-4 p-6 rounded-2xl border bg-card hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Inquiry Box */}
            <div className="p-8 md:p-12 rounded-[40px] bg-primary text-primary-foreground space-y-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <MessageSquare className="w-32 h-32" />
                </div>
              <h2 className="text-3xl font-bold">Quick Inquiry</h2>
              <p className="opacity-90">
                The fastest way to reach us is through WhatsApp. Click the button below to start a chat with our support team.
              </p>
              <div className="pt-4 space-y-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full h-16 text-lg rounded-2xl gap-2 font-bold"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageSquare className="w-6 h-6" /> Chat on WhatsApp
                </Button>
                <div className="flex items-center gap-2 justify-center text-sm opacity-80">
                    <Globe className="w-4 h-4" /> Global Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

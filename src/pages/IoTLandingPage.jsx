import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Shield,
  Droplets,
  Sun,
  Clock,
  Wifi,
  MessageCircle,
  Star,
  CheckCircle,
  ChevronDown,
  Plus,
  Trash2,
  AlertCircle,
  Check,
} from "lucide-react";

const CustomBuildForm = () => {
  const [formData, setFormData] = useState({
    machineName: "",
    powerType: "", // AC or DC
    ratingI: "",
    ratingV: "",
    ratingW: "",
    keypadLock: false,
    boxType: "Normal", // Normal or Waterproof
    buttons: [],
    platform: "EZRUN", // EZRUN, Own App, Own App (Managed), Own App (Own Server)
    extraRequirements: "",
    machineLink: "",
    agreedToTerms: false,
  });

  const [newButton, setNewButton] = useState({ name: "", working: "" });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddButton = () => {
    if (newButton.name && newButton.working) {
      setFormData((prev) => ({
        ...prev,
        buttons: [...prev.buttons, newButton],
      }));
      setNewButton({ name: "", working: "" });
    }
  };

  const handleRemoveButton = (index) => {
    setFormData((prev) => ({
      ...prev,
      buttons: prev.buttons.filter((_, i) => i !== index),
    }));
  };

  const handleWhatsApp = () => {
    if (!formData.machineName || !formData.powerType || !formData.ratingI || !formData.ratingV || !formData.agreedToTerms) {
      alert("Please fill all required fields and agree to the terms.");
      return;
    }

    const message = `*CUSTOM BUILD INQUIRY*

*Machine Name:* ${formData.machineName}
*Machine Link:* ${formData.machineLink || "NA"}
*Power Type:* ${formData.powerType}
*Ratings:*
  - Current (I): ${formData.ratingI} A
  - Voltage (V): ${formData.ratingV} V
  - Power (W): ${formData.ratingW || "NA"}

*Hardware Features:*
  - Keypad Lock: ${formData.keypadLock ? "Yes" : "No"}
  - Box Type: ${formData.boxType}

*Buttons Configuration:*
${formData.buttons.map((b, i) => `  ${i + 1}. ${b.name} - ${b.working}`).join("\n") || "  None"}

*Platform Selected:*
  - ${formData.platform}

*Extra Requirements:*
${formData.extraRequirements || "None"}

I agree to the terms and conditions.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919974486076?text=${encodedMessage}`, "_blank");
  };

  const inputClass =
    "w-full bg-white border border-border rounded-lg p-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition";

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-border shadow-lg max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
        Build Your <span className="text-primary">Custom Device</span>
      </h3>

      <div className="space-y-6">
        {/* Machine Details */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
            <Zap className="w-5 h-5" /> Basic Machine Details
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Type / Name of Machine *</label>
              <input
                type="text"
                name="machineName"
                value={formData.machineName}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="Ex: Industrial Pump"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Machine Link (Optional)</label>
              <input
                type="text"
                name="machineLink"
                value={formData.machineLink}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="Paste link for reference"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Power Type *</label>
              <div className="flex gap-4 pt-2">
                {["AC", "DC"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer font-medium text-foreground">
                    <input
                      type="radio"
                      name="powerType"
                      value={type}
                      checked={formData.powerType === type}
                      onChange={handleInputChange}
                      className="accent-orange-500 w-4 h-4"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Current (I) *</label>
              <input
                type="text"
                name="ratingI"
                value={formData.ratingI}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="Amps"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Voltage (V) *</label>
              <input
                type="text"
                name="ratingV"
                value={formData.ratingV}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="Volts"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Power (W)</label>
              <input
                type="text"
                name="ratingW"
                value={formData.ratingW}
                onChange={handleInputChange}
                className={inputClass}
                placeholder="Optional"
              />
            </div>
          </div>
        </div>

        {/* Hardware Features */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
            <Shield className="w-5 h-5" /> Optional Hardware Features
          </h4>
          
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-primary/5 transition border border-border">
              <input
                type="checkbox"
                name="keypadLock"
                checked={formData.keypadLock}
                onChange={handleInputChange}
                className="mt-1 accent-orange-500 w-4 h-4"
              />
              <div>
                <span className="font-semibold block text-foreground">Keypad Lock System (+ ₹100)</span>
                <span className="text-xs text-muted-foreground">Device physically locked until password entered. Mobile control remains active.</span>
              </div>
            </label>

            <div className="grid md:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-primary/5 transition border border-border">
                <input
                  type="radio"
                  name="boxType"
                  value="Normal"
                  checked={formData.boxType === "Normal"}
                  onChange={handleInputChange}
                  className="accent-orange-500 w-4 h-4"
                />
                <span className="font-medium text-foreground">Normal Box</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-primary/5 transition border border-border">
                <input
                  type="radio"
                  name="boxType"
                  value="Waterproof"
                  checked={formData.boxType === "Waterproof"}
                  onChange={handleInputChange}
                  className="accent-orange-500 w-4 h-4"
                />
                <span className="font-medium text-foreground">Waterproof Box (+ ₹200)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons Configuration */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> Buttons Required
          </h4>
          
          {/* Fixed: use flex-col on mobile to prevent overflow */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Button Name (e.g. Start)"
              value={newButton.name}
              onChange={(e) => setNewButton({ ...newButton, name: e.target.value })}
              className="flex-1 bg-white border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition"
            />
            <input
              type="text"
              placeholder="Working (e.g. Starts motor)"
              value={newButton.working}
              onChange={(e) => setNewButton({ ...newButton, working: e.target.value })}
              className="flex-1 bg-white border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition"
            />
            <button
              onClick={handleAddButton}
              className="bg-primary hover:bg-primary/90 text-white p-3 rounded-lg transition flex items-center justify-center gap-2 sm:w-auto w-full font-semibold"
            >
              <Plus className="w-5 h-5" />
              <span className="sm:hidden">Add Button</span>
            </button>
          </div>

          <div className="space-y-2">
            {formData.buttons.map((btn, idx) => (
              <div key={idx} className="flex justify-between items-center bg-muted/30 p-3 rounded-lg border border-border">
                <span className="text-sm text-foreground">
                  <strong>{btn.name}:</strong> {btn.working}
                </span>
                <button
                  onClick={() => handleRemoveButton(idx)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Selection */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
            <Wifi className="w-5 h-5" /> Platform Selection
          </h4>
          
          <div className="space-y-3">
            {[
              { value: "EZRUN", label: "EZRUN Platform (Default)", price: "Included" },
              { value: "Own App", label: "Your Own App", price: "+ ₹20,000 / year" },
              { value: "Own App (Managed)", label: "Your App on Our Cloud Server", price: "+ ₹65,000 / year" },
              { value: "Own App (Own Server)", label: "Your App on Your Cloud Server", price: "+ ₹25,000 / year" },
            ].map((option) => (
              <label key={option.value} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg cursor-pointer hover:bg-primary/5 transition border border-border hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="platform"
                    value={option.value}
                    checked={formData.platform === option.value}
                    onChange={handleInputChange}
                    className="accent-orange-500 w-4 h-4"
                  />
                  <span className="font-medium text-foreground">{option.label}</span>
                </div>
                <span className="text-sm font-bold text-primary">{option.price}</span>
              </label>
            ))}
          </div>
          <p className="text-xs text-muted-foreground italic pl-1 pt-1">
            * App customization may charge upto ₹5000 (If too much customization is done)
          </p>
        </div>

        {/* Extra Requirements */}
        <div className="space-y-2 pt-4 border-t border-border">
          <label className="text-sm font-medium text-muted-foreground">Extra Requirements</label>
          <textarea
            name="extraRequirements"
            value={formData.extraRequirements}
            onChange={handleInputChange}
            rows="3"
            className={inputClass}
            placeholder="Any custom logic, sensors, integrations, limits..."
          ></textarea>
        </div>

        {/* Important Info & Service Policy */}
        <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl space-y-4">
          <div>
            <h5 className="flex items-center gap-2 font-bold text-primary mb-2">
              <AlertCircle className="w-4 h-4" /> Important Information
            </h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Minimum <strong className="text-foreground">20-25 pieces</strong> bulk order required for custom build.</li>
              <li>Chargeable demo model provided before bulk order (Non-refundable).</li>
              <li>Demo model is for testing only - not final product quality.</li>
              <li>Opening enclosure may damage demo unit.</li>
            </ul>
          </div>
          <div>
            <h5 className="flex items-center gap-2 font-bold text-primary mb-2">
              <Clock className="w-4 h-4" /> Service Policy
            </h5>
            <p className="text-sm text-muted-foreground">
              If hardware purchases stop, included services continue for a <strong className="text-foreground">3-month grace period</strong> only. 
              After that, a yearly subscription is mandatory to keep devices online.
            </p>
          </div>
        </div>

        {/* Terms & Submit */}
        <div className="pt-4 space-y-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleInputChange}
              className="accent-orange-500 w-4 h-4 rounded"
            />
            <span className="text-sm text-muted-foreground">
              I agree to the <Link to="/legal/custom-build-terms" target="_blank" className="text-primary hover:underline font-semibold">Terms & Conditions</Link> *
            </span>
          </label>

          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-6 h-6" />
            Send Inquiry via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

const IoTLandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const products = [
    {
      Icon: Shield,
      name: "Smart Shutter Controller",
      description:
        "Control your shutter with password-protected keypad and mobile app. Secure, reliable, and convenient.",
      features: [
        "Password Protected Keypad",
        "Mobile App Control",
        "Remote Access",
        "Timer Scheduling",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      accent: "from-orange-400 to-primary",
    },
    {
      Icon: Sun,
      name: "Solar Monitoring System",
      description:
        "Track your solar usage with real-time data of solar production. Optimize energy efficiency.",
      features: [
        "Real-time Monitoring",
        "Production Analytics",
        "Usage Tracking",
        "Performance Reports",
      ],
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      accent: "from-yellow-400 to-orange-400",
    },
    {
      Icon: Droplets,
      name: "Smart Pump Operator",
      description:
        "Operate your water pump from anywhere. Set timer schedules for automatic operation.",
      features: [
        "Remote Operation",
        "Timer Schedules",
        "Automatic Control",
        "Energy Saving",
      ],
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      accent: "from-sky-400 to-blue-500",
    },
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      comment:
        "Excellent quality IoT devices! The smart shutter controller has made my factory operations so much smoother. Very reliable and the mobile app is intuitive.",
      date: "2 weeks ago",
    },
    {
      name: "Priya Patel",
      location: "Gandhinagar, Gujarat",
      rating: 4,
      comment:
        "Best investment for my solar setup! The monitoring system gives me real-time insights and helped optimize my energy production by 30%. Highly recommended!",
      date: "1 month ago",
    },
    {
      name: "Amit Shah",
      location: "Surat, Gujarat",
      rating: 5,
      comment:
        "The smart pump operator is a game-changer for my agricultural land. I can control everything from my phone, and the timer feature saves so much time and energy.",
      date: "3 weeks ago",
    },
    {
      name: "Sneha Desai",
      location: "Vadodara, Gujarat",
      rating: 3,
      comment:
        "Very professional team and excellent customer service! They converted my ideas into reality. The backend services are fast and reliable. Worth every rupee!",
      date: "1 week ago",
    },
    {
      name: "Karan Mehta",
      location: "Rajkot, Gujarat",
      rating: 4,
      comment:
        "Amazing custom IoT solutions at affordable rates! They built exactly what I needed for my warehouse. The Windows portal integration works flawlessly.",
      date: "2 months ago",
    },
    {
      name: "Neha Singh",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      comment:
        "Quick response time and great quality products. The MQTT services are super fast and reliable. Their team understood my requirements perfectly!",
      date: "3 weeks ago",
    },
  ];

  const faqs = [
    {
      q: "What is the delivery time for custom IoT solutions?",
      a: "Typically, we deliver custom IoT solutions within 2-4 weeks depending on complexity. We'll provide you with a detailed timeline after understanding your requirements.",
    },
    {
      q: "Do you provide mobile applications for device control?",
      a: "Yes! We provide custom mobile applications for both Android and iOS platforms to control your IoT devices from anywhere.",
    },
    {
      q: "What kind of backend services do you offer?",
      a: "We offer high-end backend services with fast and reliable MQTT protocols, cloud storage, real-time data processing, and custom API development.",
    },
    {
      q: "Can I get a custom Windows portal for my business?",
      a: "Absolutely! We build custom Windows portals and applications tailored to your specific business needs with user-friendly interfaces.",
    },
    {
      q: "What is your pricing structure?",
      a: "We offer the cheapest rates in the market without compromising quality. Send us your requirements via WhatsApp and we'll provide a detailed quote within 24 hours.",
    },
    {
      q: "Do you provide warranty and support?",
      a: "Yes, all our devices come with a warranty and we provide ongoing technical support to ensure smooth operation.",
    },
  ];

  const features = [
    {
      Icon: Zap,
      title: "High-End Backend",
      description:
        "Fast and reliable MQTT services for real-time device communication",
    },
    {
      Icon: Wifi,
      title: "Mobile Apps",
      description:
        "Custom applications for controlling your IoT devices anywhere",
    },
    {
      Icon: Shield,
      title: "Secure & Reliable",
      description: "Password protection and encrypted communication protocols",
    },
    {
      Icon: Clock,
      title: "24/7 Support",
      description: "We respond to your queries within 24 hours guaranteed",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">
              Cheapest Rates • Highest Quality
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Custom <span className="text-primary">IoT Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We convert your thoughts into real products. Tell us your
            requirements and get a solution within 24 hours!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#build-form"
              className="px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Start Building Now
            </a>
            <a
              href="#products"
              className="px-8 py-4 rounded-full border-2 border-border hover:border-primary/40 hover:bg-primary/5 text-lg font-semibold transition-all hover:scale-105 text-foreground"
            >
              View Products
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            ⚡ We respond within 24 hours &nbsp;•&nbsp; 🔒 100% Secure &nbsp;•&nbsp; 💰 Best Prices
          </p>
        </div>
      </section>

      {/* Custom Build Form Section */}
      <section id="build-form" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-0.5 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-[10px]">Custom Build</span>
              <div className="h-0.5 w-12 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Turn Your Machines <span className="text-primary">Smart</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fill out the details below to get a custom quote for your machine automation
            </p>
          </div>
          <CustomBuildForm />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-border hover:border-primary/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <feature.Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-0.5 w-12 bg-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-[10px]">Products</span>
              <div className="h-0.5 w-12 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">IoT Products</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready-made solutions designed for efficiency and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white border border-border hover:border-primary/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.accent} opacity-80`} />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                    <product.Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-muted-foreground text-sm">Trusted by businesses across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-border hover:border-primary/40 transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground italic text-sm mb-3">"{review.comment}"</p>
                <p className="text-xs text-muted-foreground/60">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mt-3 mb-12" />
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-border overflow-hidden hover:border-primary/40 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex justify-between items-center text-left hover:bg-primary/5 transition"
                >
                  <span className="font-semibold pr-4 text-foreground">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-8 bg-gradient-to-r from-orange-400 to-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Automate Your World?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We build custom IoT devices at the cheapest rates. Just tell us your
            requirements and we'll convert your thoughts into real products!
          </p>
          <a
            href="#build-form"
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default IoTLandingPage;

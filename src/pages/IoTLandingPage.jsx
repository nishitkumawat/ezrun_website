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

  return (
    <div className="bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Build Your Custom Device
      </h3>

      <div className="space-y-6">
        {/* Machine Details */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
            <Zap className="w-5 h-5" /> Basic Machine Details
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Type / Name of Machine *</label>
              <input
                type="text"
                name="machineName"
                value={formData.machineName}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Ex: Industrial Pump"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400">Machine Link (Optional)</label>
              <input
                type="text"
                name="machineLink"
                value={formData.machineLink}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Paste link for reference"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-400">Power Type *</label>
              <div className="flex gap-4 pt-2">
                {["AC", "DC"].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="powerType"
                      value={type}
                      checked={formData.powerType === type}
                      onChange={handleInputChange}
                      className="accent-blue-500 w-5 h-5"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Current (I) *</label>
              <input
                type="text"
                name="ratingI"
                value={formData.ratingI}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Amps"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Voltage (V) *</label>
              <input
                type="text"
                name="ratingV"
                value={formData.ratingV}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Volts"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-400">Power (W)</label>
              <input
                type="text"
                name="ratingW"
                value={formData.ratingW}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Optional"
              />
            </div>
          </div>
        </div>

        {/* Hardware Features */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
            <Shield className="w-5 h-5" /> Optional Hardware Features
          </h4>
          
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition">
              <input
                type="checkbox"
                name="keypadLock"
                checked={formData.keypadLock}
                onChange={handleInputChange}
                className="mt-1 accent-blue-500 w-5 h-5"
              />
              <div>
                <span className="font-semibold block">Keypad Lock System (+ ₹100)</span>
                <span className="text-xs text-slate-400">Device physically locked until password entered. Mobile control remains active.</span>
              </div>
            </label>

            <div className="grid md:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition">
                <input
                  type="radio"
                  name="boxType"
                  value="Normal"
                  checked={formData.boxType === "Normal"}
                  onChange={handleInputChange}
                  className="accent-blue-500 w-5 h-5"
                />
                <span>Normal Box</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition">
                <input
                  type="radio"
                  name="boxType"
                  value="Waterproof"
                  checked={formData.boxType === "Waterproof"}
                  onChange={handleInputChange}
                  className="accent-blue-500 w-5 h-5"
                />
                <span>Waterproof Box (+ ₹200)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons Configuration */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> Buttons Required
          </h4>
          
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Button Name (e.g. Start)"
              value={newButton.name}
              onChange={(e) => setNewButton({ ...newButton, name: e.target.value })}
              className="flex-1 bg-slate-800 border border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="Working (e.g. Starts motor)"
              value={newButton.working}
              onChange={(e) => setNewButton({ ...newButton, working: e.target.value })}
              className="flex-1 bg-slate-800 border border-white/10 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              onClick={handleAddButton}
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            {formData.buttons.map((btn, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-800/80 p-3 rounded-lg border border-white/5">
                <span className="text-sm">
                  <strong>{btn.name}:</strong> {btn.working}
                </span>
                <button
                  onClick={() => handleRemoveButton(idx)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Selection */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h4 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
            <Wifi className="w-5 h-5" /> Platform Selection
          </h4>
          
          <div className="space-y-3">
            {[
              { value: "EZRUN", label: "EZRUN Platform (Default)", price: "Included" },
              { value: "Own App", label: "Your Own App", price: "+ ₹20,000 / year" },
              { value: "Own App (Managed)", label: "Your App on Our Cloud Server", price: "+ ₹65,000 / year" },
              { value: "Own App (Own Server)", label: "Your App on Your Cloud Server", price: "+ ₹25,000 / year" },
            ].map((option) => (
              <label key={option.value} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg cursor-pointer hover:bg-slate-800 transition border border-transparent hover:border-blue-500/30">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="platform"
                    value={option.value}
                    checked={formData.platform === option.value}
                    onChange={handleInputChange}
                    className="accent-blue-500 w-5 h-5"
                  />
                  <span>{option.label}</span>
                </div>
                <span className="text-sm font-semibold text-blue-300">{option.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Extra Requirements */}
        <div className="space-y-2 pt-4 border-t border-white/10">
          <label className="text-sm text-slate-400">Extra Requirements</label>
          <textarea
            name="extraRequirements"
            value={formData.extraRequirements}
            onChange={handleInputChange}
            rows="3"
            className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Any custom logic, sensors, integrations, limits..."
          ></textarea>
        </div>

        {/* Important Info & Service Policy */}
        <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg space-y-4">
          <div>
            <h5 className="flex items-center gap-2 font-bold text-blue-400 mb-2">
              <AlertCircle className="w-4 h-4" /> Important Information
            </h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
              <li>Minimum <strong>20-25 pieces</strong> bulk order required for custom build.</li>
              <li>Chargeable demo model provided before bulk order (Non-refundable).</li>
              <li>Demo model is for testing only - not final product quality.</li>
              <li>Opening enclosure may damage demo unit.</li>
            </ul>
          </div>
          <div>
            <h5 className="flex items-center gap-2 font-bold text-orange-400 mb-2">
              <Clock className="w-4 h-4" /> Service Policy
            </h5>
            <p className="text-sm text-slate-300">
              If hardware purchases stop, included services continue for a <strong>3-month grace period</strong> only. 
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
              className="accent-green-500 w-5 h-5 rounded"
            />
            <span className="text-sm text-slate-300">
              I agree to the <Link to="/legal/custom-build-terms" target="_blank" className="text-blue-400 hover:underline">Terms & Conditions</Link> *
            </span>
          </label>

          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-green-900/20"
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
      className: "from-blue-500/20 to-purple-500/20",
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
      className: "from-yellow-500/20 to-orange-500/20",
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
      className: "from-cyan-500/20 to-blue-500/20",
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

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919974486076?text=Hi, I would like to know more about your IoT solutions",
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
            <span className="text-blue-400 text-sm font-semibold">
              Cheapest Rates • Highest Quality
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Custom IoT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We convert your thoughts into real products. Tell us your
            requirements and get a solution within 24 hours!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#build-form"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              Start Building Now
            </a>
            <a
              href="#products"
              className="px-8 py-4 rounded-full border-2 border-white/10 hover:bg-white/5 text-lg font-semibold transition-all hover:scale-105"
            >
              View Products
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            ⚡ We respond within 24 hours • 🔒 100% Secure • 💰 Best Prices
          </p>
        </div>
      </section>

      {/* Custom Build Form Section */}
      <section id="build-form" className="py-20 px-4 bg-slate-950/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Turn Your Machines Smart
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Fill out the details below to get a custom quote for your machine automation
            </p>
          </div>
          <CustomBuildForm />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <feature.Icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our IoT Products
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Ready-made solutions designed for efficiency and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.className}`}
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <product.Icon className="w-12 h-12 text-white/80" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-slate-400 mb-4">{product.description}</p>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-slate-300">{feature}</span>
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
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-400">Trusted by businesses across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-yellow-500/50 transition-all hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-xs text-slate-400">
                        {review.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 italic mb-3">"{review.comment}"</p>
                <p className="text-xs text-slate-500">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-800/50 border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-800/30 transition"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-500 transition-transform flex-shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-400 border-t border-white/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      {/* <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50 animate-bounce"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button> */}
    </div>
  );
};

export default IoTLandingPage;

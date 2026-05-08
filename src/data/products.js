import {
  Sun,
  Droplets,
  Zap,
  ShieldCheck,
  Wifi,
  Globe,
  Smartphone,
  Key,
  RotateCcw,
  Clock,
  BatteryCharging,
  Calendar,
  Watch,
  PlayCircle,
  Layout,
} from "lucide-react";

export const products = [
  {
    id: "solar",
    isActive: false,
    hero: {
      badgeText: "Maximum Energy Yield",
      badgeIcon: Zap,
      titlePrimary: "AI Based Solar",
      titleSecondary: "Monitoring & Washing",
      descriptionDesktop:
        "This is our advanced solar monitoring system which helps you track all the information about your solar panels. Maximize your investment with real-time tracking and automated maintenance.",
      descriptionMobile:
        "Maximize your investment with real-time tracking and automated maintenance.",
      priceAmount: "₹ 3500",
      priceSuffix: "+ Taxes",
      priceNote: "(Negotiable for bulk orders)",
      priceBadge: "",
      image: "/assets/solar2.png",
      whatsappMsg:
        "I am interested in the AI Based Solar monitoring and washing system. Please provide more details.",
      buttons: [
        { type: "inquiry", text: "Send Inquiry" },
        {
          type: "app_demo",
          text: "App Demo",
          link: "/app-demo/solar-monitoring",
        },
      ],
    },
    sections: [
      {
        type: "text_cards",
        title: "How it Works?",
        subtitle:
          "Advanced dust detection algorithms coupled with precision cleaning hardware.",
        items: [
          {
            icon: Droplets,
            title: "Autowash Feature",
            desc: "The system automatically detects dust accumulation on your solar panels. When detected, it will automatically turn on your cleaning mechanism. If you don't have a cleaning mechanism installed, it will send an instant alert to your device so you can clean the solar panels yourself and maintain peak efficiency.",
          },
          {
            icon: Sun,
            title: "Smart Monitoring",
            desc: "Track production metrics, voltage fluctuations, and maintenance history. Our AI analyzes performance data to provide deep insights into your energy generation and system health, accessible from anywhere via our unified app.",
          },
        ],
      },
      {
        type: "modes",
        title: "Setup & Connectivity",
        items: [
          {
            icon: Wifi,
            title: "For Offline Mode",
            desc: "In this mode you don't need any internet connection at the place of solar installation, but you must be within a 100m range. Just turn on your WiFi and connect to the solar hotspot using the ID and password provided in the box. Open the app to see all details. Autowash also works flawlessly in offline mode.",
          },
          {
            icon: Globe,
            title: "For Online Mode",
            desc: "Connect to the solar device via WiFi, enter your home WiFi SSID and password, and specify your solar location. Once connected, you can monitor and trigger washing from any point in the world. Autowash is slightly more accurate in this mode due to cloud-based AI detection.",
          },
        ],
      },
      {
        type: "gallery_grid",
        title: "Smart Washing Interface",
        icon: Layout,
        images: [
          "/assets/wash_1.jpeg",
          "/assets/wash2.jpeg",
          "/assets/wash_3.jpeg",
        ],
      },
    ],
    cta: {
      title: "Ready to boost your solar output?",
      desc: "Join hundreds of happy customers using EzRun to keep their solar panels clean and efficient.",
      buttonText: "Contact for Bulk Orders",
    },
  },
  {
    id: "shutter",
    isActive: true,
    hero: {
      badgeText: "Best in Class Security",
      badgeIcon: ShieldCheck,
      titlePrimary: "Advanced",
      titleSecondary: "Shutter Controller",
      descriptionDesktop:
        "Secure, robust, and smart automation for your industrial and residential shutters. Experience the perfect blend of physical security and mobile convenience.",
      descriptionMobile:
        "Secure & smart mobile automation for your rolling shutters.",
      priceAmount: "₹3,000",
      priceSuffix: "+ Taxes",
      priceNote: "* Complete set with access points included.",
      priceBadge: "Standard Device",
      image: "/assets/shutter.png",
      whatsappMsg:
        "I am interested in the Advanced Shutter Controller. Please provide more details.",
      buttons: [
        { type: "inquiry", text: "Send Inquiry" },
        { type: "manual", text: "Manual", link: null },
        { type: "app_demo", text: "Live App Demo", link: "/app-demo/shutter" },
      ],
    },
    sections: [
      {
        type: "bullets_grid",
        title: "Technical Specifications",
        items: [
          {
            icon: Wifi,
            title: "Connectivity",
            bullets: [
              "2.4GHz WiFi Support",
              "Access Point: 'Shutter_AP'",
              "Config IP: 192.168.4.1",
              "16-character Unique Device ID",
            ],
          },
          {
            icon: Key,
            title: "Keypad Controls",
            bullets: [
              "A: Open Shutter",
              "B: Stop",
              "C: Close Shutter",
              "#: Start Password Entry",
              "*: Confirm Entry",
            ],
          },
          {
            icon: RotateCcw,
            title: "Maintenance",
            bullets: [
              "5s Hold 'D' for Factory Reset",
              "Over-the-air updates support",
              "Status LED Indicators",
              "Industrial Grade Build",
            ],
          },
        ],
      },
      {
        type: "features_grid",
        title: "Why Choose EzRun?",
        items: [
          {
            icon: Smartphone,
            title: "Dual Control",
            desc: "Operate via Android app or physical keypad.",
          },
          {
            icon: Wifi,
            title: "WiFi Enabled",
            desc: "Remote operation via 2.4GHz WiFi network.",
          },
          {
            icon: Key,
            title: "PIN Security",
            desc: "Secure password protection for manual operation.",
          },
          {
            icon: ShieldCheck,
            title: "1-Year Warranty",
            desc: "Industrial grade reliability with full support.",
          },
          {
            icon: RotateCcw,
            title: "Easy Reset",
            desc: "Quick reconfiguration and device reset options.",
          },
        ],
      },
      {
        type: "overview_split",
        title: "Product Overview",
        icon: Layout,
        leftImage: "/assets/motor_box.png",
        rightImage: "/assets/motor.jpeg",
      },
    ],
    cta: {
      title: "Secure your industrial premises today",
      desc: "Join hundreds of industrial and residential users who trust EzRun for their rolling shutter security.",
      buttonText: "Contact for Bulk Orders",
    },
  },
  {
    id: "solar-wash-controller",
    isActive: true,
    hero: {
      badgeText: "Boost Solar Efficiency",
      badgeIcon: Zap,
      titlePrimary: "Smart",
      titleSecondary: "Solar Panel Wash Controller",
      descriptionDesktop:
        "Automatic solar panel cleaning system designed to improve your solar efficiency and reduce manual effort. Our state-of-the-art automation ensures your solar panels remain spotlessly clean for maximum generation.",
      descriptionMobile:
        "Automatic solar panel cleaning to maximize efficiency with zero manual effort.",
      priceAmount: "₹1,699",
      priceSuffix: "/ unit",
      priceNote: "* Price negotiable for bulk orders",
      priceBadge: "Bulk Discounts Available",
      image: "/assets/solar2.png",
      whatsappMsg:
        "I am interested in the Smart Solar Panel Wash Controller. Please provide more details.",
      buttons: [
        { type: "inquiry", text: "Send Inquiry" },
        {
          type: "manual",
          text: "Details",
          link: "/product/solar-wash-controller/manual",
        },
        { type: "setup", text: "Setup Guide", link: "/setup" },
        { type: "app_demo", text: "Live App Demo", link: "/app-demo/solar" },
      ],
    },
    sections: [
      {
        type: "bullets_grid",
        title: "Cleaning Options",
        items: [
          {
            icon: Calendar,
            title: "Scheduled Cleaning",
            desc: "Ideal for regular, fixed cleaning routines.",
            bullets: [
              "Choose which days to clean",
              "Set start time",
              "Set cleaning duration",
            ],
          },
          {
            icon: Watch,
            title: "Interval Cleaning",
            desc: "Best for dusty or industrial areas.",
            bullets: [
              "Every 12 hours",
              "Every 24 hours",
              "Custom time interval",
            ],
          },
          {
            icon: PlayCircle,
            title: "Manual Cleaning",
            desc: "Useful for emergency or extra cleaning.",
            bullets: [
              "Start/Stop anytime from mobile",
              "Doesn't disturb schedules",
              "Works without internet",
            ],
          },
        ],
      },
      {
        type: "gallery_grid",
        title: "Smart Washing Interface",
        icon: Layout,
        images: [
          "/assets/wash_1.jpeg",
          "/assets/wash2.jpeg",
          "/assets/wash_3.jpeg",
        ],
      },
      {
        type: "features_grid",
        title: "Why You Need This?",
        items: [
          {
            icon: Droplets,
            title: "Auto Cleaning",
            desc: "Automatically cleans solar panels at the right time.",
          },
          {
            icon: Clock,
            title: "Saves Time",
            desc: "Reduces manual effort and cleaning time.",
          },
          {
            icon: Zap,
            title: "Improves Power",
            desc: "Increases electricity generation by keeping panels clean.",
          },
          {
            icon: Wifi,
            title: "Offline Capable",
            desc: "Works perfectly even without internet connection.",
          },
          {
            icon: BatteryCharging,
            title: "Power Safe",
            desc: "Remembers settings even after power cuts.",
          },
        ],
      },
    ],
    cta: {
      title: "Bulk Orders & Custom Needs",
      desc: "Special pricing for bulk orders. Suitable for large solar installations with custom cleaning schedules available.",
      buttonText: "Contact for Bulk Orders",
    },
  },
];

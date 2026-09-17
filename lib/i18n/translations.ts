export type Language = "tr" | "en";

export interface Translations {
  nav: {
    work: string;
    services: string;
    process: string;
    about: string;
    blog: string;
    contact: string;
    startProject: string;
    skipToContent: string;
  };
  hero: {
    badgeStatus: string;
    title1: string;
    title2: string;
    description: string;
    ctaWork: string;
    ctaProject: string;
    techStack: string;
    scrollPrompt: string;
  };
  manifesto: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    highlight: string;
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    interactiveHint: string;
    exploreCapability: string;
    exploreAllServices: string;
    bottomHeading: string;
    bottomSubline: string;
  };
  work: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    featured: string;
    viewWork: string;
    startProject: string;
    allProjectsArchive: string;
    bottomHeading: string;
    bottomSubline: string;
  };
  process: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    radicalClarity: string;
    weeklyDemos: string;
    weeklyDemosDesc: string;
    fullRoadmap: string;
    exploreFullProcess: string;
    startProject: string;
    guarantee1: string;
    guarantee2: string;
    guarantee3: string;
  };
  why: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    philosophyTitle: string;
    philosophyQuote: string;
    philosophyDesc: string;
    letsTalk: string;
    aboutEngineer: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    formPipeline: string;
    tlsShield: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyOptional: string;
    companyPlaceholder: string;
    projectTypeLabel: string;
    budgetLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    footerNotice: string;
    directChannels: string;
    directTitle: string;
    directDesc: string;
    successTitle: string;
    successDesc: string;
    resetButton: string;
  };
  footer: {
    tagline: string;
    rights: string;
    status: string;
    location: string;
  };
  common: {
    startProject: string;
    viewWork: string;
    exploreServices: string;
    letsTalk: string;
    returnHome: string;
    back: string;
    next: string;
  };
}

export const translations: Record<Language, Translations> = {
  tr: {
    nav: {
      work: "Projeler",
      services: "Hizmetler",
      process: "Süreç",
      about: "Hakkımda",
      blog: "Blog",
      contact: "İletişim",
      startProject: "Projeyi Başlat",
      skipToContent: "Ana içeriğe atla",
    },
    hero: {
      badgeStatus: "YENİ PROJELER İÇİN MÜSAİT",
      title1: "Dijital deneyimler,",
      title2: "amaçla tasarlandı.",
      description:
        "İşletmeler ve markalar için modern web siteleri, özel web uygulamaları ve etkileşimli 3D dijital deneyimler üreten Bilgisayar Mühendisi & Web Geliştirici.",
      ctaWork: "İşleri İncele",
      ctaProject: "Projeyi Başlat",
      techStack: "Donanım Hızlandırmalı 60 FPS",
      scrollPrompt: "Yolculuk İçin Kaydır",
    },
    manifesto: {
      badge: "01 // MÜHENDİSLİK MANİFESTOSU",
      heading: "YALNIZCA KOD DEĞİL, BİR DİJİTAL ANLATIM.",
      p1: "Sıradan şablonların ve yavaş sayfa oluşturucuların ötesine geçiyoruz. Her satır kod, yüksek performanslı mimari ve estetik mükemmeliyet ile inşa edilir.",
      p2: "Bilgisayar mühendisliği disiplinini yüksek tasarım diliyle birleştiriyoruz. Algoritmik hassasiyet, doğrudan marka kimliğinize dönüşür.",
      p3: "Gerçek zamanlı WebGL uzayları, sıfır gecikmeli veri akışı ve Google Core Web Vitals 95+ garantisi.",
      highlight: "Tasarım ruh kazandırır, mühendislik ise sonsuzluk.",
    },
    services: {
      badge: "02 // STÜDYO KABİLİYETLERİ",
      title: "UZMANLIK",
      titleHighlight: "ALANLARI",
      description:
        "İleri görüşlü markaları sektörlerinin öncüsü yapacak uçtan uca modern dijital mühendislik ve kreatif çözümler.",
      interactiveHint: "3D Uzayda Keşfetmek İçin Hizmete Tıklayın",
      exploreCapability: "Hizmeti İncele",
      exploreAllServices: "Tüm Hizmetleri Keşfet",
      bottomHeading: "Özel bir kreatif mühendislik projeniz mi var?",
      bottomSubline: "Tüm hizmet matrisini inceleyin veya size özel teknik teklif alın.",
    },
    work: {
      badge: "03 // SEÇİLMİŞ VAKA ANALİZLERİ",
      title: "SEÇİLMİŞ",
      titleHighlight: "İŞLER",
      description:
        "Kreatif teknoloji amiral gemileri, etkileşimli 3D mekanlar ve yüksek performanslı tam yığın mühendislik projeleri.",
      featured: "ÖNE ÇIKAN",
      viewWork: "İşleri İncele",
      startProject: "Projeyi Başlat",
      allProjectsArchive: "Tüm Proje Arşivi",
      bottomHeading: "Proje arşivinin tamamını keşfedin",
      bottomSubline: "Derinlemesine mimari analizler ve mühendislik detayları.",
    },
    process: {
      badge: "04 // METODOLOJİ & SÜREÇ",
      title: "NASIL",
      titleHighlight: "ÇALIŞIRIM",
      description:
        "Gecikmeleri ortadan kaldıran, şeffaflığı ve hızı garantileyen 7 aşamalı kanıtlanmış müşteri mühendislik süreci.",
      radicalClarity: "RADİKAL ŞEFFAFLIK",
      weeklyDemos: "Haftalık Demolar & Canlı Önizleme",
      weeklyDemosDesc:
        "Geliştirme dallarına, test ortamlarına ve şeffaf sprint panolarına doğrudan erişim sağlarsınız.",
      fullRoadmap: "7 Aşamalı Yol Haritası",
      exploreFullProcess: "Tüm Süreci İncele",
      startProject: "Projeyi Başlat",
      guarantee1: "Haftalık canlı staging dağıtımları ve sürekli müşteri incelemesi",
      guarantee2: "%100 IP fikri mülkiyet sahipliği & temiz Next.js mimarisi",
      guarantee3: "Lighthouse 95+ performans kriteri ve 1 saniye altı yükleme",
    },
    why: {
      badge: "05 // KİMLİK & DEĞER ÖNERİSİ",
      title: "NEDEN",
      titleHighlight: "MECNUN",
      description:
        "Yazılım mühendisliği disiplini ile özel kreatif vizyon arasındaki köprü. Markanızı güçlendiren kalıcı dijital varlıklar inşa ediyoruz.",
      philosophyTitle: "STÜDYO FELSEFESİ",
      philosophyQuote: "Kod yalnızca işlevsellik değildir. Mimari, marka kimliğidir.",
      philosophyDesc:
        "Dijital varlığınızı yüksek performanslı ve dönüşüm odaklı bir amiral gemisine dönüştürmeye hazır mısınız?",
      letsTalk: "İletişime Geç",
      aboutEngineer: "Mühendis Hakkında",
    },
    contact: {
      badge: "06 // DOĞRUDAN PROJE İLETİŞİMİ",
      title: "Aklınızda bir proje",
      titleHighlight: "mi var?",
      description:
        "İster yüksek performanslı bir web platformu, ister 3D etkileşimli bir deneyim, ister mimari kod denetimi olsun — birlikte sıra dışı bir şey inşa edelim.",
      formPipeline: "FORM HATTI:",
      tlsShield: "TLS 1.3 // BOT KALKANI AKTİF",
      nameLabel: "01. Adınız & Soyadınız",
      namePlaceholder: "Örn: Ahmet Yılmaz",
      emailLabel: "02. E-posta Adresiniz",
      emailPlaceholder: "ahmet@sirketiniz.com",
      companyLabel: "03. Şirket / Marka",
      companyOptional: "(Opsiyonel)",
      companyPlaceholder: "Örn: Acme Teknoloji",
      projectTypeLabel: "04. Proje Türü",
      budgetLabel: "05. Tahmini Bütçe Aralığı",
      messageLabel: "06. Proje Detayları & Hedefler",
      messagePlaceholder: "Projenizin hedeflerini, kapsamını ve zaman çizelgesini kısaca anlatın...",
      submitButton: "Proje İletimini Gönder",
      submitting: "İletiliyor...",
      footerNotice: "Uçtan uca şifreli • Doğrudan mühendislik liderine • Spam veya aracı yok",
      directChannels: "DOĞRUDAN KANALLAR",
      directTitle: "Doğrudan İletişim",
      directDesc:
        "Doğrudan e-posta veya mimari görüşme mi tercih ediyorsunuz? Satış aracıları olmadan doğrudan iletişime geçin.",
      successTitle: "İletim Onaylandı",
      successDesc:
        "Teşekkürler. Proje talebiniz güvenli bir şekilde kuyruğa alındı. Tüm teknik başvurular 24 iş saati içinde incelenir.",
      resetButton: "Yeni Form Gönder",
    },
    footer: {
      tagline: "Bilgisayar Mühendisliği ve yüksek dijital sanat vizyonuyla inşa edildi.",
      rights: "Tüm hakları saklıdır.",
      status: "Sistemler Operasyonel",
      location: "İstanbul & Global Uzaktan",
    },
    common: {
      startProject: "Projeyi Başlat",
      viewWork: "İşleri İncele",
      exploreServices: "Hizmetleri Keşfet",
      letsTalk: "İletişime Geç",
      returnHome: "Ana Sayfaya Dön",
      back: "Geri",
      next: "İleri",
    },
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      process: "Process",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      startProject: "Start a Project",
      skipToContent: "Skip to main content",
    },
    hero: {
      badgeStatus: "AVAILABLE FOR NEW PROJECTS",
      title1: "Digital experiences,",
      title2: "engineered with purpose.",
      description:
        "Computer engineer creating modern websites, web applications and interactive 3D digital experiences for businesses and forward-thinking brands.",
      ctaWork: "View Work",
      ctaProject: "Start a Project",
      techStack: "60 FPS Hardware Accelerated",
      scrollPrompt: "Scroll For Journey",
    },
    manifesto: {
      badge: "01 // ENGINEERING MANIFESTO",
      heading: "NOT JUST CODE, A BESPOKE DIGITAL NARRATIVE.",
      p1: "Transcend generic templates and bloated page builders. Every line of code is engineered with high-performance architecture and editorial beauty.",
      p2: "We synthesize computer science discipline with high-fashion digital art direction. Algorithmic rigor translates directly into brand authority.",
      p3: "Real-time WebGL spatial universes, sub-second data streaming, and Google Core Web Vitals 95+ guarantee.",
      highlight: "Design gives identity, engineering grants immortality.",
    },
    services: {
      badge: "02 // STUDIO CAPABILITIES",
      title: "CORE",
      titleHighlight: "SERVICES",
      description:
        "End-to-end digital craft tailored to propel forward-thinking companies into the vanguard of their industry.",
      interactiveHint: "Click a Service to Orbit in 3D Space",
      exploreCapability: "Explore Capability",
      exploreAllServices: "Explore All Services",
      bottomHeading: "Looking for a custom creative engineering scope?",
      bottomSubline: "Explore the full services matrix or request a custom proposal.",
    },
    work: {
      badge: "03 // SELECTED CASE STUDIES",
      title: "SELECTED",
      titleHighlight: "WORKS",
      description:
        "A curated index of creative technology flagships, interactive 3D spaces, and full-stack engineering milestones.",
      featured: "FEATURED",
      viewWork: "View Work",
      startProject: "Start a Project",
      allProjectsArchive: "All Projects Archive",
      bottomHeading: "Explore the complete project archive",
      bottomSubline: "Deep dives, architectural breakdowns, and engineering specifications.",
    },
    process: {
      badge: "04 // METHODOLOGY & PROCESS",
      title: "HOW I",
      titleHighlight: "WORK",
      description:
        "A transparent, battle-tested 7-stage client pipeline engineered to eliminate black-box delays and deliver world-class craft.",
      radicalClarity: "RADICAL CLARITY",
      weeklyDemos: "Weekly Demos & Live Staging",
      weeklyDemosDesc:
        "You get direct access to development branches, test environments, and transparent sprint boards.",
      fullRoadmap: "Full 7-Stage Roadmap",
      exploreFullProcess: "Explore Full Process",
      startProject: "Start a Project",
      guarantee1: "Bi-weekly staging deployments & continuous client reviews",
      guarantee2: "100% IP ownership & clean typed Next.js repository",
      guarantee3: "Lighthouse 95+ benchmark & sub-second Core Web Vitals",
    },
    why: {
      badge: "05 // IDENTITY & VALUE PROPOSITION",
      title: "WHY",
      titleHighlight: "MECNUN",
      description:
        "Bridging the gap between software engineering discipline and bespoke creative direction. Building enduring digital assets that elevate brands.",
      philosophyTitle: "STUDIO PHILOSOPHY",
      philosophyQuote: "Code is not just functionality. Architecture is brand identity.",
      philosophyDesc:
        "Ready to transform your digital presence into a high-performance, conversion-driven flagship?",
      letsTalk: "Let's Talk",
      aboutEngineer: "About The Engineer",
    },
    contact: {
      badge: "06 // DIRECT TRANSMISSION & INQUIRY",
      title: "Have a project",
      titleHighlight: "in mind?",
      description:
        "Whether you need a high-performance web platform, an immersive 3D spatial experience, or an architectural code audit — let's build something exceptional together.",
      formPipeline: "FORM PIPELINE:",
      tlsShield: "TLS 1.3 // SPAM SHIELD ACTIVE",
      nameLabel: "01. Your Name",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "02. Email Address",
      emailPlaceholder: "john@company.com",
      companyLabel: "03. Company / Brand",
      companyOptional: "(Optional)",
      companyPlaceholder: "e.g. Acme Labs",
      projectTypeLabel: "04. Project Type",
      budgetLabel: "05. Estimated Budget",
      messageLabel: "06. Project Brief & Objectives",
      messagePlaceholder: "Tell us about your project timeline, technical requirements, and goals...",
      submitButton: "Send Project Transmission",
      submitting: "Transmitting...",
      footerNotice: "Encrypted transport • Direct to engineering lead • No spam or agency delegation",
      directChannels: "DIRECT CHANNELS",
      directTitle: "Direct Engineering Lead",
      directDesc:
        "Prefer direct email or architectural discussion? Reach out without going through sales intermediaries.",
      successTitle: "Transmission Confirmed",
      successDesc:
        "Thank you. Your project inquiry has been securely queued. We review all technical submissions within 24 business hours.",
      resetButton: "Send Another Inquiry",
    },
    footer: {
      tagline: "Engineered with Computer Science rigor and bespoke digital art direction.",
      rights: "All rights reserved.",
      status: "Systems Operational",
      location: "Istanbul & Global Remote",
    },
    common: {
      startProject: "Start a Project",
      viewWork: "View Work",
      exploreServices: "Explore Services",
      letsTalk: "Let's Talk",
      returnHome: "Return Home",
      back: "Back",
      next: "Next",
    },
  },
};

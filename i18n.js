/* ==========================================================================
   Luxe Villa — Bilingual System (Persian [Default] & English)
   Source of Truth: Persian from index2.html, English from index2.html / index.html
   ========================================================================== */
(function () {
  'use strict';

  var I18N = {
    fa: {
      "meta.title": "لوکس ویلا — اقامتگاه‌های خصوصی ایران",
      "meta.desc": "لوکس ویلا — مجموعه‌ای برگزیده از اقامتگاه‌های لوکس و نشانی‌های کمیاب در ایران.",
      "skip": "رفتن به محتوا",
      "brand": "لوکس ویلا",
      "nav.about": "درباره ما",
      "nav.portfolio": "املاک",
      "nav.investment": "سرمایه‌گذاری",
      "nav.contact": "تماس",
      "nav.inquire": "درخواست خصوصی",
      "scrub": "گشت مجازی",
      "scroll": "برای کاوش اسکرول کنید",
      "p1.eyebrow": "املاک خصوصی · از سال ۱۳۸۳",
      "p1.headline": "جایی که خانه،<br>به <em>میراث</em> تبدیل می‌شود.",
      "p1.sub": "مجموعه‌ای برگزیده از اقامتگاه‌های لوکس و نشانی‌های کمیاب — در بهترین محله‌های تهران، کیش، رامسر و اصفهان.",
      "p1.cta1": "مشاهده‌ی املاک",
      "p1.cta2": "درباره‌ی ما",
      "p2.eyebrow": "۰۱ — درباره‌ی لوکس ویلا",
      "p2.headline": "دو دهه.<br>هزار خانه.<br><em>یک وعده.</em>",
      "p2.sub": "ما خانه نمی‌فروشیم. خانواده‌ها را به نشانی‌ای معرفی می‌کنیم که از خودشان بیشتر عمر خواهد کرد.",
      "p2.cta": "ورود · درباره‌ی ما",
      "p3.eyebrow": "۰۲ — مجموعه",
      "p3.headline": "خانه‌هایی که<br>هرگز <em>تکرار نمی‌شوند.</em>",
      "p3.sub": "از باغ‌ویلاهای لواسان تا سواحل کیش — هر ملک، نشانی‌ای تکرارنشدنی.",
      "p3.cta": "ورود · املاک",
      "p4.eyebrow": "۰۳ — سرمایه‌گذاری",
      "p4.headline": "سرمایه‌ی شما،<br><em>بر سنگ بنا می‌شود.</em>",
      "p4.sub": "سند مالکیت شش‌دانگ، ساخت تأییدشده در حساب امانی، و نشانی‌های ممتازی که برای حفظ ثروت در طول نسل‌ها انتخاب شده‌اند.",
      "p4.cta": "ورود · سرمایه‌گذاری",
      "p5.eyebrow": "۰۴ — میز خصوصی",
      "p5.headline": "نخستین قدم،<br>یک <em>گفت‌وگو است.</em>",
      "p5.sub": "بازدید خصوصی، فهرست‌های خارج از بازار، و جلسات محرمانه — کاملاً به صلاحدید شما.",
      "p5.cta": "ورود · تماس با ما",
      "about.eyebrow": "درباره‌ی لوکس ویلا",
      "about.title": "خانه یک بار خریده می‌شود. نشانی، به ارث می‌رسد.",
      "about.p1": "لوکس ویلا بر یک باور بنا شده است: بهترین خانه‌ها فروخته نمی‌شوند — به امانت سپرده می‌شوند. بیش از دو دهه است که خانواده‌های خوش‌سلیقه را به اقامتگاه‌هایی می‌رسانیم که از مد، بازار و نسل‌ها عمر بیشتری می‌کنند.",
      "about.p2": "مجموعه‌ی ما از باغ‌ویلاهای لواسان و زعفرانیه تا سواحل کیش، جنگل‌های رامسر و عمارت‌های تاریخی اصفهان گسترده است. هر ملک حضوری بازدید می‌شود. هر فروشنده تأیید می‌شود. هر خریدار معرفی می‌شود — نه تبلیغ.",
      "about.v1.num": "۰۱ / محرمانگی",
      "about.v1.title": "اول، خارج از بازار",
      "about.v1.desc": "نیمی از فهرست‌های ما هرگز به بازار عمومی نمی‌رسند. آرام، میان خانواده‌ها، از ما عبور می‌کنند.",
      "about.v2.num": "۰۲ / راستی‌آزمایی",
      "about.v2.title": "هر سند، بررسی‌شده",
      "about.v2.desc": "وضعیت شش‌دانگ، تاریخچه‌ی امانی و هر قید حقوقی — پیش از نخستین بازدید، حسابرسی‌شده.",
      "port.eyebrow": "فهرست کنونی",
      "port.title": "مجموعه‌ای کمیاب",
      "port.intro": "چهار اقامتگاه که هم‌اکنون از طریق نمایندگی خصوصی در دسترس هستند. هر یک تأییدشده، یکتا و تکرارنشدنی.",
      "port.p1.title": "باغ‌ویلا لواسان",
      "port.p1.desc": "باغ‌ویلایی دوطبقه با نمای سنگ تراورتن، استخر بی‌نهایت رو به دره، باغ زیتون اختصاصی و سند شش‌دانگ.",
      "port.p1.specs": "۹۲۰ متر · لواسان",
      "port.p2.title": "ویلای ساحلی کیش",
      "port.p2.desc": "ویلایی مدرن با نمای شیشه‌ای رو به خلیج فارس، اسکله‌ی خصوصی، استخر روباز و امتیازات منطقه‌ی آزاد.",
      "port.p2.specs": "۷۸۰ متر · کیش",
      "port.p3.title": "عمارت جنگلی رامسر",
      "port.p3.desc": "اقامتگاهی میان جنگل و دریا، با تراس‌های پلکانی، مجموعه‌ی سلامت زیرزمینی و منظر مستقیم به کاسپین.",
      "port.p3.specs": "۸۵۰ متر · رامسر",
      "port.p4.title": "پنت‌هاوس زعفرانیه",
      "port.p4.desc": "پنت‌هاوسی دوطبقه با گالری مرکزی، منظر پانوراما به البرز، لابی اختصاصی و پارکینگ سرپوشیده.",
      "port.p4.specs": "۵۲۰ متر · تهران، زعفرانیه",
      "port.view": "مشاهده ←",
      "inv.eyebrow": "برای سرمایه‌گذاران",
      "inv.title": "آنجا بخرید که زمین، پیش از خریداران تمام می‌شود.",
      "inv.p1": "لوکس ویلا تخصیص‌های مستقیم مالکیت کامل را برای دفاتر خانوادگی، صندوق‌های سرمایه‌گذاری و خریداران خصوصی که به دنبال حضور در املاک مسکونی ممتاز ایران هستند، ارائه می‌دهد.",
      "inv.p2": "مشتریان ما فهرست نمی‌خرند — نشانی‌های کمیاب را تصاحب می‌کنند. منطقه‌بندی محافظت‌شده، عرضه‌ی محدود و تقاضای پایدار داخلی، این دارایی‌ها را به یکی از قابل‌دفاع‌ترین سرمایه‌گذاری‌های املاک ایران تبدیل کرده است.",
      "inv.m1v": "۱۰۰٪",
      "inv.m1": "سند شش‌دانگ",
      "inv.m1s": "مالکیت کامل و بدون قید، پیش از فهرست تأییدشده.",
      "inv.m2v": "ممتاز",
      "inv.m2": "نشانی‌های کلیدی",
      "inv.m2s": "مناطق محافظت‌شده با تقاضای پایدار بلندمدت.",
      "inv.m3": "رده‌ی انرژی",
      "inv.m3s": "ساخت‌های مدرن با پوسته‌ی عایق و مصرف بهینه.",
      "inv.m4v": "مستقیم",
      "inv.m4": "پشتوانه‌ی ملک",
      "inv.m4s": "دارایی مشهود با تراکنش‌های حسابرسی‌شده در امانت.",
      "con.eyebrow": "درخواست خصوصی",
      "con.title": "گفت‌وگو با میز مشاوره‌ی خصوصی ما.",
      "con.intro": "چه در جست‌وجوی نشانی خاصی باشید، چه خواستار بازدیدی خصوصی، یا کاوش تخصیص‌های آینده — همه‌چیز با یک گفت‌وگوی محرمانه آغاز می‌شود.",
      "con.addrLabel": "دفتر مشاوره",
      "con.addr": "تهران، زعفرانیه · خیابان مقدس اردبیلی",
      "con.emailLabel": "مکاتبات",
      "con.hoursLabel": "ساعات پذیرش",
      "con.hours": "شنبه تا پنج‌شنبه · ۰۹:۰۰ تا ۱۹:۰۰",
      "form.name": "نام و نام خانوادگی",
      "form.email": "ایمیل",
      "form.phone": "تلفن",
      "form.profile": "پروفایل خریدار",
      "form.opt1": "خریدار شخصی",
      "form.opt2": "دفتر خانوادگی",
      "form.opt3": "صندوق سرمایه‌گذاری",
      "form.opt4": "مشاور ثروت",
      "form.msg": "پیام",
      "form.msgph": "بنویسید در جست‌وجوی کدام نشانی هستید یا بازدید را چه زمانی ترجیح می‌دهید…",
      "form.submit": "ارسال درخواست خصوصی",
      "form.feedback": "✓ دریافت شد. مشاور ارشد ما تا ۴ ساعت کاری با شما تماس می‌گیرد.",
      "foot.tagline": "املاک خصوصی، نشانی‌های کمیاب و نمایندگی محرمانه‌ی املاک در بهترین مناطق ایران.",
      "foot.listings": "املاک",
      "foot.p1": "باغ‌ویلا لواسان",
      "foot.p2": "ویلای ساحلی کیش",
      "foot.p3": "عمارت جنگلی رامسر",
      "foot.p4": "پنت‌هاوس زعفرانیه",
      "foot.company": "شرکت",
      "foot.legal": "حقوقی",
      "foot.g1": "اسناد تأییدشده",
      "foot.g2": "ساختار امانی",
      "foot.g3": "حریم خصوصی",
      "foot.g4": "شرایط",
      "foot.copy": "© ۱۴۰۵ لوکس ویلا. تمامی حقوق محفوظ است.",
      "foot.note": "نمایندگی خصوصی املاک · تنها با تعیین وقت.",
      "modal.footprint": "مساحت کل",
      "modal.suites": "امکانات اقامتی",
      "modal.materials": "پالت مصالح",
      "modal.overview": "مرور معماری",
      "modal.schedule": "درخواست بازدید خصوصی",
      "modal.close": "بستن مرور"
    },
    en: {
      "meta.title": "Luxe Villa — Private Residences & Architectural Investments",
      "meta.desc": "Luxe Villa — A curated portfolio of rare private residences and protected addresses in Iran.",
      "skip": "Skip to content",
      "brand": "Luxe Villa",
      "nav.about": "About",
      "nav.portfolio": "Homes",
      "nav.investment": "Investment",
      "nav.contact": "Contact",
      "nav.inquire": "Private Inquiry",
      "scrub": "Walkthrough",
      "scroll": "Scroll to explore",
      "p1.eyebrow": "Private Estates · Since 2004",
      "p1.headline": "Where home<br>becomes a <em>legacy.</em>",
      "p1.sub": "A curated portfolio of rare private residences in Iran's most protected addresses — Tehran, Kish, Ramsar, and Isfahan.",
      "p1.cta1": "Explore Homes",
      "p1.cta2": "About Us",
      "p2.eyebrow": "01 — About Luxe Villa",
      "p2.headline": "Two decades.<br>One thousand homes.<br><em>One promise.</em>",
      "p2.sub": "We don't sell houses. We introduce families to the address that will outlive them.",
      "p2.cta": "Enter · About Us",
      "p3.eyebrow": "02 — The Collection",
      "p3.headline": "Homes that<br>never repeat <em>themselves.</em>",
      "p3.sub": "From Lavasan garden-villas to the shores of Kish — each property, an unrepeatable address.",
      "p3.cta": "Enter · Homes",
      "p4.eyebrow": "03 — Investment",
      "p4.headline": "Your capital,<br><em>set in stone.</em>",
      "p4.sub": "Freehold title, escrow-verified construction, and prime Iranian addresses engineered to preserve wealth across generations.",
      "p4.cta": "Enter · Investment",
      "p5.eyebrow": "04 — Private Desk",
      "p5.headline": "The first step<br>is a <em>conversation.</em>",
      "p5.sub": "Private viewings, off-market listings, and confidential briefings — arranged entirely at your discretion.",
      "p5.cta": "Enter · Contact",
      "about.eyebrow": "About Luxe Villa",
      "about.title": "A house is bought once. An address is inherited.",
      "about.p1": "Luxe Villa was founded on a single conviction: the finest homes are not sold — they are entrusted. For over two decades, we have matched discerning families with residences that outlive trends, markets, and generations.",
      "about.p2": "Our portfolio spans the garden-villas of Lavasan and Zaferanieh to the shores of Kish, the forests of Ramsar, and the historic estates of Isfahan. Every listing is inspected in person. Every seller is verified. Every buyer is introduced — never marketed to.",
      "about.v1.num": "01 / Confidentiality",
      "about.v1.title": "Off-Market First",
      "about.v1.desc": "Half our listings never reach the open market. They move between families, quietly, through us.",
      "about.v2.num": "02 / Verification",
      "about.v2.title": "Every Title, Checked",
      "about.v2.desc": "Freehold status, escrow history, and legal encumbrances — audited before a single viewing.",
      "port.eyebrow": "Current Listings",
      "port.title": "A Rare Collection",
      "port.intro": "Four residences currently available through private representation. Each verified, each unique, each unrepeatable.",
      "port.p1.title": "Lavasan Garden-Villa",
      "port.p1.desc": "A two-level travertine garden-villa with an infinity pool facing the valley, a private olive grove, and freehold title.",
      "port.p1.specs": "920 m² · Lavasan",
      "port.p2.title": "Kish Coastal Villa",
      "port.p2.desc": "A modern glass facade overlooking the Persian Gulf, with a private jetty, open-air pool, and free-zone privileges.",
      "port.p2.specs": "780 m² · Kish",
      "port.p3.title": "Ramsar Forest Estate",
      "port.p3.desc": "An estate between forest and sea, with tiered terraces, a subterranean wellness suite, and direct Caspian views.",
      "port.p3.specs": "850 m² · Ramsar",
      "port.p4.title": "Zaferanieh Penthouse",
      "port.p4.desc": "A duplex penthouse with a central gallery, panoramic Alborz views, a private lobby, and covered parking.",
      "port.p4.specs": "520 m² · Tehran, Zaferanieh",
      "port.view": "View →",
      "inv.eyebrow": "For Investors",
      "inv.title": "Buy where the land runs out before the buyers do.",
      "inv.p1": "Luxe Villa curates direct freehold allocations for family offices, investment funds, and private buyers seeking exposure to prime Iranian residential real estate.",
      "inv.p2": "Our clients don't buy listings — they acquire scarce addresses. Protected zoning, limited supply, and enduring domestic demand make these among the most defensible assets in Iranian real estate.",
      "inv.m1v": "100%",
      "inv.m1": "Freehold Title",
      "inv.m1s": "Unencumbered deed ownership, verified before listing.",
      "inv.m2v": "Prime",
      "inv.m2": "Key Addresses",
      "inv.m2s": "Protected zones with enduring long-term demand.",
      "inv.m3": "Energy Rating",
      "inv.m3s": "Modern builds with insulated envelopes and efficient consumption.",
      "inv.m4v": "Direct",
      "inv.m4": "Asset Backed",
      "inv.m4s": "Tangible property with escrow-audited transactions.",
      "con.eyebrow": "Private Inquiries",
      "con.title": "Speak with our private advisory desk.",
      "con.intro": "Whether you're seeking a specific address, requesting a private viewing, or exploring future allocations — everything begins with a discreet conversation.",
      "con.addrLabel": "Advisory Office",
      "con.addr": "Tehran, Zaferanieh · Moghaddas Ardebili St.",
      "con.emailLabel": "Correspondence",
      "con.hoursLabel": "Concierge Hours",
      "con.hours": "Saturday – Thursday · 09:00 – 19:00",
      "form.name": "Full Name",
      "form.email": "Email",
      "form.phone": "Telephone",
      "form.profile": "Buyer Profile",
      "form.opt1": "Private Buyer",
      "form.opt2": "Family Office",
      "form.opt3": "Investment Fund",
      "form.opt4": "Wealth Advisory",
      "form.msg": "Message",
      "form.msgph": "Tell us which address you're seeking, or your preferred viewing window…",
      "form.submit": "Send Private Inquiry",
      "form.feedback": "✓ Received. A senior advisor will respond within 4 business hours.",
      "foot.tagline": "Private estates, rare addresses, and confidential real estate representation across Iran's finest territories.",
      "foot.listings": "Listings",
      "foot.p1": "Lavasan Garden-Villa",
      "foot.p2": "Kish Coastal Villa",
      "foot.p3": "Ramsar Forest Estate",
      "foot.p4": "Zaferanieh Penthouse",
      "foot.company": "Company",
      "foot.legal": "Legal",
      "foot.g1": "Verified Titles",
      "foot.g2": "Escrow Architecture",
      "foot.g3": "Privacy Policy",
      "foot.g4": "Terms",
      "foot.copy": "© 2026 Luxe Villa. All rights reserved.",
      "foot.note": "Private real estate representation · By appointment only.",
      "modal.footprint": "Total Footprint",
      "modal.suites": "Accommodations",
      "modal.materials": "Material Palette",
      "modal.overview": "Overview",
      "modal.schedule": "Schedule Private Viewing",
      "modal.close": "Close Overview"
    }
  };

  /* Project details for modal (bilingual) */
  var PROJECTS = [
    {
      fa: {
        title: "باغ‌ویلا لواسان",
        location: "تهران · لواسان، باستی هیلز",
        status: "آماده تحویل",
        footprint: "۹۲۰ متر مربع",
        suites: "۶ سوئیت، ۷ حمام، استخر بی‌نهایت ۲۵ متری",
        materials: "تراورتن رومی، برنز مات، چوب بلوط بلژیکی",
        description: "باغ‌ویلایی دوطبقه با نمای سنگ تراورتن، استخر بی‌نهایت رو به دره، باغ زیتون اختصاصی و سند شش‌دانگ مسکونی. طراحی هماهنگ با بستر طبیعی و چشم‌انداز باز به کوهپایه."
      },
      en: {
        title: "Lavasan Garden-Villa",
        location: "Tehran · Lavasan, Basti Hills",
        status: "Completed",
        footprint: "920 m²",
        suites: "6 Suites, 7 Baths, 25m Infinity Pool",
        materials: "Roman Travertine, Brushed Bronze, Belgian Oak",
        description: "A two-level travertine garden-villa with an infinity pool facing the valley, a private olive grove, and freehold title. Designed in harmony with the hillside topography."
      }
    },
    {
      fa: {
        title: "ویلای ساحلی کیش",
        location: "جزیره کیش · نوار ساحلی مرجان",
        status: "تخصیص خصوصی",
        footprint: "۷۸۰ متر مربع",
        suites: "۵ سوئیت، اسکله‌ی اختصاصی، سالن پذیرایی روباز",
        materials: "سنگ گرانیت، شیشه‌های چندجداره، چوب سدر",
        description: "ویلایی مدرن با نمای شیشه‌ای رو به خلیج فارس، اسکله‌ی خصوصی، استخر روباز و امتیازات منطقه‌ی آزاد تجاری. دسترسی مستقیم به آب‌های شفاف و لنگرگاه اختصاصی."
      },
      en: {
        title: "Kish Coastal Villa",
        location: "Kish Island · Marjan Coastal Strip",
        status: "Private Allocation",
        footprint: "780 m²",
        suites: "5 Suites, Private Jetty, Open-Air Pavilion",
        materials: "Granite, Architectural Glazing, Cedar Slatting",
        description: "A modern glass facade overlooking the Persian Gulf, with a private jetty, open-air pool, and free-zone privileges. Direct access to pristine coastal waters."
      }
    },
    {
      fa: {
        title: "عمارت جنگلی رامسر",
        location: "مازندران · رامسر، ارتفاعات اربکله",
        status: "در حال احداث",
        footprint: "۸۵۰ متر مربع",
        suites: "۵ سوئیت، مجموعه‌ی سلامت زیرزمینی، گالری ۴ خودرو",
        materials: "بتن اکسپوز، سنگ ماسه‌ای محلی، چوب تیک",
        description: "اقامتگاهی میان جنگل‌های هیرکانی و دریا، با تراس‌های پلکانی، مجموعه‌ی سلامت زیرزمینی و منظر مستقیم به دریای کاسپین. سازه‌ای پایدار و مقاوم با کنسول‌های جسورانه."
      },
      en: {
        title: "Ramsar Forest Estate",
        location: "Mazandaran · Ramsar, Arba Kaleh",
        status: "Under Construction",
        footprint: "850 m²",
        suites: "5 Suites, Subterranean Wellness Suite, 4-Car Gallery",
        materials: "Cast Fair-Faced Concrete, Local Sandstone, Teak",
        description: "An estate between forest and sea, with tiered terraces, a subterranean wellness suite, and direct Caspian views. Engineered with bold cantilevers."
      }
    },
    {
      fa: {
        title: "پنت‌هاوس زعفرانیه",
        location: "تهران · زعفرانیه، خیابان آصف",
        status: "تخصیص آتی",
        footprint: "۵۲۰ متر مربع",
        suites: "۴ سوئیت، تراس بام خصوصی، پارکینگ سرپوشیده",
        materials: "سنگ پیِترا سرنا، پنل‌های چوب گردو، شیشه‌های سه‌جداره",
        description: "پنت‌هاوسی دوطبقه با گالری مرکزی، منظر ۳۶۰ درجه به البرز، لابی اختصاصی با آسانسور پرسرعت و امکانات رفاهی هوشمند. اوج آرامش در بلندترین نقطه زعفرانیه."
      },
      en: {
        title: "Zaferanieh Penthouse",
        location: "Tehran · Zaferanieh, Asef Street",
        status: "Upcoming Allocation",
        footprint: "520 m²",
        suites: "4 Suites, Private Roof Terrace, Covered Parking",
        materials: "Pietra Serena Limestone, Walnut Paneling, Triple Glazing",
        description: "A duplex penthouse with a central gallery, panoramic Alborz views, a private lobby, and covered parking. The pinnacle of residential exclusivity."
      }
    }
  ];

  var html = document.documentElement;
  var currentLang = 'fa';
  var activeProjectIndex = -1;

  function applyMasks(root) {
    root.querySelectorAll('.overlay-headline').forEach(function (el) {
      var lines = el.innerHTML.split(/<br\s*\/?>/i);
      el.innerHTML = lines.map(function (line) {
        return '<span class="mask"><span class="mask-inner">' + line + '</span></span>';
      }).join('');
    });
  }

  function applyLang(lang, animate) {
    if (lang !== 'fa' && lang !== 'en') lang = 'fa';
    currentLang = lang;
    var dict = I18N[lang] || I18N.fa;

    if (animate) {
      document.body.classList.add('lang-transitioning');
    }

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

    // Title & Meta
    if (dict["meta.title"]) document.title = dict["meta.title"];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.desc"]) metaDesc.setAttribute('content', dict["meta.desc"]);

    // Update data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Update data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Update data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    // Re-apply headline masks
    applyMasks(document);

    // Update language switch buttons
    document.querySelectorAll('.lang-switch').forEach(function (btn) {
      btn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
      btn.querySelectorAll('[data-lang-label]').forEach(function (lbl) {
        lbl.classList.toggle('is-active', lbl.getAttribute('data-lang-label') === lang);
      });
    });

    // If modal is open, refresh its content in current language
    if (activeProjectIndex >= 0) {
      renderModal(activeProjectIndex);
    }

    try {
      localStorage.setItem('siteLanguage', lang);
      localStorage.setItem('lv-lang', lang);
    } catch (e) {}

    if (animate) {
      setTimeout(function () {
        document.body.classList.remove('lang-transitioning');
      }, 140);
    }
  }

  function toggleLang() {
    applyLang(currentLang === 'fa' ? 'en' : 'fa', true);
  }

  /* ---------------- Modal Controller ---------------- */
  function renderModal(idx) {
    var p = PROJECTS[idx];
    if (!p) return;
    activeProjectIndex = idx;
    var data = p[currentLang] || p.fa;
    var modal = document.getElementById('projectModal');
    if (!modal) return;

    var elTitle = document.getElementById('modalTitle');
    var elLoc = document.getElementById('modalLocation');
    var elStat = document.getElementById('modalStatus');
    var elFoot = document.getElementById('modalFootprint');
    var elSuites = document.getElementById('modalSuites');
    var elMat = document.getElementById('modalMaterials');
    var elDesc = document.getElementById('modalDescription');

    if (elTitle) elTitle.textContent = data.title;
    if (elLoc) elLoc.textContent = data.location;
    if (elStat) elStat.textContent = data.status;
    if (elFoot) elFoot.textContent = data.footprint;
    if (elSuites) elSuites.textContent = data.suites;
    if (elMat) elMat.textContent = data.materials;
    if (elDesc) elDesc.textContent = data.description;
  }

  window.openProjectModal = function (idx) {
    renderModal(idx);
    var modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function () {
    var modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeProjectIndex = -1;
  };

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeProjectModal();
  });

  /* ---------------- Init ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    // Attach toggle listeners
    document.querySelectorAll('.lang-switch').forEach(function (btn) {
      btn.addEventListener('click', toggleLang);
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleLang();
        }
      });
    });

    // Bind project view buttons
    document.querySelectorAll('.btn-view').forEach(function (btn, idx) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        window.openProjectModal(idx);
      });
    });

    // Determine initial language: Default is PERSIAN ('fa')
    var initialLang = 'fa';
    try {
      var saved = localStorage.getItem('siteLanguage') || localStorage.getItem('lv-lang');
      if (saved === 'en' || saved === 'fa') {
        initialLang = saved;
      }
    } catch (e) {}

    applyLang(initialLang, false);
  });

  // Expose global debug API
  window.__I18N = {
    getLang: function () { return currentLang; },
    setLang: function (l) { applyLang(l, false); },
    toggleLang: toggleLang,
    getDictionary: function () { return I18N; }
  };
})();

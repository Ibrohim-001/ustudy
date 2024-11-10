// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    // i18n.js

    uz: {
      translation: {
        courses: "Kurslar",
        advice: "Maslahat",
        contact: "Bog'lanish",
        welcome_message: "Xush kelibsiz!",
        Frontend: "Frontend",
        cybersecurity: "Kiberxavfsizlik",
        About_course: "Kurs_haqida",
        motion_design: "Motion design",
        graphic_design: "Graphic design",
        backend: "Backend",
        study_with: "dasturlashni",
        learn: "o'rganing",
        join: "Ishtrok Etish",
        mainPage: "bosh sahifa",
        development: "dasturlash",
        help: "Biz sizga to'g'ri kursni tanlashda yordam beramiz!",
        frontent:
          "Frontend dasturlash - bu dinamik va interaktiv veb-sahifalarni yaratishni o'zlashtirish uchun mo'ljallangan intensiv va amaliyotgayo'naltirilgan kursdir. Kurs HTML va CSS dan zamonaviy JavaScriptramkalar va TypeScriptgacha bo‘lgan texnologiyalarning to‘liqspektrini qamrab oladi, bu esa ishtirokchilarga Frontend ishlabchiqish sohasida yuqori malakali mutaxassislar bo‘lish imkonini beradi.",
        backent:
          "Python Back-end kursimiz bilan server tomonidagi rivojlanish dunyosiga chuqurroq kirib boring! Ishonchli va keng masshtabga ega veb-ilovalarni yaratish uchun kuchli vositalarni o'zlashtiring. Bizga qo'shiling va bugunoq IT-sohasida muvaffaqiyatli karyera qurishni boshlang!",
        ciber:
          "'Kiberxavsizlikka kirish' - bu chuqur kirish kursi va kiberxavfsizlik bo'yicha asosiy bilimlarni, shu jumladan asosiy tushunchalarni qamrab oladi kiberxavfsizlik, kriptografiya asoslari, kirishni boshqarish, tarmoq va kompyuter xavfsizlik, axborot xavfsizligiga tahdidlarning asosiy turlarini, shuningdek usullarini ochib beradi va ularga qarshi kurashish usullari. Kurs asosiy tushunchaga erishmoqchi bo'lgan har bir kishi uchun javob beradi ushbu sohaning asoslari.",
        graphicDesc:
          "Bizning grafik dizayn kursimiz bilan ijodiy salohiyatingizni oching. Vizual muloqot olamiga sho'ng'ing va nafaqat tasvirlarni, balki samarali xabarlarni yaratuvchi ekspertga aylaning.",
        motionDesc:
          "Motion dizayn kursi bilan ijodiy energiya oqimingizni oching: animatsiya olamini kashf eting va ilg‘or animatsiya vositalari va usullaridan foydalangan holda jozibali vizual hikoyalar yarating.",
      },
    },
    ru: {
      translation: {
        courses: "Курсы",
        advice: "Совет",
        contact: "Связаться",
        welcome_message: "Добро пожаловать!",
        Frontend: "Фронтенд",
        cybersecurity: "Кибербезопасность",
        motion_design: "Motion-дизайн",
        graphic_design: "Графический дизайн",
        backend: "Бэкенд",
        About_course: "О курсе:",
        study_with: "изучайте с",
        learn: "учитесь",
        join: "Присоединиться",
        mainPage: "главная страница",
        development: "разработка",
        help: "Biz sizga to'g'ri kursni tanlashda yordam beramiz!",
        frontent:
          "Frontend разработка — это интенсивный и практико-ориентированный курс, предназначенный для освоения создания динамичных и интерактивных веб-страниц. Курс охватывает весь спектр технологий от HTML, CSS и JavaScript, позволяя участникам стать высококвалифицированными специалистами в области фронтенд разработки.",
        backent:
          "Углубитесь в мир серверной разработки с нашим курсом Back-end на Python! Овладейте мощными инструментами для создания надежных и масштабируемых веб-приложений. Присоединяйтесь к нам и начните строить успешную карьеру в IT уже сегодня!",
        ciber:
          "«Введение в кибербезопасность» является широким ознакомительным курсом и охватывает основные знания в области кибербезопасности, включая базовые понятия кибербезопасности, основы криптографии, контроля доступа, сетевой и компьютерной безопасности, раскрывает основные типы угроз информационной безопасности, а также методы и способы противодействия им. Курс подойдет всем желающим достигнуть базового понимания основ данной сферы.",
        graphicDesc:
          "Раскройте свой творческий потенциал с нашим курсом по графическому дизайну. Погрузитесь в мир визуальной коммуникации и станьте мастером, создающим не просто изображения, а эффективные послания.",
        motionDesc:
          "Откройте в себе поток творческой энергии с курсом по моушн дизайну: исследуйте мир анимации и создавайте захватывающие визуальные истории с помощью передовых инструментов и техник анимации.",
      },
    },
    en: {
      translation: {
        courses: "Courses",
        graphic_design: "Graphic design",
        motion_design: "Motion design",
        advice: "Advice",
        contact: "Contact",
        welcome_message: "Welcome!",
        help: "Biz sizga to'g'ri kursni tanlashda yordam beramiz!",
        frontent:
          "Frontend development - is an intensive and practice-oriented course designed to master the creation of dynamic and interactive web pages. The course covers the full range of technologies from HTML and CSS to modern JavaScript frameworks and TypeScript, allowing participants to become highly qualified specialists in the field of Frontend development.",
        backent:
          "Dive deeper into the world of server-side development with our Python Back-end course! Master powerful tools to build reliable and scalable web applications. Join us and start building a successful career in IT today!",
        ciber:
          "'Introduction to Cybersecurity' is a broad introductory course and covers basic cybersecurity knowledge, including basic concepts cybersecurity, basics of cryptography, access control, network and computer security, reveals the main types of information security threats, as well as methods and ways to counter them. The course is suitable for everyone who wants to achieve a basic understanding fundamentals of this area.",
        graphicDesc:
          "Unleash your creativity with our graphic design course. Immerse yourself in the world of visual communication and become a master at creating not just images, but effective messages.",
        motionDesc:
          "Unleash your creativity with a motion design course: explore the world of animation and create compelling visual stories using advanced animation tools and techniques.",
      },
    },
  },
  lng: "uz", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;

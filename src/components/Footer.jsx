
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#181524] text-black dark:text-white py-10 px-8 md:px-28">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Логотип и авторские права */}
        <div className="text-center md:text-left">
          <img src="https://ustudy.uz/img/logo.svg" alt="U Study Logo" className="mb-3" />
          <p>&copy; 2024 Uzinfocom. All Rights Reserved.</p>
        </div>

        {/* Ссылки на страницы */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="cursor-pointer text-slate-600">Menyu</p>
          <p className="hover:text-[#40d09d] cursor-pointer transition">Kurslar</p>
          <p className="hover:text-[#40d09d] cursor-pointer transition">Konsultatsiya</p>
          <p className="hover:text-[#40d09d] cursor-pointer transition">Kontaktlar</p>
        </div>

        {/* Контактная информация */}
        <div className="flex flex-col items-center md:items-start gap-2">
        <p className="cursor-pointer text-slate-600">Social Links</p>

          <p className="hover:text-[#40d09d] cursor-pointer transition">info@ustudy.uz</p>
          <p className="hover:text-[#40d09d] cursor-pointer transition">+998 (55) 501-5353</p>
        <div> 
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

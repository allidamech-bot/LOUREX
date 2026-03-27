import React from 'react';
import { ShoppingBag, Globe, Truck, Factory, ChevronLeft, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans w-full" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black text-blue-700 tracking-tighter italic">LOUREX</div>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-2xl font-bold shadow-lg shadow-blue-200 flex items-center gap-2">
            <Phone size={18} />
            تواصل معنا
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 px-6 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block tracking-wide">
            رؤية جديدة للتجارة الدولية
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
            من قلب <span className="text-blue-700 italic">تركيا</span> <br/> إلى أسواق <span className="text-blue-700 italic">الرياض</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            منصة LOUREX تربطك بأكبر مصانع المواد الغذائية والحلويات التركية. نضمن لك السعر، الجودة، والسرعة اللوجستية.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-700 font-bold">
            <div className="flex items-center gap-2 bg-slate-100 px-5 py-3 rounded-2xl">
              <Factory className="text-blue-700" /> توريد مباشر
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-5 py-3 rounded-2xl">
              <Truck className="text-blue-700" /> شحن موثوق
            </div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50/50 rounded-full blur-3xl -z-0"></div>
      </header>

      {/* Categories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'الحلويات والبسكويت', icon: <ShoppingBag />, desc: 'أفضل منتجات Ulker و Bifa بأسعار الجملة.' },
            { title: 'الخدمات اللوجستية', icon: <Truck />, desc: 'إدارة الشحن من المصنع إلى مستودعك في الرياض.' },
            { title: 'الوكالات التجارية', icon: <Globe />, desc: 'تمثيل حصري للمصانع التركية في السوق السعودي.' }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-700 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-3 italic">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Vision Section */}
      <section className="p-6">
        <div className="max-w-6xl mx-auto bg-blue-700 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="relative z-10 md:flex items-center justify-between">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-black mb-6 italic tracking-tight">نحن لا نبيع بضاعة، <br/> نحن نبني سلاسل إمداد.</h2>
              <p className="opacity-80 text-lg mb-8 font-medium italic">LOUREX هي حلقة الوصل بين خبرة الصناعة التركية واحتياج السوق السعودي المتنامي.</p>
              <button className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 shadow-xl">
                اطلب عرض سعر الآن
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 text-[20rem] opacity-10 italic font-black select-none leading-none">
            LX
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm font-bold tracking-widest uppercase">
        © 2026 LOUREX TRADING GROUP | RIYADH - ISTANBUL
      </footer>
    </div>
  );
}

export default App;

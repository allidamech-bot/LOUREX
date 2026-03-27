import React from 'react';
import { ShoppingBag, Globe, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <nav className="w-full flex justify-between items-center mb-10">
        <div className="text-2xl font-black text-blue-700">LOUREX</div>
        <button className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold">ابدأ</button>
      </nav>
      
      <div className="text-center mt-10">
        <h1 className="text-4xl font-extrabold mb-4">منصة LOUREX</h1>
        <p className="text-gray-500 mb-8">بوابة التجارة الدولية من تركيا إلى الرياض</p>
      </div>

      <div className="w-full max-w-sm bg-gray-50 p-6 rounded-3xl border border-gray-100 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-2xl text-blue-700"><ShoppingBag /></div>
          <h3 className="font-bold">قائمة المنتجات</h3>
        </div>
        <ArrowRight className="text-gray-300" />
      </div>
    </div>
  );
}

export default App;

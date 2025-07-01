# هيكل المشروع - Project Structure

## 📁 المجلدات والملفات الرئيسية

```
src/
├── components/              # مكونات عامة قابلة لإعادة الاستخدام
│   ├── Header.tsx           # الهيدر (الشريط العلوي)
│   ├── Footer.tsx           # الفوتر (الشريط السفلي)
│   ├── CarCard.tsx          # بطاقة سيارة واحدة
│   ├── CarList.tsx          # قائمة السيارات
│   ├── BookingSteps.tsx     # شريط خطوات الحجز
│   └── AuthForm.tsx         # فورم موحد لتسجيل الدخول/التسجيل/استرجاع كلمة المرور
├── pages/                   # صفحات التطبيق الرئيسية
│   ├── Landing.tsx          # الصفحة الرئيسية (Landing Page)
│   ├── Login.tsx            # صفحة تسجيل الدخول
│   ├── SignUp.tsx           # صفحة إنشاء حساب جديد
│   ├── ForgotPassword.tsx   # صفحة استرجاع كلمة المرور
│   ├── CarCollection.tsx    # صفحة عرض كل السيارات
│   ├── CarDetails.tsx       # صفحة تفاصيل سيارة واحدة
│   ├── Booking.tsx          # صفحة الحجز (الخطوة الأولى)
│   ├── BookingStep2.tsx     # صفحة الحجز (الخطوة الثانية)
│   └── BookingStep3.tsx     # صفحة الحجز (الخطوة الثالثة)
├── App.tsx                  # نقطة تجميع الصفحات (مع Router)
├── main.tsx                 # نقطة البداية
├── index.css                # ملف CSS الرئيسي مع Tailwind
└── vite-env.d.ts            # تعريفات TypeScript لـ Vite
```

---

## 🎯 شرح سريع لكل جزء

- **components/**: كل مكون صغير أو جزء متكرر (بطاقة، فورم، هيدر، فوتر...)
- **pages/**: كل صفحة رئيسية في التطبيق (تسجيل دخول، الصفحة الرئيسية، تفاصيل سيارة...)
- **App.tsx**: هنا يتم ربط كل الصفحات ببعض عن طريق React Router
- **main.tsx**: نقطة البداية للتطبيق
- **index.css**: ملف Tailwind والستايلات العامة
- **vite-env.d.ts**: تعريفات TypeScript خاصة بـ Vite

---

## 📝 أمثلة عملية

### إضافة مكون جديد
```typescript
// src/components/NewComponent.tsx
import React from 'react'

const NewComponent: React.FC = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-xl font-bold">مكون جديد</h2>
  </div>
)

export default NewComponent
```

### إضافة صفحة جديدة
```typescript
// src/pages/NewPage.tsx
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NewPage: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-8">
      {/* محتوى الصفحة */}
    </main>
    <Footer />
  </div>
)

export default NewPage
```

### استخدام Tailwind CSS
```jsx
<div className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors">
  زر تفاعلي
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* شبكة متجاوبة */}
</div>
```

---

## 🚀 أوامر مهمة

```bash
# تشغيل الخادم المحلي
npm run dev

# بناء المشروع للإنتاج
npm run build

# معاينة البناء
npm run preview

# فحص الأخطاء
npm run lint
```

---

## 🎨 أمثلة Tailwind CSS

- `bg-orange-500` - خلفية برتقالية
- `text-white` - نص أبيض
- `p-4` - مسافة داخلية
- `rounded-lg` - زوايا دائرية
- `shadow` - ظل
- `hover:bg-orange-600` - تغيير اللون عند التمرير
- `transition-colors` - انتقال سلس للألوان
- `grid grid-cols-3` - شبكة من 3 أعمدة 
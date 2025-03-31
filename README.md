# محمدمهدی عابدیان - 401110629 - تمرین یک برنامه سازی وب

## توضیحات پروژه

این پروژه 4 فرمول را پیاده‌سازی کرده است:

1.  **فرمول مثال تمرین:** محاسبه مقدار پرداختی بر اساس تعداد، قیمت و تخفیف.
2.  **فرمول محاسبه محیط دایره:** محاسبه محیط دایره با ورودی شعاع.
3.  **فرمول محاسبه مساحت دایره:** محاسبه مساحت دایره با ورودی شعاع.
4.  **فرمول محاسبه مساحت بیضی:** محاسبه مساحت بیضی با ورودی نیم‌قطر بزرگ و نیم‌قطر کوچک.

## ساختار HTML

* برای زیبایی، هر ورودی (label و input) در یک `div` با کلاس `input-group` قرار گرفته است.
* هر فرمول در یک `div` با کلاس `formula-group` قرار گرفته است.
* هر دو کلاس `input-group` و `formula-group` دارای حاشیه پایینی هستند تا از هم جدا شوند.
* هر `input` دارای `id` منحصر به فرد است.
* هر فرمول دارای یک ویژگی `eval` است که در `script.js` استفاده می‌شود.

## ساختار JavaScript (script.js)

1.  **بارگذاری DOM:**
    * از `document.addEventListener("DOMContentLoaded", () => { ... });` برای اطمینان از بارگذاری کامل عناصر HTML استفاده شده است.
2.  **انتخاب عناصر:**
    * `const inputs = document.querySelectorAll("input[type='text']");` یک `NodeList` از تمام ورودی‌های متنی ایجاد می‌کند.
    * `const formulas = document.querySelectorAll("formula");` یک `NodeList` از تمام عناصر `formula` ایجاد می‌کند.
3.  **تابع `updateFormulas()`:**
    * این تابع زمانی فراخوانی می‌شود که مقدار هر ورودی تغییر کند.
    * این تابع `calculateFormula()` را برای هر فرمول فراخوانی می‌کند تا مقادیر را به‌روزرسانی کند.
4.  **رویداد `input`:**
    * `inputs.forEach(input => { input.addEventListener("input", updateFormulas); });` رویداد `input` را به هر ورودی اضافه می‌کند تا `updateFormulas()` را در هر تغییر مقدار فراخوانی کند.
5.  **تابع `calculateFormula()`:**
    * `let expression = formula.getAttribute("evaluator");` مقدار ویژگی `eval` فرمول را در متغیر `expression` ذخیره می‌کند.
    * برای هر ورودی، `id` و `value` آن را استخراج می‌کند.
    * از `RegExp` برای جایگزینی `id` ورودی با `value` آن در `expression` استفاده می‌کند.
    * از `eval()` برای محاسبه `expression` به‌روزرسانی شده استفاده می‌کند.
    * در صورت خطا (ورودی نامعتبر، نتیجه غیر عددی)، پیام "invalid formula" را نمایش می‌دهد.
    * در غیر این صورت، نتیجه محاسبه شده را نمایش می‌دهد.

## نکات

* کد به گونه‌ای نوشته شده است که می‌توان چندین بار از عنصر `formula` استفاده کرد.
* گام‌های اولیه برای ریسپانسیو کردن پروژه برداشته شده، اما پروژه کاملاً ریسپانسیو نیست.
* برای نوشتن کد از ChatGPT کمک و ایده گرفته شده است.

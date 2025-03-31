# WebAssignment1

محمدمهدی عابدیان – 401110629 – تمرین یک برنامه سازی وب
این پروژه 4 فرمول را پیاده‌سازی کرده است. در ابتدا فرمول مثال خود فایل تمرین پیاده‌سازی شد که مقدار پرداختی به ازای تعداد مشخص و قیمت و تخفیف می‌باشد. فرمول بعدی محاسبه محیط و مساحت دایره بود که با ورودی شعاع دایره انجام می‌شود و فرمول چهارم مساحت بیضی است که با گرفتن نیم‌قطر بزرگ و نیم‌قطر کوچک انجام می‌شود.
برای زیبایی، label مربوط به هر ورودی و خود تگ ورودی داخل یک div با کلاس input-group قرار گرفته و همچنین تگ فرمول هم در div با formula-group قرار گرفته که هردوی آن‌ها یک حاشیه پایینی دارند، تا از همدیگر جدا باشند و زیبایی بصری داشته باشند در کنار هم.
Input ها همانطور که داخل سوال گفته شده، هرکدام id دارند و فرمول ها هم یک ورودی eval دارند که در script.js از آن استفاده می‌شود.
در اسکریپت جاوا اسکریپت، ابتدا خط زیر را گذاشتیم:
document.addEventListener("DOMContentLoaded", () => {
که اطمینان حاصل کنیم همه المنت های HTML بارگذاری شده‌اند. سپس در دو خط:
const inputs = document.querySelectorAll("input[type='text']");
const formulas = document.querySelectorAll("formula");

دو NodeList از ورودی‌ها و فرمول‌ها می‌سازیم.
سپس تابع updateFormulas را می‌سازیم که با رویداد عوض شدن متن یکی از ورودی ها، این تابع صدا زده می شود. در این تابع هم به ازای همه فرمول‌هایی که داریم، یک بار دیگر مقدارشان را با تابع calculateFormula محاسبه می‌کنیم.
function updateFormulas() {
    formulas.forEach(calculateFormula);
}
در این خطوط هم به همه ورودی‌ها تابع updateFormulas را به ازای رویداد ورودی می‌دهیم. 
inputs.forEach(input => {
    input.addEventListener("input", updateFormulas);
});
در تابع calculateFormula ابتدا مقدار eval تگ فرمول داخل متغیر expression ریخته می شود.
let expression = formula.getAttribute("evaluator");
سپس به ازای هر ورودی، id و مقدار آن را در متغیرهایی جداگانه نگه می‌داریم و رجکس قرار گرفتن یک اسم آیدی قبل از یک کلمه کامل و بعد آن را می‌سازیم. سپس هرجا مطابق رجکس بود، مقدار ورودی را با id داخل expression جایگذاری می‌کنیم تا فرمول ها بر اساس مقادیر به دست بیاید.
function calculateFormula(formula) {
    try {
        let expression = formula.getAttribute("evaluator");
        inputs.forEach(input => {
            const id = input.id;
            const value = parseFloat(input.value);
            const regex = new RegExp(`\\b${id}\\b`, "g");
            expression = expression.replace(regex, value);
        });
سپس با تابع eval فرمول داخل expression که حالا عددگذاری شده محاسبه می‌شود و در صورت خطا یا ورودی غیرمعتبر یا نتیجه غیرعددی، تابع invalid formula را خروجی می‌دهد و در غیر این صورت مقدار نهایی فرمول را.
به این صورت کل پروژه کار می‌کند.
کد به صورتی نوشته شده که بتوان چندین بار از formula استفاده کرد و همچنین گام‌های کمی در راستای ریسپانسیوسازی انجام گرفته ولی کامل ریسپانسیو نیست.
در نوشتن کد از chatgpt کمک و ایده گرفتم.


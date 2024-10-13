const randomNumber = Math.floor(Math.random() * 100) + 1; // توليد رقم عشوائي بين 1 و 100
let attempts = 0; // عدد المحاولات

document.getElementById("submit").addEventListener("click", function() {
    const guess = Number(document.getElementById("guess").value); // الحصول على التخمين
    attempts++; // زيادة عدد المحاولات

    if (guess === randomNumber) {
        document.getElementById("message").innerText = `مبروك! لقد خمنت الرقم الصحيح ${randomNumber} في ${attempts} محاولة.`;
        document.getElementById("message").style.color = 'green';
    } else if (guess < randomNumber) {
        document.getElementById("message").innerText = "حاول رقم أكبر.";
        document.getElementById("message").style.color = 'orange';
    } else {
        document.getElementById("message").innerText = "حاول رقم أصغر.";
        document.getElementById("message").style.color = 'orange';
    }
});


// توليد الرقم العشوائي:
// Math.floor(Math.random() * 100) + 1: يولد رقمًا عشوائيًا بين 1 و 100.
// عدد المحاولات:
// let attempts = 0;: متغير لحفظ عدد المحاولات التي يقوم بها اللاعب.
// التعامل مع زر التخمين:
// document.getElementById("submit").addEventListener("click", function() { ... });: يضيف حدثًا لزر "تخمين" عند النقر عليه.
// الحصول على التخمين:
// const guess = Number(document.getElementById("guess").value);: يستخرج القيمة المدخلة، ويحولها إلى رقم.
// زيادة عدد المحاولات:
// attempts++;: يزيد عدد المحاولات بمقدار واحد كل مرة يتم فيها التخمين.
// التحقق من التخمين:
// التخمين صحيح: إذا كان التخمين يساوي الرقم العشوائي، تعرض رسالة النجاح.
// التخمين أقل: إذا كان التخمين أقل، تعرض رسالة تطلب من اللاعب المحاولة برقم أكبر.
// التخمين أكبر: إذا كان التخمين أكبر، تعرض رسالة تطلب من اللاعب المحاولة برقم أصغر.
// الخلاصة
// هذا هو شرح كود لعبة تخمين الأرقام. يمكنك استخدام هذه اللعبة كتمرين برمجي لفهم كيفية التفاعل مع المستخدم ومعالجة المدخلات. إذا كان لديك أي أسئلة أخرى أو تحتاج لمزيد من التفاصيل، فلا تتردد في طرحها!







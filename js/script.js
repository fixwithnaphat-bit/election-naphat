// 1. ระบบตรวจสอบวันที่กดเข้าหน้าหลัก
const mainBtn = document.getElementById('main-entry-btn');
mainBtn.addEventListener('click', () => {
    const today = new Date();
    const unlockDate = new Date('2026-01-08'); // ตั้งเป็นปี 2026 ตามปัจจุบันของคุณ

    if (today >= unlockDate) {
        window.location.href = "main.html"; // ไปหน้าหลัก
    } else {
        alert("อดใจรออีกนิด! หน้าหลักจะเปิดให้เข้าชมในวันที่ 8 มกราคมนี้");
    }
});

// 2. ระบบ Chatbot
const chatTrigger = document.getElementById('chatbot-trigger');
const chatWindow = document.getElementById('chatbot-window');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');

chatTrigger.addEventListener('click', () => chatWindow.classList.toggle('hidden'));
closeChat.addEventListener('click', () => chatWindow.classList.add('hidden'));

function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('msg', sender);
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(input) {
    const msg = input.toLowerCase();

    // ====== สวัสดี / Greeting ======
    if (
        msg.includes("สวัสดี") ||
        msg.includes("hello") ||
        msg.includes("hi") ||
        msg.includes("你好") ||
        msg.includes("您好")
    ) {
        return "สวัสดีครับ! ทีมอาสาพัฒนา สจล. ยินดีตอบคำถามครับ 😊";
    }

    // ====== นโยบาย / Policy ======
    if (
        msg.includes("นโยบาย") ||
        msg.includes("policy") ||
        msg.includes("policies") ||
        msg.includes("政策")
    ) {
        return "นโยบายหลักของเราคือ: 1) รับฟังปัญหา 2) เป็นปากเป็นเสียง 3) ทำจริง 4) ทำงานร่วมองค์กร 5) สานต่อภารกิจ 6) ผลักดันสวัสดิการนักศึกษาครับ";
    }

    // ====== ผู้สมัคร / Candidate ======
    if (
        msg.includes("ผู้สมัคร") ||
        msg.includes("ใคร") ||
        msg.includes("ชื่อ") ||
        msg.includes("candidate") ||
        msg.includes("who") ||
        msg.includes("是谁")
    ) {
        return "ผู้สมัครคือ นายณภัทร ปัญโญ จากสาขาวิศวกรรมขนส่งทางราง คณะวิศวกรรมศาสตร์ สจล. ครับ";
    }

    // ====== คณะ / Faculty ======
    if (
        msg.includes("คณะ") ||
        msg.includes("faculty") ||
        msg.includes("department") ||
        msg.includes("学院")
    ) {
        return "คณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมเครื่องกล สาขาวิศวกรรมขนส่งทางราง สจล. ครับ";
    }

    // ====== วันเลือกตั้ง / Election date ======
    if (
        msg.includes("วันเลือกตั้ง") ||
        msg.includes("เลือกตั้ง") ||
        msg.includes("election") ||
        msg.includes("date") ||
        msg.includes("投票")
    ) {
        return "สามารถเข้าดูรายละเอียดและร่วมติดตามการเลือกตั้งได้ในวันที่ 8 ที่หน้าหลักเว็บไซต์ครับ 🗳️";
    }

    // ====== วิสัยทัศน์ / Vision ======
    if (
        msg.includes("วิสัยทัศน์") ||
        msg.includes("vision") ||
        msg.includes("目标")
    ) {
        return "วิสัยทัศน์ของเราคือ การเป็นตัวแทนนักศึกษาที่เข้าถึงง่าย โปร่งใส และผลักดันการเปลี่ยนแปลงได้จริงครับ";
    }

    // ====== ติดต่อ / Contact ======
    if (
        msg.includes("ติดต่อ") ||
        msg.includes("contact") ||
        msg.includes("ช่องทาง") ||
        msg.includes("联系")
    ) {
        return "สามารถติดตามข่าวสารและติดต่อทีมงานได้ผ่านช่องทางที่แสดงในหน้าเว็บไซต์หลักครับ";
    }

    // ====== ขอบคุณ / Thanks ======
    if (
        msg.includes("ขอบคุณ") ||
        msg.includes("thank") ||
        msg.includes("thanks") ||
        msg.includes("谢谢")
    ) {
        return "ขอบคุณมากครับที่ให้ความสนใจและสนับสนุน 🙏";
    }

    // ====== Fallback ======
    return "ขออภัยครับ ผมยังไม่มีข้อมูลในส่วนนี้ 😅 แต่คุณสามารถติดตามรายละเอียดเพิ่มเติมได้ในหน้าหลักวันที่ 8 นี้ครับ!";
}


sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (text) {
        addMessage(text, 'user');
        userInput.value = '';
        setTimeout(() => {
            addMessage(getBotResponse(text), 'bot');
        }, 500);
    }
});

// ให้กด Enter ในช่องแชทได้
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

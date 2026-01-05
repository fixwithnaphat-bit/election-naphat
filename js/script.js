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
    if (msg.includes("สวัสดี")) return "สวัสดีครับ! ทีมอาสาพัฒนา สจล. ยินดีตอบคำถามครับ";
    if (msg.includes("นโยบาย")) return "นโยบายหลักของเราคือ: 1.รับฟังปัญหา 2.เป็นปากเป็นเสียง 3.ทำจริง 4.ทำงานร่วมองค์กร 5.สานต่อภารกิจ 6.ผลักดันสวัสดิการครับ";
    if (msg.includes("ผู้สมัคร") || msg.includes("ใคร")) return "ผู้สมัครคือ นายณภัทร ปัญโญ จากวิศวกรรมขนส่งทางรางครับ";
    if (msg.includes("ชื่อ") || msg.includes("ใคร")) return "ผู้สมัครคือ นายณภัทร ปัญโญ จากวิศวกรรมขนส่งทางรางครับ";
    if (msg.includes("คณะ")) return "คณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมเครื่องกล สาขาวิศวกรรมขนส่งทางราง สจล. ครับ";
    
    return "ขออภัยครับ ผมยังไม่มีข้อมูลในส่วนนี้ แต่คุณสามารถติดตามรายละเอียดเพิ่มเติมได้ในหน้าหลักวันที่ 8 นี้ครับ!";
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

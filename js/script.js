        // ตั้งค่าสีตามที่กำหนด
        document.documentElement.style.setProperty('--primary-color', '#093a6e');
        document.documentElement.style.setProperty('--secondary-color', '#60cb30');
        
        // ควบคุมปุ่มเข้าหน้าหลัก
        const mainButton = document.getElementById('mainButton');
        mainButton.addEventListener('click', function(e) {
            e.preventDefault();
            const today = new Date();
            const targetDate = new Date(today.getFullYear(), today.getMonth(), 8);
            
            if (today >= targetDate) {
                alert('ยินดีต้อนรับสู่หน้าหลัก! ขณะนี้อยู่ในระหว่างการพัฒนา');
                // ตรงนี้สามารถเปลี่ยนหน้าได้ เช่น window.location.href = "main.html";
            } else {
                const daysUntil = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
                alert(`หน้าหลักจะเปิดให้ใช้งานในวันที่ 8 ของเดือนนี้ (อีกประมาณ ${daysUntil} วัน)`);
            }
        });
        
        // ควบคุมแชทบอต
        const chatbotButton = document.getElementById('chatbotButton');
        const chatbotWindow = document.getElementById('chatbotWindow');
        const closeChatbot = document.getElementById('closeChatbot');
        const sendMessageButton = document.getElementById('sendMessage');
        const userInput = document.getElementById('userInput');
        const chatbotMessages = document.getElementById('chatbotMessages');
        
        chatbotButton.addEventListener('click', function() {
            chatbotWindow.style.display = 'flex';
        });
        
        closeChatbot.addEventListener('click', function() {
            chatbotWindow.style.display = 'none';
        });
        
        // ฟังก์ชันเพิ่มข้อความในแชท
        function addMessage(content, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            contentDiv.textContent = content;
            
            messageDiv.appendChild(contentDiv);
            chatbotMessages.appendChild(messageDiv);
            
            // เลื่อนไปยังข้อความล่าสุด
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        // ฟังก์ชันตอบกลับอัตโนมัติ
        function getBotResponse(userMessage) {
            const message = userMessage.toLowerCase().trim();
            
            // คำทักทาย
            if (message.includes('สวัสดี') || message.includes('hello') || message.includes('hi')) {
                return 'สวัสดีครับ! นายณภัทร ปัญโญ และทีมอาสาพัฒนา สจล. ยินดีตอบคำถามครับ';
            }
            
            // คำถามเกี่ยวกับผู้สมัคร
            if (message.includes('ชื่อ') || message.includes('ใครเป็น') || message.includes('ผู้สมัคร') || message.includes('ณภัทร')) {
                return 'ผู้สมัครชื่อ นายณภัทร ปัญโญ คณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมเครื่องกล สาขาวิศวกรรมขนส่งทางราง';
            }
            
            if (message.includes('คณะ') || message.includes('วิศวกรรม')) {
                return 'ผมศึกษาอยู่คณะวิศวกรรมศาสตร์ ภาควิชาวิศวกรรมเครื่องกล สาขาวิศวกรรมขนส่งทางราง';
            }
            
            if (message.includes('สาขา') || message.includes('ขนส่ง') || message.includes('ทางราง')) {
                return 'ผมศึกษาสาขาวิศวกรรมขนส่งทางราง ซึ่งเป็นสาขาที่มีความสำคัญต่อการพัฒนาระบบขนส่งของประเทศ';
            }
            
            // คำถามเกี่ยวกับนโยบาย
            if (message.includes('นโยบาย') || message.includes('policy')) {
                if (message.includes('1') || message.includes('แรก') || message.includes('รับฟัง')) {
                    return 'นโยบายข้อ 1: รับฟังปัญหานักศึกษาอย่างตรงจุด - เปิดช่องทางสื่อสารหลากหลาย พร้อมรับฟังปัญหาและความต้องการของนักศึกษาอย่างจริงจัง';
                }
                if (message.includes('2') || message.includes('สอง') || message.includes('ปากเป็นเสียง')) {
                    return 'นโยบายข้อ 2: เป็นปากเป็นเสียงให้นักศึกษา - เสนอปัญหาและแนวทางแก้ไขต่อฝ่ายบริหารอย่างต่อเนื่อง เพื่อผลักดันให้เกิดการเปลี่ยนแปลงจริง';
                }
                if (message.includes('3') || message.includes('สาม') || message.includes('ทำจริง')) {
                    return 'นโยบายข้อ 3: ทำจริง ติดตามผล และสร้างการเปลี่ยนแปลง - ไม่เพียงแต่พูด แต่ทำจริง ติดตามผลงาน และสร้างการเปลี่ยนแปลงที่เป็นรูปธรรม';
                }
                if (message.includes('4') || message.includes('สี่') || message.includes('องค์กร')) {
                    return 'นโยบายข้อ 4: ทำงานร่วมกับองค์กรภายในสถาบัน - ร่วมมือกับทุกองค์กรนักศึกษา เพื่อขับเคลื่อนกิจกรรมและนโยบายที่เกิดประโยชน์สูงสุด';
                }
                if (message.includes('5') || message.includes('ห้า') || message.includes('สานต่อ')) {
                    return 'นโยบายข้อ 5: ร่วมมือและสานต่อภารกิจเพื่อนักศึกษาอย่างต่อเนื่อง - สานต่องานจากรุ่นพี่และพัฒนาต่อยอดเพื่อสร้างความยั่งยืนในการทำงาน';
                }
                if (message.includes('6') || message.includes('หก') || message.includes('สิทธิ')) {
                    return 'นโยบายข้อ 6: ผลักดันสิทธิและสวัสดิการของนักศึกษา - เสนอและผลักดันสิทธิ สวัสดิการ และความปลอดภัยของนักศึกษาในทุกด้าน';
                }
                return 'นโยบายหลักของผมมี 6 ข้อ: 1) รับฟังปัญหานักศึกษาอย่างตรงจุด 2) เป็นปากเป็นเสียงให้นักศึกษา 3) ทำจริง ติดตามผล และสร้างการเปลี่ยนแปลง 4) ทำงานร่วมกับองค์กรภายในสถาบัน 5) ร่วมมือและสานต่อภารกิจเพื่อนักศึกษาอย่างต่อเนื่อง 6) ผลักดันสิทธิและสวัสดิการของนักศึกษา';
            }
            
            // คำถามเกี่ยวกับการเลือกตั้ง
            if (message.includes('เลือกตั้ง') || message.includes('vote') || message.includes('เลือก')) {
                return 'การเลือกตั้งสภานักศึกษา สจล. จะจัดขึ้นในเดือนหน้า คุณสามารถตรวจสอบวันเวลาและสถานที่เลือกตั้งได้ที่เว็บไซต์หลักของมหาวิทยาลัย';
            }
            
            // คำถามเกี่ยวกับทีม
            if (message.includes('ทีม') || message.includes('อาสาพัฒนา')) {
                return 'ผมเป็นส่วนหนึ่งของทีมอาสาพัฒนา สจล. ซึ่งเป็นกลุ่มนักศึกษาที่ต้องการสร้างการเปลี่ยนแปลงที่ดีให้กับเพื่อนนักศึกษา';
            }
            
            // คำถามทั่วไป
            if (message.includes('ทำอะไร') || message.includes('กิจกรรม')) {
                return 'ถ้าผมได้รับเลือก จะจัดกิจกรรมเพื่อพัฒนาทักษะนักศึกษา จัดสัมมนาแนะแนวอาชีพ และกิจกรรมสันทนาการเพื่อสร้างความสัมพันธ์ที่ดีระหว่างนักศึกษา';
            }
            
            if (message.includes('ขอโทษ') || message.includes('sorry')) {
                return 'ไม่เป็นไรครับ มีอะไรให้ช่วยไหมครับ?';
            }
            
            if (message.includes('ขอบคุณ') || message.includes('thank')) {
                return 'ยินดีครับ! หากมีคำถามเพิ่มเติม ผมและทีมยินดีตอบเสมอ';
            }
            
            // ถ้าไม่ตรงกับเงื่อนไขใดๆ
            return 'ขออภัยครับ ผมไม่สามารถตอบคำถามนี้ได้ในขณะนี้ กรุณาติดต่อผมผ่านช่องทางอื่นหรือสอบถามเกี่ยวกับนโยบายของผม';
        }
        
        // ส่งข้อความเมื่อกดปุ่มส่ง
        sendMessageButton.addEventListener('click', function() {
            const message = userInput.value;
            if (message.trim() === '') return;
            
            // เพิ่มข้อความผู้ใช้
            addMessage(message, true);
            
            // เคลียร์ช่อง input
            userInput.value = '';
            
            // ตอบกลับหลังจาก delay นิดหน่อย
            setTimeout(() => {
                const response = getBotResponse(message);
                addMessage(response);
            }, 800);
        });
        
        // ส่งข้อความเมื่อกด Enter
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessageButton.click();
            }
        });
        
        // เพิ่มตัวอย่างข้อความในแชท
        setTimeout(() => {
            addMessage("สอบถามข้อมูลเกี่ยวกับผู้สมัครหรือนโยบายได้เลยนะครับ!");
        }, 1500);
        
        // ปรับการ์ดนโยบายให้เลื่อนต่อเนื่อง
        const policyTrack = document.getElementById('policyTrack');
        const policyCards = document.querySelectorAll('.policy-card');
        
        // สำหรับหน้าจอขนาดเล็ก ให้หยุดการเลื่อนและแสดงการ์ดแบบปกติ
        if (window.innerWidth <= 480) {
            policyTrack.style.animation = 'none';
            policyTrack.style.position = 'relative';
        }

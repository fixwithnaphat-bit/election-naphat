    const loader = document.querySelector(".loader");

    fetch("https://script.google.com/macros/s/AKfycbyC3vIRrQvkb8puQCVg48639A5yB7fSYlKYQFvXW1Aj_4dTO-ueqyH9DAm22KVz_Yxf_w/exec")
        .then(res => res.json())
        .then(data => {
            const wrap = document.getElementById("works-wrap");
            wrap.innerHTML = "";

            data.forEach(item => {
                wrap.innerHTML += `
                <div class="policy-card card">
                    <div class="card-img-top">
                        <img src="${item.image}" alt="news">
                    </div>
                    <div class="card-body">
                        <span class="card-tag">${item.tag}</span>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.desc}</p>
                        <div class="card-footer">
                            <a href="${item.link}" class="inline-ex">
                                <p>รายละเอียด</p>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="18"
                                    height="18">
                                    <path fill-rule="evenodd"
                                        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                                        clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                `;
            });

            // ซ่อน loader
            setTimeout(() => {
                loader.classList.add("hide");
            }, 400);
        })
        .catch(err => {
            console.error("โหลดผลงานไม่สำเร็จ", err);
            loader.classList.add("hide");
        });

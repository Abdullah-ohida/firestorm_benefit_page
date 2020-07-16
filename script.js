
// Select element
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container')

navToggle.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links');
    navToggle.classList.toggle('show-icon')
})

// ========== Date ===============
const fullDate = document.querySelectorAll('.date-time');
fullDate.forEach(function(items){
    items.innerHTML = new Date().toDateString();
    console.log('helo world')
})

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();


// Load content

const loadItem = [
    {
        id: 1,
        title: "Placement of waste bins in ebutte - metta",
        country: "Lagos, Nigeria",
        img: "/asset/imgs/area.png",
        sponsored: ` XDPC Plastic dustbin company `,
    },
    {
        id: 2,
        title: "Placement of waste bins in ebutte - metta",
        country: "Lagos, Nigeria",
        img: "/asset/imgs/area.png",
        sponsored: ` XDPC Plastic dustbin company `,
    },
    {
        id: 3,
        title: "Placement of waste bins in ebutte - metta",
        country: "Lagos, Nigeria",
        img: "/asset/imgs/area.png",
        sponsored: ` XDPC Plastic dustbin company `,
    },
    {
        id: 4,
        title: "Placement of waste bins in ebutte - metta",
        country: "Lagos, Nigeria",
        img: "/asset/imgs/area.png",
        sponsored: ` XDPC Plastic dustbin company `,
    },
    {
        id: 5,
        title: "Placement of waste bins in ebutte - metta",
        country: "Lagos, Nigeria",
        img: "/asset/imgs/area.png",
        sponsored: ` XDPC Plastic dustbin company `,
    },
    {
        id: 6,
        title: "Placement of waste bins in ebutte - metta",
        country: "Lagos, Nigeria",
        img: "/asset/imgs/area.png",
        sponsored: ` XDPC Plastic dustbin company `,
    },
];
    const loadBtn = document.querySelector('.load-more');
    const sectionCenter = document.querySelector('.contain');

    // window.addEventListener('DOMContentLoaded', function(){
    //     let displayItem = loadItem.map(function (item){
    //         return ` <div class="benefit-container">
    //         <div class="img-item">
    //         <img src="${item.img}" alt="area">
    //         </div>
    //         <article>
    //         <h2>${item.title}</h2>
    //         <p>Date of Placement: <span class="date-time"></span></p>
    //         <p class="location">Location: ${item.country}</p>
    //         <p class="sponsored"> Sponsored by : ${item.sponsored}</p>
    //         <button class="like" type="button">
    //             <img src="/asset/imgs/heart.svg" alt="" class="heart">
    //             <p class="text">50</p>
    //         </button>
    //         </artile>
    //         </div>`
    //     });
    //     displayItem = displayItem.join("");


    //     sectionCenter.innerHTML = displayItem;
    // });
    loadBtn.addEventListener('click', function(){
        if(sectionCenter.classList.contains('show-more')){
            sectionCenter.classList.remove('show-more')
        }
        else{
            sectionCenter.classList.add('show-more');
            let displayItem = loadItem.map(function (item){
                return ` <div class="benefit-container">
                <div class="img-item">
                <img src="${item.img}" alt="area">
                </div>
                <article>
                <h2>${item.title}</h2>
                <p>Date of Placement: <span class="date-time"></span></p>
                <p class="location">Location: ${item.country}</p>
                <p class="sponsored"> Sponsored by : ${item.sponsored}</p>
                <button class="like" type="button">
                    <img src="/asset/imgs/heart.svg" alt="" class="heart">
                    <p class="text">50</p>
                </button>
                </artile>
                </div>`
            });
            displayItem = displayItem.join("");
    
    
            sectionCenter.innerHTML = displayItem;
        }
    })

/* */




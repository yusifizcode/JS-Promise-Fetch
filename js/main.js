let userId=1;
loadPost(userId).then(x=>{console.log(document.querySelectorAll('.card'))})

document.querySelector('button').addEventListener('click',function(e){
   userId++;    
   loadPost(userId)
})

function loadPost(userId) {
    return new Promise((resolve,reject)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(data => {
            let dataId = 1;
            data.forEach(element => {
                // let card = `<div class="col-md-4 mb-3">
                //                 <div class="card" data-id=${dataId}>
                //                     <img class="card-img-top" src="./images/anna-wangler-_GqwoiT7QY8-unsplash.jpg" alt="">
                //                     <div class="card-body position-relative">
                //                         <h4 class="card-title">${element.title}</h4>
                //                         <p class="card-text">${element.body}</p>
                //                         <p class="card-text">User id: ${element.userId}</p>
                //                         <i class="fa-solid fa-bookmark position-absolute bookmark" style="right:15px; bottom:15px;cursor:pointer;"></i>
                //                     </div>
                //                 </div>
                //             </div>`
                // dataId++;
                // document.querySelector('.row').innerHTML += card;


                let row = document.querySelector('.row');
                let colDiv = document.createElement('div');
                colDiv.className = 'col-md-4 mb-3';
                row.appendChild(colDiv);

                let card = document.createElement('div');
                card.className = 'card';
                card.setAttribute('data-id',dataId);
                colDiv.appendChild(card)

                let img = document.createElement('img');
                img.setAttribute('src','./images/anna-wangler-_GqwoiT7QY8-unsplash.jpg');
                img.className = 'card-img-top';
                card.appendChild(img);

                let cardBody = document.createElement('div');
                cardBody.className = 'card-body position-relative';
                card.appendChild(cardBody);

                let h4 = document.createElement('h4');
                h4.className = 'card-title';
                h4.innerText = element.title;
                cardBody.appendChild(h4);

                let pBody = document.createElement('p');
                pBody.className = 'card-text';
                pBody.innerText = element.body;
                cardBody.appendChild(pBody);

                let pUser = document.createElement('p');
                pUser.className = 'card-text';
                pUser.innerText = 'User id: ' +  element.userId;
                cardBody.appendChild(pUser);

                let bookMarkIcon = document.createElement('i');
                bookMarkIcon.className = 'fa-solid fa-bookmark position-absolute bookmark';
                bookMarkIcon.style.right = 15 + 'px';
                bookMarkIcon.style.bottom = 15 + 'px';
                bookMarkIcon.style.cursor = 'pointer';
                cardBody.appendChild(bookMarkIcon);

                dataId++;
            });
        })
        resolve();
    })
}


// let bookmarkBtns = document.getElementsByClassName('bookmark');

// console.log(bookmarkBtns[0]);

// let cards = document.querySelectorAll('.card');

// console.log(cards[0]);

// [...bookmarkBtns].forEach(elem=>{
//     elem.addEventListener('click',function(e){
//         console.log("salam");
//     })
// })
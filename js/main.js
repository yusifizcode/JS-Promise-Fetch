let userId=1;

let bookMarkStr = localStorage.getItem('bookmark');

let bookMarkItems;
if(!bookMarkStr){
    bookMarkItems = [];
}
else{
    bookMarkItems = JSON.parse(bookMarkStr);
}


loadPost(userId)

document.querySelector('button').addEventListener('click',function(e){
   userId++;    
   loadPost(userId)
})

function loadPost(userId) {

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(data => {
            // let dataId = 1;
            data.forEach(element => {

                let row = document.querySelector('.row');
                let colDiv = document.createElement('div');
                colDiv.className = 'col-md-4 mb-3';
                row.appendChild(colDiv);

                let card = document.createElement('div');
                card.className = 'card';
                // card.setAttribute('data-id',dataId);
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

                // dataId++;

                bookMarkIcon.addEventListener('click',function(){
                    console.log(element);
                    bookMarkIcon.style.color = 'yellow';
                    // let bookMarkItem = bookMarkItems.find(x=>x.id==element.id);

                    bookMarkItems.push(element);

                    localStorage.setItem('bookmark',JSON.stringify(bookMarkItems));
                })
            });
        })

}

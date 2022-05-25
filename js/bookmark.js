let bookMarkStr = localStorage.getItem('bookmark');

let bookMarkItems;
if(!bookMarkStr){
    bookMarkItems = [];
}
else{
    bookMarkItems = JSON.parse(bookMarkStr);
}


bookMarkItems.forEach(element => {
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

    let anchor = document.createElement('a');
    anchor.setAttribute('href','');
    anchor.style.textDecoration = 'none';
    anchor.style.color = 'black';
    cardBody.appendChild(anchor);

    
    let closeIcon = document.createElement('i');
    closeIcon.className = 'fa-solid fa-xmark position-absolute bookmark';
    closeIcon.style.right = 15 + 'px';
    closeIcon.style.bottom = 15 + 'px';
    closeIcon.style.cursor = 'pointer';
    anchor.appendChild(closeIcon);


    closeIcon.addEventListener('click',function(){
        // console.log(element.id);
        let removeMark = [...bookMarkItems].indexOf(element);
        console.log(removeMark);

        bookMarkItems.splice(removeMark,1);

        localStorage.setItem('bookmark',JSON.stringify(bookMarkItems))
    })
});







let price_boxes=document.querySelectorAll('.box');
const price_switcher = document.getElementById('price-switcher');

for(i=0;i<price_boxes.length;i++){
    price_boxes[i].addEventListener('click',function(){
        for(j=0;j<price_boxes.length;j++){
            price_boxes[j].classList.remove('active');
        }
        this.classList.add('active');
    })
}

price_switcher.addEventListener('change',function(){
    for(i=0;i<price_boxes.length;i++){
        if(price_switcher.checked){
            price_value = price_boxes[i].childNodes[3].childNodes[2].getAttribute('data-monthly');
        }
        else{
            price_value = price_boxes[i].childNodes[3].childNodes[2].getAttribute('data-annually');
        }
        price_boxes[i].childNodes[3].childNodes[2].innerHTML=price_value;
    }
})

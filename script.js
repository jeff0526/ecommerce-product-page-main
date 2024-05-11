const thumbimg = document.getElementsByClassName('thum-p')
const limg= document.getElementById('largeimg')
let selected =0;
for (let i = 0;i<thumbimg.length;i++){
    thumbimg[i].onclick=function(){
         
        for(let s= 0; s<thumbimg.length;s++){
            thumbimg[s].className=thumbimg[s].className.replace(' bselected','');
    
        }
        if (i==0){
            limg.src="images/image-product-1.jpg";
            
        }else if(i==1){
            limg.src="images/image-product-2.jpg";
        }else if(i==2){
            limg.src="images/image-product-3.jpg";
        }
        else if(i==3){
            limg.src="images/image-product-4.jpg";
        }

       thumbimg[i].className += ' bselected';
       selected=i;
    } 
}
const thumbimgz = document.getElementsByClassName('thum-pz')
const limgz= document.getElementById('largeimg-copy')
const next=document.getElementById('right')
const prev=document.getElementById('left')
const nextres=document.getElementById('rightorg')
const prevres=document.getElementById('leftorg')

for (let i = 0;i<thumbimgz.length;i++){
    thumbimgz[i].onclick=function(){
         
        for(let s= 0; s<thumbimgz.length;s++){
            thumbimgz[s].className=thumbimgz[s].className.replace(' bselectedz','');
        }
        if (i==0){
            limgz.src="images/image-product-1.jpg";
        }else if(i==1){
            limgz.src="images/image-product-2.jpg";
        }else if(i==2){
            limgz.src="images/image-product-3.jpg";
        }
        else if(i==3){
            limgz.src="images/image-product-4.jpg";
        }
        selected=i;
       thumbimgz[i].className += ' bselectedz';
   
    } 
    next.onclick=function(){
        for(let s= 0; s<thumbimgz.length;s++){
            thumbimgz[s].className=thumbimgz[s].className.replace(' bselectedz','');
        }
        if (selected==0){
            selected++;
            limgz.src="images/image-product-2.jpg";
            thumbimgz[1].className += ' bselectedz';
        }else if(selected==1){
            selected++;
            limgz.src="images/image-product-3.jpg";
            thumbimgz[2].className += ' bselectedz';
        }else if(selected==2){
            selected++;
            thumbimgz[3].className += ' bselectedz';
            limgz.src="images/image-product-4.jpg";
        }else{
            thumbimgz[3].className += ' bselectedz';
        }

    } 
    prev.onclick=function(){
        for(let s= 0; s<thumbimgz.length;s++){
            thumbimgz[s].className=thumbimgz[s].className.replace(' bselectedz','');
        }
        if (selected==3){
            selected--;
            limgz.src="images/image-product-3.jpg";
            thumbimgz[2].className += ' bselectedz';
        }else if(selected==2){
            selected--;
            limgz.src="images/image-product-2.jpg";
            thumbimgz[1].className += ' bselectedz';
        }else if(selected==1){
            selected--;
            thumbimgz[0].className += ' bselectedz';
            limgz.src="images/image-product-1.jpg";
        }else{
            thumbimgz[0].className += ' bselectedz';
        }

    } 
}

nextres.onclick=function(){
   
    if (selected==0){
        selected++;
        limg.src="images/image-product-2.jpg";
    }else if(selected==1){
        selected++;
        limg.src="images/image-product-3.jpg";
    }else if(selected==2){
        selected++;
        limg.src="images/image-product-4.jpg";
    }

} 
prevres.onclick=function(){
    
    if (selected==3){
        selected--;
        limg.src="images/image-product-3.jpg";
    }else if(selected==2){
        selected--;
        limg.src="images/image-product-2.jpg";
    }else if(selected==1){
        selected--;
        limg.src="images/image-product-1.jpg";
    }

} 



const imgcon=document.getElementsByClassName('imgcon')
limg.onclick=function(){
        imgcon[0].style.display='flex';
    
    

    for(let s= 0; s<thumbimgz.length;s++){
        thumbimgz[s].className=thumbimgz[s].className.replace(' bselectedz','');
    }
    if (selected==0){
        limgz.src="images/image-product-1.jpg";
        thumbimgz[0].className += ' bselectedz';
    }else if(selected==1){
        limgz.src="images/image-product-2.jpg";
        thumbimgz[1].className += ' bselectedz';
    }else if(selected==2){
        limgz.src="images/image-product-3.jpg";
        thumbimgz[2].className += ' bselectedz';
    }else if(selected==3){
        limgz.src="images/image-product-4.jpg";
        thumbimgz[3].className += ' bselectedz';
    }

}
const closemodal=document.getElementsByClassName('close')
closemodal[0].onclick=function(){
    imgcon[0].style.display='none';
}

const addminus= document.getElementsByClassName('addminus')
const itempcs= document.getElementById('itempcs')
let num=0
for(let i=0;i<addminus.length;i++){
    addminus[i].onclick=function(){
        if (i==0 && itempcs.innerHTML>0){
        itempcs.innerHTML--;
        }else if (i==1){
            itempcs.innerHTML++;
        }
    }
}
const hoverimg= document.getElementsByClassName('hover')
const hoveredimg= document.querySelectorAll('.hoveredimg')
for(let i=0;i<hoverimg.length;i++){
    hoverimg[i].addEventListener('mouseover',ev=>{
        hoveredimg[i].classList.add("hoverprevnext");
    })

    hoverimg[i].addEventListener('mouseleave',ev=>{
        hoveredimg[i].classList.remove("hoverprevnext");

    })
    
}

const cartshop=document.getElementById('cartshop')
const card_con= document.getElementsByClassName('card-con')
cartshop.onclick=function(){
    if (card_con[0].style.display == "flex") {
        card_con[0].style.display = "none";
    }else{
    card_con[0].style.display='flex';
    }
}
window.onclick = function(event) {
    if (event.target == imgcon[0]) {
        imgcon[0].style.display = "none";
    }
   
  }
const notif= document.getElementsByClassName('notif')
const btnaddtocart= document.getElementById('btnaddtocart')

btnaddtocart.onclick=function(){

    const empty=document.getElementsByClassName('empty')
    const btncon=document.getElementsByClassName('btncon')
    const orderitem=document.getElementsByClassName('orderitem')
    const itemp=document.getElementsByClassName('itemp')
    const nameitem=document.getElementsByClassName('nameitem')
    const itempcs=document.getElementById('itempcs')
    const priceamount=document.getElementsByClassName('priceamount')
    const titlepck=document.getElementsByClassName('titlepck')
    const totalamount=document.getElementsByClassName('totalamount')
    const total=document.getElementsByClassName('total')

    let unq_id= nameitem[0].innerHTML;
    let dbitem=false;
    for(let i=0;i<itemp.length;i++){
        
        if (itemp[i].attributes[1].value == nameitem[0].innerHTML){
           
            dbitem=true;
            let txt = total[0].innerHTML;
            const myarr = txt.split(" ");
            
            const newtotal= Number(myarr[2]) + Number(itempcs.innerHTML);
            itemp[i].children[1].lastElementChild.firstChild.innerHTML= "$" + priceamount[0].innerHTML  + ".00 x " + newtotal;
            totalamount[0].innerHTML= "$" + priceamount[0].innerHTML * newtotal + ".00";
            
            notif[0].innerHTML= newtotal;
          }
        }
    
    if (itempcs.innerHTML>0 && dbitem == false ){
        empty[0].style.display="none";
        btncon[0].style.display="block"

    const attrid = document.createAttribute("id");
    attrid.value =unq_id;
    const attr = document.createAttribute("class");
    attr.value ="itemp";
    const attr2 = document.createAttribute("class");
    attr2.value ="itemname";
    const attrspan = document.createAttribute("class");
    attrspan.value ="delitem";
    const attrp = document.createAttribute("class");
    attrp.value ="titlepck";
    const attrp2 = document.createAttribute("class");
    attrp2.value ="total";
    const attrp2con = document.createAttribute("class");
    attrp2con.value ="totalcon";
    const attrpspan2 = document.createAttribute("class");
    attrpspan2.value ="totalamount";

    const attrimg = document.createAttribute("src");
    attrimg.value ="images/image-product-1.jpg";
    const attrimgdel = document.createAttribute("src");
    attrimgdel.value ="images/icon-delete.svg";

    const onclk= document.createAttribute("onclick");
    onclk.value = "myfunction(event)";

    const node = document.createElement("div");
    const node2 = document.createElement("div");
    const nodeimg = document.createElement("img");
    const nodeimg2 = document.createElement("img");
    const nodespan = document.createElement("span");
    const nodep = document.createElement("p");
    const nodep2 = document.createElement("div");
    const nodeptotal = document.createElement("p");    
    const nodespan2 = document.createElement("p");

    orderitem[0].insertBefore(node,orderitem[0].children[0])
    orderitem[0].firstElementChild.setAttributeNode(attr);
    orderitem[0].firstElementChild.setAttributeNode(attrid);

    orderitem[0].firstElementChild.appendChild(nodeimg);
    itemp[0].firstElementChild.setAttributeNode(attrimg);

    itemp[0].appendChild(node2);
    itemp[0].lastElementChild.setAttributeNode(attr2);

    const itemname=document.getElementsByClassName('itemname')
    itemname[0].appendChild(nodep);
    itemname[0].firstElementChild.setAttributeNode(attrp); //name of the item

    itemname[0].appendChild(nodep2);
    itemname[0].lastElementChild.setAttributeNode(attrp2con)
    const totalcon=document.getElementsByClassName('totalcon')
    totalcon[0].appendChild(nodeptotal)
     totalcon[0].firstElementChild.setAttributeNode(attrp2); //total of the item

    
     totalcon[0].appendChild(nodespan2);
    totalcon[0].lastElementChild.setAttributeNode(attrpspan2); //total price of the item

    itemp[0].appendChild(nodespan);
    itemp[0].lastElementChild.setAttributeNode(attrspan);
    itemp[0].lastElementChild.setAttributeNode(onclk);

    const delitem=document.getElementsByClassName('delitem')    
    delitem[0].appendChild(nodeimg2);
    delitem[0].firstElementChild.setAttributeNode(attrimgdel);

    

    titlepck[0].innerHTML= nameitem[0].innerHTML;
    totalamount[0].innerHTML= "$" + priceamount[0].innerHTML * itempcs.innerHTML + ".00";
    total[0].innerHTML= "$" + priceamount[0].innerHTML  + ".00 x " + itempcs.innerHTML;
    
    notif[0].innerHTML=itempcs.innerHTML;
    notif[0].style.display='block';
    }

   
   
}
function myfunction(evt){
    const parent = evt.currentTarget.parentElement;
    const clsname= evt.currentTarget.parentElement.className;

    const orderitem=document.getElementsByClassName('orderitem')
    const empty=document.getElementsByClassName('empty')
    const btncon=document.getElementsByClassName('btncon')
    if (clsname=="itemp"){
        parent.remove();
    }
    if (orderitem[0].children.length == 1){
    empty[0].style.display="flex";
        btncon[0].style.display="none"
        notif[0].style.display='none';
    }
   
}

const menu =document.getElementsByClassName('menu')
const navbtn=document.getElementsByClassName('navbtn')
const closenav = document.getElementsByClassName('closenav')
menu[0].onclick=function(){
    navbtn[0].style.display='flex';
}

closenav[0].onclick=function(){
    navbtn[0].style.display='none';
}
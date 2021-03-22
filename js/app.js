'use strict';
const seattle ={
name :'seattle' ,
minCust :23,
maxCust :65,
avgCookieSale:6.3,
customers:0,
salesobject:0,
TransformStreamDefaultController;0
 hours =['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm']

getCust :function(min,max){
this.custemers=getRunderNumber(min,max);
console.log(this);

},

render :function () {
    const container =document.getElementById('salesData');
    const articleE1 =document.createElement('articleE1');
    container.appendChild('articleE1');
    costh3El =document.createElement('articleE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i< this.hpors.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      let x=getRandomNumber(23,65);
      let u=Math.ceil(6.3);
      let salesPerHour=x*u;
      liEl.textContent = this.hour[i]+':'+salesPerHour;
    }
    for(let s=0; s< this.hour.length; s++)
    {
  
      let x=getRandomNumber(23,65);
      let u=Math.ceil(6.3);
     let total=[];
     let  salesPerHour=u*x
    
     if (this.hours.length-1===s){
       
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =salesPerHour*3 ;

      }
    }},

   
  };
  Seattle.render();
  
      




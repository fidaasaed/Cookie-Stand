'use strict';

let Hours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
// 
const saettle={

  name: 'Saettle',
  
  avgCookie:6.3,
  minCust:23,
  maxCust:65,
  total:0,
  arraytotal:[],



  getSales: function (){



    for (let i=0;i<Hours.length;i++){
      this.avgCookie=Math.ceil(this.avgCookie);

      let random=getRandomNumber(this.minCust,this.maxCust);
      let saleDay=random*this.avgCookie;

      this.arraytotal.push(saleDay);
      this.total=this.total+this.arraytotal[i];


    }


  }
  ,
  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i<Hours.length; i++)
    {

      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);

      liEl.textContent = `${Hours[i]}:${this.arraytotal[i]}`;
    }
    const pEl=document.createElement('p');
    articalE1.appendChild(pEl);
    pEl.textContent=`Total: ${this.total}`;

  }

};

saettle.getSales();

saettle.render();

// Tokyo
const tokyo={

  name: 'Tokyo',
 
  avgCookie:3,
  minCust:24,
  maxCust:1.2,
  total:0,
  arraytotal:[],



  getSales: function (){



    for (let i=0;i<Hours.length;i++){
      this.avgCookie=Math.ceil(this.avgCookie);

      let random=getRandomNumber(this.minCust,this.maxCust);
      let saleDay=random*this.avgCookie;

      this.arraytotal.push(saleDay);
      this.total=this.total+this.arraytotal[i];


    }


  }
  ,
  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i<Hours.length; i++)
    {

      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);

      liEl.textContent = `${Hours[i]}:${this.arraytotal[i]}`;
    }
    const pEl=document.createElement('p');
    articalE1.appendChild(pEl);
    pEl.textContent=`Total: ${this.total}`;

  }

};

tokyo.getSales();

tokyo.render();

// Dubai

const dubai={

  name: 'Dubai',
 
  avgCookie:11,
  minCust:38,
  maxCust:3.7,
  total:0,
  arraytotal:[],



  getSales: function (){



    for (let i=0;i<Hours.length;i++){
      this.avgCookie=Math.ceil(this.avgCookie);

      let random=getRandomNumber(this.minCust,this.maxCust);
      let saleDay=random*this.avgCookie;

      this.arraytotal.push(saleDay);
      this.total=this.total+this.arraytotal[i];


    }


  }
  ,
  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i< Hours.length; i++)
    {

      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);

      liEl.textContent = `${Hours[i]}:${this.arraytotal[i]}`;
    }
    const pEl=document.createElement('p');
    articalE1.appendChild(pEl);
    pEl.textContent=`Total: ${this.total}`;

  }

};

dubai.getSales();

dubai.render();

// Paris
const paris={

  name: 'Paris',
 
  avgCookie:20,
  minCust:38,
  maxCust:2.3,
  total:0,
  arraytotal:[],



  getSales: function (){



    for (let i=0;i<workingHour.length;i++){
      this.avgCookie=Math.ceil(this.avgCookie);

      let random=getRandomNumber(this.minCust,this.maxCust);
      let saleDay=random*this.avgCookie;

      this.arraytotal.push(saleDay);
      this.total=this.total+this.arraytotal[i];


    }


  }
  ,
  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i<Hours.length; i++)
    {

      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);

      liEl.textContent = `${Hours[i]}:${this.arraytotal[i]}`;
    }
    const pEl=document.createElement('p');
    articalE1.appendChild(pEl);
    pEl.textContent=`Total: ${this.total}`;

  }

};

paris.getSales();
paris.render();

// Lima
const lima={

  name: 'Lima',
 
  avgCookie:2,
  minCust:16,
  maxCust:4.6,
  total:0,
  arraytotal:[],



  getSales: function (){



    for (let i=0;i<Hours.length;i++){
      this.avgCookie=Math.ceil(this.avgCookie);

      let random=getRandomNumber(this.minCust,this.maxCust);
      let saleDay=random*this.avgCookie;

      this.arraytotal.push(saleDay);
      this.total=this.total+this.arraytotal[i];


    }


  }
  ,
  render: function(){

    const container = document.getElementById('salesData');
    const articalE1 = document.createElement('articalE1');
    container.appendChild(articalE1);
    const h3El =document.createElement('articalE1');
    articalE1.appendChild(h3El);
    h3El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articalE1.appendChild(ulEl);

    for(let i=0; i<Hours.length; i++)
    {

      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);

      liEl.textContent = `${Hours[i]}:${this.arraytotal[i]}`;
    }
    const pEl=document.createElement('p');
    articalE1.appendChild(pEl);s
    pEl.textContent=`Total: ${this.total}`;

  }

};

lima.getSales();
lima.render();
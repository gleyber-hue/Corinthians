(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&m(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function m(a){if(a.ep)return;a.ep=!0;const e=r(a);fetch(a.href,e)}})();const t=[{id:"1",nome:"Camisa Barcelona-FC",marca:"FanSoccer",preco:379.99,imagem:"camisa-1.jpg",masculino:!0},{id:"2",nome:"Camisa Bayern de Munique-FC",marca:"FanSoccer",preco:305.99,imagem:"camisa-2.jpg",masculino:!0},{id:"3",nome:"Camisa Corinthians-FC",marca:"FanSoccer",preco:258.99,imagem:"camisa-3.jpg",masculino:!0},{id:"4",nome:"Camisa Flamengo-FC",marca:"FanSoccer",preco:269.99,imagem:"camisa-4.jpg",masculino:!0},{id:"5",nome:"Camisa Manchester City-FC",marca:"FanSoccer",preco:299.99,imagem:"camisa-5.jpg",masculino:!0},{id:"6",nome:"Camisa Manchester United-FC",marca:"FanSoccer",preco:285.99,imagem:"camisa-6.jpg",masculino:!0},{id:"7",nome:"Camisa Palmeiras-FC",marca:"FanSoccer",preco:249.99,imagem:"camisa-7.jpg",masculino:!0},{id:"8",nome:"Camisa Paris Saint Germain-FC",marca:"FanSoccer",preco:268.99,imagem:"camisa-8.jpg",masculino:!0},{id:"9",nome:"Camisa Real Madrid-FC",marca:"FanSoccer",preco:329.99,imagem:"camisa-9.jpg",masculino:!0},{id:"10",nome:"Camisa Vasco da Gama-FC",marca:"FanSoccer",preco:219.99,imagem:"camisa-10.jpg",masculino:!0},{id:"11",nome:"Camisa Seleção Argentina",marca:"FanSoccer",preco:319.99,imagem:"camisa-11.jpg",masculino:!0},{id:"12",nome:"Camisa Seleção Francesa Retrô",marca:"FanSoccer",preco:269.99,imagem:"camisa-12.jpg",masculino:!0},{id:"13",nome:"Camisa Arsenal-FC",marca:"FanSoccer",preco:319.99,imagem:"camisa-13.jpg",masculino:!0},{id:"14",nome:"Camisa Internacional-FC",marca:"FanSoccer",preco:379.99,imagem:"camisa-14.jpg",masculino:!0},{id:"15",nome:"Camisa Fluminense-FC",marca:"FanSoccer",preco:279.99,imagem:"camisa-15.jpg",masculino:!0},{id:"16",nome:"Camisa São Paulo-FC",marca:"FanSoccer",preco:239.99,imagem:"camisa-16.jpg",masculino:!0},{id:"17",nome:"Camisa Milan-FC",marca:"FanSoccer",preco:299.99,imagem:"camisa-17.jpg",masculino:!0},{id:"18",nome:"Camisa Santos-FC",marca:"FanSoccer",preco:289.99,imagem:"camisa-18.jpg",masculino:!0},{id:"19",nome:"Camisa Liverpool-FC",marca:"FanSoccer",preco:359.99,imagem:"camisa-19.jpg",masculino:!0},{id:"20",nome:"Camisa Seleção Brasileira",marca:"FanSoccer",preco:279.99,imagem:"camisa-20.jpg",masculino:!0},{id:"21",nome:"Camisa Bayern de Munique-FC",marca:"FanSoccer",preco:379.99,imagem:"camisa-21.jpg",feminino:!0},{id:"22",nome:"Camisa Borussia Dortmund-FC",marca:"FanSoccer",preco:305.99,imagem:"camisa-22.jpg",feminino:!0},{id:"23",nome:"Camisa Real Madrid-FC",marca:"FanSoccer",preco:258.99,imagem:"camisa-23.jpg",feminino:!0},{id:"24",nome:"Camisa Bayern de Munique-FC",marca:"FanSoccer",preco:269.99,imagem:"camisa-4.jpg",feminino:!0},{id:"25",nome:"Camisa Manchester City-FC",marca:"FanSoccer",preco:299.99,imagem:"camisa-25.jpg",feminino:!0},{id:"26",nome:"Camisa Flamengo-FC",marca:"FanSoccer",preco:285.99,imagem:"camisa-26.jpg",feminino:!0},{id:"27",nome:"Camisa Atlético Mineiro-FC",marca:"FanSoccer",preco:249.99,imagem:"camisa-27.jpg",feminino:!0},{id:"28",nome:"Camisa Vasco da Gama-FC",marca:"FanSoccer",preco:268.99,imagem:"camisa-28.jpg",feminino:!0},{id:"29",nome:"Camisa Fluminense-FC",marca:"FanSoccer",preco:329.99,imagem:"camisa-29.jpg",feminino:!0},{id:"30",nome:"Camisa Corinthians-FC",marca:"FanSoccer",preco:219.99,imagem:"camisa-30.jpg",feminino:!0},{id:"31",nome:"Camisa Corinthians-FC",marca:"FanSoccer",preco:319.99,imagem:"camisa-31.jpg",feminino:!0},{id:"32",nome:"Camisa São Paulo-FC",marca:"FanSoccer",preco:269.99,imagem:"camisa-32.jpg",feminino:!0},{id:"33",nome:"Camisa Internacional-FC",marca:"FanSoccer",preco:319.99,imagem:"camisa-33.jpg",feminino:!0},{id:"34",nome:"Camisa Flamengo-FC",marca:"FanSoccer",preco:379.99,imagem:"camisa-34.jpg",feminino:!0},{id:"35",nome:"Camisa Palmeiras-FC",marca:"FanSoccer",preco:279.99,imagem:"camisa-35.jpg",feminino:!0},{id:"36",nome:"Camisa Santos-FC",marca:"FanSoccer",preco:239.99,imagem:"camisa-36.jpg",feminino:!0},{id:"37",nome:"Camisa Vasco da Gama-FC",marca:"FanSoccer",preco:299.99,imagem:"camisa-37.jpg",feminino:!0},{id:"38",nome:"Camisa Botafogo-FC",marca:"FanSoccer",preco:289.99,imagem:"camisa-38.jpg",feminino:!0},{id:"39",nome:"Camisa Cruzeiro-FC",marca:"FanSoccer",preco:359.99,imagem:"camisa-39.jpg",feminino:!0},{id:"40",nome:"Camisa Real Madrid-FC",marca:"FanSoccer",preco:279.99,imagem:"camisa-40.jpg",feminino:!0}];function l(i,c){localStorage.setItem(i,JSON.stringify(c))}function u(i){return JSON.parse(localStorage.getItem(i))}function g(i){localStorage.removeItem(i)}function p(i,c,r){const m=t.find(n=>n.id===i),a=document.getElementById(c),e=document.createElement("article"),o=["flex","bg-stone-200","rounded-lg","p-1","relative","mb-2","w-96"];for(const n of o)e.classList.add(n);const s=`
    <img
      src="./assets/img/${m.imagem}"
      alt="Carrinho: ${m.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${m.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${m.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${m.id}' class='ml-2'>${r}</p>
    </div>`;e.innerHTML=s,a.appendChild(e)}export{g as a,t as c,p as d,u as l,l as s};
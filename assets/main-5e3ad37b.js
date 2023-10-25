import{l as x,c as a,s as c}from"./utilidades-14f11e78.js";const o=x("carrinho")??{};function y(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function C(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function b(){Object.keys(o).length!==0&&(window.location.href="./checkout.html")}function v(){const e=document.getElementById("fechar-carrinho"),t=document.getElementById("abrir-carrinho"),n=document.getElementById("finalizar-compra");e.addEventListener("click",C),t.addEventListener("click",y),n.addEventListener("click",b)}function m(e){delete o[e],c("carrinho",o),i(),g()}function u(e){o[e]++,c("carrinho",o),i(),f(e)}function $(e){if(o[e]===1){m(e);return}o[e]--,c("carrinho",o),i(),f(e)}function f(e){document.getElementById(`quantidade-${e}`).innerText=o[e]}function h(e){const t=a.find(d=>d.id===e),n=document.getElementById("produtos-carrinho"),r=document.createElement("article"),p=["flex","bg-slate-100","rounded-lg","p-1","relative"];for(const d of p)r.classList.add(d);const E=`<button id="remover-item-${t.id}" class="absolute top-0 right-2">
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img
      src="./assets/img/${t.imagem}"
      alt="Carrinho: ${t.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${t.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${t.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrementar-produto-${t.id}'>-</button>
        <p id='quantidade-${t.id}' class='ml-2'>${o[t.id]}</p>
        <button class='ml-2' id='incrementar-produto-${t.id}'>+</button>
    </div>`;r.innerHTML=E,n.appendChild(r),document.getElementById(`decrementar-produto-${t.id}`).addEventListener("click",()=>$(t.id)),document.getElementById(`incrementar-produto-${t.id}`).addEventListener("click",()=>u(t.id)),document.getElementById(`remover-item-${t.id}`).addEventListener("click",()=>m(t.id))}function g(){const e=document.getElementById("produtos-carrinho");e.innerHTML="";for(const t in o)h(t)}function B(e){if(e in o){u(e);return}o[e]=1,c("carrinho",o),h(e),i()}function i(){const e=document.getElementById("preco-total");let t=0;for(const n in o)t+=a.find(r=>r.id===n).preco*o[n];e.innerText=`Total: $${t}`}function L(){for(const e of a){const t=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${e.feminino?"feminino":"masculino"}' id="card-produto-${e.id}">
        <img
        src="./assets/img/${e.imagem}"
        alt="Produto 1 do Corinthians."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${e.marca}</p>
        <p class='text-sm'>${e.nome}</p>
        <p class='text-sm'>$${e.preco}</p>
        <button id='adicionar-${e.id}' class='bg-green-500 hover:bg-slate-700 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;document.getElementById("container-produto").innerHTML+=t}for(const e of a)document.getElementById(`adicionar-${e.id}`).addEventListener("click",()=>B(e.id))}const s=document.getElementById("container-produto");function l(){const e=Array.from(s.getElementsByClassName("hidden"));for(const t of e)t.classList.remove("hidden")}function I(){l();const e=Array.from(s.getElementsByClassName("masculino"));for(const t of e)t.classList.add("hidden")}function k(){l();const e=Array.from(s.getElementsByClassName("feminino"));for(const t of e)t.classList.add("hidden")}function T(){document.getElementById("exibir-todos").addEventListener("click",l),document.getElementById("exibir-masculinos").addEventListener("click",k),document.getElementById("exibir-femininos").addEventListener("click",I)}L();v();g();i();T();

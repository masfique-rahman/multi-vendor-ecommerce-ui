(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const R=document.body.dataset.root||'';
const J=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}},S=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const U=i=>`https://images.unsplash.com/photo-${i}?auto=format&fit=crop&w=800&q=70`;
const ic=n=>`<svg class="ic"><use href="#i-${n}"/></svg>`;
const CATS=[['electronics','Electronics','1498049794561-7780e7231661'],['fashion','Fashion','1445205170230-053b83016050'],['beauty','Beauty','1596462502278-27bfdc403348'],['home','Home & Living','1555041469-a586c61ea9bc'],['grocery','Grocery','1542838132-92c53300491e'],['sports','Sports','1517836357463-d25dfeac3438'],['accessories','Accessories','1523275335684-37898b6baf30']].map(c=>({k:c[0],n:c[1],img:U(c[2])}));
const V=[['Luna Boutique','luna@shop.com'],['Tech Haven','hello@techhaven.com'],['Urban Nest','team@urbannest.com'],['Fresh Basket','sales@freshbasket.com'],['Stride Sports','info@stride.com'],['Glow Studio','care@glow.com'],['Chrono House','hi@chrono.com'],['Aura Scents','sell@aura.com']].map((v,i)=>({i,name:v[0],store:v[0],email:v[1],products:20+i*7,orders:80+i*31,price:(8+i*3)*1000,st:['active','active','pending','active','suspended','active','pending','active'][i],date:`2026-0${1+i%9}-1${i}`}));
const ST2=['active','active','pending','active','draft','active','out','active','pending','active','active','draft'];
const P0=[['Wireless Headphones','electronics','Sonic',89,129,4.6,214,'1505740420928-5e560c06d30e'],['Smart Watch Pro','accessories','Chrono',149,199,4.5,98,'1523275335684-37898b6baf30'],['Running Sneakers','sports','Stride',79,110,4.7,320,'1542291026-7eec264c27ff'],['Classic Sunglasses','accessories','Lumen',39,59,4.3,76,'1572635196237-14b3f281503f'],['Luxury Perfume','beauty','Aura',65,90,4.8,150,'1585386959984-a4155224a1ad'],['Makeup Palette','beauty','Aura',29,45,4.4,88,'1596462502278-27bfdc403348'],['Modern Sofa','home','Nest',499,650,4.6,41,'1555041469-a586c61ea9bc'],['Denim Jacket','fashion','Urbane',59,85,4.2,130,'1445205170230-053b83016050'],['Bluetooth Speaker','electronics','Sonic',55,75,4.5,190,'1608043152269-423dbba4e7e1'],['Yoga Mat Set','sports','Stride',25,40,4.4,64,'1517836357463-d25dfeac3438'],['Organic Grocery Box','grocery','Fresh',35,45,4.7,55,'1542838132-92c53300491e'],['Table Lamp','home','Nest',45,60,4.3,37,'1507473885765-e6ed057f782c']];
const PRODS=P0.map((a,i)=>({i,id:i+1,name:a[0],cat:a[1],brand:a[2],price:a[3],old:a[4],rating:a[5],reviews:a[6],img:U(a[7]),vendor:V[i%4].store,stock:ST2[i]=='out'?0:12+i*5,sku:'MV-'+(100+i),st:ST2[i]}));
const CU=['Sara Khan','John Miller','Aisha Rahman','Liam Chen','Maria Lopez','Omar Ali'],OS=['pending','processing','shipped','delivered','cancelled'];
const ORD=Array.from({length:24},(_,i)=>{const p=PRODS[i%12];return{i,id:'#MV'+(1001+i),cust:CU[i%6],vendor:V[i%4].store,prod:p.name,date:`2026-09-${String(1+(i*3)%28).padStart(2,'0')}`,price:p.price*(1+i%3),pay:i%3?'Paid':'COD',st:OS[i%5]}});
const B=s=>`<span class="badge s-${s}">${s}</span>`,$$$=n=>'$'+n.toLocaleString();
const stars=p=>`<div class="rate">${ic('star')}<b>${p.rating}</b><span>(${p.reviews})</span></div>`;
const wl=()=>J('mv_wish',[]),cart=()=>J('mv_cart',[]);
const link=p=>`${R}product-details.html?id=${p.id}`;
const card=p=>`<article class="card pc"><a class="pimg" href="${link(p)}"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="badge b-red">-${Math.round(100-p.price/p.old*100)}%</span></a><button class="wish${wl().includes(p.id)?' on':''}" data-wish="${p.id}" aria-label="Wishlist">${ic('heart')}</button><div class="pb"><h3><a href="${link(p)}">${p.name}</a></h3>${stars(p)}<div class="price"><b>$${p.price}</b><s>$${p.old}</s></div><div class="row"><button class="btn btn-p btn-s" data-add="${p.id}">Add to Cart</button><a class="btn btn-o btn-s" href="${link(p)}">View Details</a></div></div></article>`;
const acts=(t,d)=>`<td class="ac"><button class="btn btn-o btn-s" data-detail="${t}:${d.i}">View</button></td>`;
const RN={
cats:{d:()=>CATS,r:c=>`<a class="card cc" href="${R}products.html?category=${c.k}"><img src="${c.img}" alt="${c.n}" loading="lazy"><div><h3>${c.n}</h3><span>${PRODS.filter(p=>p.cat==c.k).length*40} products</span></div></a>`},
grid:{d:()=>PRODS,r:card},
orders:{d:()=>ORD,r:o=>`<tr><td>${o.id}</td><td>${o.cust}</td><td>${o.prod}</td><td>${o.date}</td><td>${$$$(o.price)}</td><td>${o.pay}</td><td>${B(o.st)}</td>${acts('orders',o)}</tr>`},
aorders:{d:()=>ORD,r:o=>`<tr><td>${o.id}</td><td>${o.cust}</td><td>${o.vendor}</td><td>${o.prod}</td><td>${o.date}</td><td>${$$$(o.price)}</td><td>${o.pay}</td><td>${B(o.st)}</td>${acts('orders',o)}</tr>`},
vprod:{d:()=>PRODS,r:p=>`<tr><td><img class="th" src="${p.img}" alt=""></td><td>${p.name}</td><td>${p.sku}</td><td>${p.cat}</td><td>$${p.price}</td><td>${p.stock}</td><td>${B(p.st)}</td><td class="ac"><a class="btn btn-o btn-s" href="add-product.html">Edit</a><button class="btn btn-o btn-s" data-detail="prods:${p.i}">View</button><button class="btn btn-o btn-s dng" data-del="prods:${p.i}">Delete</button></td></tr>`},
aprod:{d:()=>PRODS,r:p=>`<tr><td><img class="th" src="${p.img}" alt=""></td><td>${p.name}</td><td>${p.sku}</td><td>${p.vendor}</td><td>${p.cat}</td><td>$${p.price}</td><td>${p.stock}</td><td>${B(p.st)}</td><td class="ac"><button class="btn btn-o btn-s" data-detail="prods:${p.i}">View</button><button class="btn btn-o btn-s" data-toast="Product approved (demo)">Approve</button></td></tr>`},
vendors:{d:()=>V,r:v=>`<tr><td>${v.name}</td><td>${v.store}</td><td>${v.email}</td><td>${v.products}</td><td>${v.orders}</td><td>${$$$(v.price)}</td><td>${B(v.st)}</td><td>${v.date}</td><td class="ac"><button class="btn btn-o btn-s" data-detail="vendors:${v.i}">View</button><button class="btn btn-o btn-s" data-toast="Vendor approved (demo)">Approve</button><button class="btn btn-o btn-s dng" data-toast="Vendor suspended (demo)">Suspend</button></td></tr>`}};
const DET={orders:ORD,prods:PRODS,vendors:V};
const toast=m=>{const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)};
const upd=()=>$$('#cartCount').forEach(e=>e.textContent=cart().reduce((a,c)=>a+c.q,0));
const add=(id,q=1)=>{const c=cart(),x=c.find(i=>i.id==id);x?x.q+=q:c.push({id:+id,q});S('mv_cart',c);upd();toast('Added to cart')};
const totals=ex=>{const sub=cart().reduce((a,i)=>a+PRODS[i.id-1].price*i.q,0),d=localStorage.getItem('mv_coupon')?+(sub*.1).toFixed(2):0,sh=(sub&&sub<100?5:0)+ex;return{sub,d,sh,t:+(sub-d+sh).toFixed(2)}};
const sum=t=>`<ul class="lst"><li>Subtotal<b>$${t.sub}</b></li><li>Shipping<b>${t.sh?'$'+t.sh:'Free'}</b></li><li>Discount<b>-$${t.d}</b></li><li class="tot">Total<b>$${t.t}</b></li></ul>`;
const rCart=()=>{const r=$('#cartRoot');if(!r)return;const c=cart();if(!c.length){r.innerHTML=`<div class="empty card">${ic('cart')}<h3>Your cart is empty</h3><p>Looks like you haven't added anything yet.</p><a class="btn btn-p" href="products.html">Continue Shopping</a></div>`;return}
r.innerHTML=`<div class="cart-l">${c.map(i=>{const p=PRODS[i.id-1];return`<div class="ci card"><img src="${p.img}" alt="${p.name}"><div class="cii"><a href="${link(p)}">${p.name}</a><small>Sold by ${p.vendor}</small><b>$${p.price}</b></div><div class="qty"><button data-qty="${p.id}:-1" aria-label="Decrease">&minus;</button><span>${i.q}</span><button data-qty="${p.id}:1" aria-label="Increase">+</button></div><button class="ibtn" data-rm="${p.id}" aria-label="Remove">${ic('x')}</button></div>`}).join('')}<div class="row sp"><a class="btn btn-o" href="products.html">Continue Shopping</a><button class="btn btn-o" data-clear>Clear Cart</button></div></div><aside class="card sum"><h3>Order summary</h3>${sum(totals(0))}<div class="row"><input class="in" id="couponInput" placeholder="Coupon (SAVE10)" aria-label="Coupon"><button class="btn btn-o" data-coupon>Apply</button></div><a class="btn btn-p btn-b" href="checkout.html">Checkout</a></aside>`};
const rSum=()=>{const r=$('#sumRoot');if(!r)return;const x=+($('[name=ship]:checked')||{value:0}).value;r.innerHTML=cart().map(i=>`<p class="sl">${PRODS[i.id-1].name} x ${i.q}</p>`).join('')+sum(totals(x))};
const rPD=()=>{const r=$('#pd');if(!r)return;const p=PRODS[(+new URLSearchParams(location.search).get('id')||1)-1]||PRODS[0];document.title=p.name+' | Mercato';
r.innerHTML=`<div class="pdw"><div class="gal"><img id="mainImg" src="${p.img}" alt="${p.name}"><div class="thumbs">${['','&sat=-100','&con=30'].map(x=>`<button data-thumb="${p.img+x}" aria-label="Thumbnail"><img src="${p.img+x}" alt=""></button>`).join('')}</div></div><div class="pi"><h1>${p.name}</h1>${stars(p)}<div class="price big"><b>$${p.price}</b><s>$${p.old}</s><span class="badge b-red">-${Math.round(100-p.price/p.old*100)}%</span></div><span class="badge ${p.stock?'s-delivered':'s-cancelled'}">${p.stock?'In stock ('+p.stock+')':'Out of stock'}</span><div class="row"><div class="qty"><button data-step="-1" aria-label="Decrease">&minus;</button><input id="qty" type="number" value="1" min="1" aria-label="Quantity"><button data-step="1" aria-label="Increase">+</button></div><button class="btn btn-p" data-add="${p.id}" data-pd>Add to Cart</button><button class="btn btn-w2" data-buy="${p.id}">Buy Now</button><button class="wish st${wl().includes(p.id)?' on':''}" data-wish="${p.id}" aria-label="Wishlist">${ic('heart')}</button></div><div class="card pad"><h3>Sold by ${p.vendor}</h3><p>Verified seller | 98% positive feedback</p></div></div></div>
<div class="g2"><div class="card pad"><h3>Description</h3><p>${p.name} by ${p.brand}: premium quality, thoughtfully designed and backed by our marketplace guarantee.</p><h3>Specifications</h3><ul class="lst"><li>Brand<b>${p.brand}</b></li><li>Category<b>${p.cat}</b></li><li>SKU<b>${p.sku}</b></li></ul></div><div class="card pad"><h3>Shipping information</h3><p>Standard 3-5 days, express 1-2 days. Free shipping over $100.</p><h3>Return policy</h3><p>30-day returns on unused items.</p><h3>Reviews</h3><ul class="lst"><li>Great quality, fast delivery. <b>5.0</b></li><li>Worth the price. <b>4.5</b></li></ul></div></div><div class="sh"><h2>Related products</h2></div><div class="grid" id="related">${PRODS.filter(x=>x.cat==p.cat&&x.id!=p.id).concat(PRODS.filter(x=>x.cat!=p.cat)).slice(0,4).map(card).join('')}</div>`};
// engine
const F={},sp=new URLSearchParams(location.search);
if(sp.get('category'))F.cat=sp.get('category');if(sp.get('q'))F.q=sp.get('q');if(sp.get('status'))F.st=sp.get('status');
const match=(d,f)=>Object.entries(f).every(([k,v])=>{if(!v)return true;if(k=='q')return Object.values(d).join(' ').toLowerCase().includes(v.toLowerCase());if(k=='cat')return d.cat==v;if(k=='st')return d.st==v;if(k=='brand')return d.brand==v;if(k=='rating')return d.rating>=+v;if(k=='date')return d.date>=v;if(k=='price'){const[a,b]=v.split('-');return d.price>=+a&&d.price<=+b}return true});
const val=d=>d.price??0;
const render=el=>{const x=RN[el.dataset.render];const fx=el.dataset.fix?Object.fromEntries([el.dataset.fix.split('=')]):{};let l=x.d().filter(d=>match(d,{...F,...fx}));const s=F.sort||el.dataset.sort;
if(s=='price-asc')l.sort((a,b)=>val(a)-val(b));if(s=='price-desc')l.sort((a,b)=>val(b)-val(a));if(s=='name')l.sort((a,b)=>(a.name||'').localeCompare(b.name||''));if(s=='rating')l.sort((a,b)=>b.rating-a.rating);if(s=='disc')l.sort((a,b)=>a.price/a.old-b.price/b.old);
const tot=l.length,size=+el.dataset.size||+el.dataset.limit||999,pg=+el.dataset.page||1,pages=Math.ceil(tot/size)||1;l=l.slice((pg-1)*size,pg*size);
el.innerHTML=l.length?l.map(x.r).join(''):(el.tagName=='TBODY'?'<tr><td colspan="9" class="nores">No results found</td></tr>':'<p class="nores">No results found</p>');
const pgr=el.closest('.tblw')&&$('.pager',el.closest('.tblw'));if(pgr)pgr.innerHTML=pages>1?Array.from({length:pages},(_,i)=>`<button class="${i+1==pg?'on':''}" data-pg="${i+1}">${i+1}</button>`).join(''):''};
const all=()=>$$('[data-render]').forEach(render);
const chart=el=>{const v=el.dataset.chart.split(',').map(Number),m=Math.max(...v),w=40,lb=(el.dataset.labels||'').split(',');let s=`<svg viewBox="0 0 ${v.length*w} 120" preserveAspectRatio="none" role="img">`;
if(el.dataset.type=='line'){const pt=v.map((y,i)=>`${i*w+w/2},${110-y/m*100}`);s+=`<polygon class="area" points="${w/2},110 ${pt.join(' ')} ${v.length*w-w/2},110"/><polyline class="ln" points="${pt.join(' ')}"/>`}else v.forEach((y,i)=>s+=`<rect class="bar" x="${i*w+8}" y="${110-y/m*100}" width="${w-16}" height="${y/m*100}" rx="4"/>`);
el.innerHTML=s+'</svg><div class="lbs">'+lb.slice(0,v.length).map(l=>`<span>${l}</span>`).join('')+'</div>'};
document.addEventListener('click',e=>{const t=e.target.closest('[data-add],[data-buy],[data-wish],[data-qty],[data-step],[data-thumb],[data-rm],[data-clear],[data-coupon],[data-toggle],[data-open],[data-close],[data-toast],[data-detail],[data-del],[data-pg],[data-logout],.tab,.hnav');if(!t)return;const d=t.dataset;
if(d.buy!==undefined){add(d.buy,+$('#qty').value||1);location=R+'checkout.html'}
else if(d.add!==undefined)add(d.add,d.pd!==undefined?+$('#qty').value||1:1);
else if(d.wish){const w=wl(),i=w.indexOf(+d.wish);i<0?w.push(+d.wish):w.splice(i,1);S('mv_wish',w);$$(`[data-wish="${d.wish}"]`).forEach(b=>b.classList.toggle('on',i<0));toast(i<0?'Added to wishlist':'Removed from wishlist')}
else if(d.qty){const[id,n]=d.qty.split(':'),c=cart(),x=c.find(i=>i.id==id);x.q=Math.max(1,x.q+ +n);S('mv_cart',c);upd();rCart()}
else if(d.step){const q=$('#qty');q.value=Math.max(1,+q.value+ +d.step)}
else if(d.thumb)$('#mainImg').src=d.thumb;
else if(d.rm){S('mv_cart',cart().filter(i=>i.id!=d.rm));upd();rCart()}
else if(d.clear!==undefined){S('mv_cart',[]);upd();rCart()}
else if(d.coupon!==undefined){if($('#couponInput').value.trim().toUpperCase()=='SAVE10'){localStorage.setItem('mv_coupon','1');toast('Coupon applied');rCart()}else toast('Invalid coupon')}
else if(d.toggle)d.toggle.split(',').forEach(i=>$('#'+i).classList.toggle('open'));
else if(d.open)$('#'+d.open).classList.add('open');
else if(d.close!==undefined){t.closest('.modal').classList.remove('open');if(d.toast)toast(d.toast)}
else if(d.detail){const[k,i]=d.detail.split(':'),o=DET[k][i];$('#detailBody').innerHTML=Object.entries(o).filter(([a])=>!['i','img'].includes(a)).map(([a,b])=>`<div><small>${a}</small><b>${b}</b></div>`).join('');$('#detailModal').classList.add('open')}
else if(d.del){const[k,i]=d.del.split(':'),a=DET[k],j=a.findIndex(x=>x.i==i);a.splice(j,1);all();toast('Deleted (demo)')}
else if(d.pg){t.closest('.tblw').querySelector('[data-render]').dataset.page=d.pg;all()}
else if(d.logout!==undefined){localStorage.removeItem('mv_user');location=R+'login.html'}
else if(t.classList.contains('tab')){F.st=d.st;$$('.tab').forEach(b=>b.classList.toggle('on',b==t));const s=$('select[data-tf=st]');if(s)s.value=d.st;$$('[data-render]').forEach(x=>x.dataset.page=1);all()}
else if(t.classList.contains('hnav'))go(cur+(t.classList.contains('next')?1:-1));
else if(d.toast)toast(d.toast)});
document.addEventListener('click',e=>{if(e.target.classList.contains('modal'))e.target.classList.remove('open')});
document.addEventListener('submit',e=>{const f=e.target;if(f.dataset.toast){e.preventDefault();toast(f.dataset.toast);f.reset?.()}
if(f.id=='searchForm'){e.preventDefault();location=R+'products.html?q='+encodeURIComponent($('#searchInput').value)}
if(f.id=='loginForm'){e.preventDefault();S('mv_user',{in:Date.now()});location=R+'index.html'}
if(f.id=='productForm'){e.preventDefault();toast('Product saved (demo)');setTimeout(()=>location='products.html',900)}
if(f.id=='checkoutForm'){e.preventDefault();if(!cart().length){toast('Your cart is empty');return}if(!f.reportValidity())return;const n='MV-'+Math.floor(100000+Math.random()*900000),o=J('mv_orders',[]);o.push({n,items:cart(),t:totals(+$('[name=ship]:checked').value).t});S('mv_orders',o);S('mv_cart',[]);upd();$('#orderNo').textContent=n;$('#successModal').classList.add('open')}});
document.addEventListener('input',e=>{const t=e.target,k=t.dataset.tf;if(k){F[k]=t.value;$$('[data-render]').forEach(x=>x.dataset.page=1);all()}
if(t.name=='ship')rSum();
const c=$(`[data-count="${t.id}"]`);if(c)c.textContent=`${t.value.length}/${c.dataset.max}`;
if(t.id=='pName')$('#prevName').textContent=t.value||'Product name';if(t.id=='pPrice')$('#prevPrice').textContent='$'+(t.value||0)});
document.addEventListener('change',e=>{const t=e.target;if(t.dataset.tf)F[t.dataset.tf]=t.value,all();if(t.dataset.range!==undefined)$$('[data-chart]').forEach(c=>{c.dataset.chart=c.dataset.chart.split(',').map(x=>Math.max(5,Math.round(x*(.6+Math.random()*.8)))).join(',');chart(c)});
if(t.id=='pImgs'){const box=$('#previews');[...t.files].forEach(f=>{const r=new FileReader();r.onload=()=>{const d=document.createElement('div');d.className='pv';d.innerHTML=`<img src="${r.result}" alt=""><button type="button" class="ibtn" aria-label="Remove image">${ic('x')}</button>`;d.querySelector('button').onclick=()=>d.remove();box.appendChild(d);if(!$('#prevImg').dataset.u){$('#prevImg').src=r.result;$('#prevImg').dataset.u=1}};r.readAsDataURL(f)})}});
document.addEventListener('error',e=>{if(e.target.tagName=='IMG'&&!e.target.dataset.f){e.target.dataset.f=1;e.target.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23ece8ff'/%3E%3C/svg%3E"}},true);
let cur=0,tm;const sl=$$('.slide'),go=i=>{if(!sl.length)return;cur=(i+sl.length)%sl.length;sl.forEach((s,j)=>s.classList.toggle('on',j==cur));$$('#heroDots button').forEach((d,j)=>d.classList.toggle('on',j==cur));clearInterval(tm);tm=setInterval(()=>go(cur+1),5500)};
if(sl.length){$('#heroDots').innerHTML=sl.map((_,i)=>`<button data-dot="${i}" aria-label="Slide ${i+1}"></button>`).join('');$('#heroDots').addEventListener('click',e=>{if(e.target.dataset.dot)go(+e.target.dataset.dot)});go(0)}
$$('[data-tf]').forEach(i=>{const k=i.dataset.tf;if(F[k])i.value=F[k]});$$('.tab').forEach(b=>b.classList.toggle('on',b.dataset.st==(F.st||'')));
$$('[data-chart]').forEach(chart);$$('[data-count]').forEach(c=>c.textContent='0/'+c.dataset.max);
upd();rCart();rSum();rPD();all();
})();

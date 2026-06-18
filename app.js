/* ===== Nahal Group · script compartilhado (multi-página) ===== */
(function(){
  "use strict";
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Logo (wordmark negativo) reaproveitado em nav e rodapé
  var LOGO = '<svg viewBox="-8 -8 523 149" xmlns="http://www.w3.org/2000/svg" aria-label="Nahal Group"><g transform="translate(-44.20,-40.80) scale(1.7)"><circle cx="60" cy="30" r="6" fill="#fff"/><path d="M44,66 A16,16 0 0 0 76,66" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M35,66 A25,25 0 0 0 85,66" fill="none" stroke="#46D6EC" stroke-width="4.4" stroke-linecap="round"/><path d="M26,66 A34,34 0 0 0 94,66" fill="none" stroke="#7FB9DE" stroke-width="3.8" stroke-linecap="round"/></g><g fill="#fff" transform="translate(161.6,91.6)"><path d="M257 0Q194 0 194 63V1248Q194 1311 257 1311Q290 1311 321 1274L1154 203H1124V1248Q1124 1311 1187 1311Q1250 1311 1250 1248V63Q1250 0 1187 0Q1153 0 1123 37L290 1108H320V63Q320 0 257 0Z" transform="translate(0,0) scale(0.05,-0.05)"/><path d="M105 6Q47 31 70 89L559 1262Q580 1311 630 1311H635Q684 1310 703 1262L1195 89Q1220 31 1161 6Q1103 -17 1079 40L955 337H310L187 40Q164 -18 105 6ZM361 463H902L630 1112Z" transform="translate(78.20,0) scale(0.05,-0.05)"/><path d="M257 0Q230 0 212 18Q194 36 194 63V1248Q194 1275 212 1293Q230 1311 257 1311Q284 1311 302 1293Q320 1275 320 1248V727H1151V1248Q1151 1275 1169 1293Q1187 1311 1214 1311Q1241 1311 1259 1293Q1277 1275 1277 1248V63Q1277 36 1259 18Q1241 0 1214 0Q1187 0 1169 18Q1151 36 1151 63V601H320V63Q320 36 302 18Q284 0 257 0Z" transform="translate(147.35,0) scale(0.05,-0.05)"/><path d="M105 6Q47 31 70 89L559 1262Q580 1311 630 1311H635Q684 1310 703 1262L1195 89Q1220 31 1161 6Q1103 -17 1079 40L955 337H310L187 40Q164 -18 105 6ZM361 463H902L630 1112Z" transform="translate(226.90,0) scale(0.05,-0.05)"/><path d="M257 0Q194 0 194 63V1248Q194 1311 257 1311Q320 1311 320 1248V126H910Q973 126 973 63Q973 0 910 0Z" transform="translate(296.05,0) scale(0.05,-0.05)"/></g><g fill="#7FB9DE" transform="translate(161.6,117.6)"><path d="M566 0Q353 0 256.5 96.5Q160 193 160 406V860Q160 1075 256.5 1170.5Q353 1266 564 1266H806Q989 1266 1076 1190Q1163 1114 1170 944Q1172 923 1161.5 911.5Q1151 900 1130 900Q1089 900 1086 942Q1080 1077 1016.5 1129.5Q953 1182 806 1182H564Q446 1182 376 1151Q306 1120 275 1049.5Q244 979 244 860V406Q244 288 275.5 217.5Q307 147 377.5 115.5Q448 84 566 84H806Q912 84 973.5 110.5Q1035 137 1061.5 198.5Q1088 260 1088 366V502L848 504Q806 504 806 546Q806 588 848 588L1130 586Q1172 586 1172 544V366Q1172 173 1086 86.5Q1000 0 806 0Z" transform="translate(0,0) scale(0.015,-0.015)"/><path d="M1052 -2Q1034 -12 1019.5 -9Q1005 -6 994 10L660 534H264V42Q264 0 222 0Q180 0 180 42V1224Q180 1266 222 1266H690Q857 1266 941.5 1181.5Q1026 1097 1026 930V870Q1026 722 958.5 638.5Q891 555 758 538L1064 56Q1088 19 1052 -2ZM264 618H690Q821 618 881.5 679Q942 740 942 870V930Q942 1061 881.5 1121.5Q821 1182 690 1182H264Z" transform="translate(37.68,0) scale(0.015,-0.015)"/><path d="M566 0Q353 0 256.5 96.5Q160 193 160 406V860Q160 1075 256.5 1171.5Q353 1268 564 1266H806Q1019 1266 1115.5 1169.5Q1212 1073 1212 860V406Q1212 193 1115.5 96.5Q1019 0 806 0ZM566 84H806Q924 84 994.5 115.5Q1065 147 1096.5 217.5Q1128 288 1128 406V860Q1128 978 1096.5 1048.5Q1065 1119 994.5 1150.5Q924 1182 806 1182H564Q446 1183 376 1152Q306 1121 275 1050Q244 979 244 860V406Q244 288 275.5 217.5Q307 147 377.5 115.5Q448 84 566 84Z" transform="translate(73.14,0) scale(0.015,-0.015)"/><path d="M576 0Q363 0 266.5 96.5Q170 193 170 406V1224Q170 1242 182 1254Q194 1266 212 1266Q230 1266 242 1254Q254 1242 254 1224V406Q254 288 285.5 217.5Q317 147 387.5 115.5Q458 84 576 84H816Q934 84 1004.5 115.5Q1075 147 1106.5 217.5Q1138 288 1138 406V1224Q1138 1242 1150 1254Q1162 1266 1180 1266Q1198 1266 1210 1254Q1222 1242 1222 1224V406Q1222 193 1125.5 96.5Q1029 0 816 0Z" transform="translate(111.72,0) scale(0.015,-0.015)"/><path d="M222 0Q180 0 180 42V1224Q180 1266 222 1266H690Q857 1266 941.5 1181.5Q1026 1097 1026 930V870Q1026 704 941.5 619Q857 534 690 534H264V42Q264 0 222 0ZM264 618H690Q821 618 881.5 679Q942 740 942 870V930Q942 1061 881.5 1121.5Q821 1182 690 1182H264Z" transform="translate(150.60,0) scale(0.015,-0.015)"/></g></svg>';

  // NAV: a home é página única rica (âncoras). Páginas de serviço usam o mesmo nav voltando pra home (index.html#...).
  var home = (document.body.getAttribute('data-page') === 'inicio');
  var base = home ? '' : '/';
  var navHTML = '<div class="wrap nav-in">'
    + '<a href="' + (home ? '#top' : '/') + '" class="nav-logo" aria-label="Nahal Group">' + LOGO + '</a>'
    + '<nav class="nav-links" id="navlinks">'
    + '<a href="' + base + '#frentes">Serviços</a>'
    + '<a href="' + base + '#origem">Origem</a>'
    + '<a href="' + base + '#filosofia">Filosofia</a>'
    + '<a href="' + base + '#socios">Sócios</a>'
    + '<a href="blog.html">Blog</a>'
    + '<a href="' + base + '#contato" class="cta">Entrar na corrente</a>'
    + '</nav>'
    + '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>'
    + '</div>';

  var footHTML = '<div class="wrap">'
    + '<div class="ft-top"><div><div class="ft-logo">' + LOGO + '</div>'
    + '<p class="ft-tag">Muitas correntes, uma força.</p></div>'
    + '<div class="ft-cols">'
    + '<div class="ft-col"><h4>Frentes</h4><a href="marketing.html">Marketing e tráfego</a><a href="inteligencia.html">Inteligência artificial</a><a href="software.html">Software e apps</a><a href="marcas.html">Criação de marcas</a><a href="automacao.html">Automação 360°</a><a href="mentoria.html">Mentoria e mentalidade</a></div>'
    + '<div class="ft-col"><h4>Grupo</h4><a href="' + base + '#manifesto">Manifesto</a><a href="' + base + '#origem">Origem do nome</a><a href="' + base + '#filosofia">Filosofia</a><a href="fundadores.html">Fundadores</a><a href="blog.html">Blog</a></div>'
    + '<div class="ft-col"><h4>Contato</h4><a href="mailto:contato@nahalgroup.com.br">contato@nahalgroup.com.br</a><a href="https://instagram.com/nahalgroupoficial" target="_blank" rel="noopener">@nahalgroupoficial</a><span>Alameda Mamoré, 503 · Alphaville · Barueri/SP · 06454-040</span><span>Atende todo o Brasil</span></div>'
    + '</div></div>'
    + '<div class="ft-bot"><span>© 2026 Nahal Group · Hidrogeometria</span><span>nahalgroup.com.br</span></div>'
    + '</div>';

  var navEl = document.getElementById('nav');
  var ftEl = document.getElementById('ft');
  if (navEl) navEl.innerHTML = navHTML;
  if (ftEl) ftEl.innerHTML = footHTML;

  // Dados estruturados (Organization + WebSite) pra Google e pra IA generativa
  try {
    var ld = {"@context":"https://schema.org","@graph":[
      {"@type":"ProfessionalService","@id":"https://nahalgroup.com.br/#org","name":"Nahal Group","url":"https://nahalgroup.com.br","description":"Grupo de empresas que acelera negócios em todo o Brasil: marketing e tráfego, inteligência artificial, software, criação de marcas e automação.","areaServed":{"@type":"Country","name":"Brasil"},"email":"contato@nahalgroup.com.br","address":{"@type":"PostalAddress","streetAddress":"Alameda Mamoré, 503, Alphaville","addressLocality":"Barueri","addressRegion":"SP","postalCode":"06454-040","addressCountry":"BR"},"sameAs":["https://instagram.com/nahalgroupoficial"],"founder":[{"@type":"Person","name":"Eduardo Malheiros"},{"@type":"Person","name":"Victor Soares"}]},
      {"@type":"WebSite","@id":"https://nahalgroup.com.br/#site","name":"Nahal Group","url":"https://nahalgroup.com.br","inLanguage":"pt-BR","publisher":{"@id":"https://nahalgroup.com.br/#org"}}
    ]};
    var s = document.createElement('script'); s.type = 'application/ld+json'; s.text = JSON.stringify(ld); document.head.appendChild(s);
  } catch(e){}

  // Menu mobile
  var burger = document.getElementById('burger');
  var navlinks = document.getElementById('navlinks');
  if (burger && navlinks){
    burger.addEventListener('click', function(){
      var o = navlinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', o);
    });
    navlinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ navlinks.classList.remove('open'); });
    });
  }

  // Reveal on scroll + figura da filosofia
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if (e.isIntersecting){
        e.target.classList.add('in');
        var f = e.target.querySelector && e.target.querySelector('#fig');
        if (f) f.classList.add('built');
        io.unobserve(e.target);
      }
    });
  }, {threshold:.08, rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // Rio de progresso + nav sólida
  var fill = document.getElementById('cfill'),
      head = document.getElementById('chead'),
      pct = document.getElementById('cpct'),
      ctop = document.getElementById('ctopfill'),
      nav = document.getElementById('nav');
  var LEN = fill ? fill.getTotalLength() : 0;
  if (fill) fill.style.strokeDasharray = LEN;
  var ticking = false;
  function onScroll(){
    if (ticking) return; ticking = true;
    requestAnimationFrame(function(){
      ticking = false;
      var max = document.documentElement.scrollHeight - innerHeight;
      var p = max > 0 ? Math.min(Math.max(scrollY / max, 0), 1) : 0;
      if (fill){
        fill.style.strokeDashoffset = LEN * (1 - p);
        var ptn = fill.getPointAtLength(LEN * p); head.setAttribute('cx', ptn.x); head.setAttribute('cy', ptn.y);
      }
      if (pct) pct.textContent = String(Math.round(p * 100)).padStart(2, '0');
      if (ctop) ctop.style.width = (p * 100) + '%';
      if (nav) nav.classList.toggle('solid', scrollY > 40);
    });
  }
  addEventListener('scroll', onScroll, {passive:true});
  addEventListener('resize', onScroll, {passive:true});
  addEventListener('load', onScroll);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(onScroll);
  onScroll();

  // Canvas: correnteza + ripples reativos + peixes no fundo
  var cv = document.getElementById('flow');
  if (!reduce && cv){
    var ctx = cv.getContext('2d');
    var W, H, DPR, N = Math.min(150, Math.floor(innerWidth / 9)), P = [], R = [], F = [];
    var rnd = function(a, b){ return a + Math.random() * (b - a); };
    function size(){ DPR = Math.min(devicePixelRatio || 1, 2); W = cv.width = innerWidth * DPR; H = cv.height = innerHeight * DPR; cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px'; }
    function seed(){ P = []; for (var i = 0; i < N; i++) P.push({x:rnd(0,W), y:rnd(0,H), r:rnd(.6,2.3)*DPR, s:rnd(.15,.7)*DPR, ph:rnd(0,6.28), sw:rnd(.3,1.1)}); }
    function makeFish(reset){
      var depth = rnd(0,1);                       // 0 perto, 1 longe (pseudo-3D)
      var dir = Math.random() < .5 ? 1 : -1;
      var L = rnd(8,17) * (1 - depth*0.45) * DPR;
      return {
        x: reset ? (dir>0 ? -L*1.7 : W + L*1.7) : rnd(0,W),
        y: rnd(H*0.12, H*0.92), dir: dir,
        sp: rnd(.25,.7) * (1 - depth*0.4) * DPR,
        L: L, a: 0.05 + (1-depth)*0.11,
        ph: rnd(0,6.28), vy: rnd(-.05,.05)*DPR, fin: Math.random() < .55
      };
    }
    function seedFish(){ F = []; var n = Math.max(4, Math.min(9, Math.floor(innerWidth/210))); for (var i=0;i<n;i++) F.push(makeFish(false)); }
    function drawFish(f, t){
      var w = Math.sin(t*0.005 + f.ph) * f.L*0.3;          // balanço da cauda
      ctx.save();
      ctx.translate(f.x, f.y + Math.sin(t*0.0018 + f.ph)*2*DPR);
      ctx.scale(f.dir, 1);
      ctx.fillStyle = 'rgba(127,185,222,' + f.a + ')';
      ctx.beginPath(); ctx.ellipse(0, 0, f.L, f.L*0.42, 0, 0, 6.28); ctx.fill();            // corpo
      ctx.beginPath(); ctx.moveTo(-f.L*0.82, 0); ctx.lineTo(-f.L*1.5, -f.L*0.45 + w); ctx.lineTo(-f.L*1.5, f.L*0.45 + w); ctx.closePath(); ctx.fill(); // cauda
      if (f.fin){ ctx.beginPath(); ctx.moveTo(f.L*0.15, -f.L*0.4); ctx.lineTo(-f.L*0.3, -f.L*0.82); ctx.lineTo(-f.L*0.42, -f.L*0.36); ctx.closePath(); ctx.fill(); } // dorsal
      ctx.restore();
    }
    size(); seed(); seedFish();
    addEventListener('resize', function(){ size(); seed(); seedFish(); });
    var mx = -999, my = -999, lastR = 0;
    addEventListener('pointermove', function(e){ mx = e.clientX * DPR; my = e.clientY * DPR; var now = performance.now(); if (now - lastR > 90 && R.length < 24){ R.push({x:mx, y:my, rad:2*DPR, a:.5}); lastR = now; } }, {passive:true});
    var raf = null;
    function frame(){
      var t = performance.now();
      ctx.clearRect(0, 0, W, H);
      // peixes (mais ao fundo) + fogem do mouse
      for (var j = 0; j < F.length; j++){
        var f = F[j];
        f.x += f.sp * f.dir; f.y += f.vy;
        var fdx = f.x - mx, fdy = f.y - my, fr = 95*DPR;
        if (fdx*fdx + fdy*fdy < fr*fr){ var fd = Math.sqrt(fdx*fdx + fdy*fdy) || 1; var push = (1 - fd/fr) * 4.2 * DPR; f.x += fdx/fd*push; f.y += fdy/fd*push; f.dir = fdx >= 0 ? 1 : -1; }
        if (f.y < H*0.06) f.y = H*0.06; if (f.y > H*0.95) f.y = H*0.95;
        if ((f.dir > 0 && f.x - f.L*1.7 > W) || (f.dir < 0 && f.x + f.L*1.7 < 0)) F[j] = makeFish(true);
        else drawFish(f, t);
      }
      // poeira/correnteza
      for (var k = 0; k < P.length; k++){
        var p = P[k];
        p.y += p.s; p.x += Math.sin(p.y * 0.01 + p.ph) * p.sw * DPR * 0.4;
        var dx = p.x - mx, dy = p.y - my, d2 = dx*dx + dy*dy, rad = 110 * DPR;
        if (d2 < rad*rad){ var d = Math.sqrt(d2) || 1; var fo = (1 - d/rad) * 1.6; p.x += dx/d*fo; p.y += dy/d*fo; }
        if (p.y > H + 12){ p.y = -12; p.x = rnd(0, W); } if (p.x < -12) p.x = W + 12; if (p.x > W + 12) p.x = -12;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fillStyle = 'rgba(127,185,222,' + (0.10 + p.r/(3*DPR)*0.12) + ')'; ctx.fill();
      }
      // ripples reativos (topo)
      for (var i = R.length - 1; i >= 0; i--){ var r = R[i]; r.rad += 2.6*DPR; r.a *= 0.945; if (r.a < 0.02){ R.splice(i,1); continue; }
        ctx.beginPath(); ctx.arc(r.x, r.y, r.rad, 0, 6.28); ctx.strokeStyle = 'rgba(70,214,236,' + r.a + ')'; ctx.lineWidth = 1.2*DPR; ctx.stroke(); }
      raf = requestAnimationFrame(frame);
    }
    var play = function(){ if (!raf) raf = requestAnimationFrame(frame); };
    var stop = function(){ if (raf){ cancelAnimationFrame(raf); raf = null; } };
    document.addEventListener('visibilitychange', function(){ document.hidden ? stop() : play(); });
    play();
  }

  // Símbolo reativo ao mouse (hero da home)
  if (!reduce){
    var hs = document.getElementById('hsym');
    var hero = document.querySelector('.hero');
    if (hs && hero){
      hero.addEventListener('pointermove', function(e){
        var r = hero.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        hs.style.transform = 'translate(' + (px * 16) + 'px,' + (py * 16) + 'px)';
      });
      hero.addEventListener('pointerleave', function(){ hs.style.transform = 'translate(0,0)'; });
      hs.style.transition = 'transform .3s ease';
    }
  }
})();

// Chat IA de atendimento (na cara da marca)
(function(){
  var WEBHOOK = 'https://alphatrinity.app.n8n.cloud/webhook/nahal-chat';
  var GREET = 'Oi! Sou a inteligência da Nahal. Me conta rapidinho: qual é o seu negócio e o que você quer destravar?';
  var SYM = '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="15" r="3.4" fill="#fff"/><path d="M15 30 a9 9 0 0 0 18 0" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M10 30 a14 14 0 0 0 28 0" stroke="#bfe6f5" stroke-width="2.3" stroke-linecap="round"/></svg>';

  var store = (function(){ try{ var s=window.sessionStorage; s.setItem('_nt','1'); s.removeItem('_nt'); return s; }catch(e){ var m={}; return {getItem:function(k){return (k in m)?m[k]:null;},setItem:function(k,v){m[k]=v;},removeItem:function(k){delete m[k];}}; } })();

  var sid = store.getItem('nchat_sid'); if(!sid){ sid='n'+Date.now()+Math.random().toString(36).slice(2,8); store.setItem('nchat_sid', sid); }
  var msgs; try{ msgs = JSON.parse(store.getItem('nchat_msgs')||'null'); }catch(e){ msgs=null; }
  if(!msgs || !msgs.length){ msgs=[{role:'assistant', content:GREET}]; }
  var leadSent = store.getItem('nchat_lead')==='1';
  var busy=false, opened=false;
  function save(){ try{ store.setItem('nchat_msgs', JSON.stringify(msgs)); store.setItem('nchat_lead', leadSent?'1':'0'); }catch(e){} }

  var launch=document.createElement('button');
  launch.className='nchat-launch'; launch.type='button'; launch.setAttribute('aria-label','Falar com a Nahal');
  launch.innerHTML='<span class="lbl">Falar com a Nahal</span><span class="orb">'+SYM+'</span>';
  var panel=document.createElement('div'); panel.className='nchat';
  panel.innerHTML='<div class="nchat-h"><span class="sym">'+SYM+'</span><span class="tt"><b>Nahal</b><span>Atendimento · responde na hora</span></span><button class="x" type="button" aria-label="Fechar">&times;</button></div><div class="nchat-body"></div><div class="nchat-f"><textarea rows="1" placeholder="Escreva aqui..." aria-label="Sua mensagem"></textarea><button class="send" type="button" aria-label="Enviar"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>';
  function add(){
    document.body.appendChild(launch); document.body.appendChild(panel);
    setTimeout(function(){
      if(panel.classList.contains('open')){ launch.classList.add('in'); return; }
      launch.classList.add('in','teaser');
      setTimeout(function(){ launch.classList.remove('teaser'); }, 4500);
    }, 2600);
    var teases=0;
    var iv=setInterval(function(){
      if(teases>=4){ clearInterval(iv); return; }
      if(launch.classList.contains('in') && !panel.classList.contains('open') && !launch.classList.contains('hide')){
        teases++; launch.classList.add('teaser');
        setTimeout(function(){ launch.classList.remove('teaser'); }, 4200);
      }
    }, 38000);
  }
  if(document.body){ add(); } else { document.addEventListener('DOMContentLoaded', add); }

  var body=panel.querySelector('.nchat-body'), input=panel.querySelector('textarea'), sendBtn=panel.querySelector('.send');

  function bubble(role, text){ var d=document.createElement('div'); d.className='nchat-msg '+(role==='user'?'me':'bot'); d.textContent=text; body.appendChild(d); body.scrollTop=body.scrollHeight; }
  function render(){ body.innerHTML=''; for(var i=0;i<msgs.length;i++) bubble(msgs[i].role, msgs[i].content); }
  function typing(on){ var t=body.querySelector('.nchat-typing'); if(on){ if(!t){ t=document.createElement('div'); t.className='nchat-typing'; t.innerHTML='<i></i><i></i><i></i>'; body.appendChild(t); body.scrollTop=body.scrollHeight; } } else if(t){ t.parentNode.removeChild(t); } }
  function grow(){ input.style.height='auto'; input.style.height=Math.min(input.scrollHeight,90)+'px'; }

  function open(){ panel.classList.add('open'); launch.classList.remove('teaser'); launch.classList.add('hide'); if(!opened){ render(); opened=true; } body.scrollTop=body.scrollHeight; setTimeout(function(){ try{ input.focus(); }catch(e){} },120); }
  function close(){ panel.classList.remove('open'); launch.classList.remove('hide'); }
  launch.addEventListener('click', open);
  panel.querySelector('.x').addEventListener('click', close);
  input.addEventListener('input', grow);

  function send(){
    var text=input.value.trim(); if(!text||busy) return;
    msgs.push({role:'user', content:text}); bubble('user', text); save();
    input.value=''; grow(); busy=true; sendBtn.disabled=true; typing(true);
    fetch(WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:sid,leadSent:leadSent,messages:msgs})})
      .then(function(r){ return r.json(); })
      .then(function(d){
        typing(false);
        var reply=(d&&d.reply)?d.reply:'Recebi sua mensagem. Já te respondo por aqui.';
        msgs.push({role:'assistant', content:reply}); bubble('assistant', reply);
        if(d&&d.leadReady){ leadSent=true; }
        save(); busy=false; sendBtn.disabled=false;
      })
      .catch(function(){
        typing(false);
        bubble('assistant','Tive um probleminha pra responder agora. Você pode falar com a gente no WhatsApp pela seção de contato. Já já eu volto.');
        busy=false; sendBtn.disabled=false;
      });
  }
  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', function(e){ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(); } });
})();

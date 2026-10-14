const items = [
 {id:1,category:"games",categoryAr:"لعبة",title:"Genshin Impact",year:"2020",emoji:"⚔️",tag:"OPEN WORLD RPG",color:"linear-gradient(135deg,#294b45,#152322 65%,#090f12)",description:"لعبة تقمص أدوار وعالم مفتوح تستكشف فيه تيفات، وتجمع الشخصيات وتخوض مغامرات مع فريقك. تعرّف على الشخصيات والأحداث من الموقع الرسمي.",meta:["عالم مفتوح","أكشن RPG","مجانية للبدء"],url:"https://genshin.hoyoverse.com/"},
 {id:2,category:"games",categoryAr:"لعبة",title:"Free Fire",year:"2017",emoji:"🎯",tag:"BATTLE ROYALE",color:"linear-gradient(135deg,#76251e,#2c1015 65%,#110c10)",description:"لعبة باتل رويال سريعة تضع اللاعبين في مواجهة للبقاء حتى النهاية. تابع الأخبار والتحديثات والفعاليات من موقع اللعبة الرسمي.",meta:["باتل رويال","أجهزة الهاتف","تنافسية"],url:"https://ff.garena.com/"},
 {id:3,category:"games",categoryAr:"لعبة",title:"Honkai: Star Rail",year:"2023",emoji:"🚄",tag:"SPACE FANTASY RPG",color:"linear-gradient(135deg,#44366f,#20162e 65%,#0c0b14)",description:"مغامرة خيال علمي وتقمص أدوار بنظام قتال بالأدوار، تسافر فيها على متن قطار النجوم وتزور عوالم مختلفة.",meta:["خيال علمي","قتال بالأدوار","قصة"],url:"https://hsr.hoyoverse.com/"},
 {id:4,category:"anime",categoryAr:"أنمي",title:"Demon Slayer",year:"2019",emoji:"鬼",tag:"DARK FANTASY",color:"linear-gradient(135deg,#2f4b45,#17211f 65%,#0c1111)",description:"قصة تانجيرو كامادو الذي ينطلق في رحلة لمواجهة الشياطين وإنقاذ أخته. استخدم الموقع الرسمي لمعرفة آخر أخبار العمل وإصداراته.",meta:["أكشن","فانتازيا مظلمة","مغامرة"],url:"https://kimetsu.com/"},
 {id:5,category:"anime",categoryAr:"أنمي",title:"JUJUTSU KAISEN",year:"2020",emoji:"呪",tag:"SUPERNATURAL ACTION",color:"linear-gradient(135deg,#49304f,#25152e 65%,#100d15)",description:"عالم من اللعنات والطاقة الملعونة، حيث يدخل يوجي إيتادوري عالم السحرة في أحداث مليئة بالمواجهات الخطيرة.",meta:["خوارق","أكشن","شونين"],url:"https://jujutsukaisen.jp/"},
 {id:6,category:"anime",categoryAr:"أنمي",title:"Attack on Titan",year:"2013",emoji:"進",tag:"EPIC DARK FANTASY",color:"linear-gradient(135deg,#6a3b2c,#2b1717 65%,#100d0d)",description:"ملحمة غامضة عن البشر الذين يعيشون خلف أسوار ضخمة في مواجهة العمالقة. اكتشف تفاصيل العمل وأخباره عبر المصادر الرسمية.",meta:["دراما","غموض","أكشن"],url:"https://shingeki.tv/"},
 {id:7,category:"movies",categoryAr:"فيلم",title:"Dune: Part Two",year:"2024",emoji:"♜",tag:"SCI-FI / EPIC",color:"linear-gradient(135deg,#8b542e,#3a241a 65%,#130e0b)",description:"رحلة خيال علمي ملحمية وسط رمال أراكيس وصراع على المستقبل والسلطة. زر صفحة الفيلم الرسمية لمعرفة التفاصيل والعروض المتاحة.",meta:["خيال علمي","ملحمي","مغامرة"],url:"https://www.legendary.com/film/duneparttwo/"},
 {id:8,category:"movies",categoryAr:"فيلم",title:"Spider-Man: Across the Spider-Verse",year:"2023",emoji:"🕷️",tag:"ANIMATED ACTION",color:"linear-gradient(135deg,#5c234c,#26132e 65%,#100b15)",description:"مغامرة رسوم متحركة تأخذ مايلز موراليس عبر عوالم متعددة ومواجهات غير متوقعة. تتوفر معلومات الفيلم عبر استوديو الإنتاج والمنصات المرخصة.",meta:["رسوم متحركة","أبطال خارقون","مغامرة"],url:"https://www.sonypictures.com/movies/spidermanacrossthespiderverse"},
 {id:9,category:"movies",categoryAr:"فيلم",title:"The Super Mario Bros. Movie",year:"2023",emoji:"🍄",tag:"FAMILY / ADVENTURE",color:"linear-gradient(135deg,#75422d,#352019 65%,#110c0a)",description:"فيلم مغامرات عائلي مستوحى من عالم سوبر ماريو، مع شخصيات مألوفة ورحلة إلى مملكة الفطر.",meta:["عائلي","كوميديا","مغامرة"],url:"https://www.thesupermariobros.movie/"}
];
const categoryNames={games:"الألعاب",anime:"الأنمي",movies:"الأفلام"};
let activeCategory="all";
const grid=document.getElementById("contentGrid"), search=document.getElementById("searchInput"), empty=document.getElementById("emptyState");
function render(){
 const term=search.value.trim().toLowerCase();
 const filtered=items.filter(item=>(activeCategory==="all"||item.category===activeCategory)&&[item.title,item.description,item.categoryAr,item.tag,...item.meta].join(" ").toLowerCase().includes(term));
 grid.innerHTML=filtered.map(item=>`<article class="content-card" tabindex="0" role="button" aria-label="تفاصيل ${item.title}" data-id="${item.id}">
 <div class="card-art" style="--card-bg:${item.color}"><span class="card-index">DSN / ${String(item.id).padStart(2,"0")}</span><span class="card-emoji">${item.emoji}</span><span class="card-type">${categoryNames[item.category]}</span></div>
 <div class="card-body"><div class="card-meta"><span>${item.tag}</span><span class="year">${item.year}</span></div><h3>${item.title}</h3><p>${item.description}</p><div class="card-bottom"><span>اكتشف التفاصيل</span><span>↙</span></div></div></article>`).join("");
 empty.hidden=filtered.length!==0; grid.hidden=filtered.length===0;
 document.getElementById("resultCount").textContent=`عرض ${filtered.length} من ${items.length} عناصر`;
 document.getElementById("countAll").textContent=String(items.length).padStart(2,"0");
}
function setCategory(category){
 activeCategory=category;
 document.querySelectorAll("[data-category]").forEach(btn=>btn.classList.toggle("active",btn.dataset.category===category));
 render();
}
document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{setCategory(btn.dataset.category);document.getElementById("discover").scrollIntoView({behavior:"smooth"});document.getElementById("menuToggle").parentElement.querySelector(".main-nav").classList.remove("open")}));
search.addEventListener("input",render);
document.getElementById("resetSearch").addEventListener("click",()=>{search.value="";setCategory("all")});
document.getElementById("menuToggle").addEventListener("click",()=>document.querySelector(".main-nav").classList.toggle("open"));
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus()}if(e.key==="Escape")closeModal()});
const modal=document.getElementById("detailModal");
function openDetail(item){
 document.getElementById("detailArt").style.setProperty("--card-bg",item.color);
 document.getElementById("detailEmoji").textContent=item.emoji;
 document.getElementById("detailTag").textContent=item.tag;
 document.getElementById("detailCategory").textContent=categoryNames[item.category];
 document.getElementById("detailTitle").textContent=item.title;
 document.getElementById("detailDescription").textContent=item.description;
 document.getElementById("detailMeta").innerHTML=item.meta.map(x=>`<span>${x}</span>`).join("");
 const link=document.getElementById("detailLink");link.href=item.url;
 modal.hidden=false;document.body.style.overflow="hidden";document.getElementById("modalClose").focus();
}
function closeModal(){modal.hidden=true;document.body.style.overflow=""}
grid.addEventListener("click",e=>{const card=e.target.closest(".content-card");if(card)openDetail(items.find(x=>x.id===Number(card.dataset.id)))});
grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("content-card")){e.preventDefault();openDetail(items.find(x=>x.id===Number(e.target.dataset.id)))}});
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.getElementById("featuredButton").addEventListener("click",()=>openDetail(items[Math.floor(Math.random()*items.length)]));
document.getElementById("year").textContent=new Date().getFullYear();
render();

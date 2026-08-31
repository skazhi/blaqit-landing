import{t as g,a as E,r as i,av as u,ac as B,j as e,aw as f,x as v}from"./index-ChDMfYvd.js";import{M as _}from"./map-pin-BQoJfs68.js";import{P as A}from"./phone-B8N5k86g.js";import{S as j}from"./send-DOE34_lT.js";const M=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],S=g("heart",M);const R=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],W=g("navigation",R);const $=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],D=g("star",$),H={"Силикатный 14 - Ковчег":"м. Хорошёво / м. Полежаевская","Силикатный 19 - Ковчег":"м. Полежаевская / МЦК Хорошёво","Южнопортовая 7с7 - Ковчег":"м. Кожуховская","Магистральная - Ковчег":"м. Полежаевская / м. Хорошёвская","Новая Южнопортовая 7с1 - Ковчег":"м. Кожуховская"},w=n=>H[n]||"м. Уточняется",I=({station:n})=>e.jsxs("span",{className:"metro-badge",children:[e.jsx("span",{className:"metro-logo",children:"M"}),n]}),Y=()=>{const{showToast:n}=E(),[l,k]=i.useState([]),[y,N]=i.useState(!0),[t,d]=i.useState({name:"",phone:"",hostel_id:"",beds_needed:""}),[x,b]=i.useState(!1),[z,m]=i.useState(!1),[p,h]=i.useState(!1);i.useEffect(()=>{u.getHostels().then(r=>{const a=r.data.sort((o,s)=>o.name.toLowerCase().includes("магистральная")?-1:s.name.toLowerCase().includes("магистральная")?1:o.name.localeCompare(s.name));k(a)}).catch(console.error).finally(()=>N(!1))},[]);const F=r=>{let a=r.replace(/\D/g,"");if((a.startsWith("7")||a.startsWith("8"))&&(a=a.slice(1)),!a)return"";let o="+7";return a.length>0&&(o+=` (${a.substring(0,3)}`),a.length>=4&&(o+=`) ${a.substring(3,6)}`),a.length>=7&&(o+=`-${a.substring(6,8)}`),a.length>=9&&(o+=`-${a.substring(8,10)}`),o},L=async r=>{if(r.preventDefault(),!(!t.name||!t.phone)){if(!p){n("Отметьте согласие на обработку персональных данных","error");return}b(!0);try{await u.createRequest({name:t.name,phone:t.phone,hostel_id:t.hostel_id||void 0,beds_needed:t.beds_needed?parseInt(t.beds_needed):void 0,consent_accepted:p}),m(!0),d({name:"",phone:"",hostel_id:"",beds_needed:""}),h(!1),setTimeout(()=>m(!1),5e3)}catch(a){console.error(a),n("Не удалось отправить заявку. Пожалуйста, позвоните нам.","error")}finally{b(!1)}}},c=B.useRef(null);return i.useEffect(()=>{const r=l.filter(o=>o.latitude&&o.longitude);if(r.length===0||!c.current)return;if(document.getElementById("ymaps-script"))a();else{const o=document.createElement("script");o.id="ymaps-script",o.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU",o.async=!0,document.head.appendChild(o),o.onload=a}function a(){window.ymaps&&window.ymaps.ready&&window.ymaps.ready(()=>{if(!c.current)return;c.current.innerHTML="";const o=new window.ymaps.Map(c.current,{center:[r[0].latitude,r[0].longitude],zoom:11});r.forEach(s=>{const C=new window.ymaps.Placemark([s.latitude,s.longitude],{hintContent:s.name,balloonContent:`<strong>${s.name}</strong><br/>${s.address}`},{preset:"islands#redIcon"});o.geoObjects.add(C)})})}},[l]),e.jsxs("div",{className:"landing-page dark-premium-theme",children:[e.jsxs("div",{className:"ambient-background",children:[e.jsx("div",{className:"ambient-orb orb-1"}),e.jsx("div",{className:"ambient-orb orb-2"}),e.jsx("div",{className:"ambient-orb orb-3"})]}),e.jsx("header",{className:"landing-header glass-panel",children:e.jsxs("div",{className:"landing-container flex justify-between items-center py-4",children:[e.jsxs("div",{className:"brand-logo",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo-svg",children:[e.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("span",{className:"brand-text",children:"КОВЧЕГ"})]}),e.jsx("div",{className:"landing-header-actions",children:e.jsx("a",{href:"https://crm.kovcheghostel.ru",className:"btn-login-header",children:"Личный кабинет"})})]})}),e.jsx("section",{className:"hero-section",children:e.jsxs("div",{className:"landing-container hero-content text-center",children:[e.jsx("div",{className:"hero-badge",children:"Сеть премиальных хостелов"}),e.jsxs("h1",{className:"hero-title",children:["Комфортный отдых",e.jsx("br",{}),"для вашей команды"]}),e.jsx("p",{className:"hero-subtitle",children:"Современные условия проживания, безупречная чистота и строгий контроль безопасности. Лучшее решение для размещения сотрудников в шаговой доступности от метро."}),e.jsxs("div",{className:"hero-buttons justify-center",children:[e.jsx("a",{href:"#booking",className:"btn-glow",children:"Оставить заявку"}),e.jsx("a",{href:"#locations",className:"btn-outline",children:"Смотреть адреса"})]})]})}),e.jsx("section",{className:"advantages-section",children:e.jsx("div",{className:"landing-container",children:e.jsxs("div",{className:"adv-grid",children:[e.jsxs("div",{className:"adv-card glass-panel",children:[e.jsx("div",{className:"adv-icon-wrapper",children:e.jsx(_,{size:28})}),e.jsx("h3",{children:"Удобные локации"}),e.jsx("p",{children:"Наши хостелы расположены в пешей доступности от станций метро, что экономит время ваших сотрудников на дорогу."})]}),e.jsxs("div",{className:"adv-card glass-panel",children:[e.jsx("div",{className:"adv-icon-wrapper",children:e.jsx(S,{size:28})}),e.jsx("h3",{children:"Человеческое отношение"}),e.jsx("p",{children:"Мы по-настоящему заботимся о наших жильцах, создавая дружелюбную и поддерживающую атмосферу для отдыха после работы."})]}),e.jsxs("div",{className:"adv-card glass-panel",children:[e.jsx("div",{className:"adv-icon-wrapper",children:e.jsx(D,{size:28})}),e.jsx("h3",{children:"Отличные условия"}),e.jsx("p",{children:"Современный ремонт, качественное постельное белье и строгий контроль чистоты на всех объектах сети."})]}),e.jsxs("div",{className:"adv-card glass-panel",children:[e.jsx("div",{className:"adv-icon-wrapper",children:e.jsx(f,{size:28})}),e.jsx("h3",{children:"Безопасность"}),e.jsx("p",{children:"Система контроля доступа по лицу (Face ID), круглосуточная охрана и строгий порядок на территории."})]})]})})}),e.jsx("section",{id:"locations",className:"locations-section",children:e.jsxs("div",{className:"landing-container",children:[e.jsxs("div",{className:"section-header text-center",children:[e.jsx("h2",{className:"section-title",children:"Наши адреса"}),e.jsx("div",{className:"title-underline"})]}),y?e.jsx("div",{className:"flex justify-center py-12",children:e.jsx("div",{className:"loader"})}):e.jsxs("div",{className:"locations-grid",children:[e.jsx("div",{className:"locations-list",children:l.map(r=>e.jsxs("div",{className:"location-card glass-panel",children:[e.jsxs("div",{className:"loc-card-header",children:[e.jsx("h3",{children:r.name}),e.jsx(I,{station:w(r.name)})]}),e.jsxs("div",{className:"loc-details-group",children:[e.jsxs("div",{className:"loc-detail",children:[e.jsx("div",{className:"loc-icon-box",children:e.jsx(W,{size:16})}),e.jsx("span",{className:"loc-text",children:r.address||"Адрес уточняется"})]}),e.jsxs("div",{className:"loc-detail",children:[e.jsx("div",{className:"loc-icon-box gold",children:e.jsx(A,{size:16})}),e.jsx("span",{className:"loc-text highlight",children:r.phone||"Уточняется"})]}),e.jsxs("div",{className:"loc-detail",children:[e.jsx("div",{className:"loc-icon-box",children:e.jsx(v,{size:16})}),e.jsx("span",{className:"loc-text",children:"Ежедневно 10:00 — 22:00"})]})]})]},r.id))}),e.jsx("div",{className:"locations-map glass-panel-map",children:l.length>0?e.jsx("div",{ref:c,className:"styled-iframe",style:{width:"100%",height:"100%",backgroundColor:"#111827",borderRadius:"14px"}}):e.jsx("div",{className:"map-placeholder",children:e.jsx("div",{className:"loader"})})})]})]})}),e.jsx("section",{id:"booking",className:"booking-section",children:e.jsx("div",{className:"landing-container",children:e.jsxs("div",{className:"booking-wrapper glass-panel shadow-xl",children:[e.jsxs("div",{className:"booking-info",children:[e.jsx("h2",{children:"Оставить заявку на заселение"}),e.jsx("p",{className:"text-lg",children:"Заполните форму, и наш менеджер свяжется с вами для уточнения деталей."})]}),e.jsxs("div",{className:"booking-form-container relative",children:[e.jsx("div",{className:"form-blur-effect"}),z?e.jsxs("div",{className:"booking-success animate-fade-in",children:[e.jsx("div",{className:"success-icon-wrap",children:e.jsx(j,{size:40,className:"success-icon"})}),e.jsx("h3",{children:"Заявка отправлена!"}),e.jsx("p",{children:"Спасибо за обращение. Мы скоро свяжемся с вами."})]}):e.jsxs("form",{className:"premium-form relative z-10",onSubmit:L,children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Имя контактного лица *"}),e.jsx("input",{required:!0,className:"glass-input",placeholder:"Иван Иванов",value:t.name,onChange:r=>d({...t,name:r.target.value})})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Телефон *"}),e.jsx("input",{required:!0,className:"glass-input",placeholder:"+7 (999) 000-00-00",value:t.phone,onChange:r=>d({...t,phone:F(r.target.value)})})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Интересующий хостел"}),e.jsxs("select",{className:"glass-input select-arrow",value:t.hostel_id,onChange:r=>d({...t,hostel_id:r.target.value}),children:[e.jsx("option",{value:"",className:"text-gray-900",children:"Не имеет значения (любой)"}),l.map(r=>e.jsxs("option",{value:r.id,className:"text-gray-900",children:[r.name," — ",w(r.name)]},r.id))]})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Количество требуемых мест"}),e.jsx("input",{type:"number",min:"1",className:"glass-input",placeholder:"Например: 10",value:t.beds_needed,onChange:r=>d({...t,beds_needed:r.target.value})})]}),e.jsxs("label",{className:"consent-row",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:r=>h(r.target.checked)}),e.jsxs("span",{children:["Я согласен на обработку моих персональных данных и ознакомлен с"," ",e.jsx("a",{href:"/privacy",target:"_blank",rel:"noreferrer",children:"политикой обработки персональных данных"}),"."]})]}),e.jsx("button",{type:"submit",className:"btn-glow full-width mt-4",disabled:x||!p,children:x?"Отправка...":"Отправить заявку"})]})]})]})})}),e.jsx("section",{className:"ecosystem-section",children:e.jsx("div",{className:"landing-container",children:e.jsxs("div",{className:"ecosystem-banner glass-panel",children:[e.jsxs("div",{className:"ecosystem-content",children:[e.jsx("div",{className:"eco-badge",children:"Собственная разработка"}),e.jsx("h2",{className:"eco-title",children:"Единая IT-экосистема"}),e.jsxs("p",{className:"eco-desc",children:["Инновационный сервис управления от ",e.jsx("strong",{className:"text-white",children:"blaqit"})," со встроенным защищенным мессенджером. Вся коммуникация с администрацией идет напрямую через личный кабинет партнера. Ваша связь с нами ",e.jsx("strong",{children:"никогда не пропадет"})," из-за сбоев мессенджеров (WhatsApp, Telegram) в РФ!"]}),e.jsxs("div",{className:"eco-features",children:[e.jsxs("div",{className:"eco-feat",children:[e.jsx(f,{size:18})," Прямая связь"]}),e.jsxs("div",{className:"eco-feat",children:[e.jsx(v,{size:18})," Без блокировок"]}),e.jsxs("div",{className:"eco-feat",children:[e.jsx(j,{size:18})," Управление онлайн"]})]})]}),e.jsxs("div",{className:"ecosystem-visual",children:[e.jsx("div",{className:"eco-glow"}),e.jsxs("div",{className:"eco-interface-mock",children:[e.jsxs("div",{className:"eco-mock-header",children:[e.jsx("div",{className:"eco-dot bg-red-400"}),e.jsx("div",{className:"eco-dot bg-yellow-400"}),e.jsx("div",{className:"eco-dot bg-green-400"})]}),e.jsxs("div",{className:"eco-mock-body",children:[e.jsx("div",{className:"eco-msg mr",children:e.jsx("div",{className:"eco-msg-text",children:"Здравствуйте! Подготовьте 5 мест."})}),e.jsx("div",{className:"eco-msg ml",children:e.jsx("div",{className:"eco-msg-text bg-gold",children:"Принято. Ждём ваших сотрудников."})})]})]})]})]})})}),e.jsx("footer",{className:"premium-footer",children:e.jsxs("div",{className:"landing-container",children:[e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"brand-logo footer-logo",children:[e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo-svg",style:{width:"24px",height:"24px"},children:[e.jsx("path",{d:"M12 2L2 7L12 12L22 7L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 17L12 22L22 17",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M2 12L12 17L22 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("span",{className:"brand-text text-xl",children:"КОВЧЕГ"})]}),e.jsx("p",{className:"footer-description text-gray-400",children:"Сеть современных хостелов с премиальным уровнем комфорта и безопасности для ваших сотрудников."})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsxs("span",{className:"footer-copyright-text",children:["© ",new Date().getFullYear()," Ковчег. Все права защищены."]}),e.jsxs("span",{className:"footer-developer",children:["Разработано ",e.jsx("strong",{className:"text-gray-300",children:"blaqit"})]})]})]})}),e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        .dark-premium-theme {
          background-color: #0B0E14;
          color: #E2E8F0;
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
          position: relative;
        }
        
        /* Ambient Background Animations */
        .ambient-background {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .ambient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: float 20s infinite ease-in-out alternate;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, 150px) scale(1.5); }
        }

        .orb-1 {
          width: 500px; height: 500px;
          background: #B48E4B;
          top: -100px; left: -100px;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 600px; height: 600px;
          background: #3B82F6;
          bottom: -200px; right: -100px;
          animation-delay: -5s;
        }
        
        .orb-3 {
          width: 400px; height: 400px;
          background: #14B8A6;
          top: 40%; left: 50%;
          animation-delay: -10s;
        }

        .landing-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        /* Glassmorphism Classes */
        .glass-panel {
          background: rgba(15, 20, 28, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }
        
        .glass-panel-map {
          background: rgba(15, 20, 28, 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          overflow: hidden;
          padding: 6px;
        }

        /* Header */
        .landing-header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #E2E8F0;
        }

        .logo-svg {
          width: 32px;
          height: 32px;
          color: var(--brand);
          filter: drop-shadow(0 0 8px rgba(var(--brand-rgb), 0.4));
        }

        .brand-text {
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          background: linear-gradient(to right, #ffffff, var(--brand));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .btn-login-header {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #E2E8F0 !important;
          padding: 8px 20px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-login-header:hover {
          background: rgba(var(--brand-rgb), 0.15);
          border-color: rgba(var(--brand-rgb), 0.4);
          color: #fff !important;
        }

        /* Hero */
        .hero-section {
          padding: 140px 0 100px;
          position: relative;
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(var(--brand-rgb), 0.1);
          border: 1px solid rgba(var(--brand-rgb), 0.2);
          border-radius: 100px;
          color: var(--brand);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
          box-shadow: 0 0 20px rgba(var(--brand-rgb), 0.15);
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 2rem;
          background: linear-gradient(to bottom right, #ffffff, #94A3B8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #94A3B8;
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.7;
          font-weight: 400;
        }

        /* Buttons */
        .hero-buttons {
          display: flex;
          gap: 20px;
        }

        .btn-glow {
          position: relative;
          background: linear-gradient(135deg, #CFB075 0%, #A68037 100%);
          color: #000 !important;
          padding: 18px 36px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: none;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 10px 30px -10px rgba(var(--brand-rgb), 0.6);
        }

        .btn-glow::after {
          content: '';
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          transform: rotate(45deg);
          transition: all 0.3s;
          opacity: 0;
        }

        .btn-glow:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 35px -10px rgba(var(--brand-rgb), 0.8);
        }
        
        .btn-glow:hover::after {
          animation: shine 1.5s ease;
          opacity: 1;
        }
        
        @keyframes shine {
          0% { left: -100%; top: -100%; }
          100% { left: 100%; top: 100%; }
        }

        .btn-outline {
          background: rgba(255,255,255,0.03);
          color: #E2E8F0 !important;
          padding: 18px 36px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .btn-outline:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        /* Advantages */
        .advantages-section {
          padding: 60px 0 120px;
        }
        
        .adv-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        
        .adv-card {
          padding: 40px 30px;
          border-radius: 20px;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }
        
        .adv-card.highlight-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 20, 28, 0.8) 100%);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .adv-card.highlight-card .adv-icon-wrapper {
          color: #60A5FA;
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .adv-card.highlight-card:hover {
          border-color: rgba(59, 130, 246, 0.6);
          box-shadow: 0 20px 40px -10px rgba(59, 130, 246, 0.2);
        }

        .adv-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
          border-color: rgba(var(--brand-rgb), 0.3);
        }
        
        .adv-icon-wrapper {
          width: 64px; height: 64px;
          background: linear-gradient(135deg, rgba(var(--brand-rgb), 0.1) 0%, rgba(var(--brand-rgb), 0.02) 100%);
          border: 1px solid rgba(var(--brand-rgb), 0.2);
          color: var(--brand);
          border-radius: 16px;
          display: flex;
          align-items: center; justify-content: center;
          margin-bottom: 24px;
          box-shadow: inset 0 2px 10px rgba(255,255,255,0.05);
        }
        
        .adv-card h3 {
          font-size: 1.4rem; font-weight: 700; margin-bottom: 16px; color: #FFF;
        }
        
        .adv-card p {
          color: #94A3B8; line-height: 1.6; font-size: 1rem;
        }

        /* Ecosystem Section */
        .ecosystem-section {
          padding: 0 0 120px;
        }
        
        .ecosystem-banner {
          border-radius: 24px;
          display: flex;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(15, 20, 28, 0.8) 0%, rgba(var(--brand-rgb), 0.05) 100%);
          border: 1px solid rgba(var(--brand-rgb), 0.2);
          position: relative;
        }

        .ecosystem-content {
          padding: 60px;
          flex: 1;
        }
        
        .eco-badge {
          display: inline-block;
          background: rgba(var(--brand-rgb), 0.15);
          color: var(--brand);
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .eco-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #FFF;
          margin-bottom: 20px;
        }

        .eco-desc {
          color: #94A3B8;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 30px;
          max-width: 600px;
        }

        .eco-features {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .eco-feat {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #E2E8F0;
          font-weight: 600;
          font-size: 0.95rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 10px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .eco-feat svg { color: var(--brand); }

        .ecosystem-visual {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 40px;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(0, 0, 0, 0.2);
        }
        
        .eco-glow {
          position: absolute;
          width: 300px; height: 300px;
          background: rgba(var(--brand-rgb), 0.15);
          border-radius: 50%;
          filter: blur(80px);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .eco-interface-mock {
          width: 100%;
          max-width: 340px;
          background: #0F141C;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6);
          position: relative;
          z-index: 10;
          overflow: hidden;
        }

        .eco-mock-header {
          display: flex;
          gap: 6px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .eco-dot { width: 10px; height: 10px; border-radius: 50%; }
        .bg-red-400 { background: #F87171; }
        .bg-yellow-400 { background: #FBBF24; }
        .bg-green-400 { background: #34D399; }

        .eco-mock-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .eco-msg { display: flex; width: 100%; }
        .eco-msg.mr { justify-content: flex-end; }
        .eco-msg.ml { justify-content: flex-start; }

        .eco-msg-text {
          padding: 12px 16px;
          border-radius: 14px;
          font-size: 0.85rem;
          color: #FFF;
          background: rgba(255, 255, 255, 0.1);
          border-bottom-right-radius: 2px;
          max-width: 80%;
        }

        .eco-msg.ml .eco-msg-text {
          border-bottom-right-radius: 14px;
          border-bottom-left-radius: 2px;
        }

        .bg-gold {
          background: linear-gradient(135deg, #CFB075 0%, #A68037 100%) !important;
          color: #000 !important;
          font-weight: 600;
        }

        /* Locations */
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: #FFF;
          margin-bottom: 12px;
        }
        
        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--brand), transparent);
          margin: 0 auto 60px;
          border-radius: 4px;
        }
        
        .locations-grid {
          display: grid;
          grid-template-columns: 450px 1fr;
          gap: 40px;
          height: 600px;
        }
        
        .locations-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow-y: auto;
          padding-right: 12px;
          padding-bottom: 20px;
        }
        
        .locations-list::-webkit-scrollbar { width: 4px; }
        .locations-list::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); border-radius: 4px; }
        .locations-list::-webkit-scrollbar-thumb { background: rgba(var(--brand-rgb), 0.3); border-radius: 4px; }
        .locations-list::-webkit-scrollbar-thumb:hover { background: rgba(var(--brand-rgb), 0.6); }
        
        .location-card {
          padding: 24px;
          border-radius: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .location-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(var(--brand-rgb), 0.4);
        }
        
        .loc-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 12px;
          flex-wrap: wrap;
        }
        
        .loc-card-header h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #FFF;
          line-height: 1.3;
        }
        
        .metro-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #FCA5A5;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }
        
        .metro-logo {
          background: #EF4444;
          color: #FFF;
          width: 14px; height: 14px;
          border-radius: 50%;
          display: inline-flex; justify-content: center; align-items: center;
          font-size: 9px; font-weight: 800;
        }

        .loc-details-group {
          display: flex; flex-direction: column; gap: 12px;
        }
        
        .loc-detail {
          display: flex; align-items: center; gap: 12px;
        }
        
        .loc-icon-box {
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: #94A3B8;
        }
        
        .loc-icon-box.gold {
          background: rgba(var(--brand-rgb), 0.1);
          color: var(--brand);
        }
        
        .loc-text {
          font-size: 0.95rem; color: #CBD5E1; font-weight: 400;
        }
        
        .loc-text.highlight {
          color: #E2E8F0; font-weight: 600; letter-spacing: 0.05em;
        }

        .styled-iframe {
          width: 100%; height: 100%;
          border-radius: 14px;
          filter: invert(90%) hue-rotate(180deg);
          opacity: 0.8;
          transition: 0.5s;
        }
        
        .styled-iframe:hover {
          opacity: 1; filter: invert(90%) hue-rotate(180deg) brightness(1.2);
        }

        /* Booking Section */
        .booking-section {
          padding: 120px 0;
        }
        
        .booking-wrapper {
          border-radius: 24px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          overflow: hidden;
        }
        
        .booking-info {
          padding: 80px 60px;
          background: linear-gradient(135deg, rgba(var(--brand-rgb), 0.05) 0%, transparent 100%);
          display: flex; flex-direction: column; justify-content: center;
        }
        
        .booking-info h2 {
          font-size: 3rem; font-weight: 800; color: #FFF; margin-bottom: 24px; line-height: 1.1;
        }
        
        .booking-info p {
          color: #94A3B8; line-height: 1.6; font-size: 1.2rem;
        }
        
        .booking-form-container {
          padding: 60px;
          background: rgba(0,0,0,0.2);
        }
        
        .form-blur-effect {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          z-index: 1;
        }
        
        .premium-form {
          display: flex; flex-direction: column; gap: 24px;
        }
        
        .input-group {
          display: flex; flex-direction: column; gap: 8px;
        }
        
        .input-group label {
          font-size: 0.9rem; font-weight: 500; color: #CBD5E1;
        }
        
        .glass-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 20px;
          border-radius: 12px;
          color: #FFF;
          font-size: 1rem;
          transition: all 0.3s;
          font-family: inherit;
        }
        
        .glass-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(var(--brand-rgb), 0.5);
          box-shadow: 0 0 0 4px rgba(var(--brand-rgb), 0.1);
        }
        
        .glass-input::placeholder {
          color: rgba(255,255,255,0.2);
        }
        
        .select-arrow {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 16px;
        }
        
        .full-width { width: 100%; }
        
        .privacy-note {
          font-size: 0.8rem; color: rgba(255,255,255,0.3); text-align: center; margin-top: 10px;
        }

        .consent-row {
          display: flex; gap: 10px; align-items: flex-start; margin-top: 18px;
          font-size: 0.8rem; color: rgba(255,255,255,0.55); line-height: 1.5; cursor: pointer;
        }
        .consent-row input { margin-top: 2px; width: 16px; height: 16px; flex-shrink: 0; accent-color: #dcae4c; }
        .consent-row a { color: #dcae4c; text-decoration: underline; }
        .btn-glow:disabled { opacity: 0.5; cursor: not-allowed; }
        
        .booking-success {
          text-align: center; position: relative; z-index: 10; padding: 40px 0;
        }
        
        .success-icon-wrap {
          width: 100px; height: 100px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 30px;
        }
        
        .success-icon {
          color: #10B981;
          filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.5));
        }

        /* Footer */
        .premium-footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 80px 0 40px;
          background: #080A0F;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 60px;
        }

        .footer-logo {
          justify-content: center;
          opacity: 0.7;
          margin-bottom: 24px;
        }

        .footer-description {
          max-width: 450px;
          margin: 0 auto;
          line-height: 1.6;
          color: #94A3B8;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 40px;
          max-width: 900px;
          margin: 0 auto;
        }

        .footer-copyright-text {
          color: rgba(255,255,255,0.3);
          font-size: 0.95rem;
        }

        .footer-developer {
          color: #64748B;
          font-size: 0.95rem;
        }

        .footer-developer strong {
          color: #E2E8F0;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .adv-grid { grid-template-columns: repeat(2, 1fr); }
          .locations-grid { grid-template-columns: 1fr; height: auto; }
          .locations-map { height: 400px; }
          .booking-wrapper { grid-template-columns: 1fr; }
          .booking-info { padding: 40px; }
          .ecosystem-banner { flex-direction: column; }
          .ecosystem-visual { padding: 60px 20px; border-left: none; border-top: 1px solid rgba(255, 255, 255, 0.05); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-buttons { flex-direction: column; }
          .adv-grid { grid-template-columns: 1fr; }
          .booking-form-container { padding: 40px 24px; }
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
          .eco-title { font-size: 2rem; }
          .ecosystem-content { padding: 40px 24px; }
        }
      `})]})};export{Y as default};

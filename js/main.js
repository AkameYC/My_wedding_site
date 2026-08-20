/* ============================================================
   婚礼请柬 · 交互脚本
   ============================================================ */

/* ============================================================
   ★ 内容配置区 —— 修改请柬内容只改这里,无需动其他代码
   ============================================================ */
const CONFIG = {
  // 新人姓名
  groom: '王宇晨',
  bride: '周婷',
  // 婚礼时间(倒计时目标,注意时区 +08:00)
  weddingDate: '2026-10-10T18:18:00+08:00',
  // 酒店信息
  hotelName: '隆聚时令海鲜 · 金悦店',
  hotelAddress: '浙江省嘉兴市南湖区中山东路875号',
  // 婚礼流程
  schedule: [
    { time: '17:00', title: '迎宾', desc: '宾客签到入场,茶歇小憩' },
    { time: '18:18', title: '典礼', desc: '婚礼仪式正式开始' },
    { time: '18:30', title: '晚宴', desc: '喜宴开席,举杯同庆' },
  ],
  // 周边景点(点击卡片会跳转高德地图搜索景点名)
  travel: [
    {
      name: '嘉兴南湖',
      dist: '约 2 km',
      desc: '国家 5A 级景区,红船起航地。湖心岛烟雨楼、环湖绿道,适合午后漫步或乘船游湖。',
    },
    {
      name: '子城遗址公园',
      dist: '约 1.5 km',
      desc: '浙江现存唯一古城墙遗址,登谯楼可俯瞰嘉兴老城,感受千年州府的历史气息。',
    },
    {
      name: '范蠡湖公园',
      dist: '约 0.5 km',
      desc: '相传为范蠡西施泛舟归隐之处,园内有西施妆台与古寺遗迹,湖光柳色,免费开放的城市公园。',
    },
    {
      name: '月河历史文化街区',
      dist: '约 1.7 km',
      desc: '京杭大运河畔的水乡老街,白墙黛瓦、小桥流水,夜晚灯笼亮起最出片,酒吧与小吃云集。',
    },
    {
      name: '南湖天地',
      dist: '约 3 km',
      desc: '南湖畔的高品质商业街区,临湖餐饮、咖啡与品牌店铺,华灯初上时最出片,吃喝逛一体。',
    },
    {
      name: '嘉兴八佰伴',
      dist: '约 0.5 km',
      desc: '市区大型购物中心,餐饮、购物、影院一站式,逛街购物的首选。',
    },
  ],
  // 云开发环境 ID:在腾讯云开发控制台创建环境后获取(见 README「云端数据」一节)
  // 留空 = 降级模式:出席登记跳转腾讯文档、留言存本机、座位用下方示例名单
  cloudbaseEnv: '',
  // 出席登记:腾讯文档收集表链接(仅在未配置 cloudbaseEnv 的降级模式下使用)
  rsvpUrl: 'https://docs.qq.com/form/page/DREp3TmpLTWNEb1NM',
  // 座位名单(当前为示例占位,排好真实名单后替换这里;格式 { name: '姓名', table: '桌号' })
  seats: [
    { name: '张三', table: 'A区 1号桌' },
    { name: '李四', table: 'A区 1号桌' },
    { name: '王五', table: 'B区 3号桌' },
    { name: '赵六', table: 'B区 3号桌' },
    { name: '陈七', table: 'C区 5号桌' },
    { name: '周八', table: 'C区 5号桌' },
  ],
  // 婚礼菜单:menuComingSoon 为 true 时菜单区显示“敬请期待”,
  // 想公布菜单时改为 false 即可(下方菜单数据已备好)
  menuComingSoon: true,
  // 婚礼菜单(酒店真实菜单)
  menu: [
    { cat: '海鲜水产', items: [
      { name: '酸汤虾滑双青龙', note: '' },
      { name: '古法花雕蒸海蟹', note: '' },
      { name: '广式深海老虎斑', note: '' },
      { name: '白灼时令深水虾', note: '' },
      { name: '金汤鲍参烩翅肚', note: '' },
      { name: '香辣全家海鲜烩', note: '' },
    ]},
    { cat: '禽肉佳肴', items: [
      { name: '新派酥不腻烤鸭', note: '' },
      { name: '农家白切江鸡菜', note: '' },
      { name: '菜香富贵大圆蹄', note: '' },
      { name: '石锅香爆牛仔骨', note: '' },
    ]},
    { cat: '时蔬素食', items: [
      { name: '翡翠荷塘小炒皇', note: '' },
      { name: '特色一品香芋煲', note: '' },
      { name: '白灼有机时令蔬', note: '' },
      { name: '上汤有机时令蔬', note: '' },
    ]},
    { cat: '主食甜品', items: [
      { name: '甜甜蜜蜜八宝饭', note: '寓意:甜甜蜜蜜' },
      { name: '佳缘时令水果拼', note: '寓意:佳偶良缘' },
    ]},
  ],
  // 婚纱照相册:按造型分组,每组一个文件夹
  // 格式: { cover: '封面图文件名', dir: '图片文件夹', photos: ['文件名1', …] }
  albums: [
    { cover: 'first.jpg', dir: 'images/wedding/1/', photos: ['w01.jpg', 'w02.jpg', 'w03.jpg', 'w04.jpg', 'w05.jpg', 'w06.jpg', 'w08.jpg', 'w09.jpg'] },
    { cover: 'first.jpg', dir: 'images/wedding/2/', photos: ['w10.jpg', 'w11.jpg', 'w12.jpg', 'w13.jpg', 'w14.jpg', 'w15.jpg', 'w16.jpg', 'w17.jpg', 'w18.jpg', 'w19.jpg'] },
    { cover: 'first.jpg', dir: 'images/wedding/3/', photos: ['w21.jpg', 'w22.jpg', 'w23.jpg', 'w24.jpg', 'w25.jpg', 'w26.jpg', 'w28.jpg'] },
    { cover: 'first.jpg', dir: 'images/wedding/4/', photos: ['w29.jpg', 'w30.jpg', 'w31.jpg', 'w32.jpg', 'w33.jpg', 'w34.jpg', 'w35.jpg', 'w36.jpg', 'w38.jpg', 'w39.jpg'] },
    { cover: 'first.jpg', dir: 'images/wedding/5/', photos: ['w40.jpg', 'w41.jpg', 'w42.jpg', 'w43.jpg', 'w44.jpg', 'w45.jpg', 'w46.jpg', 'w47.jpg', 'w48.jpg', 'w49.jpg', 'w50.jpg', 'w51.jpg', 'w52.jpg', 'w53.jpg', 'w54.jpg', 'w55.jpg', 'w57.jpg', 'w58.jpg'] },
  ],
  // 背景音乐:文件放到 music/ 目录后,把文件名填到这里(见 music/README.txt)
  musicSrc: 'music/prank_wanglanyin.mp3',
};
/* ============================================================
   ★ 配置区结束
   ============================================================ */

/* ---------- 工具函数 ---------- */
const $ = (sel, root) => (root || document).querySelector(sel);
const pad = (n) => String(n).padStart(2, '0');
// 宾客称呼:URL 可带 ?guest=张三 指定,默认“亲朋好友”(如 index.html?guest=李阿姨)
const GUEST = (() => {
  try {
    const g = decodeURIComponent(new URLSearchParams(location.search).get('guest') || '');
    return g.trim() || '亲朋好友';
  } catch (e) {
    return '亲朋好友';
  }
})();
const HOTEL_PHOTOS = [
  { dir: 'images/hotel/', file: 'hotel-1.jpg', title: '酒店环境' },
  { dir: 'images/hotel/', file: 'hotel-2.jpg', title: '酒店环境' },
];
const ALL_PHOTOS = CONFIG.albums
  .flatMap((al) => [{ dir: al.dir, file: al.cover }]
    .concat(al.photos.map((p) => ({ dir: al.dir, file: p }))))
  .concat(HOTEL_PHOTOS);
let openLightbox; // 由下方放大层模块赋值

/* ============================================================
   云开发初始化:登记 / 座位 / 留言的数据能力
   未配置 CONFIG.cloudbaseEnv 或 SDK 未加载时,cloudReady = false,
   各功能自动降级(跳转腾讯文档 / 本地存储 / 内置示例名单)
   ============================================================ */
let cloud = null;
let cloudReady = false;
(function initCloud() {
  if (!CONFIG.cloudbaseEnv) return;
  if (typeof cloudbase === 'undefined') {
    console.warn('[婚礼请柬] CloudBase SDK 未加载,使用降级模式');
    return;
  }
  try {
    const app = cloudbase.init({ env: CONFIG.cloudbaseEnv });
    const auth = app.auth({ persistence: 'local' });
    const db = app.database();
    cloud = { app, db };
    // 匿名登录(游客身份即可读写;失败不阻塞,由集合安全规则兜底)
    auth.anonymousAuthProvider().signIn().catch(() => {});
    cloudReady = true;
  } catch (e) {
    console.warn('[婚礼请柬] 云开发初始化失败,使用降级模式', e);
  }
})();

/* ============================================================
   首页与页面信息渲染
   ============================================================ */
(function renderStatic() {
  const d = new Date(CONFIG.weddingDate);
  const week = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
  const dateText = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 · 星期${week} · ${pad(d.getHours())}:${pad(d.getMinutes())}`;

  // 首页文字
  $('#h-groom').textContent = CONFIG.groom;
  $('#h-bride').textContent = CONFIG.bride;
  $('.hero-date').textContent = dateText;
  $('#hotel .hotel-name').textContent = CONFIG.hotelName;
  $('#hotel .hotel-addr').textContent = CONFIG.hotelAddress;

  // 信纸内容(信封开场)
  $('#lc-guest').textContent = GUEST;
  $('#lc-groom').textContent = CONFIG.groom;
  $('#lc-bride').textContent = CONFIG.bride;
  $('.lc-time').textContent = `时间:${dateText}`;
  $('.lc-addr').textContent = `地点:${CONFIG.hotelAddress}`;
  $('.lc-hotel').textContent = CONFIG.hotelName;
  $('#el-groom').textContent = CONFIG.groom;
  $('#el-bride').textContent = CONFIG.bride;
  $('.el-date').textContent = `${d.getFullYear()} · ${pad(d.getMonth() + 1)} · ${pad(d.getDate())}`;

  document.title = `${CONFIG.groom} & ${CONFIG.bride} · 婚礼邀请函`;
})();

/* ============================================================
   信封开场:点击拆封 → 信纸滑出 → 展开邀请卡 → 收起进首页
   (同一会话内刷新不重复播放;信纸称谓由 URL ?guest= 指定)
   ============================================================ */
(function envelope() {
  const scene = $('#envelope-scene');
  if (sessionStorage.getItem('env-opened')) return; // 已拆封过,直接进首页
  scene.hidden = false;

  const env = $('#envelope');
  const card = $('#letter-card');

  // 拆封音效:Web Audio 实时合成铃铛般的一声"叮",无需音频文件
  function playChime() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      const ctx = new Ctx();
      const now = ctx.currentTime;
      // 主音:G6 滑向 C7,快速衰减
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1568, now);
      osc.frequency.linearRampToValueAtTime(2093, now + 0.08);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.28, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.5);
      // 泛音:更高更轻,营造铃声质感
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(3136, now + 0.02);
      gain2.gain.setValueAtTime(0.0001, now + 0.02);
      gain2.gain.exponentialRampToValueAtTime(0.1, now + 0.06);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
      osc2.connect(gain2).connect(ctx.destination);
      osc2.start(now + 0.02);
      osc2.stop(now + 1);
      setTimeout(() => ctx.close(), 1600);
    } catch (e) { /* 不支持 Web Audio 则静默 */ }
  }

  env.addEventListener('click', () => {
    if (env.classList.contains('opened')) return;
    playChime();
    env.classList.add('opened');
    setTimeout(() => { card.hidden = false; }, 900);
  });

  $('#lc-close').addEventListener('click', () => {
    sessionStorage.setItem('env-opened', '1');
    card.hidden = true;
    scene.classList.add('done');
    // 收起信纸后平滑回到首页顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => scene.remove(), 650);
  });
})();

/* ============================================================
   婚纱照横向滚动照片墙（五行自动滚动，每行对应一个文件夹）
   支持：短按放大、长按拖动
   ============================================================ */
(function renderAlbums() {
  const wrap = $('#album-groups');

  // 创建五行照片墙，每行对应一个相册文件夹
  CONFIG.albums.slice(0, 5).forEach((album, row) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'photo-wall-row';
    rowDiv.setAttribute('data-row', row);

    // 创建照片轨道（需要复制两遍实现无缝循环）
    const track = document.createElement('div');
    track.className = 'photo-wall-track';

    // 收集该相册的所有照片
    const albumPhotos = [album.cover, ...album.photos].map((file) => ({
      src: album.dir + file,
      dir: album.dir,
      file: file
    }));

    // 复制两次以实现无缝滚动
    for (let copy = 0; copy < 2; copy++) {
      albumPhotos.forEach((photo, i) => {
        const item = document.createElement('div');
        item.className = 'photo-wall-item';

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = `婚纱照 ${row + 1}-${i + 1}`;
        img.loading = 'lazy';
        img.draggable = false;

        item.appendChild(img);
        track.appendChild(item);
      });
    }

    // 交互逻辑：直接拖动或点击放大
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;
    let clickedPhoto = null;

    const onStart = (e) => {
      const target = e.target.closest('.photo-wall-item');
      if (!target) return;

      hasMoved = false;
      startX = (e.type === 'mousedown' ? e.pageX : e.touches[0].pageX) - rowDiv.offsetLeft;
      scrollLeft = rowDiv.scrollLeft;
      clickedPhoto = target.querySelector('img');

      if (e.type === 'mousedown') {
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onEnd);
      }
    };

    const onMove = (e) => {
      const x = (e.type === 'mousemove' ? e.pageX : e.touches[0].pageX) - rowDiv.offsetLeft;
      const walk = (x - startX) * 2;

      if (Math.abs(walk) > 5) {
        hasMoved = true;
        if (!isDragging) {
          isDragging = true;
          rowDiv.style.cursor = 'grabbing';
          track.style.animationPlayState = 'paused';
        }
      }

      if (isDragging) {
        e.preventDefault();
        rowDiv.scrollLeft = scrollLeft - walk;
      }
    };

    const onEnd = (e) => {
      if (isDragging) {
        isDragging = false;
        rowDiv.style.cursor = '';
        track.style.animationPlayState = '';
      } else if (!hasMoved && clickedPhoto) {
        // 点击未移动：放大照片
        const photoSrc = clickedPhoto.src;
        const photoIndex = ALL_PHOTOS.findIndex((p) =>
          photoSrc.includes(p.dir) && photoSrc.includes(p.file)
        );
        if (photoIndex >= 0) {
          openLightbox(photoIndex);
        }
      }

      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onEnd);
    };

    // 绑定事件
    rowDiv.addEventListener('mousedown', onStart);
    rowDiv.addEventListener('touchstart', onStart, { passive: true });
    rowDiv.addEventListener('touchmove', onMove, { passive: false });
    rowDiv.addEventListener('touchend', onEnd);

    // 鼠标悬停暂停滚动
    rowDiv.addEventListener('mouseenter', () => {
      if (!isDragging) track.style.animationPlayState = 'paused';
    });
    rowDiv.addEventListener('mouseleave', () => {
      if (!isDragging) track.style.animationPlayState = '';
    });

    rowDiv.appendChild(track);
    wrap.appendChild(rowDiv);
  });
})();

/* ============================================================
   流星雨效果（文件夹5的照片作为流星划过屏幕）
   ============================================================ */
(function meteorShower() {
  if (!CONFIG.albums[4]) return;

  const meteorContainer = document.createElement('div');
  meteorContainer.className = 'meteor-shower';
  meteorContainer.id = 'meteor-shower';
  document.body.appendChild(meteorContainer);

  const album5 = CONFIG.albums[4];
  const meteor5Photos = [album5.cover, ...album5.photos].map((file) => ({
    src: album5.dir + file,
    dir: album5.dir,
    file: file
  }));

  // 流星雨生成函数
  function spawnMeteor() {
    if (document.hidden || meteorContainer.childElementCount > 15) return;

    const photo = meteor5Photos[Math.floor(Math.random() * meteor5Photos.length)];
    const meteor = document.createElement('div');
    meteor.className = 'meteor-photo';

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = '婚纱照流星';
    img.loading = 'lazy';
    img.draggable = false;

    meteor.appendChild(img);

    // 随机位置和大小
    const startY = -150 + Math.random() * 300;
    const startX = Math.random() * 120;
    const size = 80 + Math.random() * 60;
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * 5;

    meteor.style.left = startX + 'vw';
    meteor.style.top = startY + 'px';
    meteor.style.width = size + 'px';
    meteor.style.height = size + 'px';
    meteor.style.animationDuration = duration + 's';
    meteor.style.animationDelay = delay + 's';

    // 点击放大
    meteor.addEventListener('click', () => {
      const photoIndex = ALL_PHOTOS.findIndex((p) =>
        p.dir === photo.dir && p.file === photo.file
      );
      if (photoIndex >= 0) {
        openLightbox(photoIndex);
      }
    });

    // 动画结束后移除
    meteor.addEventListener('animationend', () => meteor.remove());

    meteorContainer.appendChild(meteor);
  }

  // 初始生成6个流星
  for (let i = 0; i < 6; i++) {
    setTimeout(() => spawnMeteor(), i * 1000);
  }

  // 每3秒生成一个新流星
  setInterval(spawnMeteor, 3000);
})();

/* ============================================================
   图片放大查看(相册 + 酒店照片,支持左右切换/滑动/计数)
   ============================================================ */
(function lightbox() {
  const box = $('#lightbox');
  const img = $('#lightbox-img');
  const counter = $('#lightbox-counter');
  let index = 0;
  let startX = 0;
  let startY = 0;

  function show(i) {
    index = (i + ALL_PHOTOS.length) % ALL_PHOTOS.length;
    img.classList.remove('loaded');
    img.src = ALL_PHOTOS[index].dir + ALL_PHOTOS[index].file;
    counter.textContent = `${index + 1} / ${ALL_PHOTOS.length}`;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.hidden = true;
    document.body.style.overflow = '';
    // 关闭时若处于全屏状态则退出全屏
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      try {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      } catch (e) { /* 忽略 */ }
    }
  }
  function step(delta) { show(index + delta); }

  img.addEventListener('load', () => img.classList.add('loaded'));
  $('#lightbox-close').addEventListener('click', close);
  $('#lightbox-prev').addEventListener('click', () => step(-1));
  $('#lightbox-next').addEventListener('click', () => step(1));

  // 全屏模式按钮(不支持的浏览器如微信内置 WebView 自动隐藏)
  const fullBtn = $('#lightbox-full');
  if (box.requestFullscreen || box.webkitRequestFullscreen) {
    fullBtn.addEventListener('click', () => {
      try {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        } else {
          (box.requestFullscreen || box.webkitRequestFullscreen).call(box);
        }
      } catch (e) { /* 忽略 */ }
    });
  } else {
    fullBtn.hidden = true;
  }

  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'f' || e.key === 'F') fullBtn.click();
  });
  box.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  box.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    // 横向滑动超过 40px 且明显大于纵向时切换照片
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.4) step(dx < 0 ? 1 : -1);
  }, { passive: true });

  // 酒店照片也走放大层(排在相册照片之后)
  const hotelStart = ALL_PHOTOS.length - HOTEL_PHOTOS.length;
  document.querySelectorAll('.hotel-photos img').forEach((ph, i) => {
    ph.addEventListener('click', () => show(hotelStart + i));
  });
  openLightbox = show;
})();

/* ============================================================
   婚礼流程时间轴
   ============================================================ */
(function renderTimeline() {
  const ol = $('#timeline');
  CONFIG.schedule.forEach((s) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="tl-time">${s.time}</span>
      <span class="tl-dot"></span>
      <div class="tl-card">
        <p class="tl-title">${s.title}</p>
        <p class="tl-desc">${s.desc}</p>
      </div>`;
    ol.appendChild(li);
  });
})();

/* ============================================================
   周边旅游卡片(点击跳高德地图搜索景点)
   ============================================================ */
(function renderTravel() {
  const list = $('#travel-list');
  CONFIG.travel.forEach((t) => {
    const a = document.createElement('a');
    a.className = 'travel-card';
    a.href = `https://uri.amap.com/search?keyword=${encodeURIComponent(t.name)}`;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `
      <div class="tc-head">
        <span class="tc-name">${t.name}</span>
        <span class="tc-dist">${t.dist}</span>
      </div>
      <p class="tc-desc">${t.desc}</p>
      <span class="tc-nav">点击查看地图 ›</span>`;
    list.appendChild(a);
  });
})();

/* ============================================================
   婚礼指南:出席登记 / 座位查询 / 婚礼菜单
   ============================================================ */
(function rsvp() {
  const btn = $('#rsvp-btn');
  const form = $('#rsvp-form');
  const done = $('#rsvp-done');
  const submitBtn = form.querySelector('button');

  // 降级模式:保持跳转腾讯文档收集表
  if (!cloudReady) {
    if (CONFIG.rsvpUrl) {
      btn.href = CONFIG.rsvpUrl;
    } else {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('出席登记链接尚未配置\n请在 js/main.js 的 CONFIG.rsvpUrl 填入腾讯文档收集表链接');
      });
    }
    return;
  }

  // 云端模式:页内表单
  btn.hidden = true;
  form.hidden = false;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $('#rsvp-name').value.trim();
    if (!name) return;
    const data = {
      name,
      count: $('#rsvp-count').value.trim(),
      phone: $('#rsvp-phone').value.trim(),
      note: $('#rsvp-note').value.trim(),
      updatedAt: new Date().toISOString(),
    };
    submitBtn.disabled = true;
    submitBtn.textContent = '提交中…';
    try {
      const col = cloud.db.collection('rsvp');
      const exist = await col.where({ name }).limit(1).get();
      if (exist.data && exist.data.length) {
        await col.doc(exist.data[0]._id).update(data); // 同名覆盖
      } else {
        await col.add(data);
      }
      form.reset();
      done.hidden = false;
      submitBtn.textContent = '提交登记';
      setTimeout(() => { done.hidden = true; }, 4000);
    } catch (err) {
      console.warn('[婚礼请柬] 出席登记提交失败', err);
      alert('提交失败,请稍后重试,或直接联系新人');
      submitBtn.textContent = '提交登记';
    } finally {
      submitBtn.disabled = false;
    }
  });
})();

(function seatQuery() {
  const input = $('#seat-input');
  const result = $('#seat-result');

  // 云端 seats 集合查询:先精确匹配,再模糊匹配
  async function cloudQuery(name) {
    const db = cloud.db;
    const exact = await db.collection('seats').where({ name }).limit(1).get();
    if (exact.data && exact.data.length) return exact.data[0];
    const fuzzy = await db.collection('seats')
      .where({ name: db.RegExp({ regexp: name, options: '' }) }).limit(10).get();
    if (fuzzy.data && fuzzy.data.length) return fuzzy.data[0];
    return null;
  }

  async function query() {
    const name = input.value.trim();
    if (!name) { result.hidden = true; return; }
    let hit = null;
    if (cloudReady) {
      try {
        hit = await cloudQuery(name);
      } catch (e) {
        console.warn('[婚礼请柬] 云端座位查询失败,使用内置名单', e);
      }
    }
    if (!hit) {
      hit = CONFIG.seats.find((s) => s.name === name)
        || CONFIG.seats.find((s) => s.name.includes(name));
    }
    result.hidden = false;
    if (hit) {
      result.className = 'seat-result found';
      result.innerHTML = `${hit.name},您的座位在<span class="seat-table">${hit.table}</span>`;
    } else {
      result.className = 'seat-result notfound';
      result.textContent = '未查询到座位信息,请确认姓名后重试,或联系新人';
    }
  }
  $('#seat-btn').addEventListener('click', query);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') query(); });
})();

(function renderMenu() {
  const wrap = $('#menu-list');
  if (CONFIG.menuComingSoon) {
    wrap.classList.add('menu-soon');
    wrap.textContent = '敬请期待';
    return;
  }
  CONFIG.menu.forEach((cat) => {
    const catEl = document.createElement('div');
    catEl.className = 'menu-cat';
    catEl.textContent = cat.cat;
    wrap.appendChild(catEl);
    cat.items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'menu-item';
      const name = document.createElement('span');
      name.className = 'mi-name';
      name.textContent = item.name;
      const dots = document.createElement('span');
      dots.className = 'mi-dots';
      row.append(name, dots);
      if (item.note) {
        const note = document.createElement('span');
        note.className = 'mi-note';
        note.textContent = item.note;
        row.appendChild(note);
      }
      wrap.appendChild(row);
    });
  });
})();

/* ============================================================
   婚礼倒计时(封面 + 内页两处同步)
   ============================================================ */
(function countdown() {
  const target = new Date(CONFIG.weddingDate).getTime();
  const els = { d: $('#cd-days'), h: $('#cd-hours'), m: $('#cd-mins'), s: $('#cd-secs') };
  let timer;
  function tick() {
    const diff = target - Date.now();
    const sec = diff > 0 ? Math.floor(diff / 1000) : 0;
    els.d.textContent = pad(Math.floor(sec / 86400));
    els.h.textContent = pad(Math.floor((sec % 86400) / 3600));
    els.m.textContent = pad(Math.floor((sec % 3600) / 60));
    els.s.textContent = pad(sec % 60);
    if (diff <= 0 && timer) clearInterval(timer);
  }
  tick();
  if (target - Date.now() > 0) timer = setInterval(tick, 1000);
})();

/* ============================================================
   背景音乐(微信内需用户首次交互后才能播放)
   ============================================================ */
(function music() {
  const btn = $('#music-btn');
  const audio = new Audio(CONFIG.musicSrc);
  audio.loop = true;
  audio.preload = 'auto';

  audio.addEventListener('canplaythrough', () => { btn.hidden = false; });
  audio.addEventListener('error', () => {
    btn.hidden = true;
    console.warn('[婚礼请柬] 未找到背景音乐文件 ' + CONFIG.musicSrc +
      ',请将音乐文件命名为 bgm.mp3 放入 music/ 目录(见 music/README.txt)。');
  });

  let playing = false;
  function setPlaying(on) {
    playing = on;
    btn.classList.toggle('playing', on);
    btn.setAttribute('aria-label', on ? '关闭背景音乐' : '播放背景音乐');
  }
  function play() {
    audio.play().then(() => setPlaying(true)).catch(() => { /* 等待下次用户交互 */ });
  }
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    playing ? audio.pause() : play();
    setPlaying(!playing);
  });

  // 微信规则:用户第一次点击/触摸页面后允许自动播放
  const autoPlay = () => {
    if (!playing) play();
    document.removeEventListener('touchstart', autoPlay);
    document.removeEventListener('click', autoPlay);
  };
  document.addEventListener('touchstart', autoPlay, { once: true, passive: true });
  document.addEventListener('click', autoPlay, { once: true });
})();

/* ============================================================
   花瓣飘落
   ============================================================ */
(function petals() {
  const wrap = $('#petals');
  const colors = ['#F0D6D6', '#E8C4C4', '#C5B8D8', '#EADCEA', '#D9A5A5'];
  function spawn() {
    if (document.hidden || wrap.childElementCount > 40) return;
    const p = document.createElement('span');
    p.className = 'petal';
    const size = 10 + Math.random() * 14;
    p.style.left = Math.random() * 100 + 'vw';
    p.style.width = p.style.height = size + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = 9 + Math.random() * 8 + 's';
    p.style.animationDelay = -Math.random() * 8 + 's';
    p.addEventListener('animationend', () => p.remove());
    wrap.appendChild(p);
  }
  for (let i = 0; i < 12; i++) spawn();
  setInterval(spawn, 900);
})();

/* ============================================================
   单页滚动:顶部导航与首页入口点击平滑跳转,滚动时高亮当前模块
   ============================================================ */
(function navHighlight() {
  const links = [...document.querySelectorAll('#topnav a')];
  const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((a) => a.classList.toggle('active', a === map.get(en.target.id)));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));
})();

/* ============================================================
   宾客祝福留言(存于本机 localStorage)
   ============================================================ */
(function wishes() {
  const KEY = 'wedding-wishes-v1';
  const form = $('#wish-form');
  const list = $('#wish-list');
  let data = []; // 新→旧排列

  function localLoad() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function localSave() {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function render() {
    list.innerHTML = '';
    if (!data.length) {
      const li = document.createElement('li');
      li.className = 'wish-empty';
      li.textContent = '还没有祝福,来写下第一条吧 ♥';
      list.appendChild(li);
      return;
    }
    data.forEach((w) => {
      const li = document.createElement('li');
      li.className = 'wish-item';
      const avatar = document.createElement('span');
      avatar.className = 'wish-avatar';
      avatar.textContent = (w.name || '客').slice(0, 1);
      const body = document.createElement('div');
      body.className = 'wish-body';
      const meta = document.createElement('div');
      meta.className = 'wish-meta';
      const user = document.createElement('span');
      user.className = 'wish-user';
      user.textContent = w.name || '匿名宾客';
      const time = document.createElement('span');
      time.className = 'wish-time';
      time.textContent = w.time;
      const text = document.createElement('p');
      text.className = 'wish-text';
      text.textContent = w.text;
      meta.append(user, time);
      body.append(meta, text);
      li.append(avatar, body);
      list.appendChild(li);
    });
  }

  // 云端模式:拉取共享留言墙;失败回退本地
  async function load() {
    if (cloudReady) {
      try {
        const res = await cloud.db.collection('wishes').orderBy('time', 'desc').limit(100).get();
        data = (res.data || []).map((d) => ({ name: d.name, text: d.text, time: d.time }));
      } catch (e) {
        console.warn('[婚礼请柬] 云端留言读取失败,回退本地', e);
        data = localLoad();
      }
    } else {
      data = localLoad();
    }
    render();
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $('#wish-name').value.trim();
    const text = $('#wish-text').value.trim();
    if (!text) return;
    const now = new Date();
    const item = {
      name,
      text,
      time: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`,
    };
    if (cloudReady) {
      try {
        await cloud.db.collection('wishes').add(item);
      } catch (err) {
        console.warn('[婚礼请柬] 留言提交失败', err);
        alert('留言失败,请稍后重试');
        return;
      }
    }
    data.unshift(item);
    localSave();
    render();
    $('#wish-text').value = '';
  });

  load();
})();

/* ============================================================
   滚动渐入动画:板块进入视口时优雅浮现
   (IntersectionObserver 自实现,零依赖,优于引入 AOS/GSAP:
    不依赖境外 CDN,不增加页面体积,微信内加载更稳)
   ============================================================ */
(function scrollReveal() {
  // .reveal 类由 JS 添加:即使脚本异常,内容也不会因初始 opacity:0 而消失
  const targets = document.querySelectorAll(
    '.sec-head, .timeline, .travel-list, .hotel-photos, .hotel-btns, .wish-form, .wish-list, .guide-block, .footer, .photo-wall-row'
  );
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('revealed');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
  targets.forEach((el) => {
    if (!el.classList.contains('photo-wall-row')) {
      el.classList.add('reveal');
    }
    io.observe(el);
  });
})();

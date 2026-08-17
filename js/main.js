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
  // 出席登记:腾讯文档收集表链接
  // ★ 在腾讯文档创建收集表(字段建议:姓名/出席人数/同行人/手机号选填),
  //   复制链接填到下方引号里即可生效
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
  // 首页背景图(想换就改这里,填 images/ 下的任意照片路径)
  coverImage: 'images/wedding/5/w45.jpg',
  // 婚纱照相册:按造型分组,每组一个文件夹
  // 格式: { title: '分组标题', dir: '图片文件夹', photos: ['文件名1', '文件名2', …] }
  // ★ 你调整文件夹里的照片后,告诉我一声,我重新扫描生成这里的列表。
  albums: [
    { title: '珠帘绣幕蔼祥烟,<br>合卺嘉盟缔百年', dir: 'images/wedding/1/', photos: ['w01.jpg', 'w02.jpg', 'w03.jpg', 'w04.jpg', 'w05.jpg', 'w06.jpg', 'w07.jpg', 'w08.jpg', 'w09.jpg'] },
    { title: '琴瑟在御,<br>莫不静好', dir: 'images/wedding/2/', photos: ['w10.jpg', 'w11.jpg', 'w12.jpg', 'w13.jpg', 'w14.jpg', 'w15.jpg', 'w16.jpg', 'w17.jpg', 'w18.jpg', 'w19.jpg', 'w20.jpg'] },
    { title: '良缘由夙缔,<br>佳偶自天成', dir: 'images/wedding/3/', photos: ['w21.jpg', 'w22.jpg', 'w23.jpg', 'w24.jpg', 'w25.jpg', 'w26.jpg', 'w27.jpg', 'w28.jpg'] },
    { title: '得成比目何辞死,<br>愿作鸳鸯不羡仙', dir: 'images/wedding/4/', photos: ['w29.jpg', 'w30.jpg', 'w31.jpg', 'w32.jpg', 'w33.jpg', 'w34.jpg', 'w35.jpg', 'w36.jpg', 'w37.jpg', 'w38.jpg', 'w39.jpg'] },
    { title: '在天愿作比翼鸟,<br>在地愿为连理枝', dir: 'images/wedding/5/', photos: ['w40.jpg', 'w41.jpg', 'w42.jpg', 'w43.jpg', 'w44.jpg', 'w45.jpg', 'w46.jpg', 'w47.jpg', 'w48.jpg', 'w49.jpg', 'w50.jpg', 'w51.jpg', 'w52.jpg', 'w53.jpg', 'w54.jpg', 'w55.jpg', 'w56.jpg', 'w57.jpg', 'w58.jpg'] },
  ],
  // 背景音乐:将文件放到 music/bgm.mp3 即可生效(见 music/README.txt)
  musicSrc: 'music/bgm.mp3',
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
  .flatMap((al) => al.photos.map((p) => ({ dir: al.dir, file: p, title: al.title })))
  .concat(HOTEL_PHOTOS);
let openLightbox; // 由下方放大层模块赋值

/* ============================================================
   首页与页面信息渲染
   ============================================================ */
(function renderStatic() {
  const d = new Date(CONFIG.weddingDate);
  const week = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
  const dateText = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 · 星期${week} · ${pad(d.getHours())}:${pad(d.getMinutes())}`;

  // 首页照片背景(加载完成后淡入)
  const bg = document.querySelector('.hero-bg');
  const img = new Image();
  img.onload = () => bg.classList.add('loaded');
  img.src = CONFIG.coverImage;
  bg.style.backgroundImage = `url('${CONFIG.coverImage}')`;

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

  env.addEventListener('click', () => {
    if (env.classList.contains('opened')) return;
    env.classList.add('opened');
    setTimeout(() => { card.hidden = false; }, 900);
  });

  $('#lc-close').addEventListener('click', () => {
    sessionStorage.setItem('env-opened', '1');
    card.hidden = true;
    scene.classList.add('done');
    setTimeout(() => scene.remove(), 650);
  });
})();

/* ============================================================
   婚纱照分组网格相册
   ============================================================ */
(function renderAlbums() {
  const wrap = $('#album-groups');
  CONFIG.albums.forEach((al) => {
    const group = document.createElement('div');
    group.className = 'album-group';

    const head = document.createElement('div');
    head.className = 'album-head';
    head.innerHTML = `
      <h3 class="album-title">${al.title}</h3>
      <span class="album-count">${al.photos.length} 张</span>
      <span class="album-line"></span>`;
    group.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'album-grid';
    al.photos.forEach((file, i) => {
      const img = document.createElement('img');
      img.className = 'photo-item';
      img.loading = 'lazy';
      img.src = al.dir + file;
      img.alt = `${al.title.replace(/<br>/g, '')} ${i + 1}`;
      img.addEventListener('click', () => openLightbox(ALL_PHOTOS.findIndex((p) => p.dir === al.dir && p.file === file)));
      grid.appendChild(img);
    });
    group.appendChild(grid);
    wrap.appendChild(group);
  });
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
  }
  function step(delta) { show(index + delta); }

  img.addEventListener('load', () => img.classList.add('loaded'));
  $('#lightbox-close').addEventListener('click', close);
  $('#lightbox-prev').addEventListener('click', () => step(-1));
  $('#lightbox-next').addEventListener('click', () => step(1));
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  box.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  box.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
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
  if (CONFIG.rsvpUrl) {
    btn.href = CONFIG.rsvpUrl;
  } else {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('出席登记链接尚未配置\n请在 js/main.js 的 CONFIG.rsvpUrl 填入腾讯文档收集表链接');
    });
  }
})();

(function seatQuery() {
  const input = $('#seat-input');
  const result = $('#seat-result');
  function query() {
    const name = input.value.trim();
    if (!name) { result.hidden = true; return; }
    const hit = CONFIG.seats.find((s) => s.name === name)
      || CONFIG.seats.find((s) => s.name.includes(name));
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
  let data = [];

  try {
    data = JSON.parse(localStorage.getItem(KEY)) || [];
  } catch (e) {
    data = [];
  }

  function save() {
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
    data.slice().reverse().forEach((w) => {
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

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#wish-name').value.trim();
    const text = $('#wish-text').value.trim();
    if (!text) return;
    const now = new Date();
    data.push({
      name,
      text,
      time: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`,
    });
    save();
    render();
    $('#wish-text').value = '';
  });

  render();
})();

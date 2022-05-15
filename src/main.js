import videoTW from '../dist/zh-TW.json'

// Console 值的輸出
let log = document.getElementById('textarea');

// 設定中文
videojs.addLanguage('zh-TW', videoTW);
const player = videojs('video-js', {
  language: 'zh-TW'
});

// 監聽事件：https://docs.videojs.com/player#:~:text=the%2Dmediametadata%2Dinterface-,Events,-beforepluginsetup%3A%24name
player.on('play', (event) => {
  console.log('影片總長：', player.duration());
  log.value = '執行 play 事件。\n影片總長：' + player.duration() + ' 秒';
});

player.on('pause', (event) => {
  console.log('目前秒數：', player.currentTime());
  log.value = '執行 pause 事件。\n目前秒數：' + player.currentTime() + ' 秒';
});

// 切換 Theme
let currentClass = 'letswrite';
const vjsBtn = document.querySelectorAll('.vjs-theme button');
Array.prototype.forEach.call(vjsBtn, btn => {
  btn.addEventListener('click', e => {
    player.removeClass(`vjs-theme-${currentClass}`);
    currentClass = e.target.dataset.theme;
    player.addClass(`vjs-theme-${currentClass}`);
  })
})
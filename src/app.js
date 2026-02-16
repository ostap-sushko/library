import { success, info, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import Chart from 'chart.js/auto';

defaultModules.set(PNotifyMobile, {});
const scheduleRef = document.querySelector(".schedule")
const keyEl = document.querySelector('.text');
const newGameBtn = document.querySelector('.btn');

const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', 'q', 'w', 'e'];
let currentKeyIndex = 0;

keyEl.textContent = keys[currentKeyIndex];

window.addEventListener('keydown', event => {
  const pressedKey = event.key.toLowerCase();
  const currentKey = keys[currentKeyIndex];

  if (pressedKey === currentKey) {
    currentKeyIndex += 1;

    if (currentKeyIndex === keys.length) {
      success({
        text: '🎉 Вітаю! Ти натиснув усі правильні клавіші!',
      });
      return;
    }

    keyEl.textContent = keys[currentKeyIndex];

    success({
      text: `✅ Правильно! Наступна клавіша: ${keys[currentKeyIndex]}`,
    });
  } else {
    error({
      text: `❌ Помилка! Потрібна клавіша "${currentKey}"`,
    });
  }
});

window.addEventListener('keypress', event => {
  event.preventDefault();
});

newGameBtn.addEventListener('click', () => {
  currentKeyIndex = 0;
  keyEl.textContent = keys[currentKeyIndex];

  info({
    text: '🔄 Нова гра розпочалась! Натисни правильну клавішу',
  });
});












const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {

type: 'line',

data: data,

options: {}

};
new Chart(scheduleRef, config)
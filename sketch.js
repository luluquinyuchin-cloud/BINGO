let cols = 4;
let rows = 4;
let cards = [];
let cardW = 280; // 格子再寬一些
let cardH = 130; // 高度也同步稍微增加
let spacingX = 50;
let spacingY = 35;
let startX, startY;

let questions = [
  "反社會型人格障礙症的英文簡稱是什麼？", 
  "反社會人格的另一個常見別稱是什麼？（講出一個即可）", 
  "這類患者通常是男生比較多，還是女生比較多？",
  "醫生規定要到幾歲成年，才能被正式診斷為反社會型人格障礙症？",
  "新聞上常形容反社會人格「冷血」，他們的主要行為特徵是什麼？",
  "根據 DSM-5 診斷標準，自 15 歲起，個體必須在 7 項典型特徵中至少符合幾項？",
  "在 15 歲之前，如果小孩子就表現出嚴重的虐待動物、偷竊、或校園欺凌，醫學上稱為什麼證據？",
  "這群人做決定往往基於即時的衝動或刺激，完全不考慮負面後果，這在臨床上稱為什麼表現？",
  "如果一個人的壞行為「只出現在思覺失調症（精神分裂）發作的時候」，醫生還能診斷他是反社會人格嗎？",
  "鄭捷在犯案被抓到後，表現出什麼樣的驚人態度，最符合反社會人格的特徵？",
  "研究發現，ASPD 患者的反社會行為，通常到了幾歲之後就會有所緩和？",
  "鄭捷「隨機挑選無辜乘客，毫無憐憫」的殘酷行為，具體對應到反社會人格的三大核心特徵中的哪一項？",
  "若因為一段關係已經出現失眠、焦慮或被操控感，簡報建議可以找哪些專業資源求助？",
  "當身邊的人出現反社會特質並讓你感到威脅時，簡報指出最先要放在第一位的是什麼？",
  "為了避免在人際相處中留下把柄，簡報建議與可能具反社會特質的人相處時，日常該怎麼做？",
  "面對可能具有反社會傾向的人，為什麼簡報強烈反對去「拯救」或「感化」他們？"
];

let answers = [
  "ASPD：  其完整的英文醫學名稱為 Antisocial Personality Disorder",
  "逆社會型人格障礙症 / 社會變態 / 心理變態",
  "男生  （男性發生率遠高於女性）",
  "18 歲  「此診斷必須年滿 18 歲」。因為兒童與青少年的大腦、個性和道德認知還處於發育階段，行為可能受到叛逆期或環境的暫時影響",
  "它是一種「以頻繁違反社會行為規範、藐視並侵犯他人權利」為主要特徵的人格障礙症。這意味著他們的「冷血」不是單純指心情冷淡，而是表現在具體去破壞社會規則、並造成他人身體或權益實質受損的長期行為模式。",
  "DSM-5 手冊將反社會人格的表現歸納為 7 大特徵（包括說謊、衝動、不負責任、缺乏悔意等），臨床醫生在診斷時，不需要患者 7 項完全具備，只要在長期觀察下「符合其中至少 3 項（含以上）」，即達到了診斷的量化門檻。",
  "「品行障礙」。  這是診斷 ASPD 的必要條件之一，必須有證據顯示個體在 15 歲之前就已經出現長期、反覆違反他人基本權利或社會規範的嚴重行為問題",
  "脫抑制（Disinhibition）  這指的是個體缺乏事前規劃與自我克制的能力，高度依賴即時的衝動、當下的情感或外界刺激來做出應對，明知道事後會有嚴重的懲罰或負面後果也無法踩煞車。",
  "「排除條款」：反社會行為「並非僅出現在思覺失調症或雙相障礙的發作期中」。因為思覺失調症發作時，患者可能因為幻聽或妄想（例如以為別人在害他）才做出攻擊行為，這屬於精神病症狀，而不是他本身根深蒂固的「反社會人格特質」",
  "極度冷漠，毫無驚慌與歉意。   完全體現了 ASPD 核心病理中「冷酷、缺乏同理、缺乏懊悔」的特徵。",
  "30 歲或 40 歲之後（中年之後）。   大腦可能更為成熟，或體力與荷爾蒙改變，其外顯的、暴力的反社會行為通常會逐漸有所「緩和」。",
  "鄭捷在捷運車廂內犯案時，面對完全不認識、沒有任何仇恨的無辜大眾，依然能痛下殺手且毫無憐憫，這正是「缺乏同理心」在現實犯罪中最極端的體現。",
  "當單靠個人無法應對人際壓力，且已經影響到身心健康時，簡報指出通報學校輔導室 或主動尋求心理、社工等專業介入才是正確的解決路徑。",
  "簡報強調「先看安全」。如果對方出現威脅、暴力或跟蹤，必須先把自身安全放第一，並盡快尋求警方、成人或社區資源協助。",
  "對方的言語可能充滿操控性，因此簡報建議少透露私生活，並把最近發生的對話、日期或截圖記錄下來作為自我保護。",
  "真正的診斷需要專業評估，一般人缺乏專業能力，若盲目替對方收拾後果或試圖改變對方，反而容易讓自己陷入高風險的心理泥淖中。"
];

let shortAnswers = [
  "ASPD",
  "心理變態 / 社會變態",
  "男性較多",
  "需年滿 18 歲",
  "藐視並侵犯他人權利",
  "符合至少 3 項",
  "品行障礙 (CD)",
  "脫抑制 (Disinhibition)",
  "排除思覺失調發作",
  "冷漠、缺乏同理與悔意",
  "30 - 40 歲後緩和",
  "缺乏同理心",
  "心理師、社工、學校輔導室或職場資源。",
  "人身安全。",
  "少講私事，重要事情盡量留紀錄。",
  "因為這通常會把自己拖進去。"
];

// 視窗狀態：null | 'question' | 'analysis'
let popupState = null;
let popupCard = null;
let userAnswer = null;

const LINES = [
  [0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],
  [0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],
  [0,5,10,15],[3,6,9,12]
];

let bingoLines = 0;
let bingoIndexes = new Set();

let closeBtnX, closeBtnY;
let closeBtnW = 100;
let closeBtnH = 36;

// 抽人系統
let people = [
  "第一組","第二組","第三組","第四組","第五組","第六組","第七組",
  "第八組","第九組","第十組","第十一組","第十二組","第十三組","第十四組"
].filter(p => p !== "第十組"); // 排除第十組
let peoplePool = [];
let drawnPeople = [];
let showPersonPopup = false;
let isDrawingPerson = false;
let currentPersonName = "？";
let personSpinTicks = 0;
let personSpinMax = 30;

let personBtnX, personBtnY;
let personBtnW = 100;
let personBtnH = 36;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('sans-serif');

  // 隨機打亂題目與答案的順序，同時保持兩者對應關係
  let combined = [];
  for (let i = 0; i < questions.length; i++) {
    combined.push({ q: questions[i], a: answers[i], sa: shortAnswers[i] });
  }
  shuffle(combined, true); // 使用 p5.js 內建函數隨機打亂

  for (let i = 0; i < questions.length; i++) {
    questions[i] = combined[i].q;
    answers[i] = combined[i].a;
    shortAnswers[i] = combined[i].sa;
  }

  let totalWidth  = cols * cardW + (cols - 1) * spacingX;
  let totalHeight = rows * cardH + (rows - 1) * spacingY;
  startX = (width  - totalWidth)  / 2;
  startY = (height - totalHeight) / 2 + 20;

  closeBtnX = 24 + closeBtnW / 2;
  closeBtnY = height - closeBtnH / 2 - 24;

  personBtnX = width - 24 - personBtnW / 2;
  personBtnY = height - personBtnH / 2 - 24;

  peoplePool = [...people];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = startX + j * (cardW + spacingX);
      let y = startY + i * (cardH + spacingY);
      cards.push(new Card(x, y, cardW, cardH, questions[i * cols + j], i * cols + j));
    }
  }
}

function draw() {
  background(0);

  // 標題
  fill(255);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(18);
  textStyle(BOLD);
  text("賓果遊戲", width / 2, 22);
  textStyle(NORMAL);

  // 狀態列
  let flippedCount = cards.filter(c => c.isFlipped).length;
  textSize(13);
  fill(160);
  text(`已翻開 ${flippedCount} / 16　|　BINGO ${bingoLines} 條`, width / 2, 50);

  // BINGO 提示條
  if (bingoLines > 0) {
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width / 2, startY - 22, 320, 26, 6);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(13);
    textStyle(BOLD);
    text(`BINGO！恭喜連成 ${bingoLines} 條線！`, width / 2, startY - 22);
    textStyle(NORMAL);
    rectMode(CORNER);
  }

  // 卡片
  for (let card of cards) {
    card.display();
  }

  // 左下關閉按鈕
  drawCloseButton();

  // 右下抽人按鈕
  drawPersonButton();

  // 題目視窗
  if (popupState === 'question') drawQuestionPopup();

  // 解析視窗
  if (popupState === 'analysis') drawAnalysisPopup();

  // 抽人視窗
  if (showPersonPopup) drawPersonPopup();

  // 抽人動畫
  if (isDrawingPerson) {
    personSpinTicks++;
    currentPersonName = random(people);
    if (personSpinTicks >= personSpinMax) {
      isDrawingPerson = false;
      personSpinTicks = 0;
      if (peoplePool.length === 0) peoplePool = [...people];
      let idx = floor(random(peoplePool.length));
      let winner = peoplePool.splice(idx, 1)[0];
      currentPersonName = winner;
      drawnPeople.push(winner);
    }
  }
}

function mousePressed() {

  // 解析視窗優先
  if (popupState === 'analysis') {
    let btnX = width / 2 - 70;
    let btnY = height / 2 + 140;
    if (mouseX > btnX && mouseX < btnX + 140 && mouseY > btnY && mouseY < btnY + 45) {
      if (popupCard) {
        popupCard.showAnalysis = true; // 關閉解析後，標記此卡片以後要顯示解析
      }
      popupState = null;
      popupCard = null;
      userAnswer = null;
    }
    return;
  }

  // 題目視窗優先
  if (popupState === 'question') {
    let popW = 600;
    let popH = 400;

    let correctBtnX = width / 2 - 140;
    let correctBtnY = height / 2 + 110;
    if (mouseX > correctBtnX && mouseX < correctBtnX + 120 && mouseY > correctBtnY && mouseY < correctBtnY + 45) {
      userAnswer = 'correct';
      popupState = 'analysis';
      return;
    }

    let wrongBtnX = width / 2 + 20;
    let wrongBtnY = height / 2 + 110;
    if (mouseX > wrongBtnX && mouseX < wrongBtnX + 120 && mouseY > wrongBtnY && mouseY < wrongBtnY + 45) {
      userAnswer = 'wrong';
      popupState = 'analysis';
      return;
    }

    let closeX = width / 2 + popW / 2 - 20;
    let closeY = height / 2 - popH / 2 + 20;
    if (dist(mouseX, mouseY, closeX, closeY) < 18) {
      popupState = null;
      popupCard = null;
      return;
    }
    return;
  }

  // 抽人視窗優先
  if (showPersonPopup) {
    let btnY = height / 2 + 60;
    if (!isDrawingPerson && mouseX > width / 2 - 60 && mouseX < width / 2 + 60 &&
        mouseY > btnY - 20 && mouseY < btnY + 20) {
      isDrawingPerson = true;
      personSpinTicks = 0;
      return;
    }
    let closeX = width / 2 + 180;
    let closeY = height / 2 - 130;
    if (dist(mouseX, mouseY, closeX, closeY) < 20) {
      showPersonPopup = false;
      return;
    }
    return;
  }

  // 抽人按鈕
  if (mouseX > personBtnX - personBtnW / 2 && mouseX < personBtnX + personBtnW / 2 &&
      mouseY > personBtnY - personBtnH / 2 && mouseY < personBtnY + personBtnH / 2) {
    showPersonPopup = true;
    if (!isDrawingPerson && currentPersonName === "？") currentPersonName = "點擊開始";
    return;
  }

  // 關閉遊戲按鈕
  if (mouseX > closeBtnX - closeBtnW / 2 && mouseX < closeBtnX + closeBtnW / 2 &&
      mouseY > closeBtnY - closeBtnH / 2 && mouseY < closeBtnY + closeBtnH / 2) {
    window.close();
    return;
  }

  // 卡片點擊
  for (let card of cards) {
    if (card.isClicked(mouseX, mouseY)) {
      if (!card.isFlipped) { // 如果卡片未翻開
        card.flip();
        card.isMarked = true; // 翻開即標記為已完成 (計算 BINGO)
        updateBingo();
      } else if (!card.showAnalysis) { 
        // 如果卡片已翻開但還沒看過解析，第二次點擊顯示放大題目視窗
        popupCard = card;
        popupState = 'question';
      } else { 
        // 如果已經看過解析了，之後點擊則直接顯示解析視窗
        popupCard = card;
        popupState = 'analysis';
      }
      break;
    }
  }
}

function updateBingo() {
  bingoLines = 0;
  bingoIndexes = new Set();
  for (let line of LINES) {
    if (line.every(i => cards[i].isMarked)) {
      bingoLines++;
      for (let i of line) bingoIndexes.add(i);
    }
  }
}

// ── 題目放大視窗 ──────────────────────────────
function drawQuestionPopup() {
  push();
  fill(0, 0, 0, 190);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);

  let popW = 600;
  let popH = 400;
  let px = width / 2 - popW / 2;
  let py = height / 2 - popH / 2;

  // 視窗本體：深灰底 + 白色細邊框
  fill(18, 18, 18);
  stroke(255);
  strokeWeight(1);
  rect(px, py, popW, popH, 16);

  // 題號標籤
  noStroke();
  fill(255);
  rect(px + 20, py + 20, 60, 24, 6);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(12);
  textStyle(BOLD);
  text(`題目 ${popupCard.index + 1}`, px + 50, py + 32);
  textStyle(NORMAL);

  // 題目文字
  fill(240);
  textAlign(CENTER, CENTER);
  textSize(30); // 題目視窗字體放大
  textStyle(BOLD);
  textWrap(CHAR);
  text(popupCard.content, px + 40, py + 50, popW - 80, popH - 150);
  textStyle(NORMAL);

  // 說明文字
  fill(120);
  textSize(13);
  textWrap(CHAR);
  text("請選擇你的答案", width / 2, height / 2 + 85);

  // 正確按鈕：白底黑字
  let correctBtnX = width / 2 - 140;
  let correctBtnY = height / 2 + 110;
  fill(255);
  noStroke();
  rect(correctBtnX, correctBtnY, 120, 45, 8);
  fill(0);
  textSize(16);
  textStyle(BOLD);
  text("✓ 正確", correctBtnX + 60, correctBtnY + 22.5);

  // 錯誤按鈕：黑底白邊白字
  let wrongBtnX = width / 2 + 20;
  let wrongBtnY = height / 2 + 110;
  fill(30);
  stroke(200);
  strokeWeight(1);
  rect(wrongBtnX, wrongBtnY, 120, 45, 8);
  fill(220);
  noStroke();
  textSize(16);
  text("✗ 錯誤", wrongBtnX + 60, wrongBtnY + 22.5);
  textStyle(NORMAL);

  // 右上角關閉
  let closeX = px + popW - 20;
  let closeY = py + 20;
  fill(60);
  noStroke();
  ellipse(closeX, closeY, 26);
  fill(200);
  textSize(13);
  textStyle(BOLD);
  text("✕", closeX, closeY - 1);
  textStyle(NORMAL);

  pop();
}

// ── 解析視窗 ──────────────────────────────────
function drawAnalysisPopup() {
  push();
  fill(0, 0, 0, 200);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);

  let popW = 600;
  let popH = 450;
  let px = width / 2 - popW / 2;
  let py = height / 2 - popH / 2;

  fill(18, 18, 18);
  stroke(255);
  strokeWeight(1);
  rect(px, py, popW, popH, 16);

  // 頂部色條：正確白色、錯誤深灰
  let isCorrect = userAnswer === 'correct';
  fill(isCorrect ? 255 : 50);
  noStroke();
  rect(px, py, popW, 50, 16, 16, 0, 0);

  // 結果標題
  fill(isCorrect ? 0 : 220);
  textAlign(CENTER, CENTER);
  textSize(17);
  textStyle(BOLD);
  text(isCorrect ? "✓ 你選擇了「正確」" : "✗ 你選擇了「錯誤」", width / 2, py + 25);
  textStyle(NORMAL);

  // 「解析」小標題
  fill(160);
  textSize(13);
  text("解　析", width / 2, py + 78);

  // 分隔線
  stroke(60);
  strokeWeight(1);
  line(px + 30, py + 90, px + popW - 30, py + 90);

  // 1. 簡短答案 (放大顯示重點)
  noStroke();
  fill(255, 255, 150); // 使用亮黃色突顯關鍵字
  textAlign(CENTER, TOP);
  textSize(32);        // 稍微縮小字體以預留換行空間
  textStyle(BOLD);
  textWrap(CHAR);
  // 顯示簡短解析
  text(shortAnswers[popupCard.index], px + 40, py + 105, popW - 80);
  textStyle(NORMAL);

  // 2. 詳細解析內容 (在下面做進一步解釋)
  fill(220);           // 淺灰色
  textSize(18);        // 微調解釋字體大小
  textAlign(CENTER, TOP);
  textWrap(CHAR);
  // 下移起始位置至 215，避免與上方的簡答重疊
  text(answers[popupCard.index], px + 50, py + 215, popW - 100, popH - 310);

  // 關閉按鈕
  let btnX = width / 2 - 70;
  let btnY = height / 2 + 140;
  fill(255);
  noStroke();
  rectMode(CORNER);
  rect(btnX, btnY, 140, 45, 8);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  textStyle(BOLD);
  text("關閉", width / 2, btnY + 22.5);
  textStyle(NORMAL);

  pop();
}

// ── 抽人視窗 ──────────────────────────────────
function drawPersonPopup() {
  push();
  fill(0, 0, 0, 210);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);

  rectMode(CENTER);
  fill(18, 18, 18);
  stroke(255);
  strokeWeight(1);
  rect(width / 2, height / 2, 400, 300, 16);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);
  text("誰是幸運兒？", width / 2, height / 2 - 100);

  // 名字顯示
  fill(isDrawingPerson ? 180 : 255);
  textSize(50);
  text(currentPersonName, width / 2, height / 2 - 10);

  // 底部提示
  fill(100);
  textSize(13);
  textStyle(NORMAL);
  text(`已抽出: ${drawnPeople.length} 人　名單剩餘: ${peoplePool.length}`, width / 2, height / 2 + 110);

  // 開始抽人按鈕
  let btnY = height / 2 + 60;
  if (isDrawingPerson) {
    fill(50);
    stroke(120);
    strokeWeight(1);
    rect(width / 2, btnY, 120, 40, 8);
    noStroke();
    fill(130);
    textSize(15);
    text("抽取中...", width / 2, btnY);
  } else {
    fill(255);
    noStroke();
    rect(width / 2, btnY, 120, 40, 8);
    fill(0);
    textSize(15);
    textStyle(BOLD);
    text("開始抽人", width / 2, btnY);
  }

  // 關閉按鈕
  let closeX = width / 2 + 180;
  let closeY = height / 2 - 130;
  fill(40);
  stroke(180);
  strokeWeight(1);
  ellipse(closeX, closeY, 30);
  noStroke();
  fill(200);
  textSize(14);
  textStyle(BOLD);
  text("✕", closeX, closeY);

  pop();
}

// ── 抽人按鈕 ──────────────────────────────────
function drawPersonButton() {
  push();
  rectMode(CENTER);
  fill(30);
  stroke(180);
  strokeWeight(1);
  rect(personBtnX, personBtnY, personBtnW, personBtnH, 8);
  noStroke();
  fill(220);
  textAlign(CENTER, CENTER);
  textSize(13);
  textStyle(BOLD);
  text("👤 抽籤找人", personBtnX, personBtnY);
  textStyle(NORMAL);
  pop();
}

// ── 關閉遊戲按鈕 ──────────────────────────────
function drawCloseButton() {
  push();
  rectMode(CENTER);
  fill(30);
  stroke(180);
  strokeWeight(1);
  rect(closeBtnX, closeBtnY, closeBtnW, closeBtnH, 8);
  noStroke();
  fill(200);
  textAlign(CENTER, CENTER);
  textSize(13);
  textStyle(BOLD);
  text("✕ 關閉遊戲", closeBtnX, closeBtnY);
  textStyle(NORMAL);
  pop();
}

// ── Card 類別 ──────────────────────────────────
class Card {
  constructor(x, y, w, h, content, index) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.content = content;
    this.index = index;
    this.isFlipped = false;
    this.showAnalysis = false; // 新增：是否已看過解析
    this.isMarked = false;
    this.hovered = false;
  }

  display() {
    this.hovered = (mouseX > this.x && mouseX < this.x + this.w &&
                    mouseY > this.y && mouseY < this.y + this.h);
    let isBingo = bingoIndexes.has(this.index);

    push();

    // 背景與邊框
    if (this.isMarked) {
      // 已標記：亮黃色底 (若連成 BINGO 則為純白)
      fill(isBingo ? 255 : color(255, 255, 200)); 
      stroke(255);
      strokeWeight(isBingo ? 3 : 2);
    } else if (this.isFlipped) {
      // 翻開未抽中：深灰底白邊
      fill(28);
      stroke(this.hovered ? 255 : 100);
      strokeWeight(this.hovered ? 1.5 : 1);
    } else {
      // 未翻開：近黑底，hover 時邊框變亮
      fill(this.hovered ? 35 : 15);
      stroke(this.hovered ? 200 : 55);
      strokeWeight(this.hovered ? 1.5 : 1);
    }
    rect(this.x, this.y, this.w, this.h, 10);
    noStroke();

    // 左上角題號小標籤
    fill(this.isMarked ? 0 : 50);
    rect(this.x + 8, this.y + 8, 24, 18, 4);
    fill(this.isMarked ? 0 : 180);
    textAlign(CENTER, CENTER);
    textSize(11);
    textStyle(BOLD);
    text(this.index + 1, this.x + 20, this.y + 17);
    textStyle(NORMAL);

    if (this.isFlipped) {
      // 顯示題號 (作為抽到的數字)
      fill(this.isMarked ? 0 : 80);
      textAlign(CENTER, CENTER);
      textSize(36);
      textStyle(BOLD);
      text(this.index + 1, this.x + this.w / 2, this.y + this.h / 2 - 20);
      textStyle(NORMAL);

      // 顯示文字內容：若看過解析則顯示簡短答案，否則顯示題目
      let displayBody = this.showAnalysis ? shortAnswers[this.index] : this.content;
      fill(this.isMarked ? 0 : 210);
      textAlign(CENTER, TOP);
      textSize(this.showAnalysis ? 18 : 14); // 簡短解析可以用大一點的字，題目用 14
      textWrap(CHAR);
      text(displayBody, this.x + 12, this.y + this.h / 2 + 5, this.w - 24, this.h / 2 - 10);
      textStyle(NORMAL);

      // 移除右下「點擊查看」提示，因為翻開即已標記並顯示解析

      // BINGO 標籤
      if (isBingo) { // 只要是 BINGO 線上的卡片就顯示
        fill(255);
        rect(this.x + 8, this.y + this.h - 22, 44, 16, 4);
        fill(0);
        textSize(10);
        text("BINGO", this.x + 30, this.y + this.h - 14);
      }

    } else { // 未翻開：顯示大題號
      // 未翻開：顯示大題號
      fill(this.isMarked ? 0 : 80);
      textAlign(CENTER, CENTER);
      textSize(48); // 未翻開的大數字放大
      textStyle(BOLD);
      text(this.index + 1, this.x + this.w / 2, this.y + this.h / 2);
      textStyle(NORMAL);
    }

    pop();
  }

  isClicked(mx, my) {
    return (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h);
  }

  flip() { this.isFlipped = !this.isFlipped; }
}
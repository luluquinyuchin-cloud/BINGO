let cols = 4;
let rows = 4;
let cards = [];
let cardW = 280; // 格子寬度
let cardH = 130; // 格子高度
let spacingX = 50;
let spacingY = 35;
let startX, startY;

// 資料結構：包含 4 選項、正確答案標籤、問答題型
let quizData = [
  {
    isMultipleChoice: false,
    q: "反社會型人格障礙症的英文簡稱是什麼？",
    options: [], 
    correct: "VIEW", // 問答題點擊查看即可
    a: "ASPD：其完整的英文醫學名稱為 Antisocial Personality Disorder。",
    sa: "ASPD"
  },
  {
    isMultipleChoice: false,
    q: "反社會人格的另一個常見別稱是什麼？（講出一個即可）",
    options: [],
    correct: "VIEW",
    a: "逆社會型人格障礙症 / 社會變態 / 心理變態。",
    sa: "心理變態 / 社會變態"
  },
  {
    isMultipleChoice: false,
    q: "這類患者通常是男生比較多，還是女生比較多？",
    options: [],
    correct: "VIEW",
    a: "男生 （簡報盛行率數據指出，男性的發生率遠高於女性）。",
    sa: "男性較多"
  },
  {
    isMultipleChoice: false,
    q: "醫生規定要到幾歲，才能被正式診斷為反社會型人格障礙症？",
    options: [],
    correct: "VIEW",
    a: "18 歲。根據 DSM-5 症狀與診斷標準，此疾病的正式診斷年齡規定為 18 歲以上（18+）。",
    sa: "需年滿 18 歲"
  },
  {
    isMultipleChoice: true,
    q: "【選擇題】新聞上常形容反社會人格「冷血」，其最核心的行為特徵是什麼？",
    options: [
      "(A) 頻繁違反規範、侵犯他人權利",
      "(B) 內心極度自卑而不敢社交",
      "(C) 情緒過度誇張且喜歡引人注意",
      "(D) 記憶力衰退並產生嚴重幻覺"
    ],
    correct: "A", // 正確答案
    a: "正確答案為 (A) 頻繁違反規範、侵犯他人權利。\n\n【詳細解析】：簡報的正式定義指出，ASPD 的核心就在於「頻繁違反規範」與「侵犯他人權利」。這代表醫學上的冷血不是指他們外表冷酷或不愛社交，而是他們在具體行為上會不斷破壞法律或道德界線，甚至做出傷害他人、欺騙、不負責任等行為，卻毫不在意。",
    sa: "選擇 (A) 違反規範與侵犯權利"
  },
  {
    isMultipleChoice: false,
    q: "根據 DSM-5 診斷標準，自 15 歲起，個體必須在 7 項典型特徵中至少符合幾項？",
    options: [],
    correct: "VIEW",
    a: "DSM-5 手冊將反社會人格的表現歸納為 7 大特徵，臨床醫生在診斷時不需要患者 7 項完全具備，只要在長期觀察下「符合其中至少 3 項（含以上）」，即達到了診斷的量化門檻。",
    sa: "符合至少 3 項"
  },
  {
    isMultipleChoice: true,
    q: "【選擇題】在 15 歲之前若有虐待動物、偷竊等嚴重行為，早年通常被稱什麼障礙？",
    options: [
      "(A) 品行障礙",
      "(B) 注意力不足過動症",
      "(C) 自閉症光譜障礙",
      "(D) 學習障礙"
    ],
    correct: "A", // 正確答案
    a: "正確答案為 (A) 品行障礙。\n\n【詳細解析】：簡報提到，反社會人格的行為問題通常始於早年的「品行障礙」。這在醫學診斷上是一個非常重要的早期指標，代表這類型的行為並非成年後突然發生，而是從童年或青少年時期（15歲前），就已經反覆出現不尊重他人權利、違反社會常理的嚴重行為問題。",
    sa: "選擇 (A) 品行障礙"
  },
  {
    isMultipleChoice: true,
    q: "【選擇題】這群人做決定往往基於即時衝動，完全不考慮負面後果，臨床上稱什麼表現？",
    options: [
      "(A) 無法控制衝動（衝動性）",
      "(B) 易激惹和攻擊性",
      "(C) 強迫性檢查行為",
      "(D) 社交退縮與冷漠"
    ],
    correct: "A", // 正確答案
    a: "正確答案為 (A) 無法控制衝動（衝動性）。\n\n【詳細解析】：簡報的臨床特徵中明確提到「無法控制衝動」與「衝動性」。一般人做決定前會想一下後果，但他們行事盲目且缺乏事前規劃，完全被當下的即時刺激、情緒吸引，就算明知道事後要付出極大代價，在當下也無法踩煞車。",
    sa: "選擇 (A) 無法控制衝動"
  },
  {
    isMultipleChoice: true,
    q: "【選擇題】根據簡報內容提供的數據，世界上大約有多少比例的人存在反社會型人格障礙症（ASPD）？",
    options: [
      "(A) 大約 4%",
      "(B) 大約 30%",
      "(C) 大約 75%",
      "(D) 大約 0.01%"
    ],
    correct: "A", // 正確答案
    a: "正確答案為 (A) 大約 4%。\n\n【詳細解析】：雖然正式的臨床評估診斷率大約在 0.05% 至 4% 之間，但簡報特別標註「世界上約有 4% 的人存在」此類人格特質。這代表反社會人格並不是像電影演的那麼罕見，在日常生活中，大約每 25 個人之中就有 1 個人可能具備這種潛在的特質，只是嚴重程度不同。",
    sa: "選擇 (A) 大約 4%"
  },
  {
    isMultipleChoice: false,
    q: "鄭捷在犯案被抓到後，表現出什麼樣的驚人態度，最符合反社會人格的特徵？",
    options: [],
    correct: "VIEW",
    a: "捕後表現出「極度冷漠」，毫無驚慌與歉意，彷彿只是做件微不足道的事。完全體現了 ASPD 核心病理中「冷酷、缺乏同理、缺乏悔意」的特徵。",
    sa: "極度冷漠、毫無驚慌與歉意"
  },
  {
    isMultipleChoice: true,
    q: "【選擇題】研究與簡報資料發現，ASPD 患者的外顯與暴力反社會行為，通常在到了幾歲之後會逐漸有所「緩和」？",
    options: [
      "(A) 30 歲或 40 歲之後",
      "(B) 20 幾歲剛成年時",
      "(C) 12 歲兒童青春期前",
      "(D) 終生完全不會有任何改變"
    ],
    correct: "A", // 正確答案
    a: "正確答案為 (A) 30 歲或 40 歲之後。\n\n【詳細解析】：簡報指出「中年後緩和」的現象。研究顯示，患者在青少年到剛成年（18-30歲）時的行為是最極端、最衝動的；但到了 30 歲或 40 歲之後，可能因為大腦控制區域發育更完全，或是體力、荷爾蒙的改變，他們那些外顯的打架、違法或暴力衝動行為，通常會逐漸變得比較沒那麼激烈。",
    sa: "選擇 (A) 30 - 40 歲後緩和"
  },
  {
    isMultipleChoice: false,
    q: "鄭捷「隨機挑選無辜乘客，毫無憐憫」的殘酷行為，具體對應到反社會人格的三大核心特徵中的哪一項？",
    options: [],
    correct: "VIEW",
    a: "鄭捷在捷運車廂內犯案時，面對完全不認識、沒有任何仇恨的無辜大眾，依然能痛下殺手且毫無憐憫，這正是「缺乏同理心」在現實犯罪中最極端的體現。",
    sa: "缺乏同理心"
  },
  {
    isMultipleChoice: false,
    q: "若因為一段關係已經出現失眠、焦慮或被操控感，簡報建議可以找哪些專業資源求助？",
    options: [],
    correct: "VIEW",
    a: "當單靠個人無法應對人際壓力，且已經影響到身心健康時，簡報指出主動尋求心理師、社工、家人，或通報學校輔導室、職場相關資源介入才是正確的解決路徑。",
    sa: "心理師、社工、學校或職場資源"
  },
  {
    isMultipleChoice: false,
    q: "當身邊的人出現反社會特質並讓你感到威脅時，簡報指出最先要放在第一位的是什麼？",
    options: [],
    correct: "VIEW",
    a: "簡報強調「先看安全」。如果對方出現威脅、控制、騷擾、暴力或跟蹤，必須先把人身安全放第一，並盡快尋求警方、可信任的人或社區資源協助。",
    sa: "人身安全"
  },
  {
    isMultipleChoice: false,
    q: "為了避免在人際相處中留下把柄，簡報建議與可能具反社會特質的人相處時，日常該怎麼做？",
    options: [],
    correct: "VIEW",
    a: "相處原則為「少講私事，少交出把柄，重要事情盡量留紀錄」。日常可以把最近發生的對話、日期或訊息截圖記錄下來作為自我保護。",
    sa: "少講私事，重要事情留紀錄"
  },
  {
    isMultipleChoice: false,
    q: "面對可能具有反社會傾向的人，為什麼簡報強烈反對去「拯救」或「感化」他們？",
    options: [],
    correct: "VIEW",
    a: "因為簡報明確指出「這通常會把自己拖進去」。真正的診斷需要專業評估，一般人缺乏專業能力，若盲目替對方收拾後果或試圖感化對方，反而容易讓自己陷入高風險的心理與人身安全泥淖中。",
    sa: "因為這通常會把自己拖進去"
  }
];

// 儲存洗牌後的對應欄位
let questions = [];
let answers = [];
let shortAnswers = [];
let isChoiceQuestion = [];
let quizOptions = [];
let correctAnswers = [];

// 視窗狀態：null | 'question' | 'wrong_feedback' | 'analysis'
let popupState = null;
let popupCard = null;
let selectedWrongOption = ""; // 紀錄點錯的選項內容

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
].filter(p => p !== "第十組"); 
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

// 4行按鈕垂直排版設定
let choiceBtnW = 480; 
let choiceBtnH = 38;
let choiceBtnSpacing = 12;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('sans-serif');

  // 洗牌打亂題目
  shuffle(quizData, true);

  for (let i = 0; i < quizData.length; i++) {
    questions.push(quizData[i].q);
    answers.push(quizData[i].a);
    shortAnswers.push(quizData[i].sa);
    isChoiceQuestion.push(quizData[i].isMultipleChoice);
    quizOptions.push(quizData[i].options);
    correctAnswers.push(quizData[i].correct);
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
      cards.push(new Card(x, y, cardW, cardH, questions[i * rows + j], i * rows + j));
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

  // 狀態
  let flippedCount = cards.filter(c => c.isMarked).length;
  textSize(13);
  fill(160);
  text(`已翻開答對 ${flippedCount} / 16 | BINGO ${bingoLines} 條`, width / 2, 50);

  // 連線條提示
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

  drawCloseButton();
  drawPersonButton();

  // 彈出視窗階層判斷
  if (popupState === 'question') drawQuestionPopup();
  if (popupState === 'wrong_feedback') drawWrongFeedbackPopup();
  if (popupState === 'analysis') drawAnalysisPopup();
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
  // 1. 錯誤回答回饋視窗點擊 -> 回到題目狀態（不扣分、可重選）
  if (popupState === 'wrong_feedback') {
    let btnX = width / 2 - 70;
    let btnY = height / 2 + 60;
    if (mouseX > btnX && mouseX < btnX + 140 && mouseY > btnY && mouseY < btnY + 45) {
      popupState = 'question'; // 關鍵：回到原本題目狀態
    }
    return;
  }

  // 2. 正確解析視窗點擊 -> 關閉並鎖定卡片
  if (popupState === 'analysis') {
    let btnX = width / 2 - 70;
    let btnY = height / 2 + 155;
    if (mouseX > btnX && mouseX < btnX + 140 && mouseY > btnY && mouseY < btnY + 45) {
      if (popupCard) {
        popupCard.showAnalysis = true; 
        popupCard.isMarked = true; // 只有這時候才算真正答對標記
        updateBingo();
      }
      popupState = null;
      popupCard = null;
    }
    return;
  }

  // 3. 題目視窗點擊 (核心邏輯：判斷對錯)
  if (popupState === 'question') {
    let idx = popupCard.index;
    let isChoice = isChoiceQuestion[idx];
    let correctAns = correctAnswers[idx];

    if (isChoice) {
      let startBtnY = height / 2 - 10; 
      let labels = ['A', 'B', 'C', 'D'];
      let btnX = width / 2 - choiceBtnW / 2;

      for (let i = 0; i < 4; i++) {
        let currentY = startBtnY + i * (choiceBtnH + choiceBtnSpacing);
        if (mouseX > btnX && mouseX < btnX + choiceBtnW && mouseY > currentY && mouseY < currentY + choiceBtnH) {
          if (labels[i] === correctAns) {
            // 答對了！進入詳細解析
            popupState = 'analysis';
          } else {
            // 答錯了！跳出提示，之後可再回原題
            selectedWrongOption = quizOptions[idx][i];
            popupState = 'wrong_feedback';
          }
          return;
        }
      }
    } else {
      // 問答題按紐點擊直接通過
      let btnX = width / 2 - 200 / 2;
      let btnY = height / 2 + 80;
      if (mouseX > btnX && mouseX < btnX + 200 && mouseY > btnY && mouseY < btnY + 45) {
        popupState = 'analysis';
        return;
      }
    }

    // 右上角 X 關閉
    let popW = 660;
    let popH = 430;
    let closeX = width / 2 + popW / 2 - 24;
    let closeY = height / 2 - popH / 2 + 24;
    if (dist(mouseX, mouseY, closeX, closeY) < 18) {
      // 如果還沒答對就按關閉，將卡片恢復成未翻開狀態
      popupCard.isFlipped = false;
      popupState = null;
      popupCard = null;
      return;
    }
    return;
  }

  // 4. 抽人視窗點擊
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

  // 5. 右下按鈕
  if (mouseX > personBtnX - personBtnW / 2 && mouseX < personBtnX + personBtnW / 2 &&
      mouseY > personBtnY - personBtnH / 2 && mouseY < personBtnY + personBtnH / 2) {
    showPersonPopup = true;
    if (!isDrawingPerson && currentPersonName === "？") currentPersonName = "點擊開始";
    return;
  }

  // 6. 左下按鈕
  if (mouseX > closeBtnX - closeBtnW / 2 && mouseX < closeBtnX + closeBtnW / 2 &&
      mouseY > closeBtnY - closeBtnH / 2 && mouseY < closeBtnY + closeBtnH / 2) {
    window.close();
    return;
  }

  // 7. 卡片點擊
  for (let card of cards) {
    if (card.isClicked(mouseX, mouseY)) {
      if (!card.isMarked && !card.isFlipped) { 
        // 點擊未作答的格子 -> 翻開並強制點開視窗答題
        card.flip();
        popupCard = card;
        popupState = 'question';
      } else if (card.isMarked) { 
        // 已經答對通關的格子 -> 之後點擊直接看解析
        popupCard = card;
        popupState = 'analysis';
      } else if (card.isFlipped && !card.isMarked) {
        // 已翻開但先前沒答對（可能有關閉過）-> 重新開啟答題
        popupCard = card;
        popupState = 'question';
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
  fill(0, 0, 0, 195);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);

  let popW = 660; 
  let popH = 430; 
  let px = width / 2 - popW / 2;
  let py = height / 2 - popH / 2;

  fill(18, 18, 18);
  stroke(255);
  strokeWeight(1);
  rect(px, py, popW, popH, 16);

  // 題號標籤
  noStroke();
  fill(255);
  rect(px + 24, py + 24, 60, 24, 6);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(12);
  textStyle(BOLD);
  text(`題目 ${popupCard.index + 1}`, px + 54, py + 36);
  textStyle(NORMAL);

  let idx = popupCard.index;
  let isChoice = isChoiceQuestion[idx];

  // 顯示題目文字
  fill(240);
  textAlign(CENTER, TOP);
  textSize(20); 
  textStyle(BOLD);
  textWrap(CHAR);
  let textY = isChoice ? (py + 65) : (py + 130);
  text(popupCard.content, px + 40, textY, popW - 80, 100);
  textStyle(NORMAL);

  if (isChoice) {
    // 選擇題：垂直畫出 4 行可點選選項按鈕
    let startBtnY = height / 2 - 10; 
    let btnX = width / 2 - choiceBtnW / 2;
    let opts = quizOptions[idx];

    for (let i = 0; i < 4; i++) {
      let currentY = startBtnY + i * (choiceBtnH + choiceBtnSpacing);

      // 設定滑鼠懸停變色效果，增強「可以點選」的視覺感
      let isHover = (mouseX > btnX && mouseX < btnX + choiceBtnW && mouseY > currentY && mouseY < currentY + choiceBtnH);
      
      if (isHover) {
        fill(255, 255, 200);
        stroke(255);
      } else {
        fill(25);
        stroke(120);
      }
      strokeWeight(1);
      rect(btnX, currentY, choiceBtnW, choiceBtnH, 6);
      noStroke();

      fill(isHover ? 0 : 230);
      textAlign(LEFT, CENTER);
      textSize(14);
      textStyle(BOLD);
      text(opts[i], btnX + 20, currentY + choiceBtnH / 2);
      textStyle(NORMAL);
    }
  } else {
    // 簡答問答題：正中央單一按鈕
    let btnW = 220;
    let btnH = 45;
    let btnX = width / 2 - btnW / 2;
    let btnY = height / 2 + 80;

    let isHover = (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH);
    fill(isHover ? 200 : 255);
    noStroke();
    rect(btnX, btnY, btnW, btnH, 8);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(15);
    textStyle(BOLD);
    text("查看解答與詳細解析 ➔", width / 2, btnY + btnH / 2);
    textStyle(NORMAL);
  }

  // 右上角 X 關閉
  let closeX = px + popW - 24;
  let closeY = py + 24;
  fill(50);
  noStroke();
  ellipse(closeX, closeY, 26);
  fill(220);
  textSize(13);
  textStyle(BOLD);
  text("✕", closeX, closeY - 1);
  textStyle(NORMAL);

  pop();
}

// ── 答錯提示視窗（精髓：關閉後回到原題狀態） ─────────────────
function drawWrongFeedbackPopup() {
  push();
  fill(0, 0, 0, 150); // 略透明的疊加層
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);

  let w = 460;
  let h = 220;
  fill(24, 10, 10); // 暗紅色系底框
  stroke(255, 100, 100); // 鮮紅警告邊框
  strokeWeight(2);
  rectMode(CENTER);
  rect(width / 2, height / 2, w, h, 12);

  noStroke();
  fill(255, 120, 120);
  textAlign(CENTER, CENTER);
  textSize(22);
  textStyle(BOLD);
  text("✗ 答案不正確哦！", width / 2, height / 2 - 40);

  fill(180);
  textSize(14);
  textStyle(NORMAL);
  textWrap(CHAR);
  text(`同學選擇了：${selectedWrongOption}`, width / 2, height / 2, w - 40);

  // 回到題目按鈕
  let btnX = width / 2;
  let btnY = height / 2 + 60;
  let isHover = (mouseX > btnX - 70 && mouseX < btnX + 70 && mouseY > btnY - 22.5 && mouseY < btnY + 22.5);
  fill(isHover ? 200 : 255);
  rect(btnX, btnY, 140, 45, 6);
  fill(0);
  textSize(15);
  textStyle(BOLD);
  text("重新挑戰", btnX, btnY);
  
  pop();
}

// ── 解析視窗（只有答對時才會看到） ──────────────────────────────
function drawAnalysisPopup() {
  push();
  fill(0, 0, 0, 205);
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);

  let popW = 660;
  let popH = 470;
  let px = width / 2 - popW / 2;
  let py = height / 2 - popH / 2;

  fill(18, 18, 18);
  stroke(255);
  strokeWeight(1);
  rect(px, py, popW, popH, 16);

  // 頂部綠色成功橫條
  fill(80, 180, 100);
  noStroke();
  rect(px, py, popW, 50, 16, 16, 0, 0);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  textStyle(BOLD);
  text("✓ 恭喜答對！解鎖詳細解析", width / 2, py + 25);
  textStyle(NORMAL);

  fill(160);
  textSize(13);
  text("解 析", width / 2, py + 78);

  stroke(60);
  strokeWeight(1);
  line(px + 30, py + 90, px + popW - 30, py + 90);

  // 1. 重點核心簡答
  noStroke();
  fill(255, 255, 140); 
  textAlign(CENTER, TOP);
  textSize(24);        
  textStyle(BOLD);
  textWrap(CHAR);
  text(shortAnswers[popupCard.index], px + 40, py + 105, popW - 80);
  textStyle(NORMAL);

  // 2. 詳細完整解析內容
  fill(215);           
  textSize(15);        
  textAlign(CENTER, TOP);
  textWrap(CHAR);
  text(answers[popupCard.index], px + 50, py + 185, popW - 100, popH - 265);

  // 下方關閉
  let btnX = width / 2 - 70;
  let btnY = height / 2 + 155;
  let isHover = (mouseX > btnX && mouseX < btnX + 140 && mouseY > btnY && mouseY < btnY + 45);
  fill(isHover ? 200 : 255);
  rectMode(CORNER);
  rect(btnX, btnY, 140, 45, 8);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  textStyle(BOLD);
  text("關閉卡片", width / 2, btnY + 22.5);
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

  fill(isDrawingPerson ? 180 : 255);
  textSize(50);
  text(currentPersonName, width / 2, height / 2 - 10);

  fill(100);
  textSize(13);
  textStyle(NORMAL);
  text(`已抽出: ${drawnPeople.length} 人 名單剩餘: ${peoplePool.length}`, width / 2, height / 2 + 110);

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

// ── 右下抽籤按鈕 ──────────────────────────────
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

// ── 左下關閉按鈕 ──────────────────────────────
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
    this.showAnalysis = false; 
    this.isMarked = false;
    this.hovered = false;
  }

  display() {
    this.hovered = (mouseX > this.x && mouseX < this.x + this.w &&
                    mouseY > this.y && mouseY < this.y + this.h);
    let isBingo = bingoIndexes.has(this.index);

    push();

    if (this.isMarked) {
      fill(isBingo ? 255 : color(255, 255, 200)); 
      stroke(255);
      strokeWeight(isBingo ? 3 : 2);
    } else if (this.isFlipped) {
      fill(28);
      stroke(this.hovered ? 255 : 100);
      strokeWeight(this.hovered ? 1.5 : 1);
    } else {
      fill(this.hovered ? 35 : 15);
      stroke(this.hovered ? 200 : 55);
      strokeWeight(this.hovered ? 1.5 : 1);
    }
    rect(this.x, this.y, this.w, this.h, 10);
    noStroke();

    // 題號小標籤
    fill(this.isMarked ? 0 : 50);
    rect(this.x + 8, this.y + 8, 24, 18, 4);
    fill(this.isMarked ? 0 : 180);
    textAlign(CENTER, CENTER);
    textSize(11);
    textStyle(BOLD);
    text(this.index + 1, this.x + 20, this.y + 17);
    textStyle(NORMAL);

    if (this.isFlipped) {
      fill(this.isMarked ? 0 : 80);
      textAlign(CENTER, CENTER);
      textSize(36);
      textStyle(BOLD);
      text(this.index + 1, this.x + this.w / 2, this.y + this.h / 2 - 20);
      textStyle(NORMAL);

      let displayBody = this.isMarked ? shortAnswers[this.index] : "點選看題目...";
      fill(this.isMarked ? 0 : 150);
      textAlign(CENTER, TOP);
      textSize(this.isMarked ? 15 : 12); 
      textWrap(CHAR);
      text(displayBody, this.x + 12, this.y + this.h / 2 + 5, this.w - 24, this.h / 2 - 10);
      textStyle(NORMAL);

      if (isBingo) { 
        fill(255);
        rect(this.x + 8, this.y + this.h - 22, 44, 16, 4);
        fill(0);
        textSize(10);
        text("BINGO", this.x + 30, this.y + this.h - 14);
      }
    } else { 
      fill(this.isMarked ? 0 : 80);
      textAlign(CENTER, CENTER);
      textSize(48); 
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
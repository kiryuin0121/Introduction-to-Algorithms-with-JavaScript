// ヒストグラムを作る。

const histogram: number[] = Array(11).fill(0);

const SCORE_LIST: number[] = [
  12, 45, 67, 23, 89, 34, 56, 78, 90, 11, 42, 65, 37, 58, 74, 83, 29, 61, 47,
  52, 69, 31, 76, 84, 18, 95, 63, 27, 49, 71, 100,
];

SCORE_LIST.forEach((score) => {
  if (score < 0 || score > 100) return;
   const rank = Math.floor(score / 10); 
  histogram[rank]! += 1;
});

histogram.forEach((count, rank) => {
  let text = `${rank * 10}：`;
  for (let c = 0; c < count; c++) {
    text += "■";
  }
  console.log(text);
});

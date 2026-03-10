const naiveSearch = (text: string, pattern: string) => {
  const n = text.length;
  const m = pattern.length;
  // i:比較開始(絶対位置)。マッチした場合はpatternに一致するのかは何番目からなのか意味する。
  // 例えば、n=5,m=3のとき
  // 0,1,2
  // 1,2,3
  // 2,3,4
  // 3,4,5(textの末尾に到達したので終わり)
  // 仮に次のループに進み4,5,6と比較しようとするとtextの末尾にpatternが収まらない。→ よってループ継続条件はi<=n-mである。
  for (let i = 0; i <= n - m; i++) {
    let isMatch = true;
    //j:patternのうち何番目の文字を見ているのかを意味する。
    //したがって、検証中の文字の絶対位置はi(起点)+jで表現できる。
    for (let j = 0; j < m; j++) {
      if (text[i + j] !== pattern[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) return i;
  }
};

export const shuffleArray = <T>(arr: T[]) => {
  const result = [...arr];
  const length = result.length;
  // 前方の要素から無作為に一つ抽出して末尾から確定させていく。冗長な入れ替え作業が発生しないため計算効率がよい。
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

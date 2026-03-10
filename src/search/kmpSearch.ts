const buildLPS = (pattern: string): number[] => {
  const lps: number[] = Array(pattern.length).fill(0);
  let length = 0; // すでにマッチした接頭辞の長さ
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
};

const kmpSearch = (text: string, pattern: string) => {
  const lps = buildLPS(pattern);
  let textIdx = 0;
  let patternIdx = 0;
  while (textIdx < text.length) {
    if (text[textIdx] === pattern[patternIdx]) {
      textIdx++;
      patternIdx++;
    }

    if (patternIdx === pattern.length) {
      //patternに一致する部分を発見した場合
      return textIdx - patternIdx;
    }
  }
};

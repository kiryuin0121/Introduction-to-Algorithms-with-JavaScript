/* 
nCrを高校数学の!(階乗)を使った公式で計算しようとするとオーバーフローする可能性があるので、漸化式を使って考える。

ある組み合わせ(nCr)は、一つ前の組み合わせ(nCr-1)の何倍(xとする)かを考えると、nCrについて以下のような漸化式を立てられる。
(これを再帰的に繰り返していくことで最終的にnCrが求められる。)
nCr = x * nCr-1 ...1
x = nCr/nCr-1 ...2

nCr= n*(n-1)*(n-2)*...*(n-r-1)/r!
分子分母に(n-r)!倍すると
nCr= n!/r!*(n-r)! ...3

2より
nCr-1=n!/(r-1)!(n-r+1)! ...4

3,4を2に代入すると
x = (n-r+1)/n

したがってnCrの漸化式は、1より
nCr = (n-r+1)/r*nCr-1
*/

const combination = (n:number,r:number) => {
  // nC0が1なので初期値は1とする。
  let result = 1;
  for(let i=1; i<=r;i++ ) {
    // 次の合わせの値は前の組み合わせの何倍なのかを求め続けると最終的に求めたい値がわかる。
    result = (n-i+1)/i * result
  }
  return result;
}

console.log("10C2=",combination(10,2));
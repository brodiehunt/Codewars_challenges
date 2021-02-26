function findScreenHeight(width, ratio) {
  let ratioArr = ratio.split(":");
  let answer = width * (ratioArr[1]/ratioArr[0]);
  return answer;
}

findScreenHeight(1024, "4:3")
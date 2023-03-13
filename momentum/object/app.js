const player = {
  // object 는 {}중괄호를 이용해 나열한다.
  name: "woobin",
  points: 10,
  kind: true,
  fat: "little bit",
};

console.log(player);
console.log(player.name);

player.kind = false;
player.points = player.points + 15; // 수정 한 오브젝트
player.lastName = "good"; //추가 한 오브젝트
console.log(player);

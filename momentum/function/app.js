const introduce = {
  name: "woobin",
  sayHello: function (otherPersonName) {
    console.log("my name is " + otherPersonName + " nice to meet you");
  },
};

console.log(introduce.name);
introduce.sayHello("lee");
introduce.sayHello("kim");

function plus(a, b) {
  console.log(a * b);
}

plus(5, 3);

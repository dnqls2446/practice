const title = document.querySelector(".hello h1");

// querySelector 는 항상 element를 css 방식으로 데리고 올 수 있다. !!중요
// querySelector 는 단하나의 element css를 return 해준다.
// 동일한 class 네임이 있어도 querySelector는 첫번째를 return 한다.
// querySelector 는 css selector를 사용하여 검색가능
// querySelectorAll 는 해당되는 모든 element css를 return 해준다.

title.innerText = "Hello";


const url = 'https://jsonplaceholder.typicode.com';

const btnInicial = document.getElementById("btnInicial");
const btnUserInfo = document.getElementById("btnUserInfo");
const btnUserEmail = document.getElementById("btnUserEmail");
const btnUserPosts = document.getElementById("btnUserPosts");
const btnLettersMap = document.getElementById("btnLettersMap");
const btnDoubleId = document.getElementById("btnDoubleId");
const btnfilterId = document.getElementById("btnfilterId");
const btnsortName = document.getElementById("btnsortName");
  
btnOriginal.onclick = () => originalFetch();
btnUserInfo.onclick = () => getUserInfo(1);
btnUserEmail.onclick = () => getUserEmail();
btnUserPosts.onclick = () => getUserPosts(2);
btnLettersMap.onclick = () => lettersMap();
btnDoubleId.onclick = () => doubleIdMap();
btnfilterId.onclick = () => filterId();
btnsortName.onclick = () => sortName();

  // crida inicial de JSONPlaceholder
const originalFetch = () => {
  fetch(`${url}/todos/1`)
  .then(response => response.json())
  .then(json => console.log(json))
}

  // printar la info d'un usuari
const getUserInfo = (id) => {
  fetch(`${url}/users/${id}`)
  .then(response => response.json())
  .then(json => console.log(json))
}

  // printar el email de cada usuari
const getUserEmail = () => {
  fetch(`${url}/users`)
  .then(response => response.json())
  .then(json => json.forEach(user => {
    console.log(user.email);
  }))
}

  // printar els titols dels posts d'un usuari
const getUserPosts = (id) => {
  fetch(`${url}/users/${id}/posts`)
    .then(response => response.json())
    .then(json => json.forEach(post => {
      console.log(post.title);
    }))
}

  // # de caracters per nom (espais inclosos)
const lettersMap = () => {
  fetch(`${url}/users`)
    .then(response => response.json())
    .then(json => json.forEach(user => console.log(`${user.name} : ${user.name.length}`)))
}

  // // test
  // const ftest = (a) => { 
  //   return a + 1;
  // }
  // console.log(ftest(1)) // printa el return
  // const test = ftest(1);
  // console.log(test) // printa el return

  // const lettersMap2 = () => {
  //   fetch(`${url}/users`)
  //     .then(response => response.json())
  //     .then(json => json[3].id)
  // }
  // let test2 = lettersMap2();
  // console.log(test2) //undefined
  // // fi test

  // map
  const doubleIdMap = () => {
    fetch(`${url}/users`)
      .then(response => response.json())
      .then(json => json.map(user => console.log(user.id * 2)))
  }

  // filter
  const filterId = () => {
    fetch(`${url}/users`)
      .then(response => response.json())
      .then(json => json.filter(user => console.log(`${user.name} : ${user.id > 5}`)))
  }

  // sort
  const sortName = () => {
    fetch(`${url}/users`)
      .then(response => response.json())
      .then(json => json.sort((u1, u2) => console.log(u1.name > u2.name ? 1 : -1)))
  }
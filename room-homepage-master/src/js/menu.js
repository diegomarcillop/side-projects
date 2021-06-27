let navMobile = document.getElementsByClassName("home__principal__container-nav__menu")[0];

let doc = document.querySelector("meta[name=viewport]");

console.log(doc);

const onClickClose = () => {
  navMobile.style.transform = 'translate(-100%, 0px)';
}

const onClickOpen = () => {
  navMobile.style.transform = 'translate(0px, 0px)';
}

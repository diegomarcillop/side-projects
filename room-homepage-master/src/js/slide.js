
const items = [
  {
    title: 'Discover innovative ways to decorate',
    description:
      `We provide unmatched quality, comfort, and style for property owners across the country. 
      Our experts combine form and function in bringing your vision to life. Create a room in your 
      own style with our collection and make your property a reflection of you and what you love.`,
    image: '../../../assets/images/desktop-image-hero-1.jpg'
  },
  {
    title: 'We are available all across the globe',
    description:
      `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`,
    image: '../../../assets/images/desktop-image-hero-2.jpg'
  },
  {
    title: 'Manufactured with the best materials',
    description:
      `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
    image: '../../../assets/images/desktop-image-hero-3.jpg'
  }
];

let titleItem = document.getElementsByClassName("home__principal__container__card__title")[0];
let descriptionItem = document.getElementsByClassName("home__principal__container__card__description")[0];
let containerImage = document.getElementsByClassName("home__principal__container-nav")[0];
let index = 0;

const handleNext = () => {
  titleItem.innerHTML = items[index].title;
  descriptionItem.innerHTML = items[index].description;
  containerImage.style.backgroundImage = `url(${items[index].image})`;
}

const onClickBack = () => {

  let newIndex = index - 1;
  if ((newIndex) === -1) {
    return;
  }

  index = newIndex;
  handleNext();
}

const onClickNext = () => {

  let newIndex = index + 1;
  if (newIndex > (items.length - 1)) {
    return;
  }

  index = newIndex;
  handleNext();
}

handleNext();

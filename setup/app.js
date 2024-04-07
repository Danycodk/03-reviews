const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let count = 0;
let theDataSet = 1; // put the id in the moment
const sectionElement = document.querySelector("section");

const articleElement = document.createElement("article");
articleElement.className = "review";
articleElement.dataset.dataId = `${reviews[count]["id"]}`;
const imgContainer = document.createElement("div");
imgContainer.className = "img-container";
const imgElement = document.createElement("img");
// imgElement.innerText =
imgElement.id = "person-img";
imgElement.setAttribute("src", `${reviews[count]["img"]}`);

const titleElement = document.createElement("h4");
titleElement.id = "author";
const jobElement = document.createElement("p");
jobElement.id = "job";
const infosElement = document.createElement("p");
infosElement.id = "info";

const buttonsContainer = document.createElement("div");
buttonsContainer.className = "button-container";
const prevBtn = document.createElement("button");
prevBtn.className = "prev-btn";
const prevIcon = document.createElement("i");
prevIcon.className = "fas fa-chevron-left";
const nextBtn = document.createElement("button");
nextBtn.className = "next-btn";
const nextIcon = document.createElement("i");
nextIcon.className = "fas fa-chevron-right";

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "suspress me";
deleteBtn.className = "random-btn";

sectionElement.append(articleElement);
articleElement.append(
  imgContainer,
  titleElement,
  jobElement,
  infosElement,
  buttonsContainer,
  deleteBtn
);
imgContainer.append(imgElement);
buttonsContainer.append(prevBtn, nextBtn);
prevBtn.append(prevIcon);
nextBtn.append(nextIcon);

nextBtn.addEventListener("click", () => {
  count++;
  if (count == reviews.length) {
    count = 0;
  }
  if (count > reviews.length) {
    count = 0;
  }
  if (count < 0) {
    count = 0;
  }
  imgElement.setAttribute("src", `${reviews[count]["img"]}`);
  articleElement.setAttribute("src", `${reviews[count]["id"]}`);
  theDataSet = reviews[count]["id"];
});

prevBtn.addEventListener("click", () => {
  if (count == 0) {
    count = reviews.length;
  }
  count--;
  if (count > reviews.length) {
    count = 0;
  }
  if (count < 0) {
    count = 0;
  }
  imgElement.setAttribute("src", `${reviews[count]["img"]}`);
  articleElement.setAttribute("src", `${reviews[count]["id"]}`);
  theDataSet = reviews[count]["id"];
  // console.log(count);
});
deleteBtn.addEventListener("click", (e) => {
  // console.log(e);
  // console.log(theDataSet);
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i]["id"] == theDataSet) {
      // articleElement.remove();
      // let deletedArray = reviews[i];
      reviews.splice(i, 1);
      reload();
    }
  }
});

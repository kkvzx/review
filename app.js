const btns = document.querySelectorAll(".btn");
const suprise = document.querySelector(".suprise");

const photoEl = document.querySelector(".photo");
const nameEl = document.querySelector(".name");
const positionEl = document.querySelector(".position");
const reviewEl = document.querySelector(".review");

//actual position
let number = 0;

const person = {
  name: [
    "Susan Smith",
    "Agnieszka Gapys",
    "Damian Kolegowicz",
    "Wioletta Trzcińska",
    "Michał Pieczony",
  ],
  position: [
    "Web Developer",
    "Spokeswoman at Polish Space Agency",
    "Engineer of metalworking processes",
    "Materials Engineer",
    "Owner of CEL&P23",
  ],
  review: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error fuga, praesentium, quasi at beatae commodi possimus accusantium consequatur ratione ipsum odit officiis ex quo, non    repellat omnis tempora",
    "Jestem ekspertem ds. komunikacji z wieloletnim doświadczeniem. Obecnie totalnie pochłaniają mnie tematy dotyczące Polskiej Agencji Kosmicznej, sektora kosmicznego i ogólnie kosmosu ",
    "Doppler lidar systems can be designed primarily to measure winds from aerosol-scattered radiation, or from molecule-scattered radiation, or from both. The type of system places specific requirements on the primary components that comprise a Doppler lidar system.",
    "The solution was Smart Text. Similar to a html email, we could send a text message with a unique link to each customer. Once the customer received the text we could measure who these were and how many. Then we wanted them to click on their own personalised unique link. This link displayed an animated personalised message explaining the dealers super offers and encouraged customers to say",
    "Byłem pierwszy raz i według tegorocznych standardów, było to najbliższe sanitarnemu ideałowi wydarzenie. Przez co momentami zdawało się być trochę dziwnie, jakby zimno. Brakowało mi uśmiechów ludzi i widoku emocji, które targały nimi pod maskami. Jednak muzycznie – sztos.",
  ],
  photo: [
    "./images/Susan.jpg",
    "./images/agnieszka.jpg",
    "./images/damian.jpg",
    "./images/Wioletta.jpg",
    "./images/Michal.jpg",
  ],
};

// wybór guzika
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const way = e.currentTarget.classList;

    // Dodatkowe zmienne
    const lengthOfArray = person.name.length;
    //Praca programu
    if (way.contains("left")) {
      render(swipeL(number, lengthOfArray));
    } else if (way.contains("right")) {
      render(swipeR(number, lengthOfArray));
    } else {
      render(AnyPosition(lengthOfArray));
    }
  });
});

//======
//functions
//=========

function render(i) {
  //screen render
  nameEl.innerHTML = person.name[i];
  positionEl.innerHTML = person.position[i];
  reviewEl.innerHTML = person.review[i];
  photoEl.src = person.photo[i];
}

//buttons
function swipeL(i, lengthA) {
  if (i > 0) {
    i--;
  } else {
    i = lengthA - 1;
  }
  number = i;
  return i;
}
function swipeR(i, lengthA) {
  if (i === lengthA - 1) {
    i = 0;
  } else {
    i++;
  }
  number = i;
  return i;
}

function AnyPosition(lengthA) {
  number = Math.floor(Math.random() * lengthA);
  return number;
}

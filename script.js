function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/mjvqdlkb", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    window.location.href = "./send_mail.html";
  }).catch((error) => {
    console.log(error);
  });
}


function showMobile() {
  document.getElementById('mobileMenu').classList.add('show-overlay-menu')
  document.getElementById('mobileMenu').style.display ='flex';
}

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('show-overlay-menu')
  document.getElementById('mobileMenu').style.display ='none';
}

function amountCheck(i) {
  let amount = document.getElementById('amount').value;
  if ((amount <= 0) || (amount >= 16)) {
    alert('Bitte eine Portionsgröße zwischen 1 und 15 angeben!');
    amount = 2;
    selectRecipe(i,amount);
    document.getElementById('amount').value = '2'; /*Inputfeld benötigt value statt innerHTML zur Ausgabe*/
  } else {
    selectRecipe(i,amount);
  }
}

function selectRecipe(i,amount) {
  if (i == 1) {
    calcFlammkuchen(amount);
  }
  if (i == 2) {
    calcVanillebrezeln(amount);
  }
  if (i == 3) {
    calcQuark(amount);
  }
  if (i == 4) {
    calcCroissants(amount);
  }
}

function calcFlammkuchen(amount) {
  let crowd = [200, 120, 50, 1, 60, 3];
  document.getElementById('ingrediants').innerHTML = '';
  document.getElementById('ingrediants').innerHTML += `

    <div class=zutat1>${amount * crowd[0]}g geriebener Gouda</div>
    <div class=zutat2>${amount * crowd[1]}g Speisequark</div>
    <div class=zutat1>${amount * crowd[2]}g Créme fraiche</div>
    <div class=zutat2>${amount * crowd[3]} TL Kokosmehl</div>
    <div class=zutat1>${amount * crowd[4]}g Speck</div>
    <div class=zutat2>${amount * crowd[5]} Eier</div>
`;
}

function calcVanillebrezeln(amount) {
  let crowd = [1, 140, 100, 1, 250, 150, 1];
  document.getElementById('ingrediants').innerHTML = '';
  document.getElementById('ingrediants').innerHTML += `

    <div class=zutat1>${amount * crowd[0]} Vanilleschote(n)</div>
    <div class=zutat2>${amount * crowd[1]}g Butter</div>
    <div class=zutat1>${amount * crowd[2]}g Zucker</div>
    <div class=zutat2>${amount * crowd[3]} Eier</div>
    <div class=zutat1>${amount * crowd[4]}g Mehl</div>
    <div class=zutat2>${amount * crowd[5]}g Puderzucker</div>
    <div class=zutat1>${amount * crowd[6]}EL Zitronensaft</div>
`;
}

function calcQuark(amount) {
  let crowd = [1, 500, 100, 100, 1, 1, 1];
  document.getElementById('ingrediants').innerHTML = '';
  document.getElementById('ingrediants').innerHTML += `

    <div class=zutat1>${amount * crowd[0]}Pkt. Blätterteig (TK)</div>
    <div class=zutat2>${amount * crowd[1]}g Quark</div>
    <div class=zutat1>${amount * crowd[2]}g Zucker</div>
    <div class=zutat2>${amount * crowd[3]}g Margarine</div>
    <div class=zutat1>${amount * crowd[4]} Eier</div>
    <div class=zutat2>${amount * crowd[5]}Pck. Vanillezucker</div>
    <div class=zutat1>${amount * crowd[6]}Pck. Vanillepuddingpulver</div>
`;
}

function calcCroissants(amount) {
  let crowd = [100, 10, 6, 5, 50, 65];
  document.getElementById('ingrediants').innerHTML = '';
  document.getElementById('ingrediants').innerHTML += `

    <div class="zutat1">${amount * crowd[0]}g Mehl</div>
    <div class="zutat2">${amount * crowd[1]}g Zucker</div>
    <div class="zutat1">${amount * crowd[2]}g Hefe</div>
    <div class="zutat2">${amount * crowd[3]}g Salz</div>
    <div class="zutat1">${amount * crowd[4]}g Butter</div>
    <div class="zutat2">${amount * crowd[5]}ml Wasser</div>
`;
}






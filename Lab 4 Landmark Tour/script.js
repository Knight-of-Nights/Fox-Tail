const button1 = document.getElementById("Colossus");
button1.onclick=function changeimage() {
  document.getElementById("landmark").src = "Colossus_of_Rhodes.jpg";
  header.textContent = "The Colossus of Rhodes was a massive bronze statue of the sun god Helios. It was made between 292 and 280 BC to celebrate their victory over an invading amry. However in 226 BC, just 66 years after completion, an earthquake destroyed the statue. ";
  document.getElementById("map").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.2629002881117!2d28.225259477771953!3d36.45120238729161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1495619a72df1397%3A0xe0e598a70e6bd9c6!2sColossus%20of%20Rhodes!5e0!3m2!1sen!2sus!4v1759171860196!5m2!1sen!2sus";
}

const button2 = document.getElementById("Colosseum");
button2.onclick=function changeimage() {
  document.getElementById("landmark").src = "The_Colosseum.jpg";
  header.textContent = "The Colosseum was the largest amphitheater in the world, and it was created by the Romans. It could an estimated 50,000 to 80,000 spectators and an average of 65,000. It has been damaged my earthquakes and stone robbers taking spolia";
  document.getElementById("map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1228885024384!2d12.489655977861!3d41.890214164653095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sus!4v1759171952811!5m2!1sen!2sus";
}

const button3 = document.getElementById("GrandStupa");
button3.onclick=function changeimage() {
  document.getElementById("landmark").src = "The_Grand_Stupa_of_Sanchi.jpg";
  header.textContent = "The Grand Stupa of Sanchi is a Buddhist temple located in India. Emperor Ashoka watched over the contruction of the temple. The Stupa was damaged at one point in the 2nd century BCE, but was repaired. "; 
  document.getElementById("map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.4755355047973!2d77.73720978212982!3d23.479375325363122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c0f0187f0b81b%3A0xf7cb87fbbf090027!2sSanchi%20Stupa%20No.%201!5e0!3m2!1sen!2sus!4v1759172029468!5m2!1sen!2sus";
}

const sizeSelector = document.getElementById("size");
sizeSelector.onchange = function changeSize() {
    const selectedSize = sizeSelector.value;
    document.getElementById("landmark").height = selectedSize;
   document.getElementById("map").height = selectedSize;
}



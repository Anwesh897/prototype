document.addEventListener("click", () => {
  const songName = document.querySelector(".main").getElementsByTagName("H2")[0]
    .childNodes[0].nodeValue;
  const songNameLowerCase = songName.toLowerCase();
  const songNameSplit = songNameLowerCase.split(" ");
  const songNameString = songNameSplit.join("");
  console.log(songNameString);

  const name = document
    .querySelector(".wrapper")
    .getElementsByTagName("DIV")[0]
    .getElementsByTagName("H3")[0].childNodes[0].nodeValue;

  const split = name.split(" ");
  const string = split.join("");
  console.log(string);

  ///Setting the audio respectively
  document.getElementById(
    "audio"
  ).src = `music/${songNameString}/${string}.mp3`;
});



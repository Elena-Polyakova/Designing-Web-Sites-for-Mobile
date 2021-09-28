
export function needClickImage(){
  let img = document.getElementById("img");
img?.addEventListener("click", showID);

let iD = document.getElementById("iD");

}
function showID(){
  console.log("image clicked", iD);
}

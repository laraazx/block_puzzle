// adiciona um filho ao elemento buscado pelo id
/* document.getElementById("arthur").appendChild(document.createElement("div")); */

for (let i = 1; i <= 5; i++) {
  const bloco = document.createElement("div");
  bloco.className = "bloco";
  bloco.classList.add("off");
  bloco.id = i;
  bloco.setAttribute("onclick", "toggle(this.id)");
  document.getElementById("arthur").appendChild(bloco);
}

function change(id){
  document.getElementById(id).classList.toggle("off");
  document.getElementById(id).classList.toggle("on");
}

function verify(){
  const blocos = document.getElementsByClassName("on")

  if(blocos.length >= 5){
      setTimeout(() => {
      window.alert("você ganhou")
      window.location.reload
    },10)
  }
}


function toggle(id){
  switch(id){
    case "1":
      change("1")
      change("3")
      break;

    case "2":
      change("2")
      change("1")
      change("4")
      break;

    case "3":
      change("3")
      change("5")
      break;

    case "4":
      change("4")
      change("2")
      break;

    case "5":
      change("5")
      change("1")
      change("2")
      break;

    default:
      break;
  }
  verify( )
}
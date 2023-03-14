export let counterValue = 0;
export const counter = document.querySelector("#value");
export const numberminus = document.querySelector("[data-action='decrement']");
export const numberplys = document.querySelector("[data-action='increment']");
export const plysnumber = () =>{
  counterValue += 1;
	counter.textContent = counterValue;
};
export const minusnumber = () => {
  counterValue -= 1;
	counter.textContent = counterValue;
}


export const textinput = document.querySelector("#name-input");
export const textspan = document.querySelector("#name-output");
export const Idonotnowww = (event)=>{
  textspan.textContent = event.currentTarget.value;
  if(textinput.currentTarget.value === ""){
    textspan.textContent = "Anonymous";
  }
};


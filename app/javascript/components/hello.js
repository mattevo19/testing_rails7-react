import r from "components/htm_create";

function Hello(props) {
  
  function greetUser() {
    return console.log("Clicked!");
  }

 return r`<button onClick=${() => greetUser()} class="bg-yellow-300 p-4 rounded-xl">ciao ${props.name}</button>`;
}

export default Hello;

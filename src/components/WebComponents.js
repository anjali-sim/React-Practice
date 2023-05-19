class HelloWorldComponent extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.innerHTML = `<h1>Hello world!</h1>`
    }
  }
  
  customElements.define("hello-world", HelloWorldComponent)



// in other file
import ./hello-world
export default function Example {
    return (
        <div>
            <hello-world></hello-world>
        </div>
    );
}
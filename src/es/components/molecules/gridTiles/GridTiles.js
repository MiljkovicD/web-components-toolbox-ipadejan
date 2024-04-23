import { Shadow } from '../../web-components-toolbox/src/es/components/prototypes/Shadow.js'

export default class GridTiles extends Shadow() {
  connectedCallback () {
    if (this.shouldRenderCSS()) this.renderCSS()
  }

  shouldRenderCSS () {
    return !this.root.querySelector(`:host > style[_css], ${this.tagName} > style[_css]`)
  }

  renderCSS () {
    this.css = /* css */`

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 2rem;
    }
    
    .grid > div {
      background: #EDEDED;
      padding: 2.5rem;
      border-radius: 1rem;
    }
    
    .card {
      position: relative;
      text-align: center; /* Align text content to the center */
    }
    
    .card-img-top {
      display: block; /* Ensure the image is centered within the card */
      margin: 0 auto; /* Center the image horizontally */
    }
  
    :host a {
      text-decoration: none;
      color: blue;
    }

    :host a:hover {
      color: green;
    }
    
    .link {
      position: absolute;
      bottom: 20px; /* Adjust the distance from the bottom as needed */
      transform: translateX(-50%);
    }
      `
  }
}

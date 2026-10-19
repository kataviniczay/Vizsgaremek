class InfoKartyak extends HTMLElement{
    #div = null

    #initialized = false

    constructor() {
        super()
    }

    connectedCallback() {
        if (!this.#initialized) {
            
            this.#initializeDOM()
            this.#initialized = true
        }
        
        this.#update()
    }

    attributeChangedCallback(name, oldValue, newValue) {

        if (oldValue === newValue) return

        if (this.#initialized) {
            this.#update()
        }
    }

    #initializeDOM() {
        const root = this.attachShadow({ mode: "open" })
        root.innerHTML = `
            <style>
                div{
                    background-color: rgb(139,130,110);
                    width: 300px;
                }
            </style>
            <div>
                <h1>Nev</h1>
                <img alt="Kep" src="">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum risus sed tristique luctus. Morbi ultrices sit amet elit nec gravida.</p>
            </div>
        `
        this.#div = root.querySelector('div')
    }

    #update() {
        
    }
}

customElements.define("info-kartyak", InfoKartyak);
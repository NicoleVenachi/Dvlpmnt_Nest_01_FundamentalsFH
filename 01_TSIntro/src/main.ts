import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import { age, name, templateString } from './01-bases/01-types.ts'
import { bulbasur, pokemonsIdx } from './01-bases/02-objects.ts'
import { charmander } from './01-bases/05-decorators.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <p> Hello ${name} ${age} ${templateString}</p>
    <p> ${pokemonsIdx.join(',')} </p>
    <p> ${Object.values(bulbasur)}<p/>
    <p> ${Object.values(charmander)}<p/>
    <p> <p/>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

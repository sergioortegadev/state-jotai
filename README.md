# State Managements (series) - Jōtai

![screenshot](./readme.png)

## Deploy

[Online demo - (soon)](#)

---

## Applied technologies (Stack)

### This app was created with this tecnologies: [`React.js`](https://react.dev/) with [`TypeScript`](https://www.typescriptlang.org/). Styles from [`Tailwind CSS`](https://tailwindcss.com/) and Icons from [`React Icons`](https://react-icons.github.io/react-icons/). <br/>

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1.5rem">
<img title="TypeScript" style="width: 180px" src="./readme-images/typescript-logo.svg" alt="typescript logo"/>
<img title="Tailwind CSS" style="width: 180px" src="./readme-images/tailwindcss-logo.svg" alt="tailwind logo"/>
<img title="React.js" style="width: 180px" src="./readme-images/react-logo.svg" alt="react logo"/>
</div>

### This app corresponds to a series of intensive tests for the use of state managers. This is a case study, I used the following library for global state management:

<div style="text-align:center">

## [Jōtai](https://jotai.org/)

</div>

![zustand web screenshot](./readme-z.png)

## Getting Started

Elementary use:

### First create atoms

```javascript
import { atom } from "jotai";

const countAtom = atom(0);
```

### Use atoms

#### Then use atoms within React components to read or write state.

Like a React useState: const [state, setState] = useState()

```javascript
import { useAtom } from 'jotai'
import { animeAtom } from './store/atomsStore'

const AnimeApp = () => {
  const [anime, setAnime] = useAtom(animeAtom)

return (
    <>
      <ul>
        {anime.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => {
        setAnime((anime) => [
          ...anime,
          {
            title: 'Cowboy Bebop',
            year: 1998,
            watched: false
          }
        ])
      }}>
        Add Cowboy Bebop
      </button>
    <>
  )
}
```

## Learn More

To learn more about the developer:

- [Sergio Ortega dev](https://sergioortega.com.ar)
- [Sergio Ortega's portfolio](https://sergioortega.com.ar/#/portfolio) - an interactive portfolio.

---

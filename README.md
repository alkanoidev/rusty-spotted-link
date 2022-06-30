# rusty-spotted-link

> Link Shortener for reducing long links.  
> It is named after [rusty spotted cat](https://en.wikipedia.org/wiki/Rusty-spotted_cat).

## ✨ Demos

### Creating and redirecting to a short link

<img width="70%" src="https://github.com/alkanoidev/rusty-spotted-link/blob/main/demos/demo1.gif?raw=true">

### Server-side form validation

<img width="70%" src="https://github.com/alkanoidev/rusty-spotted-link/blob/main/demos/demo2.gif?raw=true">

### 404 page when the link you are trying to access doesn't exist

<img width="70%" src="https://github.com/alkanoidev/rusty-spotted-link/blob/main/demos/demo3.gif?raw=true">

## 🛠 Tech Stack:

- NextJS
- TypeScript
- Prisma
- MongoDB
- TailwindCSS
- Axios

## 🚀 Features

- Creating a new link
- Server-side form validation

  - Validating the URL
  - Checking if the short link already exists
  - Checking if all inputs are entered
  - Showing a Toast with the corresponding message

- Catching (api/get-url/[slug] endpoint) for faster redirects
- 404 page when the short link doesn't exist
- Database queries using Prisma

## ⚙ Running Locally

```sh
npm install && npm run dev
```

## Author 👋

**Filip Ivanovic**

- Portfolio: [https://filipivanovic.netlify.app/](https://filipivanovic.netlify.app/)
- Github: [@alkanoidev](https://github.com/alkanoidev)

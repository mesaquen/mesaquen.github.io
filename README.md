# mesaquen.github.io

This is my bio site source code. The idea was to create a PoC of an SSR application using [Next.js] v16 and [Tailwind] v4.

The application was built with i18n in mind, currently serving two languages. English and Portuguese.

## Live demo

Currently you can access the live demo at https://mesaquen.vercel.app.

## Challenges found

### Next.js v15

During the development I found some limitations that are relevant. For instance, when using `output: "export"` in Next.js configuration, you loose access to a lot of Next.js features such as middlewares.

Also, you have to know ahead of time all of your paths/params values. Creating a 404 page with internacionalizated text using App Router is quite dificult because of that.

> I didn't implement it on this project so far because I'm still researching about it. Related issues are:
>
> - https://github.com/vercel/next.js/discussions/12477
> - https://github.com/vercel/next.js/discussions/50518

### Next.js v16

When upgrading to v16, new typescript typings were needed because of how Layout pages work. Nothing too fancy, just silly things. For instance, having to type a constant as an array of string, because inference wouldn't get it by default. Also, having to type the Object used for the internacionalization.

You can find them im commit `834520b1141ed8b0eeaf784170555e3b2887b367`

## Requirements

- [NodeJS] v20 (lts/iron)

## How to run

1. Clone the repo

```bash
git clone https://github.com/mesaquen/mesaquen.github.io.git
```

2. Install dependencies

```bash
# on /mesaquen.github.io directory
npm i
```

3. Start the server

```bash
npm run dev
```

The application is made available at **http://localhost:3000**.

[NodeJS]: https://nodejs.dev/
[Next.js]: https://nextjs.org/
[Tailwind]: https://tailwindcss.com/

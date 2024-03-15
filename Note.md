# NextJS

a framework for building **fast** & **search-engine friendly** applications.

We can do **full-stack** development.

## Server-Side Rendering (SSR)

A technique that allows us to render our component on the server and send their content to the client. This technique makes our application fast and search-engine friendly.

## Static Rendering (Static Site Generation)

we can pre-render certain pages and components that have static data when we build our application. We just render them once and serve them whenever they are needed.

## Dynamic Rendering

render components at request time.

## Routing and Navigation

routing in Next.js is baset on the file system. every folder in our app folder must have a file name **page.tsx**

with **Link** component from 'next/link' you can navigate between pages as a SPA.

## Client vs Server Components

### Rendering Environments

1. Web Browser => client-side Rendering (CSR) => similar to how react applications work
2. Node.js Runtime => Server-side Rendering (SSR)

### Differences between SSR and CSR

#### Benefits of SSR

1. Smaller bundles
2. Resource efficient
3. SEO friendly
4. More secure

#### Disadvantage of SSR

1. can not listen to browser events like: click, change, submit , ...
2. can not access browser API like: localStorage
3. can not maintain state
4. can not use effects

So we use mixture of SSR and CSR components.

by Default all component inside the app folder are server components by default.

with **'use client'** directive at the top of the component we can make it client side component. and also all its dependent component.

## Data Fetching

1. client-side
2. server-side

## Chching

storing data somewhere that is faster to access. Next.js automatically store the result in its data cache which is based on the file system

1. Memory
2. file system
3. Network

```js
const res = await fetch('https://jsonplaceholder.typicode.com/users', {
	cache: 'no-store', // if Data changes frequently
	next: {
		revalidate: 10, // get fresh data every 10 seconds
	},
});
```

## Rendering

1. Client-side
2. Server-side
    - Static (at build time)
    - Dynamic (at request time)

# Routing and Navigation

## What you'll learn

1. Define Dynamic routes
2. Access route and query stirng parameters
3. Create layouts
4. Show loading UIs
5. Handle errors

## Special Files

1. page.tsx => for pages
2. layout.tsx => defining a common layout for our pages
3. loading.tsx => for showing loading UIs
4. route.tex => for creating APIs
5. not-found.tsx => for showing custom errors
6. error.tsx => showing general custom error pages
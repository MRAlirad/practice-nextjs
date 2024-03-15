# NextJS

a framework for building **fast** & **search-engine friendly** applications.

We can do **full-stack** development.

## Server-Side Rendering (SSR)

A technique that allows us to render our component on the server and send their content to the client. This technique makes our application fast and search-engine friendly.

## Static Site Generation

we can pre-render certain pages and components that have static data when we build our application. We just render them once and serve them whenever they are needed.

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
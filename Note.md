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

## Dynamic Routes

A Dynamic Route is a route with a parameter.

we crate a folter and wrap the parameter into a [] and create a page file in it => [id]

## Catch-all Segments

sometimes we need varying number of parameters in a route so we wrap the parameters in a [] with three-dot at the first => [...slug]

with this approach we should at least give the page a parameters. If we want to make the parameters optional, we wrap them on two [[]] => [[...slug]]

## Layouts

we use layouts to create UI that is shared between multiple pages.

a Layout component should have children of type react node.

## Link

1. Only download the content of the target page
2. Pre-fetches links that are in the viewport
3. Caches pages on the client

# Building API

## you'll learn

1. Getting Objects
2. Creating Objects
3. Updating Objects
4. Deleting Objects
5. Validating requests with Zod

the special file for API is **route.tsx**

### Route Handler

a function that handles a http request

### HTML Requests Methods

1. GET => getting data
2. POST => creating data
3. PUT => updating data
4. DELETE => deleting data

# Database Integration (with Prisma)

## you'll learn

1. Setting up Prisma
2. Defining data models
3. Creating migrations
4. Performing CRUD operations (create, read, update, delete)

## Prisma

Node.js and TypeScript ORM (object relational mapper)

We use ORM to work with our databases. so an ORM is like a tool that sits between our application and a database.

We use this ORM to send queries to our database and get data back or use it to create, update or delete data.

## Definig Models

models are entities of out application domain.

## Migrations

Migrations are used to keep out database schema in sync with our prisma schema. (npx prisma migrage dev)

# Authentication

## you'll learn

1. Setting up NextAuth => a powerfull authentication library
2. Configure the Google Provider => people can sign in with their google account
3. Authentication Sessions
4. Protecting our routes => so they can only be accessed by authenticated users
5. Database adapters => to store user data in database
5. Configuring the Credentials Provider => allow users to sign in with their email and password

## Authenticaiton Session

when a user logs in, NextAuth creates an authenticaiton session for that user. By default, that session is represented as a JSON web token.

## Protecting Routes

### middleware

with middleware we can run code before a request is completed. we can create a middleware function that excuted on every request. in that function we can check the user's session, adn if the user is not authenticated, we can redirect them to the login page.

# Optimization

## you'll learn

1. Optimizing images
2. Using third-party JS libraries
3. Using custom fonts
4. Search engine optimization
5. Lazy loading

## Using third-party JS libraries

### Script Strategy attrubute
1. afterIntractive => the script is loaded **after** our page becomes interactive. after next js injects any client side code to our pages. (default value) => tag managers and analytics
2. beforeIntractive => the script is loaded **before** next js injects any client side code to our pages. This is called **Hydration**. used for scripts that are critical adn should be loaded early on. => bot detectors, cookie consent managers
3. lazyOnload => the script is loaded **after** all the resources on the page have been fetched. background or low priority scripts that don't nedd to be loaded early on => chat plugins or social media widget
4. worker
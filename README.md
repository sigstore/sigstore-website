# sigstore-website

Sign, verify and protect your software

![sigstore logo][logo]

[logo]: /assets/icons/logo.svg 'sigstore logo'

The sigstore website is run on an open source framework called Nuxt JS, a VUE app framework. You can read more about it [here](https://nuxtjs.org/). The reason we chose this had many factors that included greater SEO support, SPA's, and the ability to connect an API of our choice being easy.

sigstore content is created with Netlify CMS, which is an open source content management system that generates markdown content. The integration within the Nuxt app was perfect and the query interface for getting content was very clear and easy to set up.

To log into the CMS you need to be invited via Netlify identity to access the CMS itself. Once you have gone through the necessary steps to creating and verifying your account you can go in and start editing content.

**NOTE**: The docs page ([docs.sigstore.dev](https://docs.sigstore.dev)) is hosted on [sigstore/docs](https://github.com/sigstore/docs). Please go there to review the docs repo or contribute to the Sigstore docs. 

## Build setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Special directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

### `css`

We use Tailwind for our css which uses SASS, and it is highly configurable from the smallest config option(type sizes) through to more larger config(variables for hover states and buttons). It is a styleguide for the front-end and it borrows the same idea that you get within design systems.

["Go read about tailwind"](https://tailwindcss.com/)

## Security

Should you discover any security issues, please refer to sigstore's [security
process](https://github.com/sigstore/.github/blob/main/SECURITY.md)

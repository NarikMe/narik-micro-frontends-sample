# Narik Micro-Frontends Sample

Sample application created with [narik-micro-frontends](https://github.com/NarikMe/narik-micro-frontends) based on Webpack Module Federation.  

## Running the demo

- Install packages: `yarn install` 
- Install packages for two Vue.js applications: `yarn install` in 'apps/payment-type1' and 'apps/payment-type2'
- Build the shared library `yarn build:shared`
- Build apps `yarn build:apps`
- Start the shell: `ng s`
- Open the shell http://localhost:4200

## Serve a app

To server a app use `ng s`, for example `ng s products`. Then active development in [apps.json](https://github.com/NarikMe/narik-micro-frontends-sample)

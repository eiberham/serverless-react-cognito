# Notes

## Serverless React Application Built With Aws Amplify Framework.

This is an application example provided by the fullstack serverless book you can find [here](https://www.bookdepository.com/es/Full-Stack-Serverless/9781492059899)

Once the SPA application is setup we proceed to add amplify to our dependencies:

```shell
yarn add aws-amplify
```

Afterwards we need to setup our amplify project:

```shell
amplify init
```

Then we add the GraphQL API:

```shell
amplify add api
```

When made all the desired changes to the GraphQL schema recently created, we need to push our changes.

```shell
amplify push
```

That's it.
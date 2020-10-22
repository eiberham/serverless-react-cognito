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

Then we add the authentication service:

```shell
amplify add auth
```

Finally we need to push our changes.

```shell
amplify push
```

That's it.

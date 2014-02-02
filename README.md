# Marvel Comics application

Marvel has just released a REST [developers API](http://developer.marvel.com). This is an attempt at providing a front-end application around it.

## Prerequisites

Before forking the project:

1. Register at [Marvel](http://developer.marvel.com)
1. Request an API key
1. Create an `api.js` in `src/main/webapp with the following content:

    ```
    var api = {
        "key": "<your_public_key>"
    }
    ```

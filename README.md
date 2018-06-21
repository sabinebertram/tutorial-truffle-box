# Tutorial Truffle Box

This Truffle Box has all you need to create a DApp by following the tutorial. It has been derived from the [pet-shop-box](https://github.com/truffle-box/pet-shop-box). It includes the contracts from [CryptoZombies](https://cryptozombies.io/en/course/).

## Installation

1. Install Truffle globally.
    ```
    $ npm install -g truffle
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```
    $ truffle unbox sabinebertram/tutorial-truffle-box
    ```

3. Open Ganache or start your development environment.
    ```
    $ truffle develop --log
    ```

4. Compile and migrate the smart contracts. 
    ```
    $ truffle migrate
    ```
    If you are using Ganache, run
    ```
    $ truffle migrate --network ganache
    ```

5. Install npm dependencies.
    ```
    $ npm install
    ```

6. Run the `liteserver` development server for front-end hot reloading. Smart contract changes must be manually recompiled and migrated.
    ```
    # optional:
    $ truffle migrate --compile-all --reset

    $ npm run dev
    ```
    Serves the front-end on http://localhost:3000.

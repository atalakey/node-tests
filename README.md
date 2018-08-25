# node-tests

A NodeJS app.

The app uses the Mocha test framework, the Expect assertion library, the SuperTest HTTP assertion library and the Rewire package to demonstrate how to test a NodeJS app.

## App description (three apps)

### utils (uses Mocha and Expect)
Test both synchronous and asynchronous functions.

### server (uses Mocha, SuperTest and Expect)
Test an HTTP request.

### app (uses Mocha, Expect and Rewire)
Test nested functions using spies.

## Installation

Be sure to have NodeJS installed.

### Prerequisites:
```
You must have npm and nodejs installed.
```

### To install the prerequisites (macOS only)
```
1. Install Homebrew:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install nodejs:

    brew install node
```

### To use the application:
``` 
1. Clone the project:

    git clone https://github.com/atalakey/node-tests.git ~/Desktop/node-tests

2. Navigate to where you cloned the project:

    cd ~/Desktop/node-tests

3. Install App local packages:

    npm install
```

## Run the App

```
npm test
```

# Disclaimer:
This app is for demo purposes only.

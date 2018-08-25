const expect = require('expect');
const rewire = require('rewire');

/*
  rewire load the file throw require and adds methods on to it:

  1. __set__(name: String, value: *): Function:

    Sets the internal variable name to the given value.
    Returns a function which can be called to revert the change.

  2. __set__(obj: Object): Function:

    Takes all enumerable keys of obj as variable names and sets the values
    respectively. Returns a function which can be called to revert the change.

  3. __get__(name: String): *

    Returns the private variable with the given name.

  4. __with__(obj: Object): Function<callback: Function>

    Returns a function which - when being called - sets obj, executes the given
    callback and reverts obj. If callback returns a promise, obj is only reverted
    after the promise has been resolved or rejected. For your convenience the
    returned function passes the received promise through.
*/
const app = rewire('./app');

describe('App', () => {
  /*
    A spy functions can track the calls that are made to other functions
    within the function being tested and make various assertions based on
    the arguments and context that were used.

    setting the db variable in app.js to a spy so that when app.js
    calls the db.saveUser() method the spy is called instead.
  */
  var db = { saveUser: expect.createSpy() };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('John', 25);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('John', 25);
  });

  describe('#saveUser', () => {
    it('should call saveUser with user object', () => {
      var email = 'example@example.com';
      var password = '123abc';

      app.handleSignup(email, password);
      expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
  });
});

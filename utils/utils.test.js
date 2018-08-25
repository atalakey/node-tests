const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
    
      expect(res).toBe(44).toBeA('number');
    });
  });

  describe('#asyncAdd', () => {
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      var res = utils.square(3);
    
      expect(res).toBe(9).toBeA('number');
    });
  });

  describe('#asyncSquare', () => {
    it('should async square a number', (done) => {
      utils.asyncSquare(5, (res) => {
        expect(res).toBe(25).toBeA('number');
        done();
      });
    });
  });

  describe('#setName', () => {
    it('should set firstName and lastName', () => {
      var user = { age: 20, location: 'some location' };
      var res = utils.setName(user, 'John Doe');
    
      // objects in JavaScript are passed by reference
      expect(user).toEqual(res);
      expect(res).toInclude({ firstName: 'John', lastName: 'Doe' }).toBeA('object');
    });
  });
});

describe('other', () => {
  it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({name: 'John'}).toEqual({name: 'John'});
    expect({name: 'John'}).toNotEqual({name: 'john'});
    expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(1);
    expect({ name: 'John', age: 20, location: 'some location' }).toInclude({ age: 20 });
    expect({ name: 'John', age: 20, location: 'some location' }).toExclude({ age: 23 });
  });
});

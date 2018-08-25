const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Hello world!')
    .end(done);
});

it('should return JSON response with an error and name property', (done) => {
  request(app)
    .get('/json')
    .expect(404)
    .expect({
      error: 'Page not found',
      name: 'Todo App v1.0'
    })
    .end(done);
});

// using the expect assertion library
it('should return my user object', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({ name: 'John', age: 20 });
    })
    .end(done);
});

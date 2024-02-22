var expect = require('chai').expect;
var request = require('request');
describe('app testing', () => {
  it('/ status code', (done) => {
    request('http://localhost:8080/', (err, result, body) => {
    expect(result.statusCode).to.equal(200);
    expect(body).to.equal(JSON.stringify({"message":"Welcome to Azure Container Instances!"}));
    done();
  });
 });
});

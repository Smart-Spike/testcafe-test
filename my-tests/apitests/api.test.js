const request = require('supertest');

const host_url = 'https://jsonplaceholder.typicode.com';


describe('API Tests with SuperTest and Jest', () => {

    it('should be able to query an API', (done) => {
        const container = request(host_url + '/posts/1');

        container.get('')
            .expect(200, done);
    });

    it('should be able to submit to an API', (done) => {
        const container = request(host_url + '/posts');

        container.post('')
            .send({title: 'animal', body: 'cat', userId: 1})
            .set('Accept', 'application/json')
            //.end((err, res) => {
            // console.log('response', JSON.stringify(res.body));
            //    })
            .expect(201, done);
    });

});
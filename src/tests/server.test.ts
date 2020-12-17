import app from "../server"

const request = require('supertest')



describe('Web server', () => {
    it('should allow text content types', (done) => {
        const body = `       2
        1 PT
        2 US
        3
        1 1 10
        2 1 5
        3 2 10`

        request(app)
        .post('/analyze/tasks')
        .send(body)
        .set('Content-Type', 'application/json')
        .expect(400)
        .end((err, res)=> {
            if (err){
                return done(err);
            }

            return done()
        })
    })

    it('should return status code 200 if given a body', (done) => {
        const body = `       2
        1 PT
        2 US
        3
        1 1 10
        2 1 5
        3 2 10`

        request(app)
        .post('/analyze/tasks')
        .send(body)
        .set('Content-Type', 'text/plain')
        .expect(200)
        .end((err, res)=> {
            if (err){
                return done(err);
            }

            return done()
        })
    })
    it('should return status code 400 if NOT given a body', (done) => {

        request(app)
        .post('/analyze/tasks')
        .set('Content-Type', 'text/plain')
        .expect(400)
        .end((err, res)=> {
            if (err){
                return done(err);
            }

            return done()
        })
    })
})
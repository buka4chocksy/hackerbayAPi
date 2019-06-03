var expects = require('chai').expect;
var app = require('../server');
var request = require('supertest');
var userDetails = {username:"ochoko" , password:"12345"}
describe('test for validated user login', ()=>{
    it('should return login successful and a token ', (done)=>{
        request(app)
        .post('/user/login')
        .set("Content-Type", "application/json")
        .send(userDetails)
        .end((err, res)=>{
            if(!err){
            expects(200)
            expects(res.body).to.have.property('success', true)
            expects(res.body).to.have.property('token')
            }else{
                done(err)
            }
        })
        done()
    })
})


describe('test  to comfirm successful thumbnail generation', (done)=>{
    var token;
    beforeEach('check for valid access token', (done)=>{
        request(app)
        .post('/user/login')
        .send(userDetails)
        .set("Content-Type", "application/json")
        .end((err, res)=>{
            if (err) done(err);
            expects(200)
            expects(res.body).to.have.property('token');
            token=res.body.token
            done()
        })
    })

    
    it('comfirm that thumbnail works ',function(done){
        request(app)
        .post('/user/thumbnail')
        .set("Content-Type", "application/json")
        .set("token", "bearer "+token)
        .send({source:'imageFolder/index.jpg'})
        .end(function(err, res) {
            if (err) done(err);
            expects(200)
            expects(res.body).to.have.property('file')

            done();
        });
    });
    
})


describe('test  to for successful patching', (done)=>{
    var token;
    beforeEach('check for valid access token', (done)=>{
        request(app)
        .post('/user/login')
        .send(userDetails)
        .set("Content-Type", "application/json")
        .end((err, res)=>{
            if (err) done(err);
            expects(200)
            expects(res.body).to.have.property('token');
            token=res.body.token
            done()
        })
    })

    
   
    var document = {"baz": "qux", "foo": "bar"};
    var patch = [{"op": "replace", "path": "/baz", "value": "soft"}];
    it('should ensure json patch works well',function(done){
        request(app)
        .patch('/user/jsonpatch')
        .set("Content-Type", "application/json")
        .set("token", "bearer "+token)
        .send({mydoc: document, patch: patch})
        .end(function(err, res) {
            if (err) done(err);
            expects(res.body).to.have.property('baz')
            expects(res.body).to.have.property('baz', "soft")
            done();
        });
    });
    
})




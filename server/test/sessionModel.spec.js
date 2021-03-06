const expect = require('chai').expect;
const Session = require('../../db/models/sessions.js');
const dbUtils = require('../../db/lib/utils.js');

describe('Session model tests', function () {
  // Deletes all tables, creates new tables, and seeds tables with test data
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  // Resets database back to original settings
  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  it('Should be able to retrieve test data', function (done) {
    Session.forge().fetchAll()
      .then(function (results) {
        expect(results.length).to.equal(1);
        expect(results.at(0).get('id')).to.equal(1);
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });

  it('Should be able to update an already existing record', function (done) {
    Session.where({ id: 1 }).fetch()
      .then(function (result) {
        expect(result.get('id')).to.equal(1);
      })
      .then(function () {
        return Session.where({ id: 1 }).save({
          profileId1: 1, profileId1: 1, promptId: 1,
          skeletonCode: 'sample skeleton code...' }, { method: 'update' });
      })
      .then(function () {
        return Session.where({ id: 1 }).fetch();
      })
      .then(function (result) {
        // expect(result.get('userId1')).to.equal(1);
        // expect(result.get('userId2')).to.equal(1);
        // expect(result.get('promptId')).to.equal(1);
        expect(result.get('skeletonCode')).to.equal('sample skeleton code...');
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });

});


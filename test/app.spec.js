const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('eip:app', function () {
    it('generates eip-x file for unassigned eip', function () {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({eipNumberAssigned: false, eipAuthor: 'test', eipAuthorGithubUsername: 'test'})
            .then(function () {
                assert.file([
                    'EIPS/eip-x.md',
                ]);
            });
    });

    it('generates file with proper name for assigned eip', function () {
        return helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({eipNumberAssigned: true, eipNumber: 1559, eipAuthor: 'test', eipAuthorGithubUsername: 'test'})
            .then(function () {
                assert.file([
                    'EIPS/eip-1559.md',
                ]);
            });
    });
});


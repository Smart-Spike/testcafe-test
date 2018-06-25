import { Selector } from 'testcafe';

fixture `Check if the button text changes`
    .page `https://www.google.co.uk/`;

test('My test', async t => {
    await t
        .click('#lst-ib')
        .expect(Selector('#lst-ib').name).eql('__$$clientFunction$$');
});

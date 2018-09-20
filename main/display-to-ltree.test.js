const test = require('ava')

const displayToLtree = require('./display-to-ltree')

test('displayToLtree -- Should create the name', function(t) {
  const displayName = 'Assets.Accounts Receivable'

  t.is(
    displayToLtree(displayName),
    'assets.accounts_receivable'
  )

})

test('displayToLtree -- Should create the name with extra space', function(t) {
  const displayName = 'Assets    . Accounts Receivable'

  t.is(
    displayToLtree(displayName),
    'assets.accounts_receivable'
  )

})

test('displayToLtree -- Should handle accounts in good form', function(t) {
  const displayName = 'assets.accounts_receivable'

  t.is(
    displayToLtree(displayName),
    'assets.accounts_receivable'
  )

})

test('displayToLtree -- Should handle dashes', function(t) {
  const displayName = 'Assets.Accounts-Receivable'

  t.is(
    displayToLtree(displayName),
    'assets.accounts_receivable'
  )

})

test('displayToLtree -- Handle partials', function(t) {
  const displayName = 'Assets.Accounts Receivable.*.Foo'

  t.is(
    displayToLtree(displayName),
    'assets.accounts_receivable.*.foo'
  )

})


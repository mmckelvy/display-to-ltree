/*
Assumes this function is called after a sanitize function
Sanitize function should remove any extra whitespace and inappropriate chars

Should only have alphanumerics and underscores

This will apply to account names

Assets.Accounts Receivable --> assets.accounts_receivable
*/
module.exports = function displayToLtree(displayName) {
  return displayName.split('.').map((acct) => {
    // Remove any space around the period
    const trimmed = acct.trim()
    // Swap any remaining spaces for underscores and lowercase
    return trimmed.replace(/[-\s]+/g, '_').toLowerCase()
  })
  // Convert back to a string
  .join('.')
}

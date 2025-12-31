/**
 * JSON Account Updater
 * https://www.codewars.com/kata/588d5898277e86e2ce000070/train/javascript
 *
 */

const updateAccounts = ({ Accounts }, { Logons }) => {
  const accountsCopy = [...Accounts]
  const sortedLogons = [...Logons].sort((a, b) => a.Date - b.Date)

  for (let { Id, Name, Date } of sortedLogons) {
    const account = accountsCopy.find(a => a.Id === Id)

    if (account) {
      account.LogonCount += 1

      if (Date > account.LastLogon) {
        account.LastLogon = Date
        if (Name) account.Name = Name
      }
    } else {
      accountsCopy.push({
        Id,
        Name,
        LogonCount: 1,
        LastLogon: Date,
      })
    }
  }

  const sortedAccounts = accountsCopy.sort((a, b) => a.Id - b.Id)
  return { Accounts: sortedAccounts }
}

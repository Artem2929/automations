const EC = protractor.ExpectedConditions

async function waitForElementVisible(elem, timeout = 10000, message) {
  await browser.wait(EC.visibilityOf(elem), timeout, message)
}

module.exports = {
  waitForElementVisible
}
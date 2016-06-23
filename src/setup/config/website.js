/* Preliminary configuration file for sitewide variables */

//Electron configuration options
var electronShow = false;
var electronPartition = 'nopersist';
var electronOptions = {
  show: electronShow,
  width: 1400,
  height: 800,
  gotoTimeout: 8000,
  webPreferences:{
    partition: electronPartition,
  }
}
var electronMobileOptions = {
  show: electronShow,
  width: 400,
  height: 800,
  gotoTimeout: 8000,
  webPreferences:{
    partition: electronPartition,
  }
}

//Staging
var stageHomeUrl = 'http://staging.reeds.com/';
var stageAdminUrl = 'http://staging.reeds.com/admin/admin/';
var styleGuide = 'http://staging.reeds.com/styleguide';

//ROOT URL
var homeUrl = 'http://rds.qa-1.blueacorn.net/';

//General URLs
var adminUrl = homeUrl+'admin/admin/';
var adminCache = adminUrl+'cache/'
var checkoutUrl = homeUrl+'checkout/';
var cartUrl = homeUrl+'checkout/cart/';
var loginUrl = homeUrl+'customer/account/login/';
var registerUrl = homeUrl+'customer/account/create/';
var categoryUrl = homeUrl+'test-category.html/';
var productUrl = homeUrl+'batest.html/';
var searchUrl = homeUrl+'catalogsearch/result/?q=';

//User Information
var adminLogin = { 
  user: 'marco@blueacorn.com', 
  pass: 'pass4marco'
}
var siteLogin = {
  user: 'marco@blueacorn.com', 
  pass: 'pass4marco'
}
var siteRegister = {
  first: 'Test',
  last: 'User',
  email: 'test@blueacorn.com',
  pass: 'pass4test'
}

//For logging in admin on page load:
var adminCookie = {
  name: 'admin',
  value: 'ADMIN_COOKIE_PLACEHOLDER'
}

//Test Catalog Pages:
var testSimpleURL = homeUrl+'batest.html/';
var adminTestSimple = homeUrl+'admin/catalog/product/edit/id/1/';

//Admin Cache Management page
var cacheFlush = '#flush_magento';
var cacheFlushConfirm = '.message.message-success.success';

//Product Page
/*TODO: Need to think if each major page should have a page object
Different features might use the same page object functions/variables */
var addToCart = '#product-addtocart-button';
var addToCartConfirm = '.message-success';

//First line of a successful page load response body string
var expectedBody = '<!doctype html>';


//Exporting
exports.electronOptions = electronOptions;
exports.electronMobileOptions = electronMobileOptions;
exports.stageHomeUrl = stageHomeUrl;
exports.stageAdminUrl = stageAdminUrl;
exports.styleGuide = styleGuide;
exports.homeUrl = homeUrl;
exports.adminUrl = adminUrl;
exports.adminCache = adminCache;
exports.checkoutUrl = checkoutUrl;
exports.cartUrl = cartUrl;
exports.loginUrl = loginUrl;
exports.registerUrl = registerUrl;
exports.categoryUrl = categoryUrl;
exports.productUrl = productUrl;
exports.searchUrl = searchUrl;
exports.adminLogin = adminLogin;
exports.siteLogin = siteLogin;
exports.siteRegister = siteRegister;
exports.adminCookie = adminCookie;
exports.testSimpleURL = testSimpleURL;
exports.adminTestSimple = adminTestSimple;
exports.cacheFlush = cacheFlush;
exports.cacheFlushConfirm = cacheFlushConfirm;
exports.addToCart = addToCart;
exports.addToCartConfirm = addToCartConfirm;
exports.expectedBody = expectedBody;

module.exports = exports;




import { By } from "selenium-webdriver";
import { Builder, Capabilities, Key, until} from "selenium-webdriver";

const driver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

const baseUrl = "https://madheadscoffee.com/";
const defaultHoldTime = 5000;
const incresePackNumberLocator = By.xpath(`//*[@id="product-15076"]/div[2]/form/div[2]/div[2]/div/button[2]`);
 
describe("UI Test", () => {
  test("Should provide possibility to go on Google Map from homepage with input default shop address and search route with added voluntary address", 
    async () => {
      const textInputLocator = By.css("#sb_ifc50 > input");
      const baseEndPoint = "Пункт назначения Madheads Coffee roasters, вулиця Кирилівська, 69, Київ, Украина, 02000";
      await driver.manage().window().maximize();
      await driver.get(baseUrl);
      await driver.findElement(By.xpath(`//*[@id="mainpage-map-desc-wrap"]/div[4]/a`)).click();
      await driver.findElement(By.xpath(`//*[@id="yDmH0d"]/c-wiz/div/div/div/div[2]/div[1]/div[3]/div[1]/div[1]/form[2]/div/div/button/span`)).click();
      await driver.wait(until.elementLocated(textInputLocator), defaultHoldTime);
      await driver.findElement(textInputLocator).sendKeys("г. Минск, ул. Тимирязева, д. 67", Key.ENTER);
      const endPoint = await driver.findElement(By.css('#sb_ifc51 > input')).getAttribute('aria-label');
      expect(endPoint).toBe(baseEndPoint);
  });

  test("Should save number of items added to the shopping cart, if other tab is opened", 
    async () => {
      const itemsQuantityLocator = By.className("xoo-wsc-qty");
      await driver.get(baseUrl);
      await driver.findElement(By.css("#mainpage_firstscreen_right_links > div > div > a:nth-child(2)")).click();
      await driver.findElement(By.xpath(`//*[@id="main"]/ul/li[6]/a/h2`)).click();
      await driver.findElement(incresePackNumberLocator).click();
      await driver.findElement(incresePackNumberLocator).click();
      await driver.findElement(By.xpath(`//*[@id="product-15076"]/div[2]/form/div[2]/div[2]/button`)).click();
      await driver.wait(until.elementLocated(itemsQuantityLocator), defaultHoldTime);
      const firstTabResult = await driver.findElement(itemsQuantityLocator).getAttribute('value');
      await driver.switchTo().newWindow('tab');
      await driver.get(baseUrl);
      await driver.findElement(By.id("header_cart")).click();
      await driver.wait(until.elementLocated(itemsQuantityLocator), defaultHoldTime);
      const secondTabResult = await driver.findElement(itemsQuantityLocator).getAttribute('value');
      expect(firstTabResult).toBe(secondTabResult);
 });

  test("Should add item in shopping cart from item page", 
    async () => {
      const itemTag = By.xpath(`/html/body/div[2]/div[3]/div[1]/span[1]`); 
      await driver.manage().deleteAllCookies();
      await driver.get(baseUrl);
      await driver.findElement(By.xpath(`//*[@id="wcpscwc-product-slider-1"]/ul/div/div/li[1]/a/h2`)).click();
      await driver.findElement(By.xpath(`//*[@id="product-20222"]/div[2]/form/div[2]/div[2]/button`)).click();
      const ShoppingCartLocatorStatus = await driver.wait(until.elementLocated(itemTag), defaultHoldTime);
      const currentCartStatus = await driver.wait(until.elementIsVisible(ShoppingCartLocatorStatus)).isDisplayed();
      expect(currentCartStatus).toBeTruthy();
  });

  test("Should open burger menu after clicking appropriate button", 
    async () => {
      const expectedGetMenu = "header_burger_opened";
      const headerBurgerLocator = By.id("header_burger");
      await driver.navigate().back();
      await driver.findElement(headerBurgerLocator).click();
      await driver.wait(until.elementLocated(headerBurgerLocator), defaultHoldTime);
      const getMenu = await driver.findElement(headerBurgerLocator).getAttribute('class');
      expect(getMenu).toBe(expectedGetMenu);
  });

  test("Should save actual status of shopping cart after shopping cart page is refreshed", 
    async () => {
      await driver.manage().deleteAllCookies();
      await driver.switchTo().newWindow('tab');
      await driver.get(baseUrl);
      const coffeeButtonLocator = By.xpath(`//*[@id="mainpage_firstscreen_right_links"]/div/div/a[2]`);
      const coffeeItemLocatorStatus = await driver.wait(until.elementLocated(coffeeButtonLocator), defaultHoldTime);
      await driver.wait(until.elementIsVisible(coffeeItemLocatorStatus), defaultHoldTime).isDisplayed();
      await driver.findElement(coffeeButtonLocator).click();
      const coffeeItemLocator = By.xpath(`//*[@id="main"]/ul/li[6]/a/h2`);
      await driver.findElement(coffeeItemLocator).click();
      await driver.findElement(incresePackNumberLocator).click();
      await driver.findElement(incresePackNumberLocator).click();
      await driver.findElement(By.xpath(`//*[@id="product-15076"]/div[2]/form/div[2]/div[2]/button`)).click();
      await driver.get(`${baseUrl}/checkout`);
      const valueForCheckLocator = By.className("woocommerce-Price-amount amount");
      const priceAmountBeforeRefresh = await driver.findElement(valueForCheckLocator).getText();
      await driver.navigate().refresh();
      await driver.wait(until.elementLocated(valueForCheckLocator), defaultHoldTime);
      const priceAmountAfterRefresh = await driver.findElement(valueForCheckLocator).getText();
      expect(priceAmountAfterRefresh).toBe(priceAmountBeforeRefresh);      
  });
      afterAll(async () => {
      await driver.quit();
  });
})
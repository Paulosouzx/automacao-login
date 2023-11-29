const {Builder, By} = require("selenium-webdriver");
const {describe, it} = require ("mocha");
const should = require ("chai").should();

describe("Teste de Login", function () {
    it("CT01 - Login valido", async function () {

        //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario 
        await driver.findElement(By.id("user-name")).sendKeys(standard_user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        await driver.findElement(By.id("password")).sendKeys(secret_sauce);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        await driver.quit()
        })
        it("CT02 - Login Username invalido", async function (){

        //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = ("paulo123");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("secret_sauce");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))

        await elementbotao.click(By.id("login-button"))

        //Assertion usando Chai
        let erro2 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro2.should.equal("Epic sadface: Username and password do not match any user in this service");

        await driver.quit()

        })
        it("CT03 - Login Password invalida", async function (){

            //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = ("standard_user");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("123");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        //Assertion erro
        let erro3 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro3.should.equal("Epic sadface: Username and password do not match any user in this service");

        await driver.quit()
        
        })   
        it("CT04 - Login Username valido c/ letras maiusculas", async function (){

            //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = ("STANDARD_USER");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("secret_sauce");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        //Assertion erro
        let erro4 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro4.should.equal("Epic sadface: Username and password do not match any user in this service");

        await driver.quit()
        })
        it("CT05 - Login Username valido, Password valida, mas campos trocados", async function (){

            //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = ("secret_sauce");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("standard_user");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        //Assertion erro
        let erro5 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro5.should.equal("Epic sadface: Username and password do not match any user in this service");

        await driver.quit()
        })
        it("CT06 - Login Username com campo vazio", async function (){

            //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = ("");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("secret_sauce");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        //Assertion erro
        let erro6 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro6.should.equal("Epic sadface: Username is required");

        await driver.quit()
        })
        it("CT07 - Login Password com campo vazio", async function (){

            //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = ("standard_user");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        //Assertion erro
        let erro7 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro7.should.equal("Epic sadface: Password is required");

        await driver.quit()
        })
        it("CT08 - Login Username e Password com campo vazio", async function (){

            //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = ("");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        //Assertion erro
        let erro8 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro8.should.equal("Epic sadface: Username is required");

        await driver.quit()
        })
        it("CT09 - Login com espaco antes/depois campo Username", async function (){

            //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = (" standard_user ");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("secret_sauce");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        //Assertion erro
        let erro9 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro9.should.equal("Epic sadface: Username and password do not match any user in this service");

        await driver.quit()
        })
        it("CT10 - Login Password com letra maiusculas", async function (){

            //Contruir uma pagina no navegador
        let driver = await new Builder().forBrowser("firefox").build()

        //Abrir navegador
        await driver.get("https://www.saucedemo.com/")

        //Tempo de espera pra carregar o site
        await driver.sleep(300)

        //Digitar o usuario invalido
        let user = ("standard_user");
        await driver.findElement(By.id("user-name")).sendKeys(user);

        //Tempo de espera
        await driver.sleep(300)

        //Digitar a senha
        let pass = ("SECRET_SAUCE");
        await driver.findElement(By.id("password")).sendKeys(pass);

        //Tempo de espera
        await driver.sleep(300)

        //Clicar no botao LOGIN
        let elementbotao = await driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/div/div/form/input"))
        await elementbotao.click(By.id("login-button"))

        //Assertion erro
        let erro10 = await driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3")).getText();
        erro10.should.equal("Epic sadface: Username and password do not match any user in this service");

        await driver.quit()
        })
        })




        
        

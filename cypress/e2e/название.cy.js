describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); //Ввел логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка некликабельная
        
        cy.get('#pass').type('iLoveqastudio1'); //Ввел пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка кликабельная
        
        cy.get('#loginButton').click(); //Нажимаю войти

        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
        })


    it('Правильный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); //Ввел логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка некликабельная
    
        cy.get('#pass').type('iLoveqastudio2'); //Ввел пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка кликабельная
        
        cy.get('#loginButton').click(); //Нажимаю войти

        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю текст
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик

        })


    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.ru'); //Ввел логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка некликабельная
    
        cy.get('#pass').type('iLoveqastudio2'); //Ввел пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка кликабельная
        
        cy.get('#loginButton').click(); //Нажимаю войти

        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю текст
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик

        })


    it('Забыл пароль', function () {
        cy.visit('https://login.qa.studio/');
   
    cy.get('#forgotEmailButton').click(); //Нажал забыл пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввел почту
    cy.get('#restoreEmailButton').click(); //Клик кнопка

    cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю текст

    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
        
        })


    it('Неверный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('geman@dolnikov.ru'); //Ввел логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка некликабельная
        
        cy.get('#pass').type('iLoveqastudio1'); //Ввел пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка кликабельная
        
        cy.get('#loginButton').click(); //Нажимаю войти

        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
        })


    it('Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввел логин
        cy.get('#loginButton').should('be.disabled'); //Кнопка некликабельная
        
        cy.get('#pass').type('iLoveqastudio1'); //Ввел пароль
        cy.get('#loginButton').should('be.enabled'); //Кнопка кликабельная
        
        cy.get('#loginButton').click(); //Нажимаю войти

        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
        })


})

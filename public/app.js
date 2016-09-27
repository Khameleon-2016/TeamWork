import { homeController } from './controllers/homeController.js';

var app = $.sammy('.content', function()  {
    
    this.get('#/home', () => {
        homeController();
    });

});

app.run('#/home');
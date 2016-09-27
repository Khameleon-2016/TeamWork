import { homeController } from './controllers/homeController.js';

import { signupController } from './controllers/signupController.js';

var app = $.sammy('.content', function()  {
    
    this.get('#/home', () => {
        homeController();
    });

    this.get('#/signup', () => {
       signupController();
    });

});

app.run('#/home');
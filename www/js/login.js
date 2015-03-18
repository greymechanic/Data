$(function() {

	Parse.$ = jQuery;

	Parse.initialize("4YAYUcrnd31jyJmX02Hoc7EGE1Qu72024uYENHzM", "oNpuYlbJ0XuRoDPllcUzidFWHCkO3HcaT1ZSnJxA");

      var LoginView = Parse.View.extend({
  			template: Handlebars.compile($('#login-tpl').html()),
  			events: {
          // when you submit the login form run the login function
  				'submit .form-signin': 'login'
  			},
  			login: function(e) {
  				// Prevent Default Submit Event
  				e.preventDefault();

  				// Get data from the form and put them into variables
  				var data = $(e.target).serializeArray(),
  					username = data[0].value,
  					password = data[1].value;

  				// Call Parse User Login function with username and password
  				Parse.User.logIn(username, password, {
  					// If the username and password matches show the account view
  					success: function(user) {
  						var accountView = new AccountView({ model: user });
              accountView.render();
  						$('.container').html(accountView.el);
  					},
  					// If there is an error
  					error: function(user, error) {
  						console.log(error);
  					}
  				});
  			},
   			render: function(){
  				this.$el.html(this.template());
  			}
  		}),
      AccountView = Parse.View.extend({
  			template: Handlebars.compile($('#account-tpl').html()),
  			events: {
  				'click .do-something': 'doit'
  			},
  			doit: function(){
  				var someNewView = new SomeNewView();
          someNewView.render();
  				$('.container').html(someNewView.el);
  			},
  			render: function(){
  				var attributes = this.model.toJSON();
  				this.$el.html(this.template(attributes));
  			}
  		});

    // Render login view on page
		var loginView = new LoginView();
		loginView.render();
		$('.container').html(loginView.el);
});

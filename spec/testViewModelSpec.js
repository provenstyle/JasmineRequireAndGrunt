describe('testViewModel', function(){


	it('has expected message', function(cb){
		require(['Squire'], function(Squire){
			var injector  = new Squire();

			injector.mock('messageService', {
				getMessage: function(){
					return 'Hello, World!';
				}
			});

			injector.require(['testViewModel'], function(target){
				expect(target.message).toEqual('mock');
				cb();
			});	
		});
	});

});
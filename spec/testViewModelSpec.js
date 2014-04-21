describe('testViewModel', function(){

	var injector;

	beforeEach(function(cb){
		require(['Squire'], function(s){
			Squire = s;
			injector = new Squire();
			cb();
		});
	});

	it('returns expected message', function(cb){
		require(['testViewModel'], function(target){
			expect(target.message).toEqual('Hello, World!');
			cb();
		});
	});
	
	describe('squire', function(){
		
		it('can mock the messageService dependency', function(cb){
			injector.mock('messageService', {
				getMessage: function(){
					return 'mock';
				}
			});

			injector.require(['testViewModel'], function(target){
				expect(target.message).toEqual('mock');
				cb();
			});
		});	
	});
	

});
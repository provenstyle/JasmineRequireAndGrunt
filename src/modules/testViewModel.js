define(['messageService'], function(messageService){
	return {
		message: messageService.getMessage()
	}
});
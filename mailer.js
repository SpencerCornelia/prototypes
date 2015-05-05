/*
5. Make a `Mailer` constructor that takes a `from` email address, and has `currentMessage` set to an empty object, 
   as well as a `sentMessages` array.
  * Add a `setSendTo` method that sets `currentMessage.sendTo` to be a specified email.
  * Add a `setSubject` method that sets `currentMessage.subject` to be a specified subject.
  * Add a `send` method that sets `currentMessage.from` to be `this.from`, pushes `currentMessage` into `sentMessages`, 
    and sets `currentMessage` to be a new object.
  * Modify `send` so that it checks if `currentMessage` has both a `sendTo` and `subject` before pushing to 
    `sentMessages`.
*/

function Mailer(sentEmailAddress,currentMessage,sendMessage) {
	this.from = sentEmailAddress;
	this.currentMessage = {};
	this.sendTo = {};
	this.sentMessages = sentMessages;
}

Mailer.prototype.setSendTo = function(recipient) {
	this.sendTo = recipient;
	return this.sendTo;
}

Mailer.prototype.setSubject = function(subject) {
	this.subject = subject;
}

Mailer.prototype.send = function(message) {
	
}
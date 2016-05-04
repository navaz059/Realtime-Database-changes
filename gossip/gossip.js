
person = new Mongo.Collection('person');

if(Meteor.isClient){
	var value = 0;
//To handle the events associated with HTML tags	
	Template.person.events({
		'click .people':function(){
			var personId = this._id;
			Session.set('selectedPerson',personId);
		},
		'click .increment': function(){
			var selectedPerson = Session.get('selectedPerson');
			value = 1-value;
			person.update(selectedPerson, {$set: {checked: 1-value} });
		}
		
	});
	
//To implement heper functions
	Template.person.helpers({
	//Show the list of people available	
	'display' :function(){
		return person.find()
	},
	//To store the personId of the suscribed Person
	'selectedClass': function(){
		var personId  = this._id;
		var selectedPerson = Session.get('selectedPerson');
		if(personId == selectedPerson){
			return "selected"
		}
	},
	//Show the list of subscribed people 
	'display1' :function(){
		return person.find({checked:1})
	}	
	});
}


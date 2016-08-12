console.log('I\'ve been loaded!');

$.get(
				"https://raw.githubusercontent.com/Salesforce-Organizer/sforg-test-repo/master/P_U0000001_P0000001/script.js",
				function(data){
				  console.log(data);
				}
				);
console.log(PopupUtils.StandardLoginURLs);

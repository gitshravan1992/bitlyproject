Feature: To Test services in https://bitly.com

Prereq: User has created an account in bitly and also  created several links

Scenario: To test following methods 
			GET/groups/{group_guid}
			GET/groups/{group_guid}/bitlinks/{sort}
			POST/bitlinks
			
Given user has generated token for Authorization
When we validate GET/groups/{group_guid}
Then we retrieve all details for a group
When we validate GET/groups/{group_guid}/bitlinks/{sort}
Then we get list of bitlinks sorted by group
When we validate POST/bitlinks
Then we create a bitlink with parameters like longurl,domain,groupid

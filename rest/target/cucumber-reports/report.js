$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/bitlyapi.feature");
formatter.feature({
  "name": "To Test services in https://bitly.com",
  "description": "Prereq: User has created an account in bitly and also  created several links",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test following methods",
  "description": "\t\t\tGET/groups/{group_guid}\n\t\t\tGET/groups/{group_guid}/bitlinks/{sort}\n\t\t\tPOST/bitlinks",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has generated token for Authorization",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.steps.authorization()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we validate GET/groups/{group_guid}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.steps.getResponse_GroupGuid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we retrieve all details for a group",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.steps.validateGetResponse_GroupGuid()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we validate GET/groups/{group_guid}/bitlinks/{sort}",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.steps.getResponse_Sort()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we get list of bitlinks sorted by group",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.steps.validateGetResponse_Sort()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we validate POST/bitlinks",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.steps.postResponse_bitlinks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "we create a bitlink with parameters like longurl,domain,groupid",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.steps.validatePostResponse_bitlinks()"
});
formatter.result({
  "status": "passed"
});
});
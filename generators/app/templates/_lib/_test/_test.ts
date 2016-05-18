import { <%= name %>MicroServiceStub } from "../<%= name %>MicroServiceStub";
import { I<%= name %>Model, <%= name %>Model } from "entity-<%= nameToLower %>";

let <%= nameToLower %>MicroServiceStub = new <%= name %>MicroServiceStub("localhost", "8888");
/** Get all */
<%= nameToLower %>MicroServiceStub.get((data) => {
   console.log("GET : " + data); 
});

/** Create */
let model = new <%= name %>Model();

model.employeeID = "1000001";
model.name.first = "john";
model.name.last = "Patrick3";
model.address.lines = ["1234 Delk RD SW"];
model.address.city = "Atlanta";
model.address.state = "GA";
model.address.zip = 12345;

<%= nameToLower %>MicroServiceStub.create(model, (data) => {
    console.log("POST : " + data); 
});

/** Get by employee id and update */
let entity;
<%= nameToLower %>MicroServiceStub.getById("1000001", (data) => {
    console.log("GET : " + data);
    entity = data.message;
    entity.name.first = "arul";
    <%= name %>.update(entity._id, entity, (data) => {
        console.log("PUT : " + data);
    });
});

/** Delete */
<%= nameToLower %>MicroServiceStub.delete("5734dbdd6e64579304027e92", (data) => {
    console.log("DELETE : " + data);
});





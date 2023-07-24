import data from "./data.json";

//Simulate data coming from server
const asyncData = await data;
console.log(asyncData);
const {test,expect} = require('@playwright/test');
test("My First Test", async function({page}){
expect(12).toBe(12);
})

test.skip("My Second Test", async function({page}){
expect(100).toBe(101);
})

test("My Third Test", async function({page}){
expect(2.0).toBe(2.0);
})


// test.only("My Forth Test", async function({page}){
// expect("Kaleem Faryad".includes("Kaleem")).toBeTruthy();
// })
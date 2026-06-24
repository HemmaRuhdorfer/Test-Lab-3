describe("Gilded Rose", function() {

it("normal item decreases quality by 1 before sell date", function() {

items = [new Item("foo", 10, 20)];

update_quality();

expect(items[0].sell_in).toEqual(9);
expect(items[0].quality).toEqual(19);

});

it("normal item decreases quality by 2 after sell date", function() {

items = [new Item("foo", 0, 20)];

update_quality();

expect(items[0].sell_in).toEqual(-1);
expect(items[0].quality).toEqual(18);
});

it("quality of an item is never negative", function() {

items = [new Item("foo", 10, 0)];

update_quality();

expect(items[0].sell_in).toEqual(9);
expect(items[0].quality).toEqual(0);    
});

});

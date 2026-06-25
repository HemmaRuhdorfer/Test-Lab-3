function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
<<<<<<< HEAD

    var item = items[i];

    var isAgedBrie = item.name === 'Aged Brie';
    var isBackstage = item.name === 'Backstage passes to a TAFKAL80ETC concert';
    var isSulfuras = item.name === 'Sulfuras, Hand of Ragnaros';
    var isConjured = item.name.indexOf('Conjured') === 0;

    // Sulfuras does not change
    if (isSulfuras) {
      continue;
    }

    // sell_in always decreases (except Sulfuras)
    item.sell_in--;

//aged brie check
    if (isAgedBrie) {
      if (item.quality < 50) {
        item.quality++;
      }
      if (item.sell_in < 0 && item.quality < 50) {
        item.quality++;
      }
    }
//backstage pass check
    else if (isBackstage) {

      if (item.quality < 50) {
        item.quality++;

        if (item.sell_in < 10 && item.quality < 50) {
          item.quality++;
        }

        if (item.sell_in < 5 && item.quality < 50) {
          item.quality++;
        }
      }

      if (item.sell_in < 0) {
        item.quality = 0;
      }
    }

//normale und conjured
    else {

      var decrease = isConjured ? 2 : 1;

      if (item.quality > 0) {
        item.quality -= decrease;
      }

      if (item.sell_in < 0 && item.quality > 0) {
        item.quality -= decrease;
      }
    }
//Cecks für quality
    if (item.quality < 0) {
      item.quality = 0;
    }

    if (item.quality > 50) {
      item.quality = 50;
=======
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
>>>>>>> parent of 132ed2f (Test 10-CORRECT-Conjured Items)
    }
  }
}

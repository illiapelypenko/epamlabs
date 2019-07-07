QUnit.module("Collection");

QUnit.test('add / size', function (assert) {
    var collection = new Collection();
    collection.add('foo');
    collection.add('bar');
    collection.add('baz');

    assert.equal(collection.size, 3);
});

QUnit.test('isEmpty', function (assert) {
    var collection = new Collection();

    assert.ok(collection.isEmpty);

    collection.add('foo');
    collection.add('bar');
    collection.add('baz');

    assert.ok(!collection.isEmpty);
});

QUnit.test('clear()', function (assert) {
    var collection = new Collection();
    collection.add('foo');
    collection.add('bar');
    collection.add('baz');
    collection.clear();

    assert.ok(collection.isEmpty);
});

QUnit.test('remove(item)', function (assert) {
    var collection = new Collection();
    collection.add('foo');
    collection.add('bar');

    collection.remove('foo');
    collection.remove('bar');

    assert.equal(collection.size, 0);
    assert.ok(collection.isEmpty);
});

QUnit.test('contains(item)', function (assert) {
    var collection = new Collection();
    collection.add('foo');
    collection.add('bar');

    collection.remove('bar');

    assert.ok(collection.contains('foo'));
    assert.ok(!collection.contains('bar'));
});


QUnit.module("Queue");

QUnit.test('add(item)', function (assert) {
    var queue = new Queue();

    assert.ok(queue.isEmpty);

    queue.add('foo');
    queue.add('bar');
    queue.add('baz');

    assert.equal(queue.size, 3);
    assert.equal(queue.first, 'foo');
    assert.equal(queue.last, 'baz');
});

QUnit.test('first', function (assert) {
    var queue = new Queue();
    queue.add('foo');
    queue.add('bar');
    queue.add('baz');

    assert.equal(queue.first, 'foo');
});

QUnit.test('last', function (assert) {
    var queue = new Queue();
    queue.add('foo');
    queue.add('bar');
    queue.add('baz');

    assert.equal(queue.last, 'baz');
});

QUnit.test('remove()', function (assert) {
    var queue = new Queue();
    queue.add('foo');
    queue.add('bar');
    queue.add('baz');

    assert.equal(queue.remove(), 'foo');
    assert.equal(queue.remove(), 'bar');
    assert.equal(queue.remove(), 'baz');
});

QUnit.test('clear()', function (assert) {
    var queue = new Queue();
    queue.add('foo');
    queue.add('bar');
    queue.add('baz');
    queue.clear();

    assert.ok(queue.isEmpty);
});

QUnit.test('contains(item)', function (assert) {
    var queue = new Queue();
    queue.add('foo');
    queue.add('bar');

    queue.remove();

    assert.ok(!queue.contains('foo'));
    assert.ok(queue.contains('bar'));
});

QUnit.test('empty', function (assert) {
    var queue = new Queue();

    assert.equal(queue.remove(), undefined);


});



QUnit.module("FixedArray");

QUnit.test('size', function (assert) {
    var arr = new FixedArray(5);

    assert.equal(arr.size, 5);
});

QUnit.test('insertAt(index, item)', function (assert) {
    var arr = new FixedArray(2);

    var result;
    try {
        arr.insertAt(0, 'foo');
        arr.insertAt(1, 'bar');

        result = true;
    } catch (e) {
        result = false;
    }

    assert.ok(result);

    assert.throws(function () {
        arr.insertAt(2, 'baz');
    }, RangeError);
});

QUnit.test('getAt(item)', function (assert) {
    var arr = new FixedArray(2);
    arr.insertAt(0, 'foo');
    arr.insertAt(1, 'bar');
    var result;

    try {
        arr.getAt(0);
        arr.getAt(1);

        result = true;
    } catch (e) {
        result = false;
    }

    assert.ok(result);

    assert.throws(function () {
        arr.getAt(2);
    }, RangeError);
});


QUnit.module("Set");
QUnit.test('size / add(item)', function (assert) {
    var set = new Set();
    set.add('foo');
    set.add('bar');
    set.add('foo');

    assert.equal(set.size, 2);
});

QUnit.test('isEmpty / remove(item)', function (assert) {
    var set = new Set();
    set.add('foo');
    set.add('bar');
    set.add('foo');

    set.remove('foo');
    set.remove('bar');

    assert.ok(set.isEmpty);
});

QUnit.test('clear()', function (assert) {
    var set = new Set();
    set.add('foo');
    set.add('bar');
    set.add('baz');
    set.clear();

    assert.ok(set.isEmpty);
});

QUnit.test('contains(item)', function (assert) {
    var set = new Set();
    set.add('foo');
    set.add('bar');

    set.remove('bar');

    assert.ok(set.contains('foo'));
    assert.ok(!set.contains('bar'));
});

QUnit.test('intersect(set)', function (assert) {
    var set1 = new Set();
    set1.add('foo');
    set1.add('bar');

    var set2 = new Set();
    set2.add('bar');
    set2.add('baz');

    var set3 = set1.intersect(set2);

    assert.equal(set1.size, 2);
    assert.equal(set2.size, 2);
    assert.equal(set3.size, 1);
    assert.ok(set3.contains('bar'));
});

QUnit.test('union(set)', function (assert) {
    var set1 = new Set();
    set1.add('foo');
    set1.add('bar');

    var set2 = new Set();
    set2.add('bar');
    set2.add('baz');

    var set3 = set1.union(set2);

    assert.equal(set1.size, 2, 'size 2');
    assert.equal(set2.size, 2);
    assert.equal(set3.size, 3, 'new set - size 3');
    assert.ok(set3.contains('foo'));
    assert.ok(set3.contains('bar'));
    assert.ok(set3.contains('baz'));
});
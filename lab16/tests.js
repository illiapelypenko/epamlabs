QUnit.module("select");

QUnit.test('collection', function (assert) {
    assert.equal(my$('#tests li').length, 6);

});

QUnit.test('gt', function (assert) {
    assert.equal(my$('#tests li').gt(1).length, 4);

});

QUnit.test('lt', function (assert) {
    assert.equal(my$('#tests li').lt(2).length, 2);

});


QUnit.module("class");

QUnit.test('add class to one element', function (assert) {
    my$('#tests li').eq(2).addClass('selected');
    assert.ok($('#tests li').eq(2).hasClass('selected'));
});

QUnit.test('add class to all elements', function (assert) {
    my$('#tests li').addClass('selected');
    assert.ok([...$('#tests li')].every(el => el.classList.contains('selected')));
});

QUnit.test('remove class to one element', function (assert) {
    my$('#tests li').eq(2).addClass('selected');
    my$('#tests li').eq(2).removeClass('selected');
    assert.ok(!$('#tests li').eq(2).hasClass('selected'));
});

QUnit.test('remove class to all elements', function (assert) {
    my$('#tests li').addClass('selected');
    my$('#tests li').removeClass('selected');
    assert.ok(![...$('#tests li')].some(el => el.classList.contains('selected')));
});

QUnit.test('contains a class', function (assert) {
    my$('#tests li').addClass('selected');
    assert.ok(my$('#tests li').hasClass('selected'));
    my$('#tests li').removeClass('selected');
    assert.ok(!my$('#tests li').hasClass('selected'));
});

QUnit.test('toggle a class', function (assert) {
    my$('#tests li').removeClass('selected');
    my$('#tests li').toggleClass('selected');
    assert.ok($('#tests li').hasClass('selected'));
    my$('#tests li').toggleClass('selected');
    assert.ok(!$('#tests li').hasClass('selected'));
});

QUnit.module("content");

QUnit.test('html', function (assert) {
    var insertContent = 'header <em>emphasis header</em>';
    my$('h2#banner').html(insertContent);
    assert.equal($('h2#banner').html(), insertContent);
});

QUnit.test('text', function (assert) {
    var insertContent = 'header <em>emphasis header</em>';
    my$('h2#banner').text(insertContent);
    assert.equal($('h2#banner').text(), insertContent);
});

QUnit.module("style");

QUnit.test('css write', function (assert) {
    var prop = 'background-color';
    var valueProp = 'rgb(255, 0, 255)';
    
    my$('#tests li').eq(2).css(prop, valueProp);
    
    assert.equal($('#tests li').eq(2).css(prop), valueProp);
});

QUnit.test('css write all', function (assert) {
    var prop = 'background-color';
    var valueProp = 'rgb(255, 0, 255)';
    
    my$('#tests li').css(prop, valueProp);

    [...$('#tests li')].forEach((el) => {
        assert.equal(el.style[prop], valueProp);
    });
});

QUnit.test('css read', function (assert) {
    $('#tests li').eq(2).css('background-color', "");
    $('#tests li').eq(2).css('color', "");

    $('#tests li').eq(2).addClass('selected');
    
    assert.equal(my$('#tests li').eq(2).css('background-color'), 'rgb(255, 255, 0)');
    assert.equal(my$('#tests li').eq(2).css('color'), 'rgb(255, 0, 0)');
});




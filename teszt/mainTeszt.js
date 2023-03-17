QUnit.module('leptetes metódus tesztelése', function() {
    QUnit.test('leptetes(1, 2)', function(assert) {
      assert.equal(leptetes(1, 2), 3);
    });
    QUnit.test('leptetes(1, 0)', function(assert) {
        assert.equal(leptetes(1, 0), 1);
    });
    QUnit.test('leptetes(1, lista.length-1)', function(assert) {
        assert.equal(leptetes(1, lista.length-1), 0);
    });
    QUnit.test('leptetes(-1, 2)', function(assert) {
        assert.equal(leptetes(-1, 2), 1);
    });
    QUnit.test('leptetes(-1, 0)', function(assert) {
        assert.equal(leptetes(-1, 0), lista.length-1);
    });
    QUnit.test('leptetes(-1, lista.length-1)', function(assert) {
        assert.equal(leptetes(-1, lista.length-1), lista.length-2);
    });
    QUnit.module("uncsi",function(){
        
    })
  });
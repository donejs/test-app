import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'test-app/models/test';

F.attach(QUnit);

QUnit.module('test-app functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('test-app main page shows up', function() {
  F('title').text('test-app', 'Title is set');
});

export var foo = 'bar';
setTimeout(() => {debugger;foo = 'baz'}, 500);
var globalVariable = 'Ma aflu in contextul global.';

function contextTest() {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
  console.log(noVariable);
}

contextTest();
console.log(globalVariable);

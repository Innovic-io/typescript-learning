/*A promise can be:

  fulfilled - The action relating to the promise succeeded
rejected - The action relating to the promise failed
pending - Hasn't fulfilled or rejected yet
settled - Has fulfilled or rejected*/

const promise = (timeout) => new Promise(function (resolve, reject) {

  setTimeout(() => {
    return resolve(timeout);
  }, timeout)

});


async function myFirstAsyncFunction() {
  try {
    const fulfilledValue = await promise(1000);
    console.log(fulfilledValue);
    const fulfilledValue1 = await promise(400);
    console.log(fulfilledValue1);
    const fulfilledValue2 = await promise(700);
    console.log(fulfilledValue2);
    return new Date;
  }
  catch (rejectedValue) {
    // …
  }
}

myFirstAsyncFunction()
  .then(console.log);

/*
// sync
promise(500)
  .then(function () {

    console.log('first');
    return promise(1000);
  })
  .then(() => {
    console.log('second');

    return promise(3000);
  })
  .then(() => {
    console.log('third');
  });
// un sync

console.log(new Date());
promise(500)
  .then(function () {
    console.log('first');
  });
promise(1000)
  .then(() => {
    console.log('second');
  });

promise(3000)
  .then(() => {
    console.log('third');
    console.log(new Date());
  });


console.log(new Date());
Promise.all([promise(500), promise(1000), promise(3000)])
  .then((data) => {
    console.log(data)
    console.log(new Date());
  });
*/

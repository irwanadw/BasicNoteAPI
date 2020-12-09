# Definition
in my opinon. Promise is one of methode to solve Asynchronous function.

## Basic
Basically, Async Promise have a two part. First is Promise Function. Second is Promise Handling

### Promise function
This is a core of a Promise function. In this function we will make a promise. What we will promising to the code. 

Like a promise in the real word. The promise could be fulfilled or not. If the promise fulfiled, thats mean our code is *resolve*. Other wise, thats mean *reject*.

*resolve* mean what they promise to us
*reject* mean what a reason the promise is unfulfiled.

*resolve and reject* is always together. In code there will be a function parameter. 

The basic syntax will be like this
*function(resolve,reject){}*

### Handling The Promise
Like in real world. If someone who promise to us could be fulfiled or not. We should think what we do if the promise fulfiled or not.

In code, we call it Handling a promise.There is two basic handling in promise. *.then and .catch*

*.then* mean what should we do  if the promise is fulfiled. Of course we want a thing that promise right?

*.catch* mean we need to keep a reason why the promise is unfulfilled. 

That a same thing in our code.

## Example
<!-- Lets say we know in the future aia will suka Lingga so we said true -->
const aiaSuka = true;

<!-- in this first line we make a promise. What happen if mbak Aia suka Lingga. -->
<!-- We promising to this code that surely happens. In two condition -->
const isAiaSukaLingga= new Promise(
  function(resolve,reject){
    <!-- if  aia suka. Lingga promising us  a treat -->
    if(aiaSuka){
      const lingga ={
        traktir : "Lingga traktir kita semua"
      };
      resolve(lingga) //fullfiled the Promise
    }else{
    <!-- if aia tidak suka. We need to know the reason or responses from Mbak Aia  -->
      const reason= new Error('kita temenan aja ya')
      reject(reason);//reject promise
    }
})
<!-- In upper code. We just make a promise. But we still dont know what we do in the future -->

<!-- in bottom. We will handling it -->
<!-- in future. we ask mba Aia. Are she like Lingga or no -->
const askAia = function(){
  <!--if she like. Lingga need to fulfiled his promise to us-->
  isAiaSukaLingga
  .then(function(fullfiled){
    console.log(fullfiled)
  })
  <!-- if not. We need to know what a reason or responses from mbak Aia -->
  .catch(function(error){
    console.log(error.message)
  })
}
askAia(); 





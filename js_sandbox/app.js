const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name:'Brad'});
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);

// console.log(instanceA);




/* All right guys so the next pattern we're going to look at is the singleton pattern which is actually

a manifestation of the module pattern a singleton object is an immediate anonymous function and it can

only return one instance of an object at a time.

All right so repeated calls to the constructor will just return the same instance and like the module

pattern it maintains a private reference which nothing from the outside can access.

Now an example of why you may want to use a singleton is maybe you only want for instance one user object

created at a time maybe a logged in user.

It would prevent you from having two users from being created at once.

Now oftentimes singletons are frowned upon because they give you a global point of access rather than

embracing encapsulation and that bothers a lot of programmers and that they can also be kind of hard

to debug debug.

I think singletons do have their place but I haven't used them too much.

I actually don't have much experience with this pattern at all but I wanted to include it in this section

because it is a well-known pattern in singletons.

They don't just relate to javascript but too many programming languages and just programming in general.

So let's go ahead and let me give you a simple example here so I just have a blank js file and we're

going to create a variable called Singleton and we're going to set this to our if we so will put our

function

and let's create a variable called instance and we're going to have a function called create instance.

This isn't a very practical example but like I said I don't have much experience with it so create an

object variable and will set it to a new object

and we'll just we'll just pass in a string here and we'll just say object instance

paying them will return that object.

All right so now down here we're going to have our return just like the module pattern that I showed

you in the last video and we're going to have our Get instance function here.

OK and then what we're going to do is we're going to say if there is not an instance

then we want instance to equal create instance

and then under the if statement we're going to return the instance.

All right and then down here what I'm going to do is instantiate an object I'm going to call it instance

a spell I write instance a equals and then will say Singleton Daut get instance.

OK so if we go ahead and console the log

instance a and save you see we're going to get a string which is a primitive and it's an art says object

instance.

And I mean this doesn't have to be a string.

We could do

we could do that.

That probably makes more sense.

All right so if I go here if I try and instantiate another object from the singleton.

So if I say instance b equals Singleton Daut instance and then I compare these two.

So it's actually seeing one comment that the console dog blog.

And we're going to say

instance a is equal to instance B and save and you see we get true.

All right so we can never have more than one instance even if we try.

It's just going to give us the back the same instance.

All right.

So that's going to be it I'm not going to go much further into this because like I said I don't have

a lot of experience with this pattern and I don't want to give you any wrong information just know that

you can't have more than one instance with this pattern.

All right so in the next video guys we're going to take a look at the factory pattern which is a pattern

used to create objects multiple objects. */
BouncingBall

INTRODUCTION
BouncingBall is an application that gives the user the ability to click on the page and create a new ball (or multiple balls) that has random speed and angle and bounces on every surface. Gravity is also taken into consideration so the ball's speed is decreased as time passes by.


MINIFICATION
As far as concern minification, UglifyJS was used. It was installed from NPM by using the following command:

npm install uglify-js -g

Then Javascript file was minifed by running

uglifyjs main.js


TESTING
There is a separate project for running the unit tests, under the tests folder. JasmineJs Standalone Collector testing framework was used and Specs can be found in spec folder

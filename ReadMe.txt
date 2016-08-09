Javascript Libraries Used 
=========================
angular, requireJS

Test Framework Used
===================
Karma, jasmine, ngmock[angular]

How to install and run
======================

Run Application :-

1. Install node.js on your machine if you do not have it.[https://nodejs.org/en/download/]
2. Unzip the assignment code on your machine.
3. Open the command terminal.The terminal should be can run node.js.
4. Change to the directory WestpacAssignment[the root folder of the zip].
   WestpacAssignment should have all the assignment code directly under it as packaged in the zip.
5. Before step 6 make sure bower is installed on node.To installed bower run command
   npm install -g bower
6. Run this command on the command console : "npm run start"
   A) This command will automatically run 1) npm install 2) bower install to install all the node module and javascript libraries.
      It might take some time to download and install all the npm module and libraries.
   B) Then it will start the http server.
7. Now the server is UP and RUNNING. You should see this message on console
   Available on:
     http://localhost:8000
8. On the browser lauch the app. URL -> http://localhost:8000/index.html
9. You can test the app now.

Functionality Implemented :-

1) You should see the progress bar and a reset button below it.
2) The progress bar loads and run as per assignment requirements.
3) The progress bar responds to the start, finish, duration values in the /lightBoxData/data.json file.You can change and try.
   However I have not coded, tried and tested for all the boundary cases like negative values etc.So I would recommend trying 
   changes within the appropriate ranges.
4) Whenever you hit the button the progress bar resets and starts again.It starts loading again.You can hit at any point of progress 
   and as many times.It should work.
5) I have tried to keep progress bar responsive to an extent.Try to resize and test.It should respond well to both width and height changes.
6) If you hit close button the progress bar closes and you see a new page.Click reset button to see the progress bar again.

Run Unit Tests :-

Make sure you are in the directory WestpacAssignment[the root folder of the zip].

1. Run command on the command console : "npm run test"
2. I have used Karma + jasmine.I have enabled plugins to run test for all the browsers but commented it and have enabled only PhantomJS.
   If you like to try all browser just add them to the array in the karma.conf.js in the root folder. The entry looks like as below.
   //browsers: ['PhantomJS', 'Chrome', 'Firefox', 'IE'],
    browsers: ['PhantomJS'],
    
    The unit test should run successfully for all the listed browsers.
3. All the spec files ends with name *.spec.js.  
4. After the unit test runs, the report can be found at location : WestpacAssignment\unit-test\report\karma-report-html\index.html
5. Open the index.html in the web browser to check the formatted unit test results. I have attached it for reference.

Additional grunt tasks [I used them so included.But you do not need them unless you want to try them ] :-

Note : These grunt task need npm grunt module.So make sure you run them only after you run 'npm install' explicitly 
Or via 'npm run start/test'(mentioned in the sections above)

1) Linting the JS code to ensure error free JS file

Command to run : grunt run-linting

You can run and verify that the assignment code is syntax error free.

2) Clean up all npm and bower modules, and install again
    
Command to run : grunt run-setup

    

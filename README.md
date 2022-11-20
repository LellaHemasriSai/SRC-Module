# SRC-Module
Sponsored Research and Consultancy Module (part 12 of IITT erp system requirements) done as a part of Software Engineering course project

**CS3105: SE Term Project**

**<span style="text-decoration:underline;">Sponsored Research and Consultancy (SRC) Module</span>**

**Team Alpha**

A. Pooja Sree        - CS20B002

G. Namitha Reddy - CS20B011

K. Manasa             - CS20B019

L. Hemasri Sai      - CS20B020

M. Preethi Varsha   - CS20B030

**GitHub link to the repository:** [https://github.com/PreethiVarshaM/SRC-Module](https://github.com/PreethiVarshaM/SRC-Module)

**Link to the slides:**

**Steps to run the module:**



* Open the SRC Module folder in a code editor 
* Split the terminal into two (one for running the server and the other for starting the react app). 
* **Starting the Server:**
    * In one of the terminal,
    * In the SRC Module directory, type **npm i**
    * Start the node server using **node server.js**
    * The server is deployed on localhost:3001
* **Deploying the react app** in the second terminal:
    * If the current directory is SRC module, use **cd myapp**
    * Then to start the app use **npm start** and press enter
    * The react app is now automatically deployed on localhost:3000
    
* **Dummy users**
* for faculty login type: 
  * username : faculty 
  * password : faculty
  
* for admin login type:
   * username : admin
   * password : admin
  
* for student login type:
   * username : student
   * password : student
  
* To terminate the app/server, type **ctrl+c**


# **<span style="text-decoration:underline;">Brief problem statement :</span>**

This project is a web-based, client-server system that allows end users (faculty, administration, and postgraduate students) to manage project-related tasks and access all the necessary information in one place. The proposed system addresses the challenges that the faculty and the administration experience in tracking, organizing and managing all paperwork and records associated with the humongous number of projects, especially sponsoring, consulting, and internal projects.

**Technologies Used (until release 1):**

Editor: Vscode

Languages: HTML, CSS, JavaScript, ES6, MQL (MongoDB Query Language)

Packages and Dependencies: EJS, NodeJS, MongoDB, Mongoose

Frontend Framework: React, BootStrap, ExpressJS

Developer Tools: Chrome Developer Tools, React Developer Tools

UI/UX design tool: Figma 

Collaboration tool: Git and GitHub, Google drive

Documentation: Google Docs

**<span style="text-decoration:underline;">FUNCTIONALITIES OF THE SYSTEM</span>**



1. **Agency Code Master**
    1. **Description:** System shall facilitate the Creation / Modification of a Unique code for sponsored and consultancy projects agencies.
    2. **Backend Work**: A function to generate a unique agency-specific code.
2. **Principal Investigator Code Master**
    3. **Description: **System shall facilitate the Creation/ modification of Unique code for all the Principal investigators and the capability to assign scanned signatures.
    4. **Backend Work**: A function generates the unique principal investigator-specific code.
3. **Sponsored Project Proposal**
    5. **Description**: System shall facilitate Submission of Proposal for a newly sponsored project, Capture the scope and objective of the Project, Sanction value and Duration of the project, and Create project number. 
    6. **Frontend Work**: A form requesting all the necessary information from the user in order to create a new project.
    7. **Backend Work**: All the information entered by the user is stored in a database.
4. **Consultancy Project Proposal**
    8. **Description**:The system is expected to enable Submission of Proposal for new consultancy projects, Capture the scope and objective of the Project, Sanction value and Duration of the project and Create project number.
    9. **Frontend Work**: A form requesting information from the user in order to create a new project.
    10. **Backend Work**: All the information entered by the user is stored in a database.
5. **Internal Project Proposal**
    11. **Description**: System shall facilitate Submission of Proposal for NFSG, Capture scope and objective of the Project, Sanction value and Duration of the project.
    12. **Frontend Work**: A form requesting information from the user in order to create a new project.
    13. **Backend Work**: All the information entered by the user is stored in a database.
6. **Project ID creation**
    14. **Description**: Facility to Create Project Number once verified, Receive Sanction Letter and Fund from Agency for all Projects.
    15. **Frontend Work**: Once a project is created, the project will be visible in approve projects section. A unique Project code will be generated for the project following project acceptance.
    16. **Backend Work**: A function is written to generate project-specific code..
7. **Project Amendments for Sponsored Projects**
    17. **Description**: The system shall facilitate any amendments in the sanctioned projects regarding extension of duration or additional funds.
    18. **Frontend Work**: Ability to request an extension of duration and request for more funds. The aforementioned requests will be sent to the admin.
    19. **Backend Work**: Respected values will be updated in the database and also reflected on the site once the admin authorizes the request.
8. **Project Amendments for Consultancy Projects**
    20. **Description**: The system shall facilitate any amendments in the sanctioned projects regarding extension of duration or additional funds.
    21. **Frontend Work**: Possibility to request an extension of time or more funds. The aforementioned requests will be delivered to the admin.
    22. **Backend Work**: Respected values will be updated in the database and also reflected on the site once the admin authorizes the request.
9. **Project status tracking**
    23. **Description**: The system is expected to manage/record project status, reviews and presentations comments for Actuals Tracking.
    24. **Frontend Work**: A symbol indicating the project's status and a comment section where users can leave feedback on the active project. A status update option that displays a pop-up prompting the user to enter the status.
    25. **Backend Work**: A function to update the project's status and the database simultaneously.
10. **Project Closure**
    26. **Description**: Facility to close the project. An email should be triggered to the Coordinator about the project completion. 
    27. **Frontend Work**: Choice to end the active project.
    28. **Backend Work**: Automatically sends a triggering email to the project's team.
11. **Project Staff Recruitment**
    29. **Description**: The system shall enable the Recruitment of project staff with duration and salary details and commitment, along with interface with payroll for salary payment.
    30. **Frontend Work**: A form requesting information from the newly enrolled staff.
    31. **Backend Work**: All the information entered by the user is stored in a database.
12. **Adhoc Recruitment**
    32. **Description**: The system shall enable Recruitment of project staff under Adhoc through Referral, advertisement, student (part time), staff (Part Time) and student recruitment through MS/PhD with duration and salary details and Commitment, along with interface with payroll for salary payment.
    33. **Frontend Work**: A form requesting information from the newly enrolled staff.
    34. **Backend Work**: All the information entered by the user is stored in a database.
13. **Staff Extension/Enhancement or Relieving**
    35. **Description**: Facility to Extension/Enhancement and Relieving of project staff from the project.
    36. **Frontend Work**: Option to request for extension of work time of staff and also to relieve them from the project.
    37. **Backend Work**: Once approved the request of extension or relieving, the database will be updated with the appropriate information.
14. **Project Purchase**
    38. **Description**: The system is expected to facilitate Capture of Indent details, with item and supplier details, commitment and interface with accounts for payment
    39. **Frontend Work**: Option to include supplier and indent information.
    40. **Backend Work**: All the information entered by the user is stored in a database.
15. **Project Receipts**
    41. **Description**: The system shall facilitate Capture of receipts details received from agencies, calculation of service tax for consultancy projects, calculation of overheads for sponsored projects.
    42. **Frontend Work**: Option to compute tax and overhead costs for the project and provide receipt information.
    43. **Backend Work**: A database to keep track of information like taxes and overhead costs.

**CATEGORISATION OF THE SYSTEM**



1. **Student/Staff**:
    1. **Opportunities**: The notification will appear in the opportunities section once the principal investigator offers open positions in their project.
    2. **Ongoing Projects: **Showcase of every project in which the student/staff is included.
    3. **Completed Projects**: Display each project that a student has previously finished.
    4. **Applications: **Displays applied projects 
    5. **Offers(Out of Scope): **Shows the offers to apply for the projects
2. **Faculty/Principal Investigator**
    6. **Create Project**
        1. **Sponsored/Consultancy Project**:  A form requesting information from the user in order to create a new project.
        2. **Internal Project**:  A form requesting information from the user in order to create a new project.
    7. **Ongoing Projects**: Approved projects are displayed until they are finished.
    8. **Pending Approvals**: Projects that need admin approval are displayed..
    9. **Completed Projects**: Finished projects are displayed.
    10. **Request Recruitment**: Request the admin for staff to be included in the project.
    11. **Applications**: This page will reflect any applications made by students or staff for the project.
    12. **Announcements**: Announce open positions to recruit staff.
3. **Admin** 
    13. **Approve Projects**: The choice to accept or reject the projects that the principal investigator has created.
    14. **Approve Recruitment**: The choice to accept or reject the principal investigator's staff hiring request for their specific projects.
    15. **View Projects**: View all of the administratively approved projects, regardless of the principal investigator.
    16. **Funds**: Option to generate funds and generate additional funds if requested by the principal investigator.
    17. **Duration Extension: **Project term may be extended at the principal investigator's request.

**Plan for Release-2:**



1. Files like signatures project proposals to be uploaded and stored in the database.
2. Triggering email on project closure by the principal investigator.
3. Verification and validation of details entered the forms like agency code, project code, and so on.
4. Hosting on cloud-Heroku,Mongodb Atlas
5. Make all the fields required in every form.
6. Auto fill feature in forms.
7. Improvement of Offers page in Student/Staff section.
8. All the pages except for some are responsive. Make the remaining pages responsive.
9. Forgot password feature when the user forgot password. 
10. Verify login details while the user is logging in.

**Additional Features**



1. Sorting in ongoing projects, completed projects and pending approvals page based on project name and project ID.
2. Updation of details of Student/Staff/Faculty/Admin in their respective pages.

**Roles and contribution of each member:**



* CS20B002 Ambati Pooja Sree:
    * **Frontend:**
        * Created layout design for the pages - UI design
        * Styling react components - Responsive Layout / Design
        * Developed and styled the Home Pages 
        * Development of entire Student page front-end portion
        * Development of react components
        * Integration of React components
        * Fetching data using API 
        * Connected front-end react components to backend and rendering data in front-end
        * Added extra functionalities/ features in react components


* CS20B011 Guddeti Namitha Reddy:
    * **Frontend:**
        * Front end framework using React and Linking pages using React Routes.
        * Created,Linked and rendered Cards in faculty and admin pages using React and Bootstrap and added functionalities.
        * Created and implemented Dynamic functionality of all React components.
        * Wrote functions to link front end and back end.
        * Added css styling to a few pages.


* CS20B019 Kurra Manasa:
    * **Frontend:**
        * Designed and developed the login pages
        * Added styles for cards using bootstrap
        * Created react  form components 
        * Added css for the forms
        * Linked pages using routes
        * Created responsive designs for cards


* CS20B020 Hemasri Sai Lella:
    * **Frontend:**
        * Created forms in react
        * Styled forms that are created in react using bootstrap and react styling components
        * Added css for different pages in the web application
        * Created and styled login page for the application

    * **Backend:**
        * Written function to store scanned signatures in mongodb
        * Written functions and schema to implement pipeline for announcements and their retrieval


* CS20B030 Preethi Varsha Marivina:
    * **Backend:**
        * Set up express server and other server side requirements like local mongodb
        * Written schema for projects, staff, admin, recruitment request, funds request, duration extension and indent details
        * Written functions to implement pipeline for creation of project, approval of projects, funds, staff recruitment, duration extension, filtered data to send to ongoing, completed and pending
        * Stored data from all forms into back end and rendered it to front end
        * Update functions to update details where and when necessary
    * **Front end:**
        * Fixed bugs in setting up routes
        * Fixed fetch and axios functions in react 
        * Helped in Integration of few modules to back end
        * Took part in Design of UI

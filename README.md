# colors-lamp

A web application built using the LAMP (Linux, Apache, MySQL, PHP) stack. 

The application allows users to log in securely, add whatever color they desire to their personal database, 
and search for those colors they added previously. 

The user logs into their account, adds their color of choice, and the color is then saved to their database. 
And whenever they log in again, they'll be able to access it. 

# Technologies Used
Frontend: JavaScript, HTML, CSS
Backend: PHP
Database: MySQL
Web Server: Apache HTTP Server

# Folder Layout
colors-lamp/
  api/ # PHP endpoints
  public/ # Frontend files 
    index.html
    color.html
    css/
    js/
  README.md
  LICENSE.md
  .gitignore

# Database Setup
1. Create MySQL Database
2. Import the provided schema files or manually create the Users and Colors table
3. Update database credentials in the appropriate configuration file

# How To Run 
1. Clone this repo
2. Place files in your apache server directory
3. Start apache and MySQL
4. Ensure database is configured properly
5. Navigate to your local host

# Assumptions, Limitations, & AI Usage
- Application for local development use
- No creating account feature
- Passwords stored using basic hashing
- No AI assistant tools were used for this project.

# License
Project is licensed under MIT license, see license.md for more details. 

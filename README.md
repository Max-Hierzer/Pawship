# Pawship
## Projekt für MEDT
**Namensidee:** Pawship

**Logo:** Vielleicht ähnlich wie Parship

**Product:** Tiervermittlung

**Farbschema:** Vielleicht Grün/Blau(Hellblau)


## Rollen
**ScrumMaster:** Nevena

**ProductOwner:** Philipp

**Developer:**
- Gernot
- Tobias
- Alex
- Johanna
- Max

 
## Installation
## For React:
### Step 1: Clone/Pull Repository
**git clone Repository link**\
### Step 2: Move into the Pawship/pawship directory
### Step 3: NPM Install
### Step 4: npm start
### Step 5: Do your tasks


### Step 1: Update Your System
**Make sure your package manager and system are up-to-date:**\
sudo apt update && sudo apt upgrade -y

### Step 2: Install Apache
**Install Apache:**\
sudo apt install apache2 -y

**Enable and start Apache:**\
sudo systemctl enable apache2\
sudo systemctl start apache2

Verify Apache is running: Open your web browser and navigate to http://127.0.01/. You should see the Apache default page.

### Step 3: Install MySQL
**Install MySQL:**\
sudo apt install mysql-server -y

**Enable and start MySQL:**\
sudo systemctl enable mysql\
sudo systemctl start mysql

### Step 4: Install PHP
**Install PHP and required modules for WordPress:**\
sudo apt install php php-mysql libapache2-mod-php php-cli -y 

**Restart Apache to apply PHP configurations:**\
sudo systemctl restart apache2

### Step 5: Create a MySQL Database and User for WordPress
**Log in to MySQL:**\
sudo mysql -u root -p

**Create a new database for WordPress:**\
CREATE DATABASE wordpress_db;

**Create a new user and grant permissions:**\
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'localhost';\
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'admin'@'localhost';\
FLUSH PRIVILEGES;\
EXIT;

### Step 6: Download and Install WordPress
**Navigate to your web root directory:**\
cd /var/www/html

**Download WordPress:**\
sudo curl -O https://wordpress.org/latest.tar.gz

**Extract WordPress:**\
sudo tar -xvf latest.tar.gz\
sudo mv wordpress/* .\
sudo rm -rf wordpress latest.tar.gz

**Set proper permissions:**\
sudo chown -R www-data:www-data /var/www/html

### Step 7: Configure WordPress
**Create a configuration file:**\
sudo cp wp-config-sample.php wp-config.php

**Edit wp-config.php:**\
sudo nano wp-config.php

**Update the database details:**\
define('DB_NAME', 'wordpress_db');\
define('DB_USER', 'admin');\
define('DB_PASSWORD', 'localhost');\
define('DB_HOST', 'localhost');

### Step 8: Finalize Installation
**Restart Apache:**\
sudo systemctl restart apache2

Complete WordPress setup: Open your browser and navigate to http://127.0.0.1/. Follow the on-screen instructions to configure your WordPress site.

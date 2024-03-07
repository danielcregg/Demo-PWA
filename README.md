This repository contains a basic website (index.html) and some files which also make it a Progressive Web App (PWA). This PWA meets the minimum requirments. 

Here is a link to the website/PWA:  
https://danielcregg.github.io/pwa-template/

A PWA is a web app that works in a similar way to a normal desktop or mobile app installed on a desktop or mobile device.  

# PLEASE NOTE: Before you attempt to enable PWA for your website, you must have HTTPS certs for your website!
You can get free certs at https://certbot.eff.org/.  

Important files in this repository:
1. Manifest file - This is a JSON file that determines the behavior of the application after its installation. It contains things like the application name, icon paths and start URL.  
2. Service Worker - This is a JavaScript file that is responsible for handling HTTPS requests and returning responses. Its purpose is to provide offline capabilities to the application.  

To use this code you require:
1. A LAMP server
2. Your website hosted in: /var/www/html   
3. Your website has security certs making it a HTTPS site  

If all requirmetns are satified above:
1. SSH into your LAMP server that is hosting your webpage.  
2. Copy, paste and execute the following bash commands in the table below. Run all commands at once.
3. Open your website in the browser. Use your domain name NOT your IP address. You will see if it is a PWA by the new icon in the URL bar.

```bash
cd /var/www/html &&
sudo wget https://github.com/danielcregg/pwa-template/archive/refs/heads/master.zip -P /var/www/html/ &&
sudo apt install unzip &&
sudo unzip /var/www/html/master.zip &&
find pwa-template-master -type f ! -name 'index.*' -print0 | xargs -0 sudo cp -t /var/www/html/ &&
sudo rm -rf master.zip pwa-template-master/ &&
sudo sed -i 's|\s*</head>|\t\t<link rel="manifest" href="./manifest.webmanifest">\n\t\t<script>\n\t\t\tif ("serviceWorker" in navigator) {\n\t\t\t\tnavigator.serviceWorker.register("./serviceWorker.js"); \n\t\t\t}\n\t\t</script>\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t\t<meta name="theme-color" content="#FFF"/>\n&|' /var/www/html/index.* &&
printf "\nOpen an internet browser (e.g. Chrome) and go to \e[3;4;33mhttps://YOUR_DOMIAN_NAME\e[0m - You should see a PWA icon in the URL bar of your browser.\n"
```

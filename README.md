PWA (Progressive Web App) is a web application that works in a similar way to a native application installed on a desktop or mobile device.  
This code meets all the minimum PWA requirements.

1. HTTPS enabled - This is necessary to register a service worker. You can get free certs at https://certbot.eff.org/.  
2. Manifest file - This is a JSON file that determines the behavior of the application after its installation. It contains things like the application name, icon paths and start URL.  
3. Service Worker - This is a JavaScript file that is responsible for handling HTTPS requests and returning responses. Its purpose is to provide offline capabilities to the application.  

Bash Commands  
# MAKE SURE YOUR WEBSITE IS HTTPS FIRST !!!
echo Enable pwa 
cd /var/www/html &&
sudo wget https://github.com/danielcregg/pwa-template/archive/refs/heads/master.zip -P /var/www/html/ &&
sudo apt install unzip &&
sudo unzip /var/www/html/master.zip &&
sudo mv pwa-template-master/!(index.*|*.md) /var/www/html/ &&
sudo rm -rf master.zip pwa-template-master/ &&
sudo sed -i 's|\s*</head>|\t\t<link rel="manifest" href="./manifest.webmanifest">\n\t\t<script>\n\t\t\tif ("serviceWorker" in navigator) {\n\t\t\t\tnavigator.serviceWorker.register("./serviceWorker.js"); \n\t\t\t}\n\t\t</script>\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t\t<meta name="theme-color" content="#FFF"/>\n&|' /var/www/html/index.* &&
printf "\nOpen an internet browser (e.g. Chrome) and go to \e[3;4;33mhttps://YOUR_DOMIAN_NAME\e[0m - You should see a PWA icon in the URL bar of your browser.\n"

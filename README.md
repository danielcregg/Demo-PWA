PWA (Progressive Web App) is a web application that works in a similar way to a native application installed on a desktop or mobile device.  
This code meets all the minimum PWA requirements.

1. HTTPS enabled - This is necessary to register a service worker. You can get free certs at https://certbot.eff.org/.  
2. Manifest file - This is a JSON file that determines the behavior of the application after its installation. It contains things like the application name, icon paths and start URL.  
3. Service Worker - This is a JavaScript file that is responsible for handling HTTPS requests and returning responses. Its purpose is to provide offline capabilities to the application.  

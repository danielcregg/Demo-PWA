<!DOCTYPE html>
<html lang="en">
    <head>
        <title>PWA App</title>
		<link rel="manifest" href="./manifest.webmanifest">
        <script>
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register('./serviceWorker.js');
            }
        </script>
    </head>
    <body>
        <h1>Hello world</h1>
        <?php
            echo "<p>This is a PHP script.</p>";
        ?>
    </body>
</html>

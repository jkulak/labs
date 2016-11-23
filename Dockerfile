FROM eboraas/apache-php

COPY ./conf/my-httpd.conf /etc/apache2/conf-enabled/my-httpd.conf
COPY src /var/www/html/

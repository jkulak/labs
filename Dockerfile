FROM eboraas/apache-php

COPY ./conf/my-httpd.conf /etc/apache2/conf-enabled/my-httpd.conf
COPY ./conf/my-php.ini /etc/php5/apache2/conf.d/99-my-php.ini
COPY src /var/www/html/

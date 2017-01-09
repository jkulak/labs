<?php

namespace jk\designpatterns;

/**
 * This is a logger class, to be used as a singleton
 */
class Logger {
    private static $_instance;
    private static $_counter = 0;
    private static $_created;

    private function __clone() {}
    private function __wakeup() {}
    protected function __construct() {
        self::$_created = date('l jS F Y h:i:s A');
    }

    public static function getInstance() {
        if ( is_null (self::$_instance) ) {
            self::$_instance = new self();
        }
        self::$_counter++;
        return self::$_instance;
    }

    public static function getInstanceCount() {
        return self::$_counter;
    }
}

$logger1 = Logger::getInstance();
$logger2 = Logger::getInstance();
$logger3 = Logger::getInstance();
$logger4 = Logger::getInstance();

// Also increases the getInstance counter
echo Logger::getInstance()->getInstanceCount();

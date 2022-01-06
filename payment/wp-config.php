<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'newyorkd_wp1' );

/** MySQL database username */
define( 'DB_USER', 'newyorkd_wp1' );

/** MySQL database password */
define( 'DB_PASSWORD', 'J.z8H8iDu5BiPlo4W9S60' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'i6MftBOPquXxoiYK2JrQwT2qsvhz6ZLFKuyMJhrXmuezJsbQkk7oJLFlSHSjqPrJ');
define('SECURE_AUTH_KEY',  '2CgK9jx8lQv4a8cb9IE4IfSKdTak7pFMgCeR8MhAO1sJ8NLcSztxPoeQJW5IInUn');
define('LOGGED_IN_KEY',    'KKpmpFrWBydmVTwhe3Np1XHN9DL9K5zsJs22ucZKlV9pF9hb7W5OFYHmsRCvogoB');
define('NONCE_KEY',        'TAX3CPEEmfXbZEFpzaYoBA0QxOwlXEgqdMNhe7eG0QDsf1PcYV0recuYaimekCvs');
define('AUTH_SALT',        'XsyYRDAkvsK0UysalTqpQV715uZrLSWweZa65IXPzRwXmghdnWtDOg3SzyB9FIbh');
define('SECURE_AUTH_SALT', '2cez5TdHRQCTtgyYaTJROfLg2zIvAeL1a36LeSLI5JDoK0Z9RdxFXsHMPL5Mznhr');
define('LOGGED_IN_SALT',   'lg4UEKuJsoI4b9eUZdRdApl3Aod25oLhb3LpKYyadmdXaQsBfqpB5RYqfqbSNmoU');
define('NONCE_SALT',       'Hju0W94Swe37a3BpXDAcHLbHAdwV1reQtiPPhUY6DFtR4IJKSDHXFtJEVDC89drl');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed externally by Installatron.
 * If you remove this define() to re-enable WordPress's automatic background updating
 * then it's advised to disable auto-updating in Installatron.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

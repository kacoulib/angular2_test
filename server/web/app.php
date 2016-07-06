<?php
require_once __DIR__ . '/../vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver' => 'pdo_sqlite',
        'path' => __DIR__ . '/../app.db',
    ),
));


$app->get('/api/pw', function () use ($app) {

    $sql = "SELECT * FROM users";

    $users = $app['db']->fetchAll($sql);

    return $app->json($users, 200);

});

$app->get('/api/pw/{id}', function ($id) use ($app) {

    $sql = "SELECT * FROM users WHERE id=?";

    $user = $app['db']->fetchAssoc($sql, array((int)$id));

    return $app->json($user, 200);

})->assert('id', '\d+');


$app->run();
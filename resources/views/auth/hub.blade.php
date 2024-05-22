<!doctype html>
<head>
    <title>Cross Storage Hub</title>
</head>
<body>
{{ Html::script(mix('assets/auth/js/hub.min.js')) }}
<script>
    // Limit requests to any client running on .localhost:300x
    CrossStorageHub.init([
        {origin: /\.oscorp.ir$/,allow: ['get', 'set', 'del']},
        {origin: /oscorp.ir$/, allow: ['get', 'set', 'del']}
    ]);
</script>
</body>
</html>

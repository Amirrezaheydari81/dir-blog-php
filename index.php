<script src="incule.js"></script><div clarotm-html="header.html"></div><script>includeHTML();</script>
<title>وبلاگ ایمن کاران وحدت</title>

<body>
    <div class="container mt-5">

        <div class="btn-group d-block">
            <?php
            $files = array_diff(scandir('.'), ['.', '..', 'index.php','incule.js','header.js','header.html','footer.html','error_log']);
            natsort($files);
            foreach ($files as $file)

                echo '<a class="btn btn-white mx-1 my-2 border-1 border-bottom" href="' . $file . '" rel="follow">' .str_replace(".html"," ",$file). '</a>' . PHP_EOL;

            ?>
            </ul>
        </div>
</body>

</html>
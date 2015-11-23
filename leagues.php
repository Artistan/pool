<?php

include('./pool.cfg.php');
    if($_REQUEST['id']){
        $id = $_REQUEST['id'];
    } else {
        $id = 12;
    }
    $location = $country[$id];
?><!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>D&amp;R Pool Leagues</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" integrity="sha256-MfvZlkHCEqatNoGiOXveE8FIwMzZg4W85qfrfIFBfYc= sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha256-Sk3nkD6mLTMOF0EOpNtsIry+s1CsaqQC1rVLTAy+0yc= sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha256-k2/8zcNbxVIh5mnQ52A0r3a6jAgMGxFJFE2707UxGCk= sha512-ZV9KawG2Legkwp3nAlxLIVFudTauWuBpC10uEafMHYL0Sarrz5A7G79kXh5+5+woxQ5HM559XX2UZjMJ36Wplg==" crossorigin="anonymous">
</head>
<body>
<?php $title2=$location.' Leagues'; include('nav.php'); ?>
<div class="list-group">

    <?php
    foreach($state[$id] as $lid=>$lname) {
        ?>
        <div class="list-group-item list-group-item-success">
            <h4 class="list-group-item-heading"><?=$location?> - <?=$lname?></h4>
            <p class="list-group-item-text">
            <div class="btn-group btn-group-lg" role="group" aria-label="<?=$lname?> (<?=$lid?>) PDFs">
                <a href="http://dnrstar.com/pool/pool_files/plschd<?=$lid?>.pdf" class="btn btn-default">Schedule</a>
                <a href="http://dnrstar.com/pool/pool_files/plstnd<?=$lid?>.pdf" class="btn btn-primary">Standings</a>
            </div>
            </p>
        </div>
        <?php
    }
    ?>

</div>

</body>
</html>

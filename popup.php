<!doctype>
<html>
<head>
<title>popup in new window</title>
<script type="text/javascript">
	<?php
		function walk_params(&$value,$key) {
			$value = $key.'='.$value;
		}
		$params = [
			'location'=>'no',
			'height'=>600,
			'width'=>600,
			'scrollbars'=>'yes',
			'status'=>'yes',
			'menubar'=>'no'
		];
		foreach($_REQUEST as $popup_key=>$popup_value){
			if(strstr($popup_key,'pu_')!==false) {
				$params[$popup_key] = $popup_value
			}
		}
		array_walk($params,'walk_params'); # this merges the keys into the values
		$window_params = implode(',',$params); # combine them with ,
	?>
        var pu_target = "<?php echo $_REQUEST['window_target']??'_blank'; ?>";
        var pu_params = "<?php echo $window_params; ?>";
	var pu_referer = "<?php echo $_REQUEST['window_location']??$_SERVER['HTTP_REFERER']; ?>"; /* use defined location OR referer. */
	window.open(pu_referer, pu_target, pu_params);
	
</script>
</head>
<body>
	<h1>popup the referrer</h1>
	<?php echo $_SERVER['HTTP_REFERER1']; ?>
	<hr>
	<h3> example link .. <h3>
	<p>javascript:var jq=document.createElement("script");jq.src="https://code.jquery.com/jquery-3.1.1.min.js",jq.onload=function(){jQuery.noConflict()},document.getElementsByTagName("head")[0].appendChild(jq);jQuery('a[href]').live('click',function(){var link = $(this);window.location(/* build link to this page with the link url as the window_location request param */)})</p>
</body>
</head>

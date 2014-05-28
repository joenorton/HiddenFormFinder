$.noConflict();
jQuery( document ).ready(function( $ ) {
	var toolbar_option = "";
	var logging_option = "";
	chrome.storage.sync.get({HHF_toolbar: 'yes',HHF_logging: 'yes',HFF_timer: 'No Timer'}, function (obj) {
		toolbar_option = obj.HHF_toolbar;
		logging_option = obj.HHF_logging;
		timer_option = obj.HFF_timer;
		if (toolbar_option == "yes"){
			var div = document.createElement("div");
			div.id = "HFF-Toolbar";
			var st = div.style;
			st.display = "block";
			st.bottom = "0px";
			st.left = "0px";
			st.width = "100%";
			st.background = "#C2E2FF";
			st.color = "#8B4726";
			st.paddingLeft = "25px";
			st.paddingRight = "25px";
			st.marginRight = "250px";
			st.paddingBottom = "5px";
			st.borderTop = "thick solid #8B4726";
			st.font = "bold 14px verdana";
			st.position = "fixed";
			st.overflow = "hidden";
			st.zIndex = "9999";

		  // Code that uses jQuery's $ can follow here.
		}

		var result_arr = new Object();
		$('input[type=hidden]').each( function () {
		    var name = $(this).prop("name");
		    var value = $(this).val();
		    result_arr[name] = value;
		});
		var lenny = Object.keys(result_arr).length;
		if (lenny> 0){ 
			if (logging_option == "yes"){
				console.log("[HFF] - " + lenny + " Hidden Form Fields Found: \n\n" + JSON.stringify(result_arr, null, 4));
			
			}
			if (toolbar_option == "yes"){
				if (lenny > 6){
					var toolbarHeight = (lenny/6)*120;
					if (toolbarHeight > 400) {
						toolbarHeight = 360;
					}
				} else {
					var toolbarHeight = 120;
				}
				st.height = toolbarHeight + "px";
				//document.body.style.webkitTransform = "translateY(" + toolbarHeight + "px)";
				toolbar_text = "[HFF] - " + lenny + " Hidden Form Fields Found: <br/><br /><div style='float:right;margin-top: -33px;margin-right:25px;' id='close_button'><button id='hff_hide' onclick=\"var toolbarx = document.getElementById(\'HFF-Toolbar\');toolbarx.style.display = \'none\';toolbarx.style.height = \'0\';toolbarx.style.width = \'0';\" type='button' value='Hide'>Close</button></div>";

				for (var key in result_arr) {
				    toolbar_text+= "<table id='hff_table' style='max-width:600px'><tr style='border: 2px solid;'><td style='padding-right: 10px;'><b>Name</b></td><td><b> Value</b></td></tr><tr style='border: 2px solid;'><td style='border: 2px solid;'>" + key.substring(0,64) + "</td><td style='border: 2px solid;'> " + result_arr[key].substring(0,64) + "</td></tr></table>"; //
				}
				div.innerHTML = toolbar_text;
			}
		} else {
			if (logging_option == "yes"){
				console.log("[HFF] - ZERO Hidden Form Fields Found");
			}
			if (toolbar_option == "yes"){
				var toolbarHeight = 80;
				st.height = toolbarHeight + "px";
				//document.body.style.webkitTransform = "translateY(" + toolbarHeight + "px)";
				div.innerHTML = "[HFF] - ZERO Hidden Form Fields Found<br /><div style='float:right;margin-top: 0px;margin-right:25px;' id='close_button'><button id='hff_hide' onclick=\"var toolbarx = document.getElementById(\'HFF-Toolbar\');toolbarx.style.display = \'none\';toolbarx.style.height = \'0\';toolbarx.style.width = \'0';\" type='button' value='Hide'>Close</button></div>";
			}
		}
		if (toolbar_option == "yes"){
			document.documentElement.appendChild(div);
			if (timer_option == "15 Seconds"){
				$('#HFF-Toolbar').delay(15000).fadeOut(1000);
			} else if (timer_option == "30 Seconds") {
				$('#HFF-Toolbar').delay(30000).fadeOut(1000);
			} else if (timer_option == "1 Minute") {
				$('#HFF-Toolbar').delay(60000).fadeOut(1000);
			}
		}
	});
});
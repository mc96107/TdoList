(function(e,t,n){e.fn.foundationAlerts=function(t){var n=e.extend({callback:e.noop},t);e(document).on("click",".alert-box a.close",function(t){t.preventDefault(),e(this).closest(".alert-box").fadeOut(function(){e(this).remove(),n.callback()})})}})(jQuery,this)
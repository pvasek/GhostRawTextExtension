setTimeout(function() {

    if (!window.Ghost.currentView.editor) return;

    var spellChecking = function() {
    	var editor = window.Ghost.currentView.editor;
    	var textArea = editor.getTextArea();
    	var $textArea = $(textArea);
    	var $codeMirror = $textArea.next();
        var $btn = $('<a href="#" style="float:right" class="rawtext">RAW TEXT</a>');
        
        // move it bellow bottom toolbar
        $textArea.css('top', '35px');
        $textArea.css('bottom', '35px');
        $textArea.css('right', '10px');
        $textArea.css('left', '10px');
        $textArea.css('padding', '10px');
        $textArea.css('width', 'auto');
        $textArea.css('font-size', '18px');
    	var visible = false;
        
    	var result = {};

        result.hookup = function() {
        	var $floatingHeader = $textArea.closest('.entry-markdown').find('.floatingheader');
            if ($floatingHeader.find('.rawtext').length) {
                return;
            }

            $btn.appendTo($floatingHeader);
            $btn.on('click', function(e) {
            	e.preventDefault();
                e.stopPropagation();
                if (visible) {
                	result.hide();
                } else { 
                	result.show();
                }
            });
            $textArea.on("blur", function(){
                editor.setValue($textArea.val());
            });
        };
        
        result.show = function() {
    		$textArea.show();
        	$codeMirror.hide();
            var value = editor.getValue();
            $textArea.val(value);
            visible = true;
            $btn.html("EDITOR");
        };
        
        result.hide = function() {
            $textArea.hide();
        	$codeMirror.show();
    		editor.setValue($textArea.val());
            visible = false;
            $btn.html("RAW TEXT");           
        };
        
        return result;
    };

    spellChecking().hookup();
}, 200);

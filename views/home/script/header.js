
//Function that loads initial content
function loadInitialContent() {
    $mainSection = $('.base-docs-section');

    $mainSection.load('home.html');

    setTimeout(loginAndRegisterButtons, 100);
}

function attachHeaderBtnsFunction () {
    let $activeListItem, $btnsList, $btnsListItems, $btns, i, len;

    $btnsList = $('#header-navigation');

    $btnsListItems = $btnsList.children();

    $activeListItem = $btnsList.find('.active').eq(0);

    $btns = $btnsList.find('a');

    //Function that changes the color of the button that correspond to the active page
    function setActivePageButtonColor ($target) {
        
        if (!$target.parent().hasClass('active'))
        {
            $target.parent().addClass('active');

            $activeListItem.removeClass('active');

            $activeListItem = $target.parent();
        }
            
    }

    //Set event listeners to header buttons
    $btns.each(function () {
        let thisNode = $(this);

        thisNode.on('click', function (event) {
            var $target = $(event.target);

            setActivePageButtonColor($target);

            if ($target.attr('id') === 'home-btn') {
                loadInitialContent();
            }
        });
    });
}
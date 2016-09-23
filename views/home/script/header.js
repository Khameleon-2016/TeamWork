
function attachHeaderBtnsFunction () {
    let $activeListItem, $btnsList, $btnsListItems, $btns, i, len;

    $btnsList = $('#header-navigation');

    $btnsListItems = $btnsList.children();

    $activeListItem = $btnsList.find('.active').eq(0);
    console.log($activeListItem);

    $btns = $btnsList.find('a');

    $btns.each(function () {
        let thisNode = $(this);

        thisNode.on('click', function (event) {
            var $target = $(event.target);

            $target.parent().addClass('active');

            $activeListItem.removeClass('active');

            $activeListItem = $target.parent();
            console.log($activeListItem);
        });
    });
}
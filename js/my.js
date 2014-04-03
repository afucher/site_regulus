$.(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') || $(e.target).is('button')) {
        $(this).collapse('hide');
    }
});
/*--
    *
    * Equipa  : Walalétec - Soluções Tecnológicas
    * Membros : António Gabriel, Aziel António, Filipe Gomes, Herlander Bento, Kelvín Domingos, Neiri Miúdo,  Paulo Estevão.
    * Desenvolvido por : Herlander Bento.
    * Data: 17/12/2019.
    * Nota: III João 01:11
    * " Amado, não siga o mal, mas o bem. Quem faz o bem é de Deus;
    *   mas quem faz o mal não tem visto Deus  ".
    *
  --*/


(function(){

    'use strict';

    var $portfolio = $('.portfolios');

    $portfolio.isotope({
        itemSelector: '.item',
        layoutMode:'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter-HB');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $portfolio.isotope({filter: filter});

    });

})(jQuery);


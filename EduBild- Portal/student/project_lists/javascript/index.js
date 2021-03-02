
    // $(document).ready(function(){
    //   $('input').click(function(){
    //     const value=$(this).attr('data-filter');
    //     if(value=='all'){
    //       $('.projectlist').show('1000');
    //     }
    //     else{
    //       $('.projectlist').not('.'+value).hide('1000');
    //       $('.projectlist').filter('.'+value).show('1000');
    //     }
    //   })
    //   //add class on selected item
    //   $('input').click(function(){
    //     //$('input.active').removeClass('checked');
    //     //$(this).parent().addClass('active');
    //     $(this).addClass('checked');
    //   })
    // })
    $(document).ready(function(){
      $('.cato').on('change',function(){
        var category_list=[];
        $('#filters :input:checked').each(function(){
          var category=$(this).val();
          category_list.push(category);
        });
        if(category_list.length==0)
        $('.projectlist').fadeIn();
        else{
          $('.projectlist').each(function(){
            var item=$(this).attr('data-tag');
            if(jQuery.inArray(item,category_list)>-1)
            $(this).fadeIn('slow');
            else
            $(this).hide();
          });
        }
      });
    });
  
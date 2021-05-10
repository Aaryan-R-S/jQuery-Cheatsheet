// same
console.log($);
console.log(jQuery);

//do this when html & css is reloaded
$(document).ready(() => {

    // $('selector').action();

    // $('p').click((e) => {

    // console.log('U clicked on P');

    //selectors
    // 1. Element selector
    // $('tagname').hide();

    // 2. Id selector
    // $('#id').hide();

    // 3. Class selector
    // $('.class').hide();

    //4. other selectors
    // $('*').click(()=>{console.log('U clicked All');})
    // $('p:1').click(()=>{console.log('U clicked 1st p');})

    // $(e.target).hide();
    // console.log( $(e.target).html());
    // });

    //Events --
    // $('p').dblclick((e) => {
    //     console.log('dblclick'+$(e.target).html());
    // })
    // $('p').mouseenter((e) => {
    //     console.log('mousenter'+ $(e.target).html());
    // })

    // $("p").on(
    //     {
    //         click: () => {
    //             console.log('Thanks for clicking!');
    //         }
    //     },
    //     {
    //         mouseenter: () => {
    //             console.log('Thanks for entering!');
    //         }
    //     }
    // );

    //hide in 1 sec
    //  $('#lorem').hide(1000,()=>{
    //      console.log('Hidden');
    //  })
    //  $('#lorem').show(1000,()=>{
    //      console.log('Shown');
    //  })

    //  $('#btn').click(()=>{
    //  $('#lorem').toggle(1000)
    //  $('#lorem').fadeToggle(1000)
    //  $('#lorem').slideToggle(1000,()=>{
    //      console.log('Done');
    //  })
    //  })

    //ANIMATION --
    // $('#lorem').animate({
    //     opacity:0.5,
    //     width: "200px"
    // }, 1000)

    // $('#lorem').stop()

    // console.log($('#lorem').text()); 
    // console.log($('#btn').html()); 

    // $('#ta').blur(()=>{
    //     console.log($('#ta').val())
    //  }); 

    // $('#ta').addClass("xft")
    // $('#ta').removeClass("xft")
    // $('#ta').toggleClass("xft")

    // $('#lorem').css('background-color','red')
    // $('#lorem').css('font-family','cursive')

    //GET --
    // $.get('https://code.jquery.com/jquery-3.5.1.js', (status) => {
    //     alert(status)
    // })

    //POST--
    // $.post('https://code.jquery.com/jquery-3.5.1.js', 
    // {name:'jce', age:'fcweg '},
    // (status) => {
    //     alert(status)
    // })

});




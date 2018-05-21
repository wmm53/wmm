/*事件触发机制*/
/*三要素：事件源，事件，行为*/

var div1=$('#first');
function showhello(){
    alert('hello world');
}
div1.click(showhello);
$('#first').click(function () {

    // alert('helloworld');
    alert($('#first').html());
    $('#first').css({background:yellow});
})
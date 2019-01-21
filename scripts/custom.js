//When checkbox checked then change color
$('.list-group-item :checkbox').change(function() {
    $(this).closest('.list-group-item').toggleClass('checked', this.checked);
});

//Count how many checkboxes are checked
$(document).ready(function(){

    var $checkboxes = $('input[type="checkbox"]');

    $checkboxes.change(function(){
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        $('#count-checked-checkboxes').text(countCheckedCheckboxes);

    });

});

//Change Valmis! button color when checkboxes are checked
$("input[class='checkbox']").click(function(){
    if($("input:checkbox:checked").length > 0){

        $(".btn-ready").addClass('active').removeClass('disabled');
    }
    else{
        $(".btn-ready").removeClass('active').addClass('disabled');
    }
});
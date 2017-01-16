$(function () {
  var input = $('#q');
  var btn = $('form .btn');
  var result = $('.result__value');

  $('form').on('submit', function (e) {
    e.preventDefault();
    $.ajax('/solve/' + encodeURIComponent(input.val()), {
      beforeSend: handleStart,
      complete: handleEnd,
      success: handleSuccess,
      failure: handleFaiure
    });
  });

  function handleStart() {
    btn.attr('disabled', true);
  }

  function handleEnd() {
    btn.attr('disabled', null);
  }

  function handleSuccess(data) {
    if (data.error) {
      alert(data.error.message);
    } else {
      result.parent().addClass('has-value');
      result.html(data.value);
    }
  }

  function handleFaiure(data) {
    console.log(data);
  }
});


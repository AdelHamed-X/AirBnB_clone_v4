$(document).ready(function () {
  const checkedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    let amenityId = $(this).data('id');
    let amenityName = $(this).data('name');

    if (this.checked) {
      checkedAmenities[amenityId] = amenityName;
    } else {
      delete checkedAmenities[amenityId];
    }

    let amenities_list = [];
    amenities_list.push(Object.values(checkedAmenities).join(', '));

    if (amenities_list.length > 0) {
      $('div.amenities > h4').text(amenities_list);
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
    console.log(checkedAmenities);
    console.log(amenities_list);
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (res, textStatus) {
    console.log(textStatus, res.statusCode);
    if (textStatus === "success") {
      if (res.status === "OK") {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }
  });
});

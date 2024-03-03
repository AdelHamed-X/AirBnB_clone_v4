$(document).ready(function () {
  const checkedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    let amenityId = $(this).data('id');
    let amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      checkedAmenities[amenityId] = amenityName;
    } else {
      delete checkedAmenities[amenityId];
    }

    let amenities_list = Object.values(checkedAmenities);

    if (checkedAmenities.length > 0) {
      $('div.amenities > h4').text(amenities_list.join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
    console.log(checkedAmenities);
  });
});

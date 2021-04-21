/* unable to timeAgo.js please talk to Joe Lee. */
$(document).ready(() => {
  $(".need_to_be_rendered").each((index, element) => {
    let currentTime = new Date();
    let elemTime = Date.parse(element.attributes.datetime.value);
    let dateTime = currentTime.getTime() - elemTime;
    let daysAgo = dateTime / (1000 * 3600 * 24);

    console.log(element)
    element.innerText = `${Math.round(daysAgo)} days ago`;

  });
});

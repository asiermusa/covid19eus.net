if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    workbox.core.setCacheNameDetails({
    prefix: '__covid19eus',
    suffix: 'v1'
  });

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

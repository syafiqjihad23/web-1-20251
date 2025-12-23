function showNotification(pesan, tipe = "success") {
  const notif = $("#notif");

  notif
    .stop(true, true)
    .removeClass("notif-success notif-error")
    .addClass(tipe === "error" ? "notif-error" : "notif-success")
    .text(pesan)
    .fadeIn(300)
    .delay(2000)
    .fadeOut(300);
}

(function () {
  var HOST = "play.interceptor.dpdns.org";
  var copyBtn = document.getElementById("copy");
  var label = document.getElementById("copy-label");

  copyBtn.addEventListener("click", function () {
    function done() {
      label.textContent = "Copied";
      setTimeout(function () { label.textContent = "Copy address"; }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(HOST).then(done, fallback);
    } else { fallback(); }
    function fallback() {
      var t = document.createElement("textarea");
      t.value = HOST; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); done(); } catch (e) {}
      document.body.removeChild(t);
    }
  });

  var dot = document.getElementById("dot");
  var text = document.getElementById("status-text");
  fetch("https://api.mcsrvstat.us/3/" + HOST)
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d && d.online) {
        dot.className = "dot on";
        var n = d.players && typeof d.players.online === "number" ? d.players.online : null;
        text.textContent = n === null ? "Server is online" : "Online · " + n + " player" + (n === 1 ? "" : "s");
      } else {
        dot.className = "dot off";
        text.textContent = "Server is offline right now";
      }
    })
    .catch(function () { text.textContent = "Status unavailable"; });
})();

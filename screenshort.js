function takeScreenshot() {
    html2canvas(document.body).then(function(canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "screenshot.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.target = "_blank";
      link.click();
    });
  }
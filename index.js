function updateOutput() {
    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;
    var js = document.getElementById("js").value;
    var output = document.getElementById("output").contentWindow.document;

    output.open();
    output.writeln(`
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
        </html>
    `);
    output.close();
}

// Update the output whenever there is a keyup event in any of the textareas
document.getElementById("html").addEventListener("keyup", updateOutput);
document.getElementById("css").addEventListener("keyup", updateOutput);
document.getElementById("js").addEventListener("keyup", updateOutput);

// Initial update on page load
updateOutput();
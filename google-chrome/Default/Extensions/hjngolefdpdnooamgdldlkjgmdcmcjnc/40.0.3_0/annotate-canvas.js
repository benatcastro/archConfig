(function() {
    var script = document.currentScript;
    var extensionId = script.getAttribute("data-extension-id");

    window._docs_force_html_by_ext = extensionId;
    window._docs_annotate_canvas_by_ext = extensionId
})();
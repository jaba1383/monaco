require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' }});

require(['vs/editor/editor.main'], function() {
    window.editor = monaco.editor.create(document.getElementById('editor'), {
        value: `function hello() {\n\tconsole.log("Hello, world!");\n}`,
        language: 'javascript',
        theme: 'vs-dark'
    });

    // === добавь это ===
    window.getEditorValue = function() {
        return window.editor ? window.editor.getValue() : "EDITOR NOT READY";
    };
});

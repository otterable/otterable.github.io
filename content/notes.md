---
title: "I'm terrible at explaining things, so I thought the simpler way to explain my ideas to people would be linking them to my notes.
"
---

{{ range (readDir "content/notes") }}
    {{ if hasSuffix .Name ".md" }}
        - [{{ .BaseName }}]({{ .Path }})
    {{ end }}
{{ end }}

package hello

import (
    "fmt"
    "net/http"
)

func init() {
    http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
        // Writes Hello, World! to the user's web browser via `w`
        fmt.Fprint(w, "Hello, world!")
}

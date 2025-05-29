let uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener("click", function() {
    let fileInput = document.getElementById('fileInput');
    let files = fileInput.files;
    let fd = new FormData();

    for (let i=0; i < files.length; i++) {
        fd.append('files', files[i]);
    }

    fetch('/upload/', {
        method: 'POST',
        body: fd,
        headers: new Headers({
            'X-CSRFToken': getCookie('csrftoken')
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let fileDisplay = document.getElementById('uploadedFiles');
        fileDisplay.innerHTML = '';
        data.uploaded_files.forEach(file => {
            let img = document.createElement('img');
            img.src = file.url;
            fileDisplay.appendChild(img);
        });
    })
    .catch(error => console.error("ERRO:", error));
});

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');

        for (let i=0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                break;
            }
        }
    }

    return cookieValue;
}
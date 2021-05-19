const video = document.getElementById('video')

function startVideo() {
    navigator.getUserMedia(
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

startVideo()
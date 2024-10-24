// JavaScriptコードをここに記述
function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    const url = new URL(window.location.href);
    const paramValue = url.searchParams.get(name);
    return paramValue;
}

const pieceCollectionParam = getUrlParameter('piece_collection');
console.log(pieceCollectionParam)
if (pieceCollectionParam) {
    fetch(`https://pcoll-verify-certificate.azurewebsites.net/api/VerifyCertificate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ parameter: pieceCollectionParam }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (data.result == "OK") {
            document.getElementById('valid-certificate-message').style.display = 'block';
        } else {
            document.getElementById('invalid-certificate-message').style.display = 'block';
        }
    })
    .catch(error => console.error('Error:', error));
}

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
  axios.post('https://pcoll-verify-certificate.azurewebsites.net/api/VerifyCertificate', {
    parameter: pieceCollectionParam
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response.data);
    if (response.data.result === "OK") {
      document.getElementById('valid-certificate-message').style.display = 'block';
    } else {
      document.getElementById('invalid-certificate-message').style.display = 'block';
    }
  })
  .catch(error => {
    console.error('エラー:', error);
  });
}
